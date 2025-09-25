import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
const sampleData = {
  today: [
    { time: "8AM", income: 200, expense: 100 },
    { time: "12PM", income: 500, expense: 300 },
    { time: "4PM", income: 300, expense: 150 },
    { time: "8PM", income: 400, expense: 200 },
  ],
  week: [
    { time: "Mon", income: 1000, expense: 600 },
    { time: "Tue", income: 1500, expense: 800 },
    { time: "Wed", income: 1200, expense: 700 },
    { time: "Thu", income: 1700, expense: 900 },
    { time: "Fri", income: 2000, expense: 1000 },
    { time: "Sat", income: 1800, expense: 950 },
    { time: "Sun", income: 1600, expense: 850 },
  ],
  month: [
    { time: "Week 1", income: 5000, expense: 3000 },
    { time: "Week 2", income: 6000, expense: 3200 },
    { time: "Week 3", income: 6500, expense: 3100 },
    { time: "Week 4", income: 7000, expense: 3300 },
  ],
}

export default function SummaryChart({ period }) {
  const data = sampleData[period] || []

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Income vs Expenses ({period})
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="income"
            stroke="#10b981"
            fill="#10b98130"
            name="Income"
          />
          <Area
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            fill="#ef444430"
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
