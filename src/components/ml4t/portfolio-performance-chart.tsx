"use client"

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AnimatedChartWrapper } from "./animated-chart-wrapper"

// Synthetic illustrative portfolio values (normalized to start at 1.0)
function generatePortfolioData(inSample: boolean) {
  const points: { date: string; manual: number; learner: number; benchmark: number }[] = []
  const dates = inSample
    ? ["Jan 08", "Mar", "May", "Jul", "Sep", "Nov", "Jan 09", "Mar", "May", "Jul", "Sep", "Dec"]
    : ["Jan 10", "Mar", "May", "Jul", "Sep", "Nov", "Jan 11", "Mar", "May", "Jul", "Sep", "Dec"]
  const n = dates.length

  for (let i = 0; i < n; i++) {
    const t = i / (n - 1)
    const manual = inSample
      ? 1 + t * 0.25 + Math.sin(t * 4) * 0.08
      : 1 + t * 0.02 + Math.sin(t * 3) * 0.015
    const learner = inSample
      ? 1 + t * 0.24 + Math.sin(t * 4 + 0.5) * 0.07
      : 1 + t * 0.022 + Math.sin(t * 3 + 0.3) * 0.012
    const benchmark = inSample
      ? 1 - t * 0.15 + Math.sin(t * 2) * 0.05
      : 1 - t * 0.06 + Math.sin(t * 2.5) * 0.03

    points.push({
      date: dates[i],
      manual: Math.round(manual * 100) / 100,
      learner: Math.round(learner * 100) / 100,
      benchmark: Math.round(benchmark * 100) / 100,
    })
  }
  return points
}

const inSampleData = generatePortfolioData(true)
const outSampleData = generatePortfolioData(false)

export function PortfolioPerformanceChart({ inSample }: { inSample: boolean }) {
  const data = inSample ? inSampleData : outSampleData
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[240px] md:h-[280px]">
        <div className="w-full h-[240px] md:h-[280px] shrink-0 px-4 pt-4">
          <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} >
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
            domain={["auto", "auto"]}
            tickFormatter={(v) => v.toFixed(2)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2026",
              border: "1px solid #2a2d36",
              borderRadius: "8px",
              fontSize: 12,
            }}
            formatter={(value: number | undefined) => [value != null ? value.toFixed(3) : "", ""]}
            labelFormatter={(label) => label}
          />
          <Line
            type="monotone"
            dataKey="manual"
            stroke="#f87171"
            strokeWidth={2}
            dot={false}
            name="Manual"
          />
          <Line
            type="monotone"
            dataKey="learner"
            stroke="#fb923c"
            strokeWidth={2}
            dot={false}
            name="Strategy Learner"
          />
          <Line
            type="monotone"
            dataKey="benchmark"
            stroke="#a78bfa"
            strokeWidth={2}
            dot={false}
            name="Benchmark"
          />
        </LineChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 pt-3 pb-3 text-[11px] text-[#7b7f8f] border-t border-[#2a2d36]">
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#f87171]" />Manual</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#fb923c]" />Strategy Learner</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#a78bfa]" />Benchmark</span>
      </div>
    </div>
  )
}
