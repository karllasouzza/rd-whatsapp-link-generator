"use client"

import { useLinkStore } from "@/stores/use-link-store"
import { BackLink } from "./back-link"
import { CopyLinkButton } from "./copy-link-button"
import { RDMarketingCTA } from "./rd-marketing-cta"
import { Textarea } from "@/components/ui/textarea"

export function GeneratedLinkContent() {
  const link = useLinkStore((state) => state.link)

  return (
    <section className="flex flex-col gap-8">
      <BackLink />

      <h1 className="text-left heading-sm text-foreground md:heading-md">
        Seu link de WhatsApp foi gerado com sucesso!
      </h1>

      <Textarea
        readOnly
        value={link}
        placeholder="Link copiado para a área de transferência"
        className="resize-none border-border"
      />

      <div
        role="toolbar"
        className="items-center lg:items-start flex flex-col gap-8 lg:flex-row lg:justify-between"
      >
        <CopyLinkButton />
        <RDMarketingCTA />
      </div>
    </section>
  )
}
