const request = require('supertest')
const app = require('../src/app')

describe('GET /products', () => {
  it('should return 200 and a list of products', async () => {
    const res = await request(app).get('/products')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBeGreaterThan(0)
  })

  it('should return a single product by id', async () => {
    const res = await request(app).get('/products/1')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('id', 1)
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('price')
  })

  it('should return 404 for non-existent product', async () => {
    const res = await request(app).get('/products/9999')
    expect(res.statusCode).toBe(404)
  })

  it('should filter by category', async () => {
    const res = await request(app).get('/products?category=Electronics')
    expect(res.statusCode).toBe(200)
    res.body.forEach(p => {
      expect(p.category).toBe('Electronics')
    })
  })
})

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health')
    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBe('ok')
  })
})

describe('POST /login', () => {
  it('should return a token for any credentials (demo mode)', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@test.com', password: 'password123' })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
  })
})
