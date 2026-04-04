const express = require('express')
const router = express.Router()
const { getAllProducts, getProductById } = require('../controllers/productController')

// GET /products       → return all products
router.get('/', getAllProducts)

// GET /products/:id   → return single product
router.get('/:id', getProductById)

module.exports = router
