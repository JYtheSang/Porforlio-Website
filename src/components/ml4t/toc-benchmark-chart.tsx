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

const data = [
  { date: "2008-01", toc: 1.0, benchmark: 1.00 },
  { date: "2008-02", toc: 2.0, benchmark: 0.97 },
  { date: "2008-03", toc: 3.5, benchmark: 0.95 },
  { date: "2008-04", toc: 5.0, benchmark: 1.00 },
  { date: "2008-05", toc: 7.0, benchmark: 1.01 },
  { date: "2008-06", toc: 10.0, benchmark: 0.97 },
  { date: "2008-07", toc: 15.5, benchmark: 0.94 },
  { date: "2008-08", toc: 17.0, benchmark: 0.90 },
  { date: "2008-09", toc: 20.0, benchmark: 0.72 },
  { date: "2008-10", toc: 22.5, benchmark: 0.60 },
  { date: "2008-11", toc: 24.0, benchmark: 0.55 },
  { date: "2008-12", toc: 26.0, benchmark: 0.58 },
  { date: "2009-01", toc: 29.5, benchmark: 0.55 },
  { date: "2009-02", toc: 31.0, benchmark: 0.50 },
  { date: "2009-03", toc: 33.0, benchmark: 0.52 },
  { date: "2009-04", toc: 36.5, benchmark: 0.65 },
  { date: "2009-05", toc: 38.0, benchmark: 0.70 },
  { date: "2009-06", toc: 40.0, benchmark: 0.72 },
  { date: "2009-07", toc: 43.5, benchmark: 0.78 },
  { date: "2009-08", toc: 44.0, benchmark: 0.80 },
  { date: "2009-09", toc: 46.5, benchmark: 0.82 },
  { date: "2009-10", toc: 51.5, benchmark: 0.85 },
  { date: "2009-11", toc: 52.0, benchmark: 0.90 },
  { date: "2009-12", toc: 55.5, benchmark: 0.88 },
  { date: "2010-01", toc: 57.5, benchmark: 0.85 },
]

const QUARTERLY_TICKS = [
  "2008-01", "2008-04", "2008-07", "2008-10",
  "2009-01", "2009-04", "2009-07", "2009-10",
  "2010-01",
]

export function TOCBenchmarkChart() {
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4 relative">
          <div className="absolute top-6 left-[100px] z-10 flex flex-col gap-1.5 text-[11px]">
            <span className="flex items-center gap-2"><span className="w-5 h-0.5 shrink-0 bg-[#ef4444] rounded-full" /><span className="text-[#ef4444] font-medium">Theoretically Optimal Portfolio</span></span>
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
                ticks={QUARTERLY_TICKS}
              >
                <Label value="Date" position="insideBottom" offset={-12} fill="#7b7f8f" fontSize={12} />
              </XAxis>
              <YAxis
                stroke="#7b7f8f"
                tick={{ fill: "#7b7f8f", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
                domain={[0, 60]}
                ticks={[0, 10, 20, 30, 40, 50, 60]}
                tickFormatter={(v: number) => String(v)}
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
                dataKey="benchmark"
                stroke="#a855f7"
                strokeWidth={2}
                dot={false}
                name="Benchmark"
              />
              <Line
                type="monotone"
                dataKey="toc"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
                name="Theoretically Optimal"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
    </div>
  )
}
