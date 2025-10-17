import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react"

export function SystemHealth() {
  const services = [
    { name: "API Gateway", status: "operational", uptime: "99.9%" },
    { name: "LLM Service", status: "operational", uptime: "99.7%" },
    { name: "Database", status: "operational", uptime: "100%" },
    { name: "Cache Layer", status: "degraded", uptime: "98.2%" },
    { name: "Embeddings", status: "operational", uptime: "99.5%" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-4 w-4 text-success" />
      case "degraded":
        return <AlertCircle className="h-4 w-4 text-warning" />
      case "down":
        return <XCircle className="h-4 w-4 text-destructive" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-success/10 text-success hover:bg-success/20">Operational</Badge>
      case "degraded":
        return <Badge className="bg-warning/10 text-warning hover:bg-warning/20">Degraded</Badge>
      case "down":
        return <Badge className="bg-destructive/10 text-destructive hover:bg-destructive/20">Down</Badge>
      default:
        return null
    }
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">System Health</h3>
      <p className="mt-1 text-sm text-muted-foreground">Real-time service status</p>

      <div className="mt-6 space-y-4">
        {services.map((service) => (
          <div key={service.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getStatusIcon(service.status)}
              <div>
                <p className="text-sm font-medium text-foreground">{service.name}</p>
                <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
              </div>
            </div>
            {getStatusBadge(service.status)}
          </div>
        ))}
      </div>
    </Card>
  )
}
