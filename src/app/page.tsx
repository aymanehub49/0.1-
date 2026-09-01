import Link from "next/link"
import { Search, CheckCircle, Shield, Star, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategoryCard } from "@/components/category-card"
import { ServiceCard } from "@/components/service-card"

// Demo data - will be replaced with real data from database
const categories = [
  { id: "1", name: "Web Development", slug: "web-development", icon: "💻", description: "Build modern websites and applications", _count: { services: 245 } },
  { id: "2", name: "Graphic Design", slug: "graphic-design", icon: "🎨", description: "Logos, branding, and visual content", _count: { services: 189 } },
  { id: "3", name: "Video Editing", slug: "video-editing", icon: "🎬", description: "Professional video production and editing", _count: { services: 156 } },
  { id: "4", name: "Social Media", slug: "social-media", icon: "📱", description: "Social media management and marketing", _count: { services: 134 } },
  { id: "5", name: "Photography", slug: "photography", icon: "📸", description: "Professional photography services", _count: { services: 98 } },
  { id: "6", name: "Home Repairs", slug: "home-repairs", icon: "🔧", description: "Home maintenance and repair services", _count: { services: 76 } },
  { id: "7", name: "Automotive", slug: "automotive", icon: "🚗", description: "Car maintenance and repair", _count: { services: 54 } },
  { id: "8", name: "Tutoring", slug: "tutoring", icon: "📚", description: "Academic tutoring and lessons", _count: { services: 112 } },
]

const featuredServices = [
  {
    id: "1",
    title: "Professional Logo Design",
    slug: "professional-logo-design",
    description: "I will create a stunning, professional logo that represents your brand perfectly.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Sara Design",
      image: null,
      providerProfile: { isVerified: true, username: "saradesign" }
    },
    category: { name: "Graphic Design" },
    packages: [{ price: 300, deliveryDays: 2 }],
    reviews: { _count: 47, _avg: { rating: 4.9 } },
    city: "Rabat"
  },
  {
    id: "2",
    title: "Modern Business Website",
    slug: "modern-business-website",
    description: "I will build a responsive, SEO-friendly website for your business using modern technologies.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Youssef Dev",
      image: null,
      providerProfile: { isVerified: true, username: "youssefdev" }
    },
    category: { name: "Web Development" },
    packages: [{ price: 1500, deliveryDays: 7 }],
    reviews: { _count: 32, _avg: { rating: 4.8 } },
    city: "Casablanca"
  },
  {
    id: "3",
    title: "Instagram Reels Editing",
    slug: "instagram-reels-editing",
    description: "I will create engaging Instagram Reels that capture attention and grow your audience.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Omar Edit",
      image: null,
      providerProfile: { isVerified: true, username: "omaredit" }
    },
    category: { name: "Video Editing" },
    packages: [{ price: 200, deliveryDays: 1 }],
    reviews: { _count: 28, _avg: { rating: 4.7 } },
    city: "Marrakech"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Find the right service. Get the job done.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover trusted Moroccan professionals and get the help you need — fast, simple and secure.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="What service are you looking for?"
                  className="h-14 pl-12 text-lg rounded-full border-2"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full">
                  Search
                </Button>
              </div>
            </div>

            {/* Popular Searches */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="text-sm text-muted-foreground">Popular:</span>
              {["Logo design", "Website development", "Video editing", "Photography", "Home repair", "Tutoring"].map((term) => (
                <Link
                  key={term}
                  href={`/services?q=${encodeURIComponent(term)}`}
                  className="text-sm text-primary hover:underline"
                >
                  {term}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="rounded-full px-8">
                  Find a Service
                </Button>
              </Link>
              <Link href="/become-provider">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  Offer Your Skills
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              <div>
                <p className="font-semibold">Verified Providers</p>
                <p className="text-sm text-muted-foreground">Trusted professionals</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">Secure Payments</p>
                <p className="text-sm text-muted-foreground">Protected transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-warning" />
              <div>
                <p className="font-semibold">Real Reviews</p>
                <p className="text-sm text-muted-foreground">Genuine feedback</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-secondary" />
              <div>
                <p className="font-semibold">Fast Response</p>
                <p className="text-sm text-muted-foreground">Quick communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our wide range of service categories and find exactly what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/categories">
              <Button variant="outline" size="lg">
                View All Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover top-rated services from our talented Moroccan providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services">
              <Button size="lg" className="rounded-full">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Search & Browse</h3>
              <p className="text-muted-foreground">
                Explore thousands of services across various categories.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Contact & Request</h3>
              <p className="text-muted-foreground">
                Connect with providers and request the service you need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-xl mb-2">Receive & Review</h3>
              <p className="text-muted-foreground">
                Get your work done and leave a review to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Moroccans who are already using Lkhedma to find services or offer their skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="rounded-full px-8">
                Sign Up Free
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
