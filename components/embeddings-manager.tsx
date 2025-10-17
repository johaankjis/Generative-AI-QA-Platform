import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, RefreshCw } from "lucide-react"

export function EmbeddingsManager() {
  const stats = [
    { label: "Total Documents", value: "1,247" },
    { label: "Total Chunks", value: "8,932" },
    { label: "Vector Dimensions", value: "1536" },
    { label: "Storage Used", value: "2.4 GB" },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Database className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Embeddings</h3>
            <Badge className="mt-1 bg-success/10 text-success hover:bg-success/20">Active</Badge>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{stat.label}</span>
            <span className="text-sm font-medium text-foreground">{stat.value}</span>
          </div>
        ))}
      </div>

      <Button className="mt-6 w-full gap-2 bg-transparent" variant="outline">
        <RefreshCw className="h-4 w-4" />
        Rebuild Index
      </Button>
    </Card>
  )
}
