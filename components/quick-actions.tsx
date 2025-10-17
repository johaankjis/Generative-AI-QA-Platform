import { Card } from "@/components/ui/card"
import { Play, Upload, Search, BarChart3 } from "lucide-react"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      icon: Play,
      label: "Run Test Suite",
      description: "Execute your test suites",
      href: "/tests",
    },
    {
      icon: Upload,
      label: "Upload Documents",
      description: "Add documents for RAG",
      href: "/rag",
    },
    {
      icon: Search,
      label: "Vector Search",
      description: "Test semantic search",
      href: "/rag",
    },
    {
      icon: BarChart3,
      label: "View Metrics",
      description: "Analyze performance",
      href: "/metrics",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {actions.map((action) => {
        const Icon = action.icon
        return (
          <Link key={action.label} href={action.href}>
            <Card className="p-4 transition-colors hover:bg-muted/50 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
