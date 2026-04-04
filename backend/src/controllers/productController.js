const products = require('../data/products.json')

/**
 * GET /products
 * Returns the full product catalog.
 * Supports optional ?category= query filter.
 */
const getAllProducts = (req, res) => {
  const { category } = req.query

  let result = products
  if (category) {
    result = products.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    )
  }

  res.json(result)
}

/**
 * GET /products/:id
 * Returns a single product by ID.
 */
const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id))

  if (!product) {
    return res.status(404).json({ error: 'Product not found' })
  }

  res.json(product)
}

module.exports = { getAllProducts, getProductById }
