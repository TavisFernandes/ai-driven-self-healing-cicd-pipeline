const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { requestLogger } = require('./middleware/logger')

// Route imports
const productRoutes  = require('./routes/products')
const cartRoutes     = require('./routes/cart')
const authRoutes     = require('./routes/auth')
const checkoutRoutes = require('./routes/checkout')
const metricsRoutes = require('./routes/metrics')

const app = express()

// ─── Middleware ──────────────────────────────────────────
app.use(cors())                    // Allow cross-origin requests from frontend
app.use(express.json())            // Parse JSON request bodies
app.use(morgan('dev'))             // HTTP request logging to console
app.use(requestLogger)             // Custom logger → writes metrics to logs/app.log

const { getMetrics, getPrediction } = require('./controllers/metricsController')

// ─── Routes ─────────────────────────────────────────────
app.use('/products', productRoutes)
app.use('/cart',     cartRoutes)
app.use('/checkout', checkoutRoutes)

app.get('/metrics', getMetrics)
app.get('/prediction', getPrediction)

app.use('/metrics', metricsRoutes)
app.use('/',         authRoutes) // /login and /register at root

// ─── Health check (used by monitoring system) ────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// ─── 404 handler ────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// ─── Global error handler ────────────────────────────────
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message)
  res.status(500).json({ error: 'Internal server error' })
})

module.exports = app
