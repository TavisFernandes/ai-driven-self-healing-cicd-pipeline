const express = require('express')
const router = express.Router()
const { processCheckout } = require('../controllers/checkoutController')
const authMiddleware = require('../middleware/authMiddleware')

// POST /checkout → place order (requires login)
router.post('/', authMiddleware, processCheckout)

module.exports = router
