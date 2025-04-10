"use client"

import { Layout } from "@/components/layout"
import { InfoCard } from "@/components/info-card"
import { DataRow } from "@/components/data-row"
import { StatusIndicator } from "@/components/status-indicator"
import { ValueCard } from "@/components/value-card"
import { useState, useEffect } from "react"
import { Thermometer, Droplets, AlertTriangle, Gauge, Warehouse, CloudSun, Zap, Waves } from "lucide-react"

export default function PondSystem() {
  // In a real app, this data would come from an API or real-time updates
  const [pondData, setPondData] = useState({
    pondInfo: {
      temperature: 68.2,
      pondLevel: 0.25,
      tankLevel: -1.25,
      floodStatus: "FLOOD",
    },
    greenhouseInfo: {
      temperature: 68.2,
      humidity: 84.0,
      pitTemperature: 68.2,
    },
    outsideInfo: {
      temperature: 68.2,
      humidity: 84.0,
    },
    electricalInfo: {
      circuitATotal: 12.32,
      circuitBTotal: 8.15,
      circuits: [12.32, 12.32, 12.32, 12.32, 12.32, 12.32, 12.32, 12.32],
    },
  })

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPondData((prev) => ({
        ...prev,
        pondInfo: {
          ...prev.pondInfo,
          temperature: +(prev.pondInfo.temperature + (Math.random() * 0.2 - 0.1)).toFixed(1),
          pondLevel: +(prev.pondInfo.pondLevel + (Math.random() * 0.05 - 0.025)).toFixed(2),
        },
        greenhouseInfo: {
          ...prev.greenhouseInfo,
          humidity: +(prev.greenhouseInfo.humidity + (Math.random() * 0.5 - 0.25)).toFixed(1),
        },
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Layout title="Pond System">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <ValueCard
          label="Water Temperature"
          value={pondData.pondInfo.temperature}
          unit="° F"
          icon={<Thermometer className="w-4 h-4" />}
          trend="stable"
        />
        <ValueCard
          label="Pond Level"
          value={`+${pondData.pondInfo.pondLevel}`}
          unit="″"
          icon={<Waves className="w-4 h-4" />}
          trend="up"
        />
        <ValueCard
          label="Humidity"
          value={pondData.greenhouseInfo.humidity}
          unit="%"
          icon={<Droplets className="w-4 h-4" />}
          trend="down"
        />
        <ValueCard
          label="Power Usage"
          value={(pondData.electricalInfo.circuitATotal + pondData.electricalInfo.circuitBTotal).toFixed(2)}
          unit="Amps"
          icon={<Zap className="w-4 h-4" />}
          trend="stable"
        />
      </div>

      <div className="space-y-6">
        <InfoCard title="Pond Information" icon={<Waves className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <DataRow
                label="Temperature"
                value={pondData.pondInfo.temperature}
                unit="° F"
                icon={<Thermometer className="w-3 h-3 sm:w-4 sm:h-4" />}
              />
              <DataRow
                label="Pond Level"
                value={`+${pondData.pondInfo.pondLevel}`}
                unit="″"
                icon={<Droplets className="w-3 h-3 sm:w-4 sm:h-4" />}
              />
              <DataRow
                label="Tank Level"
                value={pondData.pondInfo.tankLevel}
                unit="″"
                icon={<Gauge className="w-3 h-3 sm:w-4 sm:h-4" />}
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="mb-2 sm:mb-3 text-sm sm:text-base text-sky-300">Flood Sensor Status</span>
              <StatusIndicator
                status={pondData.pondInfo.floodStatus}
                variant="danger"
                size="lg"
                icon={<AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />}
              />
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Greenhouse Information" icon={<Warehouse className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="space-y-2">
            <DataRow
              label="Temperature"
              value={pondData.greenhouseInfo.temperature}
              unit="° F"
              icon={<Thermometer className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
            <DataRow
              label="Humidity"
              value={pondData.greenhouseInfo.humidity}
              unit="%"
              icon={<Droplets className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
            <DataRow
              label="Pit Temperature"
              value={pondData.greenhouseInfo.pitTemperature}
              unit="° F"
              icon={<Thermometer className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
          </div>
        </InfoCard>

        <InfoCard title="Outside Information" icon={<CloudSun className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="space-y-2">
            <DataRow
              label="Temperature"
              value={pondData.outsideInfo.temperature}
              unit="° F"
              icon={<Thermometer className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
            <DataRow
              label="Humidity"
              value={pondData.outsideInfo.humidity}
              unit="%"
              icon={<Droplets className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
          </div>
        </InfoCard>

        <InfoCard title="Electrical Information" icon={<Zap className="w-4 h-4 sm:w-5 sm:h-5" />}>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <DataRow
                label="Circuit A Total"
                value={pondData.electricalInfo.circuitATotal}
                unit="Amps"
                icon={<Zap className="w-3 h-3 sm:w-4 sm:h-4" />}
                valueClassName="bg-sky-600/50 text-white"
              />
              <div className="pl-4 sm:pl-6 space-y-1 sm:space-y-1.5">
                {pondData.electricalInfo.circuits.slice(0, 4).map((amp, i) => (
                  <DataRow key={i} label={`Circuit ${i + 1}`} value={amp} unit="Amps" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <DataRow
                label="Circuit B Total"
                value={pondData.electricalInfo.circuitBTotal}
                unit="Amps"
                icon={<Zap className="w-3 h-3 sm:w-4 sm:h-4" />}
                valueClassName="bg-sky-600/50 text-white"
              />
              <div className="pl-4 sm:pl-6 space-y-1 sm:space-y-1.5">
                {pondData.electricalInfo.circuits.slice(4, 8).map((amp, i) => (
                  <DataRow key={i} label={`Circuit ${i + 5}`} value={amp} unit="Amps" />
                ))}
              </div>
            </div>
          </div>
        </InfoCard>
      </div>
    </Layout>
  )
}
