"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Clock, CheckCircle, MessageCircle, Award, Calendar, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ServiceCard } from "@/components/service-card"
import { formatPrice } from "@/lib/utils"

// Demo data - will be replaced with real data from database
const providerData = {
  id: "1",
  name: "Sara Design",
  username: "saradesign",
  image: null,
  providerProfile: {
    isVerified: true,
    totalJobs: 147,
    completedJobs: 142,
    responseTime: 2,
    profileViews: 1250,
    skills: ["Logo Design", "Brand Identity", "Illustration", "Adobe Illustrator", "Photoshop", "UI/UX Design"],
  },
  profile: {
    city: "Rabat",
    languages: ["Arabic", "French", "English"],
    bio: "Professional graphic designer with 5+ years of experience creating stunning visual identities for brands worldwide. I specialize in logo design, brand identity, and illustration. My goal is to help businesses stand out with unique and memorable designs.",
  },
  services: [
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
      title: "Brand Identity Package",
      slug: "brand-identity-package",
      description: "Complete brand identity including logo, colors, typography, and brand guidelines.",
      images: [{ url: "/placeholder-service.jpg" }],
      user: {
        name: "Sara Design",
        image: null,
        providerProfile: { isVerified: true, username: "saradesign" }
      },
      category: { name: "Graphic Design" },
      packages: [{ price: 2000, deliveryDays: 7 }],
      reviews: { _count: 23, _avg: { rating: 4.8 } },
      city: "Rabat"
    },
  ],
  portfolio: [
    {
      id: "1",
      title: "Tech Startup Logo",
      description: "Modern logo design for a technology startup",
      images: ["/placeholder-portfolio.jpg"],
    },
    {
      id: "2",
      title: "Restaurant Brand Identity",
      description: "Complete branding for a Moroccan restaurant",
      images: ["/placeholder-portfolio.jpg"],
    },
    {
      id: "3",
      title: "E-commerce Logo",
      description: "Clean and professional e-commerce logo",
      images: ["/placeholder-portfolio.jpg"],
    },
  ],
  reviews: [
    {
      id: "1",
      rating: 5,
      communication: 5,
      quality: 5,
      delivery: 5,
      comment: "Absolutely amazing work! Sara understood exactly what I needed and delivered beyond my expectations. Highly recommend!",
      reviewer: { name: "Ahmed M." },
      service: { title: "Professional Logo Design", slug: "professional-logo-design" },
      createdAt: "2024-08-15",
    },
    {
      id: "2",
      rating: 5,
      communication: 5,
      quality: 5,
      delivery: 5,
      comment: "Great communication and fast delivery. The logo designs were creative and professional.",
      reviewer: { name: "Fatima B." },
      service: { title: "Brand Identity Package", slug: "brand-identity-package" },
      createdAt: "2024-08-10",
    },
  ],
}

export default function ProviderProfilePage({ params }: { params: { username: string } }) {
  const [activeTab, setActiveTab] = useState("services")
  const avgRating = providerData.reviews.reduce((acc, r) => acc + r.rating, 0) / providerData.reviews.length

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative h-32 w-32 flex-shrink-0">
              <Image
                src={providerData.image || "/placeholder-avatar.jpg"}
                alt={providerData.name}
                fill
                className="rounded-full object-cover border-4 border-background"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl md:text-3xl font-bold">{providerData.name}</h1>
                    {providerData.providerProfile.isVerified && (
                      <Badge variant="success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">@{providerData.username}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button>Follow</Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <div>
                    <p className="font-semibold">{avgRating.toFixed(1)}</p>
                    <p className="text-xs text-muted-foreground">{providerData.reviews.length} reviews</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{providerData.providerProfile.completedJobs}</p>
                    <p className="text-xs text-muted-foreground">Jobs completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-semibold">{providerData.providerProfile.responseTime}h</p>
                    <p className="text-xs text-muted-foreground">Response time</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold">{providerData.profile.city}</p>
                    <p className="text-xs text-muted-foreground">Location</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>{providerData.profile.languages.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="border-b">
              <div className="flex gap-6">
                {["services", "portfolio", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Tab */}
            {activeTab === "services" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Services ({providerData.services.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {providerData.services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === "portfolio" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {providerData.portfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Reviews ({providerData.reviews.length})</h2>
                <div className="space-y-4">
                  {providerData.reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">{review.reviewer.name}</p>
                            <Link
                              href={`/services/${review.service.slug}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {review.service.title}
                            </Link>
                          </div>
                          <p className="text-sm text-muted-foreground">{review.createdAt}</p>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">{review.rating}.0</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>Communication: {review.communication}/5</span>
                          <span>Quality: {review.quality}/5</span>
                          <span>Delivery: {review.delivery}/5</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{providerData.profile.bio}</p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {providerData.providerProfile.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total jobs</span>
                  <span className="font-medium">{providerData.providerProfile.totalJobs}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completed jobs</span>
                  <span className="font-medium">{providerData.providerProfile.completedJobs}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Profile views</span>
                  <span className="font-medium">{providerData.providerProfile.profileViews}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Response time</span>
                  <span className="font-medium">{providerData.providerProfile.responseTime}h</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  Request Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
