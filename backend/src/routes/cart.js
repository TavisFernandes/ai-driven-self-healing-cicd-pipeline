const express = require('express')
const router = express.Router()
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

// All cart routes require a valid session token
router.get('/',       authMiddleware, getCart)
router.post('/',      authMiddleware, addToCart)
router.delete('/:id', authMiddleware, removeFromCart)

module.exports = router
