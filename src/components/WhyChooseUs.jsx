import { Award, Shield, Users, TrendingUp, Wrench, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Certified Professionals',
    description: 'Our technicians are trained and certified with years of experience in solar installation'
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We use only premium equipment with comprehensive warranties for your peace of mind'
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: '24/7 customer support to ensure your solar system runs smoothly'
  },
  {
    icon: TrendingUp,
    title: 'Best Value',
    description: 'Competitive pricing with flexible payment plans to suit your budget'
  },
  {
    icon: Wrench,
    title: 'Free Maintenance',
    description: 'Complimentary maintenance for the first year after installation'
  },
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Quick and professional installation within 2-3 days of order confirmation'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ogs-blue mb-4">
            Why Choose OGS Technologies?
          </h2>
          <p className="text-gray-600 text-lg">
            Nigeria's trusted solar energy partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-ogs-blue to-blue-900 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ogs-blue mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-ogs-orange mb-2">500+</p>
              <p className="text-gray-600">Installations Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-ogs-orange mb-2">100%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-ogs-orange mb-2">5+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
