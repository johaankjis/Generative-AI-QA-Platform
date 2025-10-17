import { DashboardHeader } from "@/components/dashboard-header"
import { LogViewer } from "@/components/log-viewer"
import { LogFilters } from "@/components/log-filters"
import { LogStats } from "@/components/log-stats"

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Observability & Logs</h1>
          <p className="mt-1 text-muted-foreground">Real-time monitoring and debugging insights</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-6">
            <LogFilters />
            <LogViewer />
          </div>
          <div>
            <LogStats />
          </div>
        </div>
      </main>
    </div>
  )
}
