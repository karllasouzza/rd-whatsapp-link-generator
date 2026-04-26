"use client"

import { WhatsAPPLogo } from "@/components/shared/whats-app-logo"
import { WpLinkGeneratorForm } from "./wp-link-generator-form"

export function WpLinkGeneratorSection() {
  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden px-4 md:px-6 scroll-mt-20"
      id="wp-link-generator"
    >
      <div className="bg-form-gradient flex w-full items-center justify-center rounded-2xl p-6 py-7.5 max-md:pt-12 md:px-12 md:py-18">
        <div className="w-full max-w-209.5">
          <header className="mb-6 flex flex-col gap-4">
            <h1 className="text-center heading-md text-foreground md:heading-lg lg:heading-xl">
              Gerador de Link para WhatsApp
            </h1>
            <p className="text-center body-sm text-foreground md:body-lg">
              Crie seu link de WhatsApp e inicie conversas com um clique nos
              seus canais digitais!
            </p>
          </header>

          <WpLinkGeneratorForm />

          <WhatsAPPLogo className="absolute inset-x-0 bottom-[-12.8px] mx-auto h-[98.52px] w-[97.55px] rotate-[-12.76deg] md:bottom-[-28.23px] md:left-[17.13px] md:mx-0 md:h-[176.14px] md:w-[174.42px] min-[1377px]:bottom-[50.69px] min-[1377px]:left-[25.78px] min-[1377px]:h-[242.16px] min-[1377px]:w-[239.79px] min-[1686px]:bottom-[32.6px] min-[1686px]:left-[35.92px] min-[1686px]:h-[345.39px] min-[1686px]:w-85.5" sizes="(max-width: 767px) 97px, (max-width: 1376px) 174px, (max-width: 1685px) 239px, 342px" />
        </div>
      </div>
    </section>
  )
}
