"use client"

import Image from "next/image"
import { WhatsAppForm } from "./whatsapp-form"

export function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4">
      <main className="bg-form-gradient relative w-full max-w-full overflow-hidden rounded-2xl p-6 pt-12 md:p-8">
        <header className="mb-6 flex flex-col gap-4">
          <h1 className="heading-md text-center text-foreground font-medium">
            Gerador de Link para WhatsApp
          </h1>
          <p className="body-sm text-center text-foreground">
            Crie seu link de WhatsApp e inicie conversas com um clique nos seus
            canais digitais!
          </p>
        </header>

        <WhatsAppForm />

        <Image
          src="/images/whatsapp-logo.png"
          alt="WhatsApp logo"
          className="absolute inset-x-0 -bottom-3 mx-auto -rotate-12"
          width={97.55}
          height={98.52}
        />
      </main>
    </section>
  )
}
