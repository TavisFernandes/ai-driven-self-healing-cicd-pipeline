import { ShieldAlert, CheckCircle2 } from 'lucide-react'

export default function StatusBadge({ status }) {
  const isSafe = status === 'SAFE'
  
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold border ${isSafe ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
      {isSafe ? <CheckCircle2 className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
      <span>{status || 'LOADING'}</span>
    </div>
  )
}
