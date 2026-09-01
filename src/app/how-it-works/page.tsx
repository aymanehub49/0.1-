import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, CheckCircle, Briefcase, Star, Wallet, Shield } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get started in just a few simple steps
          </p>
        </div>
      </section>

      {/* For Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">For Clients</Badge>
            <h2 className="text-3xl font-bold mb-4">Find the Perfect Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to find and hire the right professional for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <CardTitle>Search & Browse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore thousands of services across various categories. Use filters to find exactly what you need.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Search className="h-4 w-4" />
                  <span>Browse services</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <CardTitle>Compare & Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Compare different providers, read reviews, and check ratings to make an informed decision.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>Check reviews</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <CardTitle>Contact Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Message the provider to discuss your requirements and ensure they're the right fit.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <MessageSquare className="h-4 w-4" />
                  <span>Send message</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <CardTitle>Request Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Select a package, provide your requirements, and submit your request securely.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Briefcase className="h-4 w-4" />
                  <span>Place order</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">5</span>
                </div>
                <CardTitle>Receive Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get your work delivered on time. Review the deliverables and request revisions if needed.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Get delivery</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">6</span>
                </div>
                <CardTitle>Review & Complete</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Review the work, approve the delivery, and leave feedback to help others.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>Leave review</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Providers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">For Providers</Badge>
            <h2 className="text-3xl font-bold mb-4">Offer Your Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Turn your skills into income by offering services on Lkhedma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <CardTitle>Create Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Sign up and create your profile. Add your skills, portfolio, and describe what you offer.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Briefcase className="h-4 w-4" />
                  <span>Build profile</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <CardTitle>Publish Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create service listings with packages, pricing, and delivery times. Get approved by our team.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Briefcase className="h-4 w-4" />
                  <span>List services</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <CardTitle>Receive Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get service requests from clients. Review requirements and accept or negotiate as needed.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <MessageSquare className="h-4 w-4" />
                  <span>Get requests</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <CardTitle>Complete Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Deliver high-quality work on time. Communicate with clients throughout the process.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <CheckCircle className="h-4 w-4" />
                  <span>Deliver work</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">5</span>
                </div>
                <CardTitle>Get Paid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Receive payment securely after delivery. Track your earnings in your wallet.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Wallet className="h-4 w-4" />
                  <span>Get paid</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">6</span>
                </div>
                <CardTitle>Build Reputation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Earn positive reviews and build your reputation. Get verified for more opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Star className="h-4 w-4" />
                  <span>Build reputation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trust & Safety</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your security is our priority. Here's how we protect you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-success mb-2" />
                <CardTitle className="text-lg">Verified Providers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All providers go through verification to ensure authenticity and quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Payments are held securely until you approve the work. Money-back guarantee available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-warning mb-2" />
                <CardTitle className="text-lg">Real Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Only verified buyers can leave reviews. No fake ratings or testimonials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-secondary mb-2" />
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our support team is available to help with any issues or disputes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of Moroccans already using Lkhedma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Sign Up Free
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
