"use client"

import {
  Label,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AnimatedChartWrapper } from "./animated-chart-wrapper"

const inSampleData = [
  { date: "2008-01", manual: 1.00, learner: 1.00, benchmark: 1.00 },
  { date: "2008-02", manual: 0.98, learner: 1.05, benchmark: 0.97 },
  { date: "2008-03", manual: 1.02, learner: 1.10, benchmark: 0.95 },
  { date: "2008-04", manual: 1.05, learner: 1.15, benchmark: 1.00 },
  { date: "2008-05", manual: 1.08, learner: 1.18, benchmark: 1.01 },
  { date: "2008-06", manual: 1.05, learner: 1.25, benchmark: 0.97 },
  { date: "2008-07", manual: 1.00, learner: 1.35, benchmark: 0.95 },
  { date: "2008-08", manual: 1.02, learner: 1.40, benchmark: 0.92 },
  { date: "2008-09", manual: 1.05, learner: 1.50, benchmark: 0.88 },
  { date: "2008-10", manual: 1.28, learner: 1.52, benchmark: 0.82 },
  { date: "2008-11", manual: 1.30, learner: 1.50, benchmark: 0.78 },
  { date: "2008-12", manual: 1.22, learner: 1.55, benchmark: 0.80 },
  { date: "2009-01", manual: 1.10, learner: 1.60, benchmark: 0.78 },
  { date: "2009-02", manual: 1.05, learner: 1.65, benchmark: 0.75 },
  { date: "2009-03", manual: 1.05, learner: 1.80, benchmark: 0.80 },
  { date: "2009-04", manual: 1.45, learner: 1.95, benchmark: 0.85 },
  { date: "2009-05", manual: 1.42, learner: 1.90, benchmark: 0.88 },
  { date: "2009-06", manual: 1.38, learner: 1.95, benchmark: 0.90 },
  { date: "2009-07", manual: 1.40, learner: 2.05, benchmark: 0.92 },
  { date: "2009-08", manual: 1.42, learner: 2.10, benchmark: 0.95 },
  { date: "2009-09", manual: 1.40, learner: 2.12, benchmark: 0.95 },
  { date: "2009-10", manual: 1.42, learner: 2.10, benchmark: 0.95 },
  { date: "2009-11", manual: 1.42, learner: 2.20, benchmark: 0.98 },
  { date: "2009-12", manual: 1.43, learner: 2.28, benchmark: 1.00 },
  { date: "2010-01", manual: 1.43, learner: 2.30, benchmark: 1.01 },
]

const outSampleData = [
  { date: "2010-01", manual: 1.00, learner: 1.00, benchmark: 1.00 },
  { date: "2010-02", manual: 0.99, learner: 0.98, benchmark: 0.98 },
  { date: "2010-03", manual: 1.03, learner: 1.02, benchmark: 1.02 },
  { date: "2010-04", manual: 1.05, learner: 1.00, benchmark: 1.03 },
  { date: "2010-05", manual: 1.02, learner: 0.97, benchmark: 0.97 },
  { date: "2010-06", manual: 1.00, learner: 0.95, benchmark: 0.94 },
  { date: "2010-07", manual: 1.03, learner: 0.98, benchmark: 0.97 },
  { date: "2010-08", manual: 1.05, learner: 1.08, benchmark: 1.02 },
  { date: "2010-09", manual: 1.08, learner: 1.05, benchmark: 1.02 },
  { date: "2010-10", manual: 1.06, learner: 1.04, benchmark: 1.03 },
  { date: "2010-11", manual: 1.05, learner: 1.03, benchmark: 1.02 },
  { date: "2010-12", manual: 1.08, learner: 1.05, benchmark: 1.03 },
  { date: "2011-01", manual: 1.05, learner: 1.02, benchmark: 1.02 },
  { date: "2011-02", manual: 1.05, learner: 1.02, benchmark: 1.03 },
  { date: "2011-03", manual: 1.05, learner: 1.02, benchmark: 1.02 },
  { date: "2011-04", manual: 1.05, learner: 1.03, benchmark: 1.03 },
  { date: "2011-05", manual: 1.04, learner: 1.02, benchmark: 1.02 },
  { date: "2011-06", manual: 1.04, learner: 1.00, benchmark: 1.00 },
  { date: "2011-07", manual: 1.03, learner: 1.02, benchmark: 0.98 },
  { date: "2011-08", manual: 1.02, learner: 1.10, benchmark: 0.92 },
  { date: "2011-09", manual: 1.00, learner: 1.18, benchmark: 0.88 },
  { date: "2011-10", manual: 0.98, learner: 1.19, benchmark: 0.93 },
  { date: "2011-11", manual: 0.97, learner: 1.17, benchmark: 0.90 },
  { date: "2011-12", manual: 1.00, learner: 1.22, benchmark: 0.91 },
  { date: "2012-01", manual: 1.02, learner: 1.25, benchmark: 0.91 },
]

const IN_SAMPLE_TICKS = [
  "2008-01", "2008-04", "2008-07", "2008-10",
  "2009-01", "2009-04", "2009-07", "2009-10",
  "2010-01",
]

const OUT_SAMPLE_TICKS = [
  "2010-01", "2010-04", "2010-07", "2010-10",
  "2011-01", "2011-04", "2011-07", "2011-10",
  "2012-01",
]

export function PortfolioPerformanceChart({ inSample }: { inSample: boolean }) {
  const data = inSample ? inSampleData : outSampleData
  const xTicks = inSample ? IN_SAMPLE_TICKS : OUT_SAMPLE_TICKS
  const yDomain: [number, number] = inSample ? [0.7, 2.4] : [0.85, 1.25]
  const yTicks = inSample
    ? [0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2]
    : [0.85, 0.90, 0.95, 1.00, 1.05, 1.10, 1.15, 1.20, 1.25]

  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4 relative">
          <div className="absolute top-6 left-25 z-10 flex flex-col gap-1.5 text-[11px] bg-[#1e2026]/90 border border-[#2a2d36] rounded-lg px-3 py-2">
            <span className="flex items-center gap-2"><span className="w-5 h-0.5 shrink-0 bg-[#ef4444] rounded-full" /><span className="text-[#ef4444] font-medium">Manual Strategy</span></span>
            <span className="flex items-center gap-2"><span className="w-5 h-0.5 shrink-0 bg-[#f59e0b] rounded-full" /><span className="text-[#f59e0b] font-medium">Strategy Learner</span></span>
            <span className="flex items-center gap-2"><span className="w-5 h-0.5 shrink-0 bg-[#a855f7] rounded-full" /><span className="text-[#a855f7] font-medium">Benchmark Portfolio</span></span>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 8, right: 8, left: 4, bottom: 20 }}>
              <XAxis
                dataKey="date"
                stroke="#7b7f8f"
                tick={{ fill: "#7b7f8f", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
                ticks={xTicks}
              >
                <Label value="Date" position="insideBottom" offset={-12} fill="#7b7f8f" fontSize={12} />
              </XAxis>
              <YAxis
                stroke="#7b7f8f"
                tick={{ fill: "#7b7f8f", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
                domain={yDomain}
                ticks={yTicks}
                tickFormatter={(v: number) => v.toFixed(1)}
              >
                <Label value="Normalized Value" angle={-90} position="insideLeft" offset={8} fill="#7b7f8f" fontSize={12} style={{ textAnchor: "middle" }} />
              </YAxis>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e2026",
                  border: "1px solid #2a2d36",
                  borderRadius: "8px",
                  fontSize: 12,
                }}
                formatter={(value: number | undefined, name?: string) => [value != null ? value.toFixed(2) : "", name ?? ""]}
                labelFormatter={(label) => label}
              />
              <Line
                type="monotone"
                dataKey="manual"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
                name="Manual Strategy"
              />
              <Line
                type="monotone"
                dataKey="learner"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                name="Strategy Learner"
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                stroke="#a855f7"
                strokeWidth={2}
                dot={false}
                name="Benchmark Portfolio"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
    </div>
  )
}
