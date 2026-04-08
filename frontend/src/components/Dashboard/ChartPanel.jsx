import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function ChartPanel({ data, dataKey, color, title, unit }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 flex flex-col h-[300px]">
      <h3 className="text-gray-300 font-medium mb-4">{title} {unit && `(${unit})`}</h3>
      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" />
            <XAxis dataKey="time" stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff80" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={false}
              animationDuration={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
