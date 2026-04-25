import { BenefitsSection } from "./components/benefits-section"
import { MessagesTemplatesSection } from "./components/messages-templates/message-templates-section"
import { FaqSection } from "./components/faq-section"
import { HeroSection } from "./components/wp-link-generator/wp-link-generator-section"
import { HowToCreateMessageSection } from "./components/how-to-create-message/how-to-create-message-section"

export function HomePage() {
  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      {/* Hero Banner */}
      <HeroSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* How-to */}
      <HowToCreateMessageSection />

      {/* Message Examples */}
      <MessagesTemplatesSection />

      {/* FAQ */}
      <FaqSection />
    </main>
  )
}
