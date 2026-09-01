"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Briefcase, 
  ShoppingBag, 
  MessageSquare, 
  Heart, 
  Star, 
  Bell, 
  Wallet, 
  Settings, 
  LogOut,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { signOut } from "@/lib/auth"

const menuItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/services", icon: Briefcase, label: "My Services" },
  { href: "/dashboard/orders", icon: ShoppingBag, label: "Orders" },
  { href: "/dashboard/messages", icon: MessageSquare, label: "Messages", badge: 3 },
  { href: "/dashboard/favorites", icon: Heart, label: "Favorites" },
  { href: "/dashboard/reviews", icon: Star, label: "Reviews" },
  { href: "/dashboard/notifications", icon: Bell, label: "Notifications", badge: 5 },
  { href: "/dashboard/wallet", icon: Wallet, label: "Wallet" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-card h-screen sticky top-0 hidden lg:block">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-white">L</span>
          </div>
          <span className="text-xl font-bold text-gradient">Lkhedma</span>
        </Link>

        {/* User Info */}
        <div className="flex items-center gap-3 mb-6 p-3 bg-muted/50 rounded-lg">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium truncate">User</p>
            <p className="text-xs text-muted-foreground truncate">user@email.com</p>
          </div>
        </div>

        {/* Create Service Button */}
        <Link href="/dashboard/services/new" className="block mb-6">
          <Button className="w-full" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Service
          </Button>
        </Link>

        {/* Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Sign Out */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signOut({ redirectTo: "/" })}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </aside>
  )
}
