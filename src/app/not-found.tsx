import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Browse Services
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Or try searching for something specific:</p>
          <div className="mt-2">
            <Link href="/services?q=logo" className="text-primary hover:underline">
              Logo design
            </Link>
            {" • "}
            <Link href="/services?q=website" className="text-primary hover:underline">
              Website development
            </Link>
            {" • "}
            <Link href="/services?q=photography" className="text-primary hover:underline">
              Photography
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
