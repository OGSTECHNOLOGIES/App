import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import SolarCalculator from './components/SolarCalculator'
import WhyChooseUs from './components/WhyChooseUs'
import SolarMistakes from './components/SolarMistakes'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <SolarCalculator />
      <WhyChooseUs />
      <SolarMistakes />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
