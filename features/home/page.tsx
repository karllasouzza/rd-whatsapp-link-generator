import dynamic from "next/dynamic"
import { WpLinkGeneratorSection } from "./components/wp-link-generator/wp-link-generator-section"

const BenefitsSection = dynamic(
  () =>
    import("./components/benefits/benefits-section").then(
      (mod) => mod.BenefitsSection
    )
)

const MediaTopicsSection = dynamic(
  () =>
    import("./components/media-topics/media-topics-section").then(
      (mod) => mod.MediaTopicsSection
    )
)

const HowToCreateMessageSection = dynamic(
  () =>
    import("./components/how-to-create-message/how-to-create-message-section").then(
      (mod) => mod.HowToCreateMessageSection
    )
)

const MessagesTemplatesSection = dynamic(
  () =>
    import("./components/messages-templates/message-templates-section").then(
      (mod) => mod.MessagesTemplatesSection
    )
)

const FaqSection = dynamic(
  () => import("./components/faq/faq-section").then((mod) => mod.FaqSection)
)

export function HomePage() {
  return (
    <div className="box-border flex w-full flex-1 flex-col overflow-hidden">
      {/* Hero Banner */}
      <WpLinkGeneratorSection />

      <MediaTopicsSection />

      {/* Benefits */}
      <BenefitsSection />

      {/* How-to */}
      <HowToCreateMessageSection />

      {/* Message Examples */}
      <MessagesTemplatesSection />

      {/* FAQ */}
      <FaqSection />
    </div>
  )
}
