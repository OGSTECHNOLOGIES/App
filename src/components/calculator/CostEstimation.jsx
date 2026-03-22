import { DollarSign, TrendingUp } from 'lucide-react'

export default function CostEstimation({
  totalLoad,
  dailyEnergy,
  batteryType,
  systemVoltage,
  sunHours,
  backupHours
}) {
  const inverterSize = Math.ceil(totalLoad * 1.25)
  const batteryCapacity = Math.ceil((dailyEnergy * backupHours) / systemVoltage)
  const numberOfBatteries = Math.ceil(batteryCapacity / (batteryType === 'lithium' ? 200 : 150))
  const numberOfPanels = Math.ceil(dailyEnergy / (600 * sunHours))

  const inverterCost = inverterSize <= 1000 ? 180000 :
                       inverterSize <= 2000 ? 280000 :
                       inverterSize <= 3500 ? 420000 :
                       inverterSize <= 5000 ? 680000 : 950000

  const batteryCost = batteryType === 'lithium' ?
    numberOfBatteries * 350000 :
    numberOfBatteries * 180000

  const panelCost = numberOfPanels * 85000

  const installationCost = (inverterCost + batteryCost + panelCost) * 0.15

  const totalCost = inverterCost + batteryCost + panelCost + installationCost

  return (
    <div className="bg-gradient-to-br from-ogs-blue to-blue-900 text-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <DollarSign className="h-7 w-7 mr-2" />
        3. Cost Estimation
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
          <p className="text-sm opacity-90 mb-1">Inverter Cost</p>
          <p className="text-2xl font-bold">₦{inverterCost.toLocaleString()}</p>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
          <p className="text-sm opacity-90 mb-1">Battery Cost</p>
          <p className="text-2xl font-bold">₦{batteryCost.toLocaleString()}</p>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
          <p className="text-sm opacity-90 mb-1">Solar Panels Cost</p>
          <p className="text-2xl font-bold">₦{panelCost.toLocaleString()}</p>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
          <p className="text-sm opacity-90 mb-1">Installation Cost</p>
          <p className="text-2xl font-bold">₦{installationCost.toLocaleString()}</p>
        </div>
      </div>

      <div className="bg-ogs-orange p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-1">Total System Cost</p>
            <p className="text-4xl font-bold">₦{totalCost.toLocaleString()}</p>
          </div>
          <TrendingUp className="h-12 w-12 opacity-75" />
        </div>
        <p className="text-sm mt-4 opacity-90">
          This is an estimated cost. Final pricing may vary based on specific requirements and current market rates.
        </p>
      </div>
    </div>
  )
}
