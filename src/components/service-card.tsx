import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    slug: string
    description: string
    images: { url: string }[]
    user: {
      name: string
      image: string | null
      providerProfile?: {
        isVerified: boolean
        username: string
      }
    }
    category: {
      name: string
    }
    packages: {
      price: number
      deliveryDays: number
    }[]
    reviews: {
      _count: number
      _avg: {
        rating: number
      }
    }
    city?: string | null
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const mainImage = service.images[0]?.url || "/placeholder-service.jpg"
  const lowestPrice = Math.min(...service.packages.map(p => p.price))
  const fastestDelivery = Math.min(...service.packages.map(p => p.deliveryDays))
  const avgRating = service.reviews._avg.rating || 0
  const reviewCount = service.reviews._count || 0

  return (
    <Link href={`/services/${service.slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={mainImage}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {service.user.providerProfile?.isVerified && (
            <Badge className="absolute top-2 right-2 bg-success">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src={service.user.image || "/placeholder-avatar.jpg"}
                alt={service.user.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{service.user.name}</p>
              <p className="text-xs text-muted-foreground">@{service.user.providerProfile?.username}</p>
            </div>
          </div>
          
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {service.description}
          </p>
          
          <div className="flex items-center gap-2 text-sm mb-3">
            <div className="flex items-center text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 font-medium">{avgRating.toFixed(1)}</span>
            </div>
            <span className="text-muted-foreground">({reviewCount})</span>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            {service.city && (
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {service.city}
              </div>
            )}
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {fastestDelivery}d delivery
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 border-t">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-xs text-muted-foreground">Starting at</p>
              <p className="font-bold text-lg text-primary">{formatPrice(lowestPrice)}</p>
            </div>
            <Badge variant="outline">{service.category.name}</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
