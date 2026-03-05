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

// Synthetic: ToC grows exponentially with perfect foresight; benchmark is flat
function generateTOCData() {
  const dates = ["Jan 08", "Mar", "May", "Jul", "Sep", "Nov", "Jan 09", "Mar", "May", "Jul", "Sep", "Dec"]
  return dates.map((date, i) => {
    const t = i / (dates.length - 1)
    const toc = 1 * Math.exp(t * 4.05) // ~57x growth
    const benchmark = 1 + t * 0.06 + Math.sin(t * 3) * 0.02
    return {
      date,
      toc: Math.round(toc * 10) / 10,
      benchmark: Math.round(benchmark * 100) / 100,
    }
  })
}

const data = generateTOCData()

export function TOCBenchmarkChart() {
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4">
          <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} animationDuration={800}>
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
            tickFormatter={(v) => (v >= 1000 ? `${(v / 1000).toFixed(1)}k` : v.toFixed(1))}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1e2026",
              border: "1px solid #2a2d36",
              borderRadius: "8px",
              fontSize: 12,
            }}
            formatter={(value: number | undefined) => [value != null ? value.toFixed(2) : "", ""]}
            labelFormatter={(label) => label}
          />
          <Line
            type="monotone"
            dataKey="benchmark"
            stroke="#6c8eff"
            strokeWidth={2}
            dot={false}
            name="Benchmark"
          />
          <Line
            type="monotone"
            dataKey="toc"
            stroke="#34d399"
            strokeWidth={2}
            dot={false}
            name="Theoretically Optimal"
          />
        </LineChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 pt-3 pb-3 text-[11px] text-[#7b7f8f] border-t border-[#2a2d36]">
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#34d399]" />Theoretically Optimal</span>
        <span className="flex items-center gap-2 shrink-0"><span className="w-3 h-0.5 shrink-0 bg-[#6c8eff]" />Benchmark</span>
      </div>
    </div>
  )
}
