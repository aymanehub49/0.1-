"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Star, MapPin, Clock, CheckCircle, Heart, Share2, MessageCircle, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

// Demo data - will be replaced with real data from database
const serviceData = {
  id: "1",
  title: "Professional Logo Design",
  slug: "professional-logo-design",
  description: "I will create a stunning, professional logo that represents your brand perfectly. With over 5 years of experience in graphic design, I specialize in creating unique and memorable logos that help businesses stand out.",
  images: [
    { url: "/placeholder-service.jpg" },
    { url: "/placeholder-service.jpg" },
    { url: "/placeholder-service.jpg" },
  ],
  user: {
    id: "1",
    name: "Sara Design",
    image: null,
    providerProfile: {
      isVerified: true,
      username: "saradesign",
      totalJobs: 147,
      completedJobs: 142,
      responseTime: 2,
      skills: ["Logo Design", "Brand Identity", "Illustration", "Adobe Illustrator", "Photoshop"],
    },
    profile: {
      city: "Rabat",
      languages: ["Arabic", "French", "English"],
      bio: "Professional graphic designer with 5+ years of experience creating stunning visual identities for brands worldwide.",
    },
  },
  category: { name: "Graphic Design" },
  packages: [
    {
      id: "1",
      name: "Basic",
      description: "Perfect for startups and small businesses",
      price: 300,
      deliveryDays: 2,
      revisions: 2,
      features: [
        "2 logo concepts",
        "High-resolution files",
        "PNG and JPG formats",
        "2 revisions",
      ],
    },
    {
      id: "2",
      name: "Standard",
      description: "Best value for growing businesses",
      price: 600,
      deliveryDays: 3,
      revisions: 4,
      features: [
        "4 logo concepts",
        "Vector source files (AI, EPS)",
        "Social media kit",
        "Brand guidelines",
        "4 revisions",
      ],
    },
    {
      id: "3",
      name: "Premium",
      description: "Complete brand identity package",
      price: 1200,
      deliveryDays: 5,
      revisions: 6,
      features: [
        "6 logo concepts",
        "Full brand identity",
        "Business card design",
        "Letterhead design",
        "Social media kit",
        "Brand guidelines",
        "6 revisions",
        "Priority support",
      ],
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
      createdAt: "2024-08-10",
    },
  ],
  faq: [
    {
      question: "What file formats will I receive?",
      answer: "You will receive high-resolution PNG and JPG files. For Standard and Premium packages, you'll also get vector source files (AI, EPS).",
    },
    {
      question: "How many revisions do I get?",
      answer: "Basic package includes 2 revisions, Standard includes 4, and Premium includes 6 revisions.",
    },
    {
      question: "Can you work with my existing brand colors?",
      answer: "Yes! Please provide your brand colors or any existing brand guidelines, and I'll incorporate them into the design.",
    },
  ],
}

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const [selectedPackage, setSelectedPackage] = useState(serviceData.packages[1])
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  const avgRating = serviceData.reviews.reduce((acc, r) => acc + r.rating, 0) / serviceData.reviews.length

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <span>/</span>
          <Link href={`/services?category=${serviceData.category.name.toLowerCase()}`} className="hover:text-primary">
            {serviceData.category.name}
          </Link>
          <span>/</span>
          <span className="text-foreground">{serviceData.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                <Image
                  src={serviceData.images[selectedImage]?.url || "/placeholder-service.jpg"}
                  alt={serviceData.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-2">
                {serviceData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video w-24 overflow-hidden rounded-md border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`${serviceData.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Title and Basic Info */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{serviceData.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium text-foreground">{avgRating.toFixed(1)}</span>
                      <span>({serviceData.reviews.length} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{serviceData.user.profile.city}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500" : ""}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Provider Info */}
              <Link href={`/providers/${serviceData.user.providerProfile.username}`} className="block">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12">
                        <Image
                          src={serviceData.user.image || "/placeholder-avatar.jpg"}
                          alt={serviceData.user.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{serviceData.user.name}</p>
                          {serviceData.user.providerProfile.isVerified && (
                            <Badge variant="success" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">@{serviceData.user.providerProfile.username}</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-medium">{serviceData.user.providerProfile.completedJobs} jobs</p>
                        <p className="text-muted-foreground">{serviceData.user.providerProfile.responseTime}h response</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-semibold mb-4">About This Service</h2>
              <p className="text-muted-foreground leading-relaxed">{serviceData.description}</p>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="text-xl font-semibold mb-4">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPackage.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {serviceData.faq.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Reviews ({serviceData.reviews.length})</h2>
              <div className="space-y-4">
                {serviceData.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold">{review.reviewer.name}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="text-sm">{review.rating}.0</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.createdAt}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                      <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                        <span>Communication: {review.communication}/5</span>
                        <span>Quality: {review.quality}/5</span>
                        <span>Delivery: {review.delivery}/5</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                {/* Package Selection */}
                <div>
                  <h3 className="font-semibold mb-4">Select Package</h3>
                  <div className="space-y-3">
                    {serviceData.packages.map((pkg) => (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                          selectedPackage.id === pkg.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{pkg.name}</span>
                          <span className="font-bold text-primary">{formatPrice(pkg.price)}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{pkg.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {pkg.deliveryDays} days
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            {pkg.revisions} revisions
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Package Details */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold text-primary">{formatPrice(selectedPackage.price)}</span>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      Request Service
                    </Button>
                    <Button className="w-full" variant="outline" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Provider
                    </Button>
                  </div>
                </div>

                {/* trust Badge */}
                <div className="border-t pt-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-success" />
                    <span>Your payment is protected by Lkhedma</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
