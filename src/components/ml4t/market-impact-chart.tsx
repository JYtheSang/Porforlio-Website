"use client"

import {
  Bar,
  ComposedChart,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AnimatedChartWrapper } from "./animated-chart-wrapper"

const impactData = [
  { impact: "0.000", trades: 70, return: 1.56 },
  { impact: "0.005", trades: 60, return: 1.30 },
  { impact: "0.010", trades: 39, return: 1.11 },
  { impact: "0.020", trades: 28, return: 0.70 },
  { impact: "0.040", trades: 20, return: 0.50 },
  { impact: "0.080", trades: 1, return: 0.02 },
  { impact: "0.200", trades: 0, return: 0.00 },
]

function TradeLabel({ x, y, width, value }: { x?: number; y?: number; width?: number; value?: number }) {
  if (x == null || y == null || width == null || value == null) return null
  return (
    <text x={x + width / 2} y={y - 5} textAnchor="middle" fill="#6c8eff" fontSize={11}>
      {value}
    </text>
  )
}

function ReturnLabel({ x, y, width, value }: { x?: number; y?: number; width?: number; value?: number }) {
  if (x == null || y == null || width == null || value == null) return null
  return (
    <text x={x + width / 2} y={y - 5} textAnchor="middle" fill="#f87171" fontSize={11}>
      {value.toFixed(2)}
    </text>
  )
}

export function MarketImpactChart() {
  return (
    <div className="w-full flex flex-col">
      <AnimatedChartWrapper placeholderClassName="h-[260px] md:h-[300px]">
        <div className="w-full h-[260px] md:h-[300px] shrink-0 px-4 pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={impactData} margin={{ top: 24, right: 32, left: 4, bottom: 20 }}>
              <XAxis
                dataKey="impact"
                stroke="#7b7f8f"
                tick={{ fill: "#7b7f8f", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
              >
                <Label value="Impact Value" position="insideBottom" offset={-12} fill="#7b7f8f" fontSize={12} />
              </XAxis>
              <YAxis
                yAxisId="left"
                stroke="#7b7f8f"
                tick={{ fill: "#6c8eff", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
                domain={[0, 70]}
                ticks={[0, 10, 20, 30, 40, 50, 60, 70]}
              >
                <Label value="Number of Trades" angle={-90} position="insideLeft" offset={12} fill="#6c8eff" fontSize={12} style={{ textAnchor: "middle" }} />
              </YAxis>
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#7b7f8f"
                tick={{ fill: "#f87171", fontSize: 11 }}
                axisLine={{ stroke: "#2a2d36" }}
                tickLine={false}
                domain={[0, 1.6]}
                ticks={[0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6]}
                tickFormatter={(v: number) => v.toFixed(1)}
              >
                <Label value="Cumulative Return" angle={90} position="insideRight" offset={12} fill="#f87171" fontSize={12} style={{ textAnchor: "middle" }} />
              </YAxis>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e2026",
                  border: "1px solid #2a2d36",
                  borderRadius: "8px",
                  fontSize: 12,
                }}
                formatter={(value: number | undefined, name?: string) => [
                  value != null
                    ? name === "Number of Trades"
                      ? String(value)
                      : value.toFixed(2)
                    : "",
                  name ?? "",
                ]}
              />
              <Bar
                yAxisId="left"
                dataKey="trades"
                fill="#6c8eff"
                fillOpacity={0.5}
                name="Number of Trades"
                label={<TradeLabel />}
              />
              <Bar
                yAxisId="right"
                dataKey="return"
                fill="#f87171"
                fillOpacity={0.5}
                name="Cumulative Return"
                label={<ReturnLabel />}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </AnimatedChartWrapper>
    </div>
  )
}
