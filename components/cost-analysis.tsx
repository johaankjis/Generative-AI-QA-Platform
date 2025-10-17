import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingDown } from "lucide-react"

export function CostAnalysis() {
  const costs = [
    { label: "API Calls", amount: "$124.50", change: "-5.2%" },
    { label: "Embeddings", amount: "$45.20", change: "+2.1%" },
    { label: "Storage", amount: "$18.90", change: "-1.5%" },
    { label: "Compute", amount: "$67.30", change: "-8.3%" },
  ]

  const total = costs.reduce((sum, cost) => {
    return sum + Number.parseFloat(cost.amount.replace("$", ""))
  }, 0)

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <DollarSign className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Cost Analysis</h3>
          <p className="text-sm text-muted-foreground">Monthly spending breakdown</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-foreground">${total.toFixed(2)}</span>
          <Badge className="bg-success/10 text-success hover:bg-success/20">
            <TrendingDown className="mr-1 h-3 w-3" />
            4.2% vs last month
          </Badge>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {costs.map((cost) => (
          <div key={cost.label} className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">{cost.label}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">{cost.amount}</span>
              <span className={`text-xs ${cost.change.startsWith("-") ? "text-success" : "text-destructive"}`}>
                {cost.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
