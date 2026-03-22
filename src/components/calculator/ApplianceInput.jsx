import { useState } from 'react'
import { Plus, Trash2, Zap, Clock } from 'lucide-react'

export default function ApplianceInput({ onAddAppliance, appliances, onRemoveAppliance, totalLoad, dailyEnergy }) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [power, setPower] = useState('')
  const [hours, setHours] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && power && hours) {
      onAddAppliance({
        name,
        quantity: Number(quantity),
        power: Number(power),
        hours: Number(hours)
      })
      setName('')
      setQuantity(1)
      setPower('')
      setHours('')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-ogs-blue mb-6">1. Add Your Appliances</h3>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Appliance Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
              placeholder="e.g., Refrigerator"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Power (Watts)
            </label>
            <input
              type="number"
              value={power}
              onChange={(e) => setPower(e.target.value)}
              min="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
              placeholder="e.g., 150"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hours/Day
            </label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              min="0"
              max="24"
              step="0.5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ogs-orange focus:border-transparent"
              placeholder="e.g., 8"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto bg-ogs-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition inline-flex items-center justify-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Appliance</span>
        </button>
      </form>

      {appliances.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-700">Your Appliances:</h4>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Appliance</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Qty</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Power (W)</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Hours</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Daily Energy (Wh)</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {appliances.map((app) => (
                  <tr key={app.id} className="border-t">
                    <td className="px-4 py-2">{app.name}</td>
                    <td className="px-4 py-2">{app.quantity}</td>
                    <td className="px-4 py-2">{app.power}W</td>
                    <td className="px-4 py-2">{app.hours}h</td>
                    <td className="px-4 py-2">{app.power * app.quantity * app.hours}Wh</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => onRemoveAppliance(app.id)}
                        className="text-red-600 hover:text-red-800 transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="h-5 w-5 text-ogs-blue" />
                <span className="font-semibold text-gray-700">Total Load</span>
              </div>
              <p className="text-2xl font-bold text-ogs-blue">{totalLoad}W</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-ogs-orange" />
                <span className="font-semibold text-gray-700">Daily Energy</span>
              </div>
              <p className="text-2xl font-bold text-ogs-orange">{dailyEnergy}Wh</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
