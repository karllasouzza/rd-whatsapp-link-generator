import { BannerSection } from "@/components/shared/banner-section"
import { HeroForm } from "./components/hero-form"
import { BenefitsSection } from "./components/benefits-section"
import { HowToSection } from "./components/how-to-section"
import { MessageExamplesSection } from "./components/message-examples-section"
import { FaqSection } from "./components/faq-section"

export function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <BannerSection
        id="gerador"
        media={{
          src: "/images/image 3.png",
          alt: "Pessoa usando WhatsApp no celular",
        }}
      >
        <HeroForm />
      </BannerSection>

      {/* Benefits */}
      <BenefitsSection />

      {/* How-to */}
      <HowToSection />

      {/* Message Examples */}
      <MessageExamplesSection />

      {/* FAQ */}
      <FaqSection />
    </>
  )
}
