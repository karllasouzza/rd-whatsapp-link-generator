"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons/arrow-right-icon"

export function RDMarketingCTA() {
  return (
    <div className="flex flex-col items-center gap-3 lg:items-end">
      <Button asChild variant="outline" className="hidden lg:inline-flex">
        <a
          href="https://www.rdstation.com/produtos/marketing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-right body-sm-semibold">
            Adicione um Botão de WhatsApp no site
          </span>

          <ArrowRightIcon size={16} />
        </a>
      </Button>

      <a
        href="https://www.rdstation.com/produtos/marketing/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-1 text-center body-md-bold text-link hover:underline md:flex-row lg:hidden"
      >
        Adicione um Botão de
        <br className="block md:hidden" />
        WhatsApp no site
      </a>

      <p className="text-center body-sm text-foreground lg:text-right">
        Faça isso com o teste grátis do{" "}
        <b className="font-semibold">RD Station Marketing</b>
      </p>
    </div>
  )
}
