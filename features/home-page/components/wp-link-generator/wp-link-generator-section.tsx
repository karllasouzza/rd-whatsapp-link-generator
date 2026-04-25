"use client"

import { WpLinkGeneratorForm } from "./wp-link-generator-form"
import { WhatsAppLogo } from "./whatsapp-logo"

export function WpLinkGeneratorSection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="bg-form-gradient flex w-full items-center justify-center rounded-2xl p-6 py-7.5 max-md:pt-12 md:px-12 md:py-18">
        <main className="w-full max-w-209.5">
          <header className="mb-6 flex flex-col gap-4">
            <h1 className="heading-md text-center text-foreground">
              Gerador de Link para WhatsApp
            </h1>
            <p className="body-sm text-center text-foreground">
              Crie seu link de WhatsApp e inicie conversas com um clique nos
              seus canais digitais!
            </p>
          </header>

          <WpLinkGeneratorForm />

          <WhatsAppLogo />
        </main>
      </div>
    </section>
  )
}
