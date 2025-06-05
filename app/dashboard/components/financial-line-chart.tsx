"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { name: "1", lorem1: 10000, lorem2: 8000, lorem3: 5000 },
  { name: "5", lorem1: 15000, lorem2: 12000, lorem3: 9000 },
  { name: "10", lorem1: 12000, lorem2: 18000, lorem3: 11000 },
  { name: "15", lorem1: 28000, lorem2: 22000, lorem3: 15000, value: 2973 }, // Highlighted point
  { name: "20", lorem1: 35000, lorem2: 25000, lorem3: 18000 },
  { name: "25", lorem1: 45000, lorem2: 30000, lorem3: 22000 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const pointData = data.find((d) => d.name === label)
    if (pointData && pointData.value) {
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg text-xs">
          <p>{`${pointData.value}€`}</p>
        </div>
      )
    }
    // Default tooltip if no specific value to show
    return (
      <div className="bg-white p-2 border rounded shadow text-xs">
        <p className="font-bold">{`Point ${label}`}</p>
        {payload.map((pld: any, index: number) => (
          <p key={index} style={{ color: pld.color }}>
            {`${pld.name}: ${pld.value.toLocaleString()}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const ActiveDot = (props: any) => {
  const { cx, cy, stroke, payload } = props // Added stroke for the default case

  // Check if payload and payload.value exist for the special highlighted dot
  if (payload && typeof payload.value !== "undefined") {
    return (
      <g>
        <circle cx={cx} cy={cy} r={5} fill="#333" stroke="#fff" strokeWidth={2} />
        <foreignObject x={cx - 25} y={cy - 35} width="50" height="20">
          <div className="bg-gray-800 text-white text-xs px-1.5 py-0.5 rounded">
            {payload.value}€
          </div>
        </foreignObject>
      </g>
    )
  }
  // Default dot rendering for other points
  // Recharts passes 'stroke' for the line color, use it for the default dot
  return <circle cx={cx} cy={cy} r={3} fill={stroke} />
}

export function FinancialLineChart() {
  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              tickFormatter={(value) => `${value / 1000}K`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, "dataMax + 5000"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#d1d5db", strokeWidth: 1, strokeDasharray: "3 3" }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value, entry) => <span className="text-gray-600 text-xs ml-1">{value}</span>}
            />
            <Line
              type="monotone"
              dataKey="lorem1"
              name="Lorem Ipsum"
              stroke="#34D399"
              strokeWidth={2}
              dot={false}
              activeDot={<ActiveDot />}
            />
            <Line
              type="monotone"
              dataKey="lorem2"
              name="Lorem Ipsum"
              stroke="#60A5FA"
              strokeWidth={2}
              dot={false}
              activeDot={<ActiveDot />}
            />
            <Line
              type="monotone"
              dataKey="lorem3"
              name="Lorem Ipsum"
              stroke="#FDBA74"
              strokeWidth={2}
              dot={false}
              activeDot={<ActiveDot />}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
