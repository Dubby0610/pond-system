"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Droplets, Home, Settings, Info, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const routes = [
    { name: "Dashboard", href: "/pond-system", icon: <Home className="w-5 h-5 mr-2" /> },
    { name: "Settings", href: "/pond-settings", icon: <Settings className="w-5 h-5 mr-2" /> },
    { name: "Analytics", href: "#", icon: <BarChart3 className="w-5 h-5 mr-2" /> },
    { name: "About", href: "#", icon: <Info className="w-5 h-5 mr-2" /> },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-sky-800/50 focus:bg-sky-800/50">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-gradient-to-b from-sky-900 to-sky-950 border-r border-sky-800 p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-sky-800">
            <div className="flex items-center">
              <Droplets className="h-6 w-6 text-sky-400 mr-2" />
              <span className="font-bold text-lg text-white">Pond System</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-sky-400 hover:bg-sky-800/50"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex-1 overflow-auto py-4">
            <ul className="space-y-2 px-2">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center py-3 px-4 rounded-lg text-sky-100 hover:bg-sky-800/50 transition-colors",
                      "active:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-sky-500/50",
                    )}
                  >
                    {route.icon}
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-sky-800">
            <div className="text-xs text-sky-400/60 text-center">
              <p>© {new Date().getFullYear()} Pond Monitoring System</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
