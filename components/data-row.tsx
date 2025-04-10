import type React from "react"
import { cn } from "@/lib/utils"

interface DataRowProps {
  label: string
  value: string | number
  unit?: string
  icon?: React.ReactNode
  className?: string
  valueClassName?: string
}

export function DataRow({ label, value, unit, icon, className, valueClassName }: DataRowProps) {
  return (
    <div className={cn("flex justify-between items-center py-2 border-b border-sky-200/10 group", className)}>
      <div className="flex items-center gap-1.5 sm:gap-2 text-sky-100">
        {icon && <span className="text-teal-400">{icon}</span>}
        <span className="font-medium text-sm sm:text-base">{label}</span>
      </div>
      <span
        className={cn(
          "font-mono text-sm sm:text-base text-white bg-sky-700/50 px-2 sm:px-3 py-1 rounded-md group-hover:bg-sky-700/70 transition-colors",
          valueClassName,
        )}
      >
        {value}
        {unit && <span className="text-sky-300 ml-1">{unit}</span>}
      </span>
    </div>
  )
}
