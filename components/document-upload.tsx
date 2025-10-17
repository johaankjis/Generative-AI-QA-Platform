"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X } from "lucide-react"
import { useState } from "react"

export function DocumentUpload() {
  const [files, setFiles] = useState<string[]>([])

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground">Document Upload</h3>
      <p className="mt-1 text-sm text-muted-foreground">Upload documents to generate embeddings</p>

      <div className="mt-6">
        <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 p-12 transition-colors hover:border-primary/50">
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium text-foreground">Drop files here or click to browse</p>
            <p className="mt-1 text-xs text-muted-foreground">Supports PDF, TXT, MD, and DOCX files</p>
            <Button className="mt-4">Select Files</Button>
          </div>
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">{file}</span>
                </div>
                <Button size="sm" variant="ghost" onClick={() => setFiles(files.filter((_, i) => i !== index))}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
