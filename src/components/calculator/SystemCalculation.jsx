import { Battery, Cpu, Sun, Settings } from 'lucide-react'

export default function SystemCalculation({
  totalLoad,
  dailyEnergy,
  batteryType,
  setBatteryType,
  systemVoltage,
  setSystemVoltage,
  sunHours,
  setSunHours,
  backupHours,
  setBackupHours
}) {
  const inverterSize = Math.ceil(totalLoad * 1.25)
  const batteryCapacity = Math.ceil((dailyEnergy * backupHours) / systemVoltage)
  const batteryVoltage = batteryType === 'lithium' ? 51.2 : 48
  const numberOfBatteries = Math.ceil(batteryCapacity / (batteryType === 'lithium' ? 200 : 150))
  const numberOfPanels = Math.ceil(dailyEnergy / (600 * sunHours))
  const solarArraySize = numberOfPanels * 600

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-ogs-blue mb-6">2. System Recommendations</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Settings className="inline h-4 w-4 mr-1" />
            Battery Type
          </label>
          <select
            value={batteryType}
            onChange={(e) => setBatteryType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
          >
            <option value="lithium">Lithium (51.2V)</option>
            <option value="leadacid">Lead Acid (48V)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Settings className="inline h-4 w-4 mr-1" />
            System Voltage
          </label>
          <select
            value={systemVoltage}
            onChange={(e) => setSystemVoltage(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
          >
            <option value={24}>24V</option>
            <option value={48}>48V</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Sun className="inline h-4 w-4 mr-1" />
            Sun Hours per Day
          </label>
          <input
            type="number"
            value={sunHours}
            onChange={(e) => setSunHours(Number(e.target.value))}
            min="3"
            max="8"
            step="0.5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Battery className="inline h-4 w-4 mr-1" />
            Backup Hours
          </label>
          <select
            value={backupHours}
            onChange={(e) => setBackupHours(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
          >
            <option value={4}>4 Hours</option>
            <option value={6}>6 Hours</option>
            <option value={8}>8 Hours</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <Cpu className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-gray-700">Inverter</span>
          </div>
          <p className="text-3xl font-bold text-blue-600">{inverterSize}W</p>
          <p className="text-sm text-gray-600 mt-1">Recommended size</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Battery className="h-6 w-6 text-green-600" />
            <span className="font-semibold text-gray-700">Battery</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{batteryCapacity}Ah</p>
          <p className="text-sm text-gray-600 mt-1">{numberOfBatteries} x {batteryType === 'lithium' ? '200Ah' : '150Ah'}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-200">
          <div className="flex items-center space-x-2 mb-2">
            <Sun className="h-6 w-6 text-orange-600" />
            <span className="font-semibold text-gray-700">Solar Panels</span>
          </div>
          <p className="text-3xl font-bold text-orange-600">{numberOfPanels}</p>
          <p className="text-sm text-gray-600 mt-1">600W panels</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
          <div className="flex items-center space-x-2 mb-2">
            <Sun className="h-6 w-6 text-purple-600" />
            <span className="font-semibold text-gray-700">Array Size</span>
          </div>
          <p className="text-3xl font-bold text-purple-600">{(solarArraySize / 1000).toFixed(1)}kW</p>
          <p className="text-sm text-gray-600 mt-1">Total capacity</p>
        </div>
      </div>
    </div>
  )
}
