import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, Clock } from "lucide-react"

export function RecentTests() {
  const tests = [
    {
      id: "1",
      name: "Sentiment Analysis Accuracy",
      status: "passed",
      duration: "1.2s",
      timestamp: "2 minutes ago",
    },
    {
      id: "2",
      name: "Response Coherence Check",
      status: "passed",
      duration: "0.8s",
      timestamp: "5 minutes ago",
    },
    {
      id: "3",
      name: "Toxicity Detection",
      status: "failed",
      duration: "1.5s",
      timestamp: "8 minutes ago",
    },
    {
      id: "4",
      name: "Context Retention Test",
      status: "passed",
      duration: "2.1s",
      timestamp: "12 minutes ago",
    },
    {
      id: "5",
      name: "Hallucination Detection",
      status: "passed",
      duration: "1.7s",
      timestamp: "15 minutes ago",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Recent Tests</h3>
          <p className="mt-1 text-sm text-muted-foreground">Latest test executions</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {tests.map((test) => (
          <div
            key={test.id}
            className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-3">
              {test.status === "passed" ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <XCircle className="h-5 w-5 text-destructive" />
              )}
              <div>
                <p className="text-sm font-medium text-foreground">{test.name}</p>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{test.duration}</span>
                  <span>•</span>
                  <span>{test.timestamp}</span>
                </div>
              </div>
            </div>
            <Badge
              className={
                test.status === "passed"
                  ? "bg-success/10 text-success hover:bg-success/20"
                  : "bg-destructive/10 text-destructive hover:bg-destructive/20"
              }
            >
              {test.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
