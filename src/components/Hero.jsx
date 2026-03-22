import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToCalculator = () => {
    document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="bg-gradient-to-br from-ogs-blue via-blue-900 to-dark-blue text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Smart Solar Solutions for Homes & Businesses
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Power your life with clean, reliable, and affordable solar energy
          </p>
          <button
            onClick={scrollToCalculator}
            className="bg-ogs-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
