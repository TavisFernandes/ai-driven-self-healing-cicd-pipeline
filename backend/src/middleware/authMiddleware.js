const { getSession } = require('../controllers/authController')

/**
 * Simple Bearer session token (opaque string stored in memory on server).
 */
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided. Please log in.' })
  }

  const token = authHeader.split(' ')[1]
  const session = getSession(token)

  if (!session) {
    return res.status(401).json({ error: 'Invalid or expired session.' })
  }

  req.user = session
  next()
}

module.exports = authMiddleware
