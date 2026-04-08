const { getSummary, getRecentErrors } = require('../utils/metricsStore')

const ML_SERVICE_URL =
  process.env.ML_SERVICE_URL || 'http://localhost:8000'

/**
 * GET /metrics/summary
 * Aggregated error_rate and average response time (for dashboards / scripts).
 */
const summary = (req, res) => {
  res.json(getSummary())
}

/**
 * POST /metrics/ml-evaluate
 * Sends current aggregates to the ML service and returns SAFE / FAIL.
 * Body optional: { error_rate, response_time } — defaults to live summary.
 */
const mlEvaluate = async (req, res) => {
  const body = req.body || {}
  let errorRate = body.error_rate
  let responseTime = body.response_time

  if (errorRate === undefined || responseTime === undefined) {
    const s = getSummary()
    errorRate = s.error_rate
    responseTime = s.response_time_ms
  }

  try {
    const r = await fetch(`${ML_SERVICE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error_rate: Number(errorRate),
        response_time: Number(responseTime),
      }),
    })

    if (!r.ok) {
      const text = await r.text()
      return res.status(502).json({
        error: 'ML service error',
        detail: text,
      })
    }

    const data = await r.json()
    return res.json({
      metrics: { error_rate: errorRate, response_time: responseTime },
      prediction: data.prediction,
      raw: data,
    })
  } catch (err) {
    return res.status(503).json({
      error: 'Could not reach ML service',
      message: err.message,
    })
  }
}

const getMetrics = (req, res) => {
  const s = getSummary()
  res.json({
    error_rate: s.error_rate,
    response_time: s.response_time_ms,
    requests: s.sample_count,
    recent_errors: getRecentErrors()
  })
}

const getPrediction = async (req, res) => {
  const s = getSummary()
  try {
    const r = await fetch(`${ML_SERVICE_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error_rate: Number(s.error_rate),
        response_time: Number(s.response_time_ms),
      }),
    })

    if (!r.ok) {
      return res.status(502).json({ prediction: 'FAIL', detail: 'ML service error' })
    }

    const data = await r.json()
    return res.json({ prediction: data.prediction || 'SAFE' })
  } catch (err) {
    return res.status(503).json({ prediction: 'FAIL', detail: 'Could not reach ML service' })
  }
}

module.exports = { summary, mlEvaluate, getMetrics, getPrediction }
