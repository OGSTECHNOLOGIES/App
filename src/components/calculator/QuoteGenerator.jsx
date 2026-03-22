import { FileText, Download, Send } from 'lucide-react'

export default function QuoteGenerator({
  appliances,
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

  const generatePDF = () => {
    const quoteContent = `
OGS TECHNOLOGIES
Solar System Quote
Generated: ${new Date().toLocaleDateString()}

APPLIANCES:
${appliances.map(app => `- ${app.name} (${app.quantity}x ${app.power}W, ${app.hours}h/day)`).join('\n')}

SYSTEM SUMMARY:
Total Load: ${totalLoad}W
Daily Energy: ${dailyEnergy}Wh

RECOMMENDED SYSTEM:
Inverter: ${inverterSize}W
Battery: ${batteryCapacity}Ah (${numberOfBatteries} x ${batteryType === 'lithium' ? '200Ah Lithium' : '150Ah Lead Acid'})
Solar Panels: ${numberOfPanels} x 600W
System Voltage: ${systemVoltage}V
Backup Hours: ${backupHours}h

COST BREAKDOWN:
Inverter: ₦${inverterCost.toLocaleString()}
Batteries: ₦${batteryCost.toLocaleString()}
Solar Panels: ₦${panelCost.toLocaleString()}
Installation: ₦${installationCost.toLocaleString()}

TOTAL COST: ₦${totalCost.toLocaleString()}

Contact OGS Technologies for professional installation
Phone: +234 803 456 7890
Email: info@ogstech.ng
    `.trim()

    const blob = new Blob([quoteContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'OGS-Solar-Quote.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const requestInstallation = () => {
    const message = `Hi OGS Technologies! I'm interested in a solar installation.

System Requirements:
- Total Load: ${totalLoad}W
- Inverter: ${inverterSize}W
- Batteries: ${numberOfBatteries} x ${batteryType === 'lithium' ? '200Ah Lithium' : '150Ah Lead Acid'}
- Solar Panels: ${numberOfPanels} x 600W
- Estimated Cost: ₦${totalCost.toLocaleString()}

Please contact me for a consultation.`

    const whatsappUrl = `https://wa.me/2348034567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-ogs-blue mb-6 flex items-center">
        <FileText className="h-7 w-7 mr-2" />
        4. Your Quote Summary
      </h3>

      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">System Configuration</h4>
            <ul className="space-y-1 text-gray-600">
              <li>• Inverter: {inverterSize}W</li>
              <li>• Battery: {batteryCapacity}Ah ({numberOfBatteries} units)</li>
              <li>• Solar Panels: {numberOfPanels} x 600W</li>
              <li>• System: {systemVoltage}V with {backupHours}h backup</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Total Investment</h4>
            <p className="text-3xl font-bold text-ogs-orange">₦{totalCost.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={generatePDF}
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition inline-flex items-center justify-center space-x-2"
        >
          <Download className="h-5 w-5" />
          <span>Download Quote</span>
        </button>
        <button
          onClick={requestInstallation}
          className="bg-ogs-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition inline-flex items-center justify-center space-x-2"
        >
          <Send className="h-5 w-5" />
          <span>Request Installation</span>
        </button>
      </div>
    </div>
  )
}
