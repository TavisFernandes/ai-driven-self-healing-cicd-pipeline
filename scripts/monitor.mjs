#!/usr/bin/env node
/**
 * Monitoring loop: reads backend metrics, calls ML /predict, prints SAFE/FAIL.
 * FAIL → exit 1 (for CI / rollback hooks).
 *
 * Usage:
 *   node scripts/monitor.mjs
 *   BACKEND_URL=http://localhost:5000 ML_SERVICE_URL=http://localhost:8000 node scripts/monitor.mjs
 */

const BACKEND = process.env.BACKEND_URL || 'http://localhost:5000'
const ML = process.env.ML_SERVICE_URL || 'http://localhost:8000'

async function fetchJson(url, options = {}) {
  const r = await fetch(url, options)
  if (!r.ok) throw new Error(`${url} -> ${r.status}`)
  return r.json()
}

async function main() {
  const health = await fetchJson(`${BACKEND}/health`)
  console.log('health:', health.status)

  const summary = await fetchJson(`${BACKEND}/metrics/summary`)
  const errorRate = summary.error_rate ?? 0
  const responseTime = summary.response_time_ms ?? summary.response_time ?? 0
  console.log('metrics:', { errorRate, responseTime, sample_count: summary.sample_count })

  const predRes = await fetchJson(`${ML}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      error_rate: errorRate,
      response_time: responseTime,
    }),
  })

  const prediction = predRes.prediction
  console.log('ML prediction:', prediction)

  if (prediction === 'FAIL') {
    console.error('FAIL — trigger rollback (integrate with your deploy script).')
    process.exit(1)
  }
  console.log('SAFE — deployment may continue.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
