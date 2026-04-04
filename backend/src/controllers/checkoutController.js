const { logger } = require('../middleware/logger')

// In-memory order store for demo
const orders = []

/**
 * POST /checkout
 * Receives cart items, creates an order, logs it.
 * Body: { items: [...], total: number }
 */
const processCheckout = (req, res) => {
  const { items, total } = req.body
  const userId = req.user.id

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' })
  }

  // Simulate occasional error (5% chance) for chaos testing
  if (Math.random() < 0.05) {
    logger.warn({ event: 'checkout_error', userId, reason: 'Simulated checkout failure' })
    return res.status(500).json({ error: 'Payment processing failed (simulated)' })
  }

  const order = {
    orderId: `ORD-${Date.now()}`,
    userId,
    items,
    total,
    status: 'confirmed',
    createdAt: new Date().toISOString()
  }

  orders.push(order)

  logger.info({
    event: 'order_placed',
    orderId: order.orderId,
    userId,
    total,
    itemCount: items.length
  })

  res.status(201).json({
    message: 'Order placed successfully!',
    orderId: order.orderId,
    total
  })
}

module.exports = { processCheckout }
