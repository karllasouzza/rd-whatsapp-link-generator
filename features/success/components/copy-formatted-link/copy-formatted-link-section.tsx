import { PromoCard } from "./promo-card"
import { GeneratedLinkContent } from "./generated-link-content"
import { WhatsAPPLogo } from "@/components/shared/whats-app-logo"

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

      <WhatsAPPLogo
        className="absolute top-[-14.14px] right-[40.12px] h-[94.48px] w-[93.56px] rotate-[-12.76deg] md:top-[14.85px] md:right-[-0.05px] md:h-[150.9px] md:w-[152.39px] min-[1377px]:right-[-43.87px] min-[1377px]:top-[223.37px] min-[1377px]:h-[332.06px] min-[1377px]:w-[328.81px] max-[1685px]:min-[1466px]:h-[362px] max-[1685px]:min-[1466px]:w-[358px] min-[1686px]:top-[213.5px] min-[1686px]:right-[6.42px] min-[1686px]:h-[404.61px] min-[1686px]:w-[400.64px]"
        sizes="(max-width: 767px) 97px, (max-width: 1376px) 174px, (max-width: 1465px) 342px, (max-width: 1685px) 362px, 410px"
      />
    </section>
  )
}
