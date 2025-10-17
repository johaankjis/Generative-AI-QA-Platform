import { DashboardHeader } from "@/components/dashboard-header"
import { TestSuiteList } from "@/components/test-suite-list"
import { TestFilters } from "@/components/test-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Test Suites</h1>
            <p className="mt-1 text-muted-foreground">Manage and execute your LLM test suites</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Test Suite
          </Button>
        </div>

        <TestFilters />

        <div className="mt-6">
          <TestSuiteList />
        </div>
      </main>
    </div>
  )
}
