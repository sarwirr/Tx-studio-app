"use client"

import Link from "next/link"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard, ArrowRightLeft, Users, LifeBuoy, Bell, Settings, Triangle, Menu, X
} from "lucide-react"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/dashboard", label: "Tableau de Bord", icon: LayoutDashboard },
  { href: "/dashboard/transactions", label: "Mes transactions", icon: ArrowRightLeft },
  { href: "/dashboard/clients", label: "Mes clients", icon: Users },
  { href: "/dashboard/assistance", label: "Assistance", icon: LifeBuoy },
]

const bottomNavItems = [
  { href: "/dashboard/notifications", label: "Mes notifications", icon: Bell, count: 1 },
  { href: "/dashboard/settings", label: "Réglages", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle Button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed z-40 top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:block"
        )}
      >
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-brand-DEFAULT">
            <Triangle className="w-7 h-7 fill-brand-DEFAULT text-brand-DEFAULT" />
            <span>LIQTRADE</span>
          </Link>
        </div>
        <nav className="flex-grow px-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-brand-light text-brand-DEFAULT"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-4 pb-4 space-y-2 border-t pt-4">
          {bottomNavItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-brand-light text-brand-DEFAULT"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {item.count && (
                <span className="ml-auto text-xs bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {item.count}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/placeholder.svg?width=40&height=40" alt="Paul Dumartin" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold text-gray-800">Paul Dumartin</p>
              <p className="text-xs text-gray-500">
                Statut Vérification KYC : <span className="text-green-600 font-medium">Valide</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}