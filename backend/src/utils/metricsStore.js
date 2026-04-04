/** Rolling window of recent HTTP observations for monitoring / ML. */
const MAX_SAMPLES = 500
const samples = []

function record({ responseTimeMs, isError }) {
  samples.push({ responseTimeMs, isError, ts: Date.now() })
  if (samples.length > MAX_SAMPLES) samples.shift()
}

function getSummary() {
  if (samples.length === 0) {
    return {
      error_rate: 0,
      response_time_ms: 0,
      sample_count: 0,
    }
  }
  const errors = samples.filter((s) => s.isError).length
  const avgRt =
    samples.reduce((acc, s) => acc + s.responseTimeMs, 0) / samples.length
  return {
    error_rate: Math.round((errors / samples.length) * 10000) / 10000,
    response_time_ms: Math.round(avgRt * 100) / 100,
    sample_count: samples.length,
  }
}

module.exports = { record, getSummary }
