"use client"

import {
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AnimatedChartWrapper } from "./animated-chart-wrapper"

// Synthetic illustrative data: price oscillating around SMA with bands
function generateBollingerData() {
  const points: { date: string; price: number; sma: number; upper: number; lower: number }[] = []
  const base = 100
  let price = base
  const dates = [
    "Jan 08", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    "Jan 09", "Feb", "Mar", "Apr", "May", "Jun"
  ]
  for (let i = 0; i < dates.length; i++) {
    const t = i / dates.length
    const crisis = t < 0.4 ? 1 - t * 0.4 : t < 0.6 ? 0.84 + (t - 0.4) * 0.2 : 0.88 + (t - 0.6) * 0.15
    price = base * crisis + (Math.sin(i * 0.5) * 3 + Math.sin(i * 0.2) * 2)
    const sma = base * crisis
    const band = 4 + Math.abs(Math.sin(i * 0.3)) * 3
    points.push({
      date: dates[i],
      price: Math.round(price * 10) / 10,
      sma: Math.round(sma * 10) / 10,
      upper: Math.round((sma + band) * 10) / 10,
      lower: Math.round((sma - band) * 10) / 10,
    })
  }
  return points
}

const data = generateBollingerData()

export function BollingerBandsChart() {
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4">
          <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="date"
            stroke="#7b7f8f"
            tick={{ fill: "#7b7f8f", fontSize: 11 }}
            axisLine={{ stroke: "#2a2d36" }}
            tickLine={false}
          />
          <YAxis
            stroke="#7b7f8f"
            tick={{ fill: "#7b7f8f", fontSize: 11 }}
            axisLine={{ stroke: "#2a2d36" }}
            tickLine={false}
            domain={["dataMin - 2", "dataMax + 2"]}
            tickFormatter={(v) => v.toFixed(0)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2026",
              border: "1px solid #2a2d36",
              borderRadius: "8px",
              fontSize: 12,
            }}
            labelStyle={{ color: "#fafafa" }}
            formatter={(value: number | undefined) => [value != null ? value.toFixed(2) : "", ""]}
            labelFormatter={(label) => label}
          />
          <Line
            type="monotone"
            dataKey="upper"
            stroke="#6c8eff"
            strokeWidth={1}
            dot={false}
            strokeOpacity={0.7}
          />
          <Line
            type="monotone"
            dataKey="lower"
            stroke="#6c8eff"
            strokeWidth={1}
            dot={false}
            strokeOpacity={0.7}
          />
          <Line
            type="monotone"
            dataKey="sma"
            stroke="#a78bfa"
            strokeWidth={1.5}
            dot={false}
            strokeOpacity={0.8}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#34d399"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 pt-3 pb-3 text-[11px] text-[#7b7f8f] border-t border-[#2a2d36]">
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#34d399]" />Price</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#a78bfa]" />20-day SMA</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#6c8eff]" />±1.5σ bands</span>
      </div>
    </div>
  )
}
