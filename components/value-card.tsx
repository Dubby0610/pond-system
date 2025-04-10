import type React from "react"
import { cn } from "@/lib/utils"

interface ValueCardProps {
  label: string
  value: string | number
  unit?: string
  icon?: React.ReactNode
  trend?: "up" | "down" | "stable"
  className?: string
}

export function ValueCard({ label, value, unit, icon, trend, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        "p-3 sm:p-4 rounded-xl bg-gradient-to-br from-sky-700/80 to-sky-800/80 border border-sky-600/30",
        "shadow-lg transition-all hover:shadow-sky-700/20 hover:scale-[1.02]",
        className,
      )}
    >
      <div className="flex justify-between items-start mb-1 sm:mb-2">
        <span className="text-xs sm:text-sm font-medium text-sky-300">{label}</span>
        {icon && <span className="text-teal-400">{icon}</span>}
      </div>
      <div className="flex items-baseline">
        <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
        {unit && <span className="ml-1 text-sky-300 text-xs sm:text-sm">{unit}</span>}
      </div>
      {trend && (
        <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs">
          {trend === "up" && <span className="text-emerald-400">↑ Increasing</span>}
          {trend === "down" && <span className="text-amber-400">↓ Decreasing</span>}
          {trend === "stable" && <span className="text-sky-400">→ Stable</span>}
        </div>
      )}
    </div>
  )
}
