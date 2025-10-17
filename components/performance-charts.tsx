"use client"

import { Card } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function PerformanceCharts() {
  const data = [
    { time: "00:00", passRate: 92, responseTime: 1.5 },
    { time: "04:00", passRate: 94, responseTime: 1.3 },
    { time: "08:00", passRate: 91, responseTime: 1.8 },
    { time: "12:00", passRate: 95, responseTime: 1.2 },
    { time: "16:00", passRate: 93, responseTime: 1.4 },
    { time: "20:00", passRate: 96, responseTime: 1.1 },
  ]

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Performance Trends</h3>
      <p className="mt-1 text-sm text-muted-foreground">24-hour test performance overview</p>

      <div className="mt-6 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="time"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="passRate" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
