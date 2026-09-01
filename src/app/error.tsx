"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient">500</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Something went wrong</h2>
          <p className="text-muted-foreground">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-background rounded-lg border text-left">
          <p className="text-sm font-medium mb-2">Error details:</p>
          <p className="text-xs text-muted-foreground font-mono">{error.message}</p>
          {error.digest && (
            <p className="text-xs text-muted-foreground font-mono mt-1">
              Digest: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
