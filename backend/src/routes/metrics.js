const express = require('express')
const router = express.Router()
const { summary, mlEvaluate } = require('../controllers/metricsController')

router.get('/summary', summary)
router.post('/ml-evaluate', mlEvaluate)

module.exports = router
