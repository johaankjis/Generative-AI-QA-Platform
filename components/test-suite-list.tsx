"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Play, MoreVertical, Clock, CheckCircle2, XCircle } from "lucide-react"

export function TestSuiteList() {
  const testSuites = [
    {
      id: "1",
      name: "Sentiment Analysis Suite",
      description: "Comprehensive sentiment detection and classification tests",
      tests: 24,
      passed: 22,
      failed: 2,
      status: "completed",
      lastRun: "5 minutes ago",
      duration: "2m 34s",
    },
    {
      id: "2",
      name: "Response Quality Suite",
      description: "Tests for coherence, relevance, and factual accuracy",
      tests: 18,
      passed: 18,
      failed: 0,
      status: "completed",
      lastRun: "1 hour ago",
      duration: "1m 52s",
    },
    {
      id: "3",
      name: "Safety & Toxicity Suite",
      description: "Detect harmful, toxic, or inappropriate content",
      tests: 32,
      passed: 28,
      failed: 4,
      status: "completed",
      lastRun: "3 hours ago",
      duration: "3m 18s",
    },
    {
      id: "4",
      name: "Context Retention Suite",
      description: "Evaluate model's ability to maintain context across turns",
      tests: 15,
      passed: 14,
      failed: 1,
      status: "completed",
      lastRun: "6 hours ago",
      duration: "2m 05s",
    },
  ]

  return (
    <div className="space-y-4">
      {testSuites.map((suite) => {
        const passRate = (suite.passed / suite.tests) * 100

        return (
          <Card key={suite.id} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{suite.name}</h3>
                  <Badge
                    className={
                      suite.failed === 0
                        ? "bg-success/10 text-success hover:bg-success/20"
                        : "bg-destructive/10 text-destructive hover:bg-destructive/20"
                    }
                  >
                    {suite.failed === 0 ? "All Passed" : `${suite.failed} Failed`}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{suite.description}</p>

                <div className="mt-4 flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    <span className="text-muted-foreground">{suite.passed} passed</span>
                  </div>
                  {suite.failed > 0 && (
                    <div className="flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-destructive" />
                      <span className="text-muted-foreground">{suite.failed} failed</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{suite.duration}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pass Rate</span>
                    <span className="font-medium text-foreground">{passRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={passRate} className="h-2" />
                </div>

                <p className="mt-3 text-xs text-muted-foreground">Last run: {suite.lastRun}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" className="gap-2">
                  <Play className="h-4 w-4" />
                  Run
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Suite</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
