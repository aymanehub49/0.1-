import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    slug: string
    icon?: string | null
    description?: string | null
    _count?: {
      services: number
    }
  }
}

export function CategoryCard({ category }: CategoryCardProps) {
  const icon = category.icon || "📦"
  const serviceCount = category._count?.services || 0

  return (
    <Link href={`/services?category=${category.slug}`}>
      <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
        <CardContent className="p-6">
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="font-semibold mb-2">{category.name}</h3>
          {category.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {category.description}
            </p>
          )}
          <Badge variant="secondary">{serviceCount} services</Badge>
        </CardContent>
      </Card>
    </Link>
  )
}
