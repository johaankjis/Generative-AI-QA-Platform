import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"

export function LogStats() {
  const stats = [
    { label: "Total Logs", value: "12,847", color: "text-foreground" },
    { label: "Info", value: "9,234", color: "text-blue-500" },
    { label: "Warnings", value: "2,156", color: "text-warning" },
    { label: "Errors", value: "1,457", color: "text-destructive" },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <Activity className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Log Statistics</h3>
          <Badge className="mt-1 bg-success/10 text-success hover:bg-success/20">Live</Badge>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{stat.label}</span>
            <span className={`text-sm font-medium ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg bg-muted/50 p-3">
        <p className="text-xs text-muted-foreground">
          Logs are retained for 30 days. Export logs for long-term storage.
        </p>
      </div>
    </Card>
  )
}
