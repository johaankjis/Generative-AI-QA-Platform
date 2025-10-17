import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Info, AlertTriangle, XCircle, CheckCircle2 } from "lucide-react"

export function LogViewer() {
  const logs = [
    {
      id: "1",
      level: "info",
      message: "Test suite 'Sentiment Analysis' completed successfully",
      timestamp: "2025-01-17 14:32:15",
      metadata: { duration: "2.4s", tests: 24 },
    },
    {
      id: "2",
      level: "warning",
      message: "High latency detected in embedding generation",
      timestamp: "2025-01-17 14:31:48",
      metadata: { latency: "3.2s", threshold: "2.0s" },
    },
    {
      id: "3",
      level: "error",
      message: "Test 'Toxicity Detection' failed validation",
      timestamp: "2025-01-17 14:30:22",
      metadata: { expected: "safe", actual: "toxic" },
    },
    {
      id: "4",
      level: "info",
      message: "Vector search completed with 15 results",
      timestamp: "2025-01-17 14:29:55",
      metadata: { query: "machine learning", similarity: 0.94 },
    },
    {
      id: "5",
      level: "success",
      message: "Database connection pool initialized",
      timestamp: "2025-01-17 14:28:10",
      metadata: { connections: 10, maxConnections: 20 },
    },
  ]

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-warning" />
      case "error":
        return <XCircle className="h-4 w-4 text-destructive" />
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-success" />
      default:
        return null
    }
  }

  const getLevelBadge = (level: string) => {
    const styles = {
      info: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
      warning: "bg-warning/10 text-warning hover:bg-warning/20",
      error: "bg-destructive/10 text-destructive hover:bg-destructive/20",
      success: "bg-success/10 text-success hover:bg-success/20",
    }
    return <Badge className={styles[level as keyof typeof styles]}>{level.toUpperCase()}</Badge>
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Log Stream</h3>
      <p className="mt-1 text-sm text-muted-foreground">Real-time application logs</p>

      <div className="mt-6 space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-start gap-3">
              {getLevelIcon(log.level)}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">{log.message}</p>
                  {getLevelBadge(log.level)}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{log.timestamp}</p>
                {log.metadata && (
                  <div className="mt-2 rounded bg-muted/50 p-2">
                    <code className="text-xs text-muted-foreground">{JSON.stringify(log.metadata, null, 2)}</code>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
