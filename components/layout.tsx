import type React from "react"
import Link from "next/link"
import { Droplets, Settings, Home } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-sky-950 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('/water-texture.svg')] opacity-5 z-0"></div>

      <div className="relative z-10">
        <header className="sticky top-0 z-40 bg-sky-950/80 backdrop-blur-sm border-b border-sky-800/50 shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <MobileNav />
              <Link href="/pond-system" className="flex items-center">
                <Droplets className="h-6 w-6 text-sky-400 mr-2" />
                <span className="font-bold text-lg text-white hidden sm:inline">Pond System</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-4">
              <Link
                href="/pond-system"
                className="px-3 py-2 text-sm rounded-md hover:bg-sky-800/50 transition-colors flex items-center gap-1.5"
              >
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/pond-settings"
                className="px-3 py-2 text-sm rounded-md hover:bg-sky-800/50 transition-colors flex items-center gap-1.5"
              >
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 md:py-8 max-w-5xl">
          <div className="mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-sky-300 to-teal-300 text-transparent bg-clip-text">
                {title}
              </h1>
            </div>

            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-sky-400 to-teal-400 mx-auto rounded-full mb-6"></div>
          </div>

          <main>{children}</main>

          <footer className="mt-12 md:mt-16 text-center text-sky-400/60 text-xs sm:text-sm pb-6">
            <p>© {new Date().getFullYear()} Pond Monitoring System</p>
          </footer>
        </div>
      </div>
    </div>
  )
}
