"use client"

import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons/arrow-right-icon"

export function RDMarketingCTA() {
  return (
    <div className="flex flex-col items-center gap-3 md:items-end">
      <Button asChild variant="outline" className="hidden lg:inline-flex">
        <a
          href="https://www.rdstation.com/produtos/marketing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-center body-md-bold md:text-right">
            Adicione um Botão de WhatsApp no site
          </span>

          <ArrowRightIcon size={16} />
        </a>
      </Button>

        <a
          href="https://www.rdstation.com/produtos/marketing/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center body-md-bold text-link md:text-right flex-col hover:underline lg:hidden"
        >
          <p>Adicione um Botão de</p>
          <p>WhatsApp no site</p>
        </a>

      <p className="text-center body-sm text-foreground md:text-right">
        Faça isso com o teste grátis do{" "}
        <b className="font-semibold">RD Station Marketing</b>
      </p>
    </div>
  )
}
