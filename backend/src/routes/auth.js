const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/authController')

// POST /login     → authenticate user, return session token
router.post('/login',    login)

// POST /register  → create new user, return session token
router.post('/register', register)

module.exports = router
