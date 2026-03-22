import { Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ogs-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-gradient-to-br from-ogs-orange to-orange-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">OGS Technologies</h3>
              <p className="text-sm text-gray-300">Smart Solar Solutions</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} OGS Technologies. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Powering Nigeria with clean energy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
