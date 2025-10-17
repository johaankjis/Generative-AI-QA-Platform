import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock } from "lucide-react"

export function LatencyMetrics() {
  const metrics = [
    { label: "P50 Latency", value: "1.2s", percentage: 60 },
    { label: "P90 Latency", value: "2.4s", percentage: 75 },
    { label: "P95 Latency", value: "3.1s", percentage: 85 },
    { label: "P99 Latency", value: "4.8s", percentage: 95 },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Clock className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Latency Distribution</h3>
          <p className="text-sm text-muted-foreground">Response time percentiles</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{metric.label}</span>
              <span className="font-medium text-foreground">{metric.value}</span>
            </div>
            <Progress value={metric.percentage} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  )
}
