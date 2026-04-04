const winston = require('winston')
const fs = require('fs')
const path = require('path')
const { record } = require('../utils/metricsStore')

// Ensure logs directory exists
const logDir = path.join(__dirname, '../../logs')
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true })

// Winston logger setup — writes structured JSON logs to file
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: path.join(logDir, 'app.log'),
      maxsize: 5 * 1024 * 1024, // 5MB max
      maxFiles: 5,
    }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
})

/**
 * Express middleware — logs each request's metrics.
 * These metrics (response_time, status code) are read by the monitoring system.
 */
const requestLogger = (req, res, next) => {
  const start = Date.now()

  res.on('finish', () => {
    const responseTime = Date.now() - start
    const isError = res.statusCode >= 400

    record({ responseTimeMs: responseTime, isError })

    logger.info({
      method: req.method,
      path: req.path,
      status: res.statusCode,
      response_time_ms: responseTime,
      error: isError,
      timestamp: new Date().toISOString(),
    })
  })

  next()
}

module.exports = { logger, requestLogger }
