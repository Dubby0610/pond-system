import type React from "react"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  title: string
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export function InfoCard({ title, children, className, icon }: InfoCardProps) {
  return (
    <div className="w-full mb-6 sm:mb-8 transform transition-all hover:scale-[1.01]">
      <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
        {icon && <div className="text-teal-500">{icon}</div>}
        <h2 className="text-lg sm:text-xl font-semibold text-center text-white">{title}</h2>
      </div>
      <div
        className={cn(
          "border border-sky-200/20 rounded-xl p-3 sm:p-5 bg-gradient-to-br from-sky-800/90 to-sky-900/90",
          "backdrop-blur-sm shadow-lg shadow-sky-900/30",
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
