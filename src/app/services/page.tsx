"use client"

import { useState } from "react"
import { Search, SlidersHorizontal, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ServiceCard } from "@/components/service-card"
import { Badge } from "@/components/ui/badge"

// Demo data - will be replaced with real data from database
const services = [
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
  {
    id: "4",
    title: "Wedding Photography",
    slug: "wedding-photography",
    description: "Professional wedding photography services capturing your special moments beautifully.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Imane Photo",
      image: null,
      providerProfile: { isVerified: true, username: "imanephoto" }
    },
    category: { name: "Photography" },
    packages: [{ price: 5000, deliveryDays: 3 }],
    reviews: { _count: 19, _avg: { rating: 5.0 } },
    city: "Tangier"
  },
  {
    id: "5",
    title: "Car Diagnostics and Repair",
    slug: "car-diagnostics-repair",
    description: "Expert car diagnostics and repair services for all major brands.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Hamza Auto",
      image: null,
      providerProfile: { isVerified: true, username: "hamzaauto" }
    },
    category: { name: "Automotive" },
    packages: [{ price: 400, deliveryDays: 1 }],
    reviews: { _count: 56, _avg: { rating: 4.6 } },
    city: "Salé"
  },
  {
    id: "6",
    title: "Math Tutoring - All Levels",
    slug: "math-tutoring",
    description: "Personalized math tutoring for students of all levels from primary to university.",
    images: [{ url: "/placeholder-service.jpg" }],
    user: {
      name: "Fatima Edu",
      image: null,
      providerProfile: { isVerified: true, username: "fatimaedu" }
    },
    category: { name: "Tutoring" },
    packages: [{ price: 150, deliveryDays: 1 }],
    reviews: { _count: 34, _avg: { rating: 4.8 } },
    city: "Fes"
  },
]

const categories = [
  "All Categories",
  "Web Development",
  "Graphic Design",
  "Video Editing",
  "Social Media",
  "Photography",
  "Home Repairs",
  "Automotive",
  "Tutoring",
]

const cities = [
  "All Morocco",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tangier",
  "Agadir",
  "Fes",
  "Salé",
]

const sortOptions = [
  "Recommended",
  "Best Rated",
  "Lowest Price",
  "Highest Price",
  "Newest",
]

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedCity, setSelectedCity] = useState("All Morocco")
  const [selectedSort, setSelectedSort] = useState("Recommended")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Services</h1>
          <p className="text-muted-foreground mb-6">
            Discover thousands of services from talented Moroccan professionals
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for services..."
                className="h-12 pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-20">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>

                <div className={`${showFilters ? 'block' : 'hidden'} lg:block space-y-6`}>
                  {/* Category */}
                  <div>
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="font-medium mb-3">Location</h3>
                    <div className="space-y-2">
                      {cities.map((city) => (
                        <button
                          key={city}
                          onClick={() => setSelectedCity(city)}
                          className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                            selectedCity === city
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent"
                          }`}
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium mb-3">Price Range (MAD)</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="Min"
                          className="h-8"
                          value={priceRange.min || ""}
                          onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                        />
                        <span>-</span>
                        <Input
                          type="number"
                          placeholder="Max"
                          className="h-8"
                          value={priceRange.max || ""}
                          onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Verified Only */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="verified"
                      checked={verifiedOnly}
                      onChange={(e) => setVerifiedOnly(e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="verified" className="text-sm">
                      Verified providers only
                    </label>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory("All Categories")
                      setSelectedCity("All Morocco")
                      setPriceRange({ min: 0, max: 10000 })
                      setVerifiedOnly(false)
                    }}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </aside>

            {/* Results */}
            <div className="flex-1">
              {/* Sort and View Options */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {services.length} services
                </p>
                <div className="flex items-center gap-4">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="text-sm border rounded-md px-3 py-2 bg-background"
                  >
                    {sortOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory !== "All Categories" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory("All Categories")}>
                    {selectedCategory} ×
                  </Badge>
                )}
                {selectedCity !== "All Morocco" && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCity("All Morocco")}>
                    {selectedCity} ×
                  </Badge>
                )}
                {verifiedOnly && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setVerifiedOnly(false)}>
                    Verified ×
                  </Badge>
                )}
              </div>

              {/* Service Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
