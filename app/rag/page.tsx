import { DashboardHeader } from "@/components/dashboard-header"
import { EmbeddingsManager } from "@/components/embeddings-manager"
import { VectorSearch } from "@/components/vector-search"
import { DocumentUpload } from "@/components/document-upload"

export default function RAGPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">RAG & Embeddings</h1>
          <p className="mt-1 text-muted-foreground">Manage document embeddings and test retrieval quality</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <DocumentUpload />
            <VectorSearch />
          </div>
          <div>
            <EmbeddingsManager />
          </div>
        </div>
      </main>
    </div>
  )
}
