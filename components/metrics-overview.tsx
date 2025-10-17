import { Card } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Activity, CheckCircle2, XCircle, Clock } from "lucide-react"

export function MetricsOverview() {
  const metrics = [
    {
      label: "Total Tests",
      value: "1,247",
      change: "+12.5%",
      trend: "up",
      icon: Activity,
    },
    {
      label: "Pass Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: CheckCircle2,
    },
    {
      label: "Failed Tests",
      value: "72",
      change: "-8.3%",
      trend: "down",
      icon: XCircle,
    },
    {
      label: "Avg Response Time",
      value: "1.2s",
      change: "-15.2%",
      trend: "down",
      icon: Clock,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        const isPositive = metric.trend === "up"
        const TrendIcon = isPositive ? TrendingUp : TrendingDown

        return (
          <Card key={metric.label} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${isPositive ? "text-success" : "text-destructive"}`}>
                <TrendIcon className="h-4 w-4" />
                <span>{metric.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">{metric.value}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
