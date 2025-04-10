"use client"

import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import { Power } from "lucide-react"

interface CircuitSwitchProps {
  label: string
  isOn: boolean
  onChange: (isOn: boolean) => void
  className?: string
}

export function CircuitSwitch({ label, isOn, onChange, className }: CircuitSwitchProps) {
  const [isPending, setIsPending] = useState(false)

  // Simulate a network request when toggling the switch
  const handleToggle = (checked: boolean) => {
    setIsPending(true)
    setTimeout(() => {
      onChange(checked)
      setIsPending(false)
    }, 300)
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-xl transition-all",
        "bg-gradient-to-b from-sky-800/60 to-sky-900/60 border border-sky-700/50",
        isPending && "animate-pulse",
        isOn ? "shadow-md shadow-teal-500/20" : "shadow-md shadow-red-500/20",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Power className={cn("w-3 h-3 sm:w-4 sm:h-4", isOn ? "text-teal-400" : "text-red-400")} />
        <span className="text-xs sm:text-sm font-medium text-white truncate max-w-[80px] sm:max-w-full">{label}</span>
      </div>
      <Switch
        checked={isOn}
        onCheckedChange={handleToggle}
        disabled={isPending}
        className={cn(
          "data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-teal-500 data-[state=checked]:to-emerald-500",
          "data-[state=unchecked]:bg-gradient-to-r data-[state=unchecked]:from-red-500 data-[state=unchecked]:to-rose-600",
          "scale-90 sm:scale-100",
        )}
      />
      <span className={cn("text-[10px] sm:text-xs font-medium", isOn ? "text-teal-400" : "text-red-400")}>
        {isOn ? "ACTIVE" : "INACTIVE"}
      </span>
    </div>
  )
}
