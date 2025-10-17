"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function MetricsCharts() {
  const passRateData = [
    { date: "Jan 1", rate: 92 },
    { date: "Jan 2", rate: 94 },
    { date: "Jan 3", rate: 91 },
    { date: "Jan 4", rate: 95 },
    { date: "Jan 5", rate: 93 },
    { date: "Jan 6", rate: 96 },
    { date: "Jan 7", rate: 94 },
  ]

  const volumeData = [
    { date: "Jan 1", tests: 145 },
    { date: "Jan 2", tests: 178 },
    { date: "Jan 3", tests: 162 },
    { date: "Jan 4", tests: 189 },
    { date: "Jan 5", tests: 201 },
    { date: "Jan 6", tests: 195 },
    { date: "Jan 7", tests: 212 },
  ]

  return (
    <Card className="p-6">
      <Tabs defaultValue="passrate">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Analytics Overview</h3>
            <p className="mt-1 text-sm text-muted-foreground">7-day performance trends</p>
          </div>
          <TabsList>
            <TabsTrigger value="passrate">Pass Rate</TabsTrigger>
            <TabsTrigger value="volume">Test Volume</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="passrate" className="mt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={passRateData}>
                <defs>
                  <linearGradient id="passRateGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
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
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#passRateGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="volume" className="mt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="tests" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
