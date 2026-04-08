import { Activity } from 'lucide-react'

export default function MetricCard({ title, value, icon: Icon, unit }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <span className="text-3xl font-bold text-white">{value}</span>
        {unit && <span className="text-gray-500 ml-2">{unit}</span>}
      </div>
      <div className="p-3 bg-white/5 rounded-xl border border-white/5">
        {Icon ? <Icon className="w-6 h-6 text-[#d4af37]" /> : <Activity className="w-6 h-6 text-[#d4af37]" />}
      </div>
    </div>
  )
}
