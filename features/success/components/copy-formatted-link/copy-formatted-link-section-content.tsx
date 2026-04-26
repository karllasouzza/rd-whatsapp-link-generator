"use client"

import { useLinkStore } from "@/stores/use-link-store"
import { CopyFormattedLinkBackButton } from "./copy-formatted-link-back-button"
import { CopyFormattedLinkClipboardCopyButton } from "./copy-Formatted-link-clipboard-copy-button"
import { CopyFormattedLinkRDMarketingCTA } from "./copy-formatted-link-rd-marketing-cta"
import { Textarea } from "@/components/ui/textarea"

export function CopyFormattedLinkSectionContent() {
  const link = useLinkStore((state) => state.link)

  return (
    <section className="flex flex-col gap-8">
      <CopyFormattedLinkBackButton />

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
        <CopyFormattedLinkClipboardCopyButton />
        <CopyFormattedLinkRDMarketingCTA />
      </div>
    </section>
  )
}
