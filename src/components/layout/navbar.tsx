"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Menu, 
  Bell, 
  MessageSquare, 
  User, 
  Globe,
  ChevronDown 
} from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-xl font-bold text-white">L</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Lkhedma</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Explore Services
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/become-provider" className="text-sm font-medium hover:text-primary transition-colors">
              Become a Provider
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search services..."
                  className="w-64 pl-10"
                />
              </div>
            </div>

            {/* Language Selector */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-5 w-5" />
            </Button>

            {session ? (
              <>
                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
                </Button>

                {/* Messages */}
                <Button variant="ghost" size="icon" className="relative">
                  <MessageSquare className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
                </Button>

                {/* Profile */}
                <div className="relative group">
                  <Button variant="ghost" size="icon">
                    {session.user?.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "Profile"}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-5 w-5" />
                    )}
                  </Button>
                  
                  {/* Dropdown */}
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="p-2 space-y-1">
                      <Link href="/dashboard" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Dashboard
                      </Link>
                      <Link href="/dashboard/profile" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Profile
                      </Link>
                      <Link href="/dashboard/services" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        My Services
                      </Link>
                      <Link href="/dashboard/orders" className="block px-3 py-2 text-sm hover:bg-accent rounded-md">
                        Orders
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={() => signOut()}
                        className="w-full text-left px-3 py-2 text-sm hover:bg-accent rounded-md text-destructive"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                className="w-full pl-10"
              />
            </div>
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link href="/services" className="block py-2 text-sm font-medium hover:text-primary">
                Explore Services
              </Link>
              <Link href="/categories" className="block py-2 text-sm font-medium hover:text-primary">
                Categories
              </Link>
              <Link href="/become-provider" className="block py-2 text-sm font-medium hover:text-primary">
                Become a Provider
              </Link>
              <Link href="/how-it-works" className="block py-2 text-sm font-medium hover:text-primary">
                How It Works
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
