"use client"

import { useState } from "react"
import { Layout } from "@/components/layout"
import { InfoCard } from "@/components/info-card"
import { CircuitSwitch } from "@/components/circuit-switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Sliders, Edit3, Save, RotateCcw, Zap } from "lucide-react"

export default function PondSettings() {
  // In a real app, this data would be fetched and updated via API
  const [circuitStatus, setCircuitStatus] = useState([true, false, true, true, true, true, false, true])
  const [circuitNames, setCircuitNames] = useState([
    "Main Pump",
    "UV Filter",
    "Waterfall",
    "Aerator",
    "Heater",
    "Lights",
    "Backup Pump",
    "Skimmer",
  ])
  const [currentAdjustments, setCurrentAdjustments] = useState(Array(8).fill("0.00"))
  const [pondLevel, setPondLevel] = useState("0.00")
  const [tankLevel, setTankLevel] = useState("0.00")
  const [offDuration, setOffDuration] = useState("30")
  const [isSaving, setIsSaving] = useState(false)

  const updateCircuitStatus = (index: number, isOn: boolean) => {
    const newStatus = [...circuitStatus]
    newStatus[index] = isOn
    setCircuitStatus(newStatus)
  }

  const updateCircuitName = (index: number, name: string) => {
    const newNames = [...circuitNames]
    newNames[index] = name
    setCircuitNames(newNames)
  }

  const updateCurrentAdjustment = (index: number, value: string) => {
    const newAdjustments = [...currentAdjustments]
    newAdjustments[index] = value
    setCurrentAdjustments(newAdjustments)
  }

  const handleSaveSettings = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  const handleResetSettings = () => {
    // Reset to default values
    setCurrentAdjustments(Array(8).fill("0.00"))
    setPondLevel("0.00")
    setTankLevel("0.00")
    setOffDuration("30")
  }

  return (
    <Layout title="Pond Settings">
      <div className="space-y-6 sm:space-y-8">
        <InfoCard title="Circuit Power Switches" icon={<Zap className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            {circuitStatus.map((isOn, i) => (
              <CircuitSwitch
                key={i}
                label={circuitNames[i] || `Circuit ${i + 1}`}
                isOn={isOn}
                onChange={(value) => updateCircuitStatus(i, value)}
              />
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Circuit Names" icon={<Edit3 className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <Label htmlFor={`circuit-name-${i}`} className="w-20 sm:w-24 text-sky-300 text-xs sm:text-sm">
                    Circuit {i + 1}
                  </Label>
                  <Input
                    id={`circuit-name-${i}`}
                    value={circuitNames[i]}
                    onChange={(e) => updateCircuitName(i, e.target.value)}
                    className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[4, 5, 6, 7].map((i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <Label htmlFor={`circuit-name-${i}`} className="w-20 sm:w-24 text-sky-300 text-xs sm:text-sm">
                    Circuit {i + 1}
                  </Label>
                  <Input
                    id={`circuit-name-${i}`}
                    value={circuitNames[i]}
                    onChange={(e) => updateCircuitName(i, e.target.value)}
                    className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Settings" icon={<Sliders className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <Label htmlFor={`cur-adj-${i}`} className="w-28 sm:w-32 text-sky-300 text-xs sm:text-sm">
                    Circuit {i + 1} Cur Adj
                  </Label>
                  <Input
                    id={`cur-adj-${i}`}
                    value={currentAdjustments[i]}
                    onChange={(e) => updateCurrentAdjustment(i, e.target.value)}
                    className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-3 sm:space-y-4">
              {[4, 5, 6, 7].map((i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3">
                  <Label htmlFor={`cur-adj-${i}`} className="w-28 sm:w-32 text-sky-300 text-xs sm:text-sm">
                    Circuit {i + 1} Cur Adj
                  </Label>
                  <Input
                    id={`cur-adj-${i}`}
                    value={currentAdjustments[i]}
                    onChange={(e) => updateCurrentAdjustment(i, e.target.value)}
                    className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 max-w-md mx-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <Label htmlFor="pond-level" className="w-28 sm:w-32 text-sky-300 text-xs sm:text-sm">
                Pond Level 0
              </Label>
              <Input
                id="pond-level"
                value={pondLevel}
                onChange={(e) => setPondLevel(e.target.value)}
                className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Label htmlFor="tank-level" className="w-28 sm:w-32 text-sky-300 text-xs sm:text-sm">
                Tank Level 0
              </Label>
              <Input
                id="tank-level"
                value={tankLevel}
                onChange={(e) => setTankLevel(e.target.value)}
                className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Label htmlFor="off-duration" className="w-28 sm:w-32 text-sky-300 text-xs sm:text-sm">
                Off Duration min
              </Label>
              <Input
                id="off-duration"
                value={offDuration}
                onChange={(e) => setOffDuration(e.target.value)}
                className="bg-sky-900/50 border-sky-700/50 text-white focus:border-teal-500 focus:ring-teal-500/20 text-sm h-8 sm:h-10"
              />
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              onClick={handleSaveSettings}
              disabled={isSaving}
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white h-10 px-4 sm:px-6"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSaving ? "Saving..." : "Save Settings"}
            </Button>
            <Button
              onClick={handleResetSettings}
              variant="outline"
              className="border-sky-600 text-sky-300 hover:bg-sky-800/30 h-10"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </InfoCard>
      </div>
    </Layout>
  )
}
