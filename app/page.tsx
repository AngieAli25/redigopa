import HeroSection from '@/components/sections/HeroSection'
import ChiSiamoSection from '@/components/sections/ChiSiamoSection'
import ServiziSection from '@/components/sections/ServiziSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ChiSiamoSection />
      <ServiziSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
} 