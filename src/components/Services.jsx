import { Sun, Camera, Lightbulb, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Solar Installation',
    description: 'Professional solar panel installation for homes and businesses with top-quality equipment'
  },
  {
    icon: Camera,
    title: 'CCTV Installation',
    description: 'Advanced security camera systems to protect your property 24/7'
  },
  {
    icon: Lightbulb,
    title: 'Electrical Wiring',
    description: 'Expert electrical wiring and maintenance services for all your power needs'
  },
  {
    icon: GraduationCap,
    title: 'Solar Training Academy',
    description: 'Learn solar installation and become a certified solar technician'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ogs-blue mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive energy and security solutions for your needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-ogs-orange to-orange-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-ogs-blue mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
