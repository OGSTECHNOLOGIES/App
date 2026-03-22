import { AlertTriangle, XCircle, CheckCircle } from 'lucide-react'

const mistakes = [
  {
    mistake: 'Undersizing Your System',
    consequence: 'Frequent power outages and inability to run all appliances',
    solution: 'Use our calculator to get accurate sizing based on your actual load'
  },
  {
    mistake: 'Buying Cheap Equipment',
    consequence: 'System failures, short lifespan, and costly repairs',
    solution: 'Invest in quality equipment with proper warranties'
  },
  {
    mistake: 'Poor Installation',
    consequence: 'Inefficient performance, safety hazards, and voided warranties',
    solution: 'Always hire certified professionals for installation'
  },
  {
    mistake: 'Ignoring Battery Maintenance',
    consequence: 'Reduced battery life and unexpected replacements',
    solution: 'Follow maintenance schedules and use proper charge controllers'
  },
  {
    mistake: 'Wrong Battery Type',
    consequence: 'Higher costs or shorter backup times',
    solution: 'Choose battery type based on your usage pattern and budget'
  },
  {
    mistake: 'No Professional Assessment',
    consequence: 'Mismatched system components and poor performance',
    solution: 'Get a professional site assessment before installation'
  }
]

export default function SolarMistakes() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-ogs-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-ogs-blue">
              Common Solar Mistakes to Avoid
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Learn from others' mistakes and make the right choice
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mistakes.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-ogs-orange transition"
            >
              <div className="flex items-start space-x-3 mb-3">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-ogs-blue">{item.mistake}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3 pl-9">
                <span className="font-semibold">Problem:</span> {item.consequence}
              </p>
              <div className="flex items-start space-x-3 pl-9">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Solution:</span> {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-ogs-orange to-orange-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Make These Mistakes!</h3>
          <p className="text-lg mb-6">
            Let OGS Technologies guide you through every step of your solar journey.
            Get expert advice and professional installation for a worry-free experience.
          </p>
          <a
            href="#calculator"
            className="inline-block bg-white text-ogs-orange font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            Calculate Your System Now
          </a>
        </div>
      </div>
    </section>
  )
}
