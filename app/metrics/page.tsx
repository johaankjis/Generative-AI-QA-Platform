import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsCharts } from "@/components/metrics-charts"
import { LatencyMetrics } from "@/components/latency-metrics"
import { CostAnalysis } from "@/components/cost-analysis"

export default function MetricsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Performance Metrics</h1>
          <p className="mt-1 text-muted-foreground">Detailed analytics and performance insights</p>
        </div>

        <div className="space-y-6">
          <MetricsCharts />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <LatencyMetrics />
            <CostAnalysis />
          </div>
        </div>
      </main>
    </div>
  )
}
