import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { SystemHealth } from "@/components/system-health"
import { RecentTests } from "@/components/recent-tests"
import { PerformanceCharts } from "@/components/performance-charts"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">QA Dashboard</h1>
          <p className="text-muted-foreground">Monitor your LLM application quality, performance, and reliability</p>
        </div>

        <MetricsOverview />

        <div className="mt-6">
          <QuickActions />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <PerformanceCharts />
          </div>
          <div>
            <SystemHealth />
          </div>
        </div>

        <div className="mt-6">
          <RecentTests />
        </div>
      </main>
    </div>
  )
}
