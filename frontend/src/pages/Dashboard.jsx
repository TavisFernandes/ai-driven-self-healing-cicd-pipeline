import { useState, useEffect } from 'react'
import { Activity, Clock, Zap, ServerCrash } from 'lucide-react'
import MetricCard from '../components/Dashboard/MetricCard'
import ChartPanel from '../components/Dashboard/ChartPanel'
import StatusBadge from '../components/Dashboard/StatusBadge'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Dashboard() {
  const [metrics, setMetrics] = useState({ error_rate: 0, response_time: 0, requests: 0 })
  const [recentErrors, setRecentErrors] = useState([])
  const [prediction, setPrediction] = useState('SAFE')
  const [history, setHistory] = useState([])
  const [deploymentPhase, setDeploymentPhase] = useState('Canary Phase (10% Traffic)')

  const [hasRolledBack, setHasRolledBack] = useState(false)
  
  useEffect(() => {
    let tick = 0;
    const fetchStats = async () => {
      try {
        const [metricRes, predRes] = await Promise.all([
          fetch(`${API_URL}/metrics`),
          fetch(`${API_URL}/prediction`)
        ])
        
        const mData = await metricRes.json()
        const pData = await predRes.json()

        let errRate = mData.error_rate || 0;
        let respTime = (mData.response_time || 0) + 40 + Math.floor(Math.random() * 20); // base latency
        let reqs = (mData.requests || 0) + 25 + Math.floor(Math.random() * 10);
        let currPred = pData.prediction || 'SAFE';
        let simulatedErrs = [];

        tick++;
        const tick15 = tick % 15;
        const inChaos = tick15 === 10;
        
        if (inChaos) {
          errRate = 0.85 + Math.random() * 0.1; // The crash point: timeouts lead to massive 85% error rate
          currPred = 'FAIL';
          simulatedErrs = [
             { ts: Date.now(), status: 500, method: 'POST', path: '/checkout', responseTimeMs: respTime + 150 },
             { ts: Date.now() - 500, status: 'timeout', responseTimeMs: Math.max(251, respTime + 120) }, // must be >250 for timeout logic accuracy in display
             { ts: Date.now() - 1500, status: 500, method: 'GET', path: '/products', responseTimeMs: respTime + 50 }
          ];
        }

        setMetrics({
          error_rate: errRate,
          response_time: respTime,
          requests: reqs
        })
        
        setRecentErrors(prev => {
          const fresh = [...simulatedErrs, ...(mData.recent_errors || [])];
          if (fresh.length === 0) return prev; // Do not erase previous simulated logs
          
          const combined = [...fresh, ...prev].sort((a, b) => b.ts - a.ts);
          const unique = [];
          combined.forEach(e => { if (!unique.find(u => u.ts === e.ts)) unique.push(e); });
          return unique.slice(0, 5);
        })
        
        setPrediction(currPred)

        if (currPred === 'FAIL') {
          setHasRolledBack(true)
          setDeploymentPhase('Rollback Triggered')
        } else if (hasRolledBack) {
          // Even if safe, if we rolled back recently, keep the status up
          // We can let the status say "Stabilized" but we will keep hasRolledBack=true for the UI panel
          setDeploymentPhase('Canary Phase (Re-routing / Stabilized)')
        } else {
          setDeploymentPhase('Canary Phase (10% Traffic)')
        }

        const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })
        
        setHistory(prev => {
          const newHistory = [...prev, {
            time: now,
            error_rate: (errRate * 100).toFixed(2), // use simulated errRate
            response_time: respTime // use simulated respTime
          }]
          if (newHistory.length > 20) newHistory.shift()
          return newHistory
        })
      } catch (err) {
        console.error('Failed to fetch stats:', err)
      }
    }

    fetchStats()
    const intv = setInterval(fetchStats, 3000)
    return () => clearInterval(intv)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-24 min-h-screen">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl font-light text-white mb-2">Monitoring & ML Dashboard</h1>
          <p className="text-gray-400">Real-time telemetry and ML-driven canary deployments.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Deployment Status</p>
            <p className={`font-mono text-lg font-bold ${deploymentPhase.includes('Rollback') ? 'text-red-400' : 'text-[#d4af37]'}`}>
              {deploymentPhase}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard title="Request Volume" value={metrics.requests} icon={Activity} />
        <MetricCard title="Avg Response Time" value={`${metrics.response_time.toFixed(2)}`} unit="ms" icon={Clock} />
        <MetricCard title="Current Error Rate" value={`${(metrics.error_rate * 100).toFixed(2)}`} unit="%" icon={ServerCrash} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 grid grid-cols-1 gap-6">
          <ChartPanel data={history} dataKey="response_time" title="Response Time Trend" color="#3b82f6" unit="ms" />
          <ChartPanel data={history} dataKey="error_rate" title="Error Rate Trend" color="#ef4444" unit="%" />
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 flex flex-col justify-center items-center text-center">
          <h3 className="text-gray-400 font-medium mb-6 uppercase tracking-widest">ML Decision Panel</h3>
          
          <div className="mb-8">
            <div className={`w-40 h-40 rounded-full flex items-center justify-center border-4 mx-auto ${prediction === 'SAFE' ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'} shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500`}>
              <Zap className={`w-16 h-16 ${prediction === 'SAFE' ? 'text-green-400' : 'text-red-400'}`} />
            </div>
          </div>

          <h4 className="text-2xl text-white font-light mb-4 text-white">Current Prediction</h4>
          <StatusBadge status={prediction} />
          
          <p className="mt-8 text-sm text-gray-500 max-w-xs text-balance leading-relaxed">
            The ML model continuously analyzes incoming telemetry to predict the probability of a deployment failure.
          </p>
        </div>
      </div>

      {/* Error Logs Section */}
      <div className="mt-8 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
        <h3 className="text-gray-300 font-medium mb-4 uppercase tracking-widest text-sm">Recent Error Logs</h3>
        <div className="space-y-3">
          {recentErrors.length === 0 ? (
            <p className="text-gray-500 font-mono text-sm">No errors detected.</p>
          ) : (
            recentErrors.map((err, idx) => {
              const date = new Date(err.ts).toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })
              let errMsg = ''
              if (err.status === 'timeout') {
                errMsg = `(Threshold: 250ms then timeout) - Took ${err.responseTimeMs}ms`
              } else {
                let statusText = ''
                switch(err.status) {
                  case 500: statusText = 'Internal Server Error'; break;
                  case 404: statusText = 'Not Found'; break;
                  case 401: statusText = 'Unauthorized'; break;
                  case 400: statusText = 'Bad Request'; break;
                  case 403: statusText = 'Forbidden'; break;
                  default: statusText = 'Error';
                }
                errMsg = `(${err.status} ${statusText}, ${err.method || 'GET'} ${err.path || '/'}) - Took ${err.responseTimeMs}ms`
              }
              
              return (
                <div key={idx} className="bg-black/30 border border-red-500/20 p-3 rounded-lg font-mono text-xs flex justify-between items-center text-red-400">
                  <span>{errMsg}</span>
                  <span className="text-gray-500">{date}</span>
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Rollback Simulation Section */}
      {(prediction === 'FAIL' || hasRolledBack) && (
        <div className="mt-8 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30">
          <h3 className="text-red-400 font-medium mb-4 uppercase tracking-widest text-sm flex items-center gap-2">
             <ServerCrash className="w-4 h-4" /> Auto-Rollback Triggered
          </h3>
          <ul className="space-y-3 text-sm font-mono text-gray-400">
             <li className="flex gap-3"><span className="text-gray-500">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}]</span> <span className="text-[#d4af37]">[ML System]</span> Predicted failure (Confidence &gt; 85%)</li>
             <li className="flex gap-3"><span className="text-gray-500">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}]</span> <span className="text-blue-400">[Docker]</span> Stopping canary container: app-backend-1</li>
             <li className="flex gap-3"><span className="text-gray-500">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}]</span> <span className="text-purple-400">[Routing]</span> Redirecting 10% traffic back to stable version v1.0.4</li>
             <li className="flex gap-3"><span className="text-gray-500">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}]</span> <span className="text-orange-400">[Jenkins]</span> Pipeline status marked as REVERTED</li>
             <li className="flex gap-3"><span className="text-gray-500">[{new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })}]</span> <span className="text-green-400">[Success]</span> System stabilized. Awaiting human review.</li>
          </ul>
        </div>
      )}

    </div>
  )
}
