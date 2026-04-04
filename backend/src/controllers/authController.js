const crypto = require('crypto')
const bcrypt = require('bcryptjs')

/** In-memory sessions: token -> { id, email, name } */
const sessions = new Map()

const users = []

function createSession(user) {
  const token = `sess_${crypto.randomBytes(24).toString('hex')}`
  sessions.set(token, {
    id: user.id,
    email: user.email,
    name: user.name,
  })
  return token
}

/** Used by auth middleware */
function getSession(token) {
  return sessions.get(token)
}

/**
 * POST /register
 */
const register = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Name, email and password are required' })
  }

  if (users.find((u) => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  }
  users.push(newUser)

  const token = createSession({
    id: newUser.id,
    email,
    name,
  })
  res.status(201).json({
    token,
    user: { id: newUser.id, name, email },
  })
}

/**
 * POST /login — simple session token (no JWT).
 */
const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Email and password are required' })
  }

  const user = users.find((u) => u.email === email)

  if (!user) {
    const token = createSession({
      id: 1,
      email,
      name: 'Demo User',
    })
    return res.json({
      token,
      user: { id: 1, name: 'Demo User', email },
    })
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    return res.status(401).json({ error: 'Incorrect password' })
  }

  const token = createSession({
    id: user.id,
    email: user.email,
    name: user.name,
  })
  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email },
  })
}

module.exports = { login, register, getSession }
