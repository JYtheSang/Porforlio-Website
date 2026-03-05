"use client"

import {
  Bar,
  BarChart,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AnimatedChartWrapper } from "./animated-chart-wrapper"

// Synthetic data: as impact increases, trades decrease and cumulative return decreases
const impactData = [
  { impact: "0.000", trades: 185, return: 43.2 },
  { impact: "0.005", trades: 162, return: 38.1 },
  { impact: "0.010", trades: 134, return: 32.5 },
  { impact: "0.020", trades: 98, return: 24.8 },
  { impact: "0.030", trades: 67, return: 16.2 },
  { impact: "0.040", trades: 42, return: 8.1 },
  { impact: "0.050", trades: 24, return: 2.3 },
]

export function MarketImpactChart() {
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4">
          <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={impactData} margin={{ top: 8, right: 24, left: 0, bottom: 0 }} >
          <XAxis
            dataKey="impact"
            stroke="#7b7f8f"
            tick={{ fill: "#7b7f8f", fontSize: 11 }}
            axisLine={{ stroke: "#2a2d36" }}
            tickLine={false}
          />
          <YAxis
            yAxisId="left"
            stroke="#7b7f8f"
            tick={{ fill: "#7b7f8f", fontSize: 11 }}
            axisLine={{ stroke: "#2a2d36" }}
            tickLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#7b7f8f"
            tick={{ fill: "#7b7f8f", fontSize: 11 }}
            axisLine={{ stroke: "#2a2d36" }}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2026",
              border: "1px solid #2a2d36",
              borderRadius: "8px",
              fontSize: 12,
            }}
            formatter={(value: number | undefined, name?: string) => [
              value != null ? (name === "Trades" ? String(value) : `${value}%`) : "",
              name ?? "",
            ]}
          />
          <Bar
            yAxisId="left"
            dataKey="trades"
            fill="#6c8eff"
            fillOpacity={0.7}
            radius={[4, 4, 0, 0]}
            name="Trades"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="return"
            stroke="#f87171"
            strokeWidth={2}
            dot={{ fill: "#f87171", r: 3 }}
            name="Cum. return (%)"
          />
        </ComposedChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 pt-3 pb-3 text-[11px] text-[#7b7f8f] border-t border-[#2a2d36]">
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-3 shrink-0 rounded-sm bg-[#6c8eff]/70" />Trades</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#f87171]" />Cumulative return</span>
      </div>
    </div>
  )
}
