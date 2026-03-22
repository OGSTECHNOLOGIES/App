import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ogs-blue mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to go solar? Contact us today for a free consultation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-ogs-orange to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-ogs-blue mb-2">Phone</h3>
            <a href="tel:+2348034567890" className="text-gray-600 hover:text-ogs-orange transition">
              +234 803 456 7890
            </a>
            <br />
            <a href="tel:+2349012345678" className="text-gray-600 hover:text-ogs-orange transition">
              +234 901 234 5678
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-ogs-orange to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-ogs-blue mb-2">Email</h3>
            <a href="mailto:info@ogstech.ng" className="text-gray-600 hover:text-ogs-orange transition">
              info@ogstech.ng
            </a>
            <br />
            <a href="mailto:sales@ogstech.ng" className="text-gray-600 hover:text-ogs-orange transition">
              sales@ogstech.ng
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-ogs-orange to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-ogs-blue mb-2">Location</h3>
            <p className="text-gray-600">
              Lagos, Nigeria
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Serving all of Nigeria
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-ogs-blue to-blue-900 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Solar Journey Today!</h3>
          <p className="mb-6">
            Join hundreds of satisfied customers who have switched to clean, reliable solar energy
          </p>
          <a
            href="https://wa.me/2348034567890?text=Hi%20OGS%20Technologies!%20I'm%20interested%20in%20your%20solar%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
