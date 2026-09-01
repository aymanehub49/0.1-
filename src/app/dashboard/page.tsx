"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  ShoppingBag, 
  Star, 
  TrendingUp, 
  Eye,
  Clock,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

export default function DashboardPage() {
  const { data: session, status } = useSession()

  if (status === "unauthenticated") {
    redirect("/login")
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  // Demo data - will be replaced with real data from database
  const stats = {
    totalEarnings: 15400,
    activeOrders: 3,
    completedOrders: 47,
    pendingRequests: 2,
    averageRating: 4.8,
    profileViews: 1250,
  }

  const recentOrders = [
    {
      id: "1",
      serviceTitle: "Professional Logo Design",
      clientName: "Ahmed M.",
      status: "IN_PROGRESS",
      amount: 600,
      deadline: "2024-09-05",
    },
    {
      id: "2",
      serviceTitle: "Brand Identity Package",
      clientName: "Fatima B.",
      status: "PENDING",
      amount: 2000,
      deadline: "2024-09-10",
    },
    {
      id: "3",
      serviceTitle: "Social Media Kit",
      clientName: "Karim S.",
      status: "DELIVERED",
      amount: 400,
      deadline: "2024-08-28",
    },
  ]

  const recentReviews = [
    {
      id: "1",
      rating: 5,
      comment: "Absolutely amazing work! Delivered beyond expectations.",
      reviewer: "Ahmed M.",
      service: "Professional Logo Design",
    },
    {
      id: "2",
      rating: 5,
      comment: "Great communication and fast delivery.",
      reviewer: "Fatima B.",
      service: "Brand Identity Package",
    },
  ]

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {session?.user?.name}!</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your account today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <TrendingUp className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatPrice(stats.totalEarnings)}</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeOrders}</div>
                <p className="text-xs text-muted-foreground">{stats.pendingRequests} pending</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Jobs</CardTitle>
                <Briefcase className="h-4 w-4 text-secondary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.completedOrders}</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                <Star className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.averageRating.toFixed(1)}</div>
                <p className="text-xs text-muted-foreground">{stats.profileViews} profile views</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Orders</CardTitle>
                  <Link href="/dashboard/orders">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{order.serviceTitle}</p>
                        <p className="text-xs text-muted-foreground">{order.clientName}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            order.status === "IN_PROGRESS"
                              ? "default"
                              : order.status === "PENDING"
                              ? "secondary"
                              : "success"
                          }
                          className="text-xs"
                        >
                          {order.status.replace("_", " ")}
                        </Badge>
                        <p className="text-sm font-medium mt-1">{formatPrice(order.amount)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Reviews</CardTitle>
                  <Link href="/dashboard/reviews">
                    <Button variant="ghost" size="sm">
                      View All
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{review.reviewer}</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="text-sm font-medium">{review.rating}.0</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/dashboard/services/new">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Create New Service
                  </Button>
                </Link>
                <Link href="/dashboard/messages">
                  <Button variant="outline" className="w-full justify-start">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    View Messages
                  </Button>
                </Link>
                <Link href="/dashboard/wallet">
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Check Wallet
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
