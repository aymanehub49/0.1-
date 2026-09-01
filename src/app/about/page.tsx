import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Shield, Zap, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lkhedma</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your skill. Your opportunity. Connecting Moroccan talent with opportunities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lkhedma is a Moroccan services marketplace connecting people who have skills with people who need them. 
              Our mission is to make it easier for Moroccan talent to find opportunities and for customers to find trusted services.
              We believe that everyone has valuable skills to offer, and everyone deserves access to quality services.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating opportunities for Moroccan talent to showcase their skills and earn income.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building a trusted community where people can connect and collaborate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-success mb-2" />
                <CardTitle>Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ensuring safe and secure transactions with verified providers and reviews.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-warning mb-2" />
                <CardTitle>Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Making it fast and simple to find and hire the right professionals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Making quality services accessible to everyone across Morocco.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-destructive mb-2" />
                <CardTitle>Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintaining high standards through reviews and provider verification.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="leading-relaxed">
                Lkhedma was born from a simple observation: Morocco is full of talented individuals with incredible skills, 
                but many struggle to find opportunities to showcase their talents and earn a living. At the same time, 
                businesses and individuals often have difficulty finding reliable service providers.
              </p>
              <p className="leading-relaxed">
                We created Lkhedma to bridge this gap. Our platform makes it easy for anyone to offer their services 
                and for anyone to find the help they need. Whether you're a graphic designer, a mechanic, a tutor, 
                or any other skilled professional, Lkhedma gives you the tools to connect with customers and grow your business.
              </p>
              <p className="leading-relaxed">
                Starting in Morocco, we're building a platform that can scale internationally. Our architecture is designed 
                to support multiple languages, currencies, and regions, ensuring that Lkhedma can serve communities 
                beyond Morocco while maintaining our local focus and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-gradient">10K+</p>
              <p className="text-muted-foreground">Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">5K+</p>
              <p className="text-muted-foreground">Services</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">15K+</p>
              <p className="text-muted-foreground">Orders Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">4.8</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to offer your skills or find the perfect service provider, 
            Lkhedma is the place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Get Started
            </a>
            <a href="/services" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
              Browse Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
