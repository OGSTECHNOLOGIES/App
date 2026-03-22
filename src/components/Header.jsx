import { Zap } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-ogs-orange to-orange-600 p-2 rounded-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-ogs-blue">OGS Technologies</h1>
              <p className="text-xs text-gray-600">Smart Solar Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-ogs-orange transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-ogs-orange transition">Services</a>
            <a href="#calculator" className="text-gray-700 hover:text-ogs-orange transition">Calculator</a>
            <a href="#contact" className="text-gray-700 hover:text-ogs-orange transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
