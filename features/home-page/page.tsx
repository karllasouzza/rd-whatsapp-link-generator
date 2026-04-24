import { BenefitsSection } from "./components/benefits-section"
import { HowToSection } from "./components/how-to-section"
import { MessageExamplesSection } from "./components/message-examples-section"
import { FaqSection } from "./components/faq-section"
import { HeroSection } from "./components/hero-section/hero-section"

export function HomePage() {
  return (
    <div className="flex w-full flex-1 flex-col px-4">
      {/* Hero Banner */}
      <HeroSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* How-to */}
      <HowToSection />

      {/* Message Examples */}
      <MessageExamplesSection />

      {/* FAQ */}
      <FaqSection />
    </div>
  )
}
