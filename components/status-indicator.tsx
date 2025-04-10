import type React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const statusVariants = cva(
  "px-3 sm:px-4 py-1 sm:py-1.5 text-center font-medium rounded-full shadow-inner transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5",
  {
    variants: {
      variant: {
        danger: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-700/30 animate-pulse",
        success: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald-700/30",
        warning: "bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-amber-700/30",
        info: "bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow-sky-700/30",
      },
      size: {
        sm: "text-xs h-5 sm:h-6",
        md: "text-xs sm:text-sm h-6 sm:h-8",
        lg: "text-sm sm:text-base h-8 sm:h-10",
      },
    },
    defaultVariants: {
      variant: "info",
      size: "md",
    },
  },
)

interface StatusIndicatorProps {
  status: string
  variant?: "danger" | "success" | "warning" | "info"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  className?: string
}

export function StatusIndicator({ status, variant = "info", size = "md", icon, className }: StatusIndicatorProps) {
  return (
    <div className={cn(statusVariants({ variant, size }), className)}>
      {icon && <span>{icon}</span>}
      <span>{status}</span>
    </div>
  )
}
