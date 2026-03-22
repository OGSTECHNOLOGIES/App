import { useState } from 'react'
import ApplianceInput from './calculator/ApplianceInput'
import SystemCalculation from './calculator/SystemCalculation'
import CostEstimation from './calculator/CostEstimation'
import QuoteGenerator from './calculator/QuoteGenerator'

export default function SolarCalculator() {
  const [appliances, setAppliances] = useState([])
  const [batteryType, setBatteryType] = useState('lithium')
  const [systemVoltage, setSystemVoltage] = useState(48)
  const [sunHours, setSunHours] = useState(5)
  const [backupHours, setBackupHours] = useState(6)

  const addAppliance = (appliance) => {
    setAppliances([...appliances, { ...appliance, id: Date.now() }])
  }

  const removeAppliance = (id) => {
    setAppliances(appliances.filter(app => app.id !== id))
  }

  const calculateTotals = () => {
    const totalLoad = appliances.reduce((sum, app) => sum + (app.power * app.quantity), 0)
    const dailyEnergy = appliances.reduce((sum, app) =>
      sum + (app.power * app.quantity * app.hours), 0
    )
    return { totalLoad, dailyEnergy }
  }

  const { totalLoad, dailyEnergy } = calculateTotals()

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ogs-blue mb-4">
            Solar System Calculator
          </h2>
          <p className="text-gray-600 text-lg">
            Calculate your perfect solar system in minutes
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <ApplianceInput
            onAddAppliance={addAppliance}
            appliances={appliances}
            onRemoveAppliance={removeAppliance}
            totalLoad={totalLoad}
            dailyEnergy={dailyEnergy}
          />

          {totalLoad > 0 && (
            <>
              <SystemCalculation
                totalLoad={totalLoad}
                dailyEnergy={dailyEnergy}
                batteryType={batteryType}
                setBatteryType={setBatteryType}
                systemVoltage={systemVoltage}
                setSystemVoltage={setSystemVoltage}
                sunHours={sunHours}
                setSunHours={setSunHours}
                backupHours={backupHours}
                setBackupHours={setBackupHours}
              />

              <CostEstimation
                totalLoad={totalLoad}
                dailyEnergy={dailyEnergy}
                batteryType={batteryType}
                systemVoltage={systemVoltage}
                sunHours={sunHours}
                backupHours={backupHours}
              />

              <QuoteGenerator
                appliances={appliances}
                totalLoad={totalLoad}
                dailyEnergy={dailyEnergy}
                batteryType={batteryType}
                systemVoltage={systemVoltage}
                sunHours={sunHours}
                backupHours={backupHours}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
