"use client"

import { ChevronRightIcon } from "@/components/ui/icons/chevron-right-icon"

export function PromoCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-brand-6 bg-white p-6">
      <h2 className="heading-xs text-brand-2">
        Quer aumentar em até 56% as suas vendas pelo WhatsApp?
      </h2>
      <p className="body-md text-foreground">
        Conheça o <b className="font-bold">RD Station Conversas</b>, uma solução
        oficial de WhatsApp API que te garante um atendimento mais eficiente,
        lucrativo e seguro. Com a nossa ferramenta você diminui os riscos de ter
        seu número bloqueado e ainda melhorar suas taxas de conversão.
      </p>
      <p className="body-md text-foreground">
        Quer saber mais sobre como nossa plataforma pode ajudar a sua empresa?
      </p>
      <a
        href="https://www.rdstation.com/produtos/conversas/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-max items-center body-sm text-link transition-opacity hover:opacity-80 lg:body-md-bold gap-1"
      >
        <p>
        Conheça o RD Station Conversas
        </p>
        <ChevronRightIcon size={16} className="shrink-0" />
      </a>
    </div>
  )
}
