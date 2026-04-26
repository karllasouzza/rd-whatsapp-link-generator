import { PromoCard } from "./promo-card"
import { GeneratedLinkContent } from "./generated-link-content"

export function CopyFormattedLinkSection() {
  return (
    <section
      className="relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden px-4 pb-6 md:px-6"
      id="wp-link-generator"
    >
      <div className="bg-form-gradient flex w-full items-center justify-center rounded-2xl p-6 py-14 max-md:pt-12 md:px-12 md:py-18">
        <div className="flex w-full max-w-209.5 flex-col justify-center gap-14 md:gap-18">
          <GeneratedLinkContent />

          <PromoCard />
        </div>
      </div>
    </section>
  )
}
