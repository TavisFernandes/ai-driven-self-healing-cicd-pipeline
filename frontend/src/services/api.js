import axios from 'axios'

// Base URL — in Docker this resolves to the backend container
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

// Attach JWT token to every request if logged in
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// ─── Products ────────────────────────────────────────
export const fetchProducts = () => api.get('/products')
export const fetchProductById = (id) => api.get(`/products/${id}`)

// ─── Auth ────────────────────────────────────────────
export const loginUser = (credentials) => api.post('/login', credentials)
export const registerUser = (userData) => api.post('/register', userData)

// ─── Cart ────────────────────────────────────────────
export const fetchCart = () => api.get('/cart')
export const addCartItem = (item) => api.post('/cart', item)
export const removeCartItem = (id) => api.delete(`/cart/${id}`)

// ─── Checkout ────────────────────────────────────────
export const placeOrder = (orderData) => api.post('/checkout', orderData)

export default api
