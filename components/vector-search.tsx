"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, FileText } from "lucide-react"

export function VectorSearch() {
  const results = [
    {
      id: "1",
      title: "Introduction to Machine Learning",
      content:
        "Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience...",
      similarity: 0.94,
      source: "ml-guide.pdf",
    },
    {
      id: "2",
      title: "Neural Networks Basics",
      content:
        "Neural networks are computing systems inspired by biological neural networks that constitute animal brains...",
      similarity: 0.87,
      source: "neural-nets.pdf",
    },
    {
      id: "3",
      title: "Deep Learning Fundamentals",
      content:
        "Deep learning is part of a broader family of machine learning methods based on artificial neural networks...",
      similarity: 0.82,
      source: "deep-learning.pdf",
    },
  ]

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Vector Search</h3>
      <p className="mt-1 text-sm text-muted-foreground">Test semantic search and retrieval quality</p>

      <div className="mt-6 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Enter search query..." className="pl-10" />
        </div>
        <Button>Search</Button>
      </div>

      <div className="mt-6 space-y-3">
        {results.map((result) => (
          <div key={result.id} className="rounded-lg border border-border p-4 transition-colors hover:bg-muted/50">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <FileText className="mt-1 h-5 w-5 text-primary" />
                <div className="flex-1">
                  <h4 className="font-medium text-foreground">{result.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{result.content}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{result.source}</p>
                </div>
              </div>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                {(result.similarity * 100).toFixed(0)}%
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
