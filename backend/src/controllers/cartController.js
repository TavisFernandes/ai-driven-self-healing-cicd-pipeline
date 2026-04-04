// In-memory cart store keyed by userId
// In production this would be a database
const carts = {}

/**
 * GET /cart
 * Returns the current user's cart items.
 */
const getCart = (req, res) => {
  const userId = req.user.id
  res.json(carts[userId] || [])
}

/**
 * POST /cart
 * Adds an item to the user's cart (or increments quantity).
 * Body: { id, name, price, image, quantity }
 */
const addToCart = (req, res) => {
  const userId = req.user.id
  const item = req.body

  if (!item.id || !item.price) {
    return res.status(400).json({ error: 'Item must have id and price' })
  }

  if (!carts[userId]) carts[userId] = []

  const existing = carts[userId].find(i => i.id === item.id)
  if (existing) {
    existing.quantity += item.quantity || 1
  } else {
    carts[userId].push({ ...item, quantity: item.quantity || 1 })
  }

  res.json(carts[userId])
}

/**
 * DELETE /cart/:id
 * Removes a specific item from the user's cart.
 */
const removeFromCart = (req, res) => {
  const userId = req.user.id
  const itemId = parseInt(req.params.id)

  if (!carts[userId]) return res.json([])

  carts[userId] = carts[userId].filter(i => i.id !== itemId)
  res.json(carts[userId])
}

module.exports = { getCart, addToCart, removeFromCart }
