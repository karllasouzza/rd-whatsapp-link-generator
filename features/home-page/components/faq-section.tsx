"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqItems = [
  {
    id: "o-que-e",
    question: "O que é o Gerador de link para WhatsApp?",
    answer:
      "O gerador de link para WhatsApp é uma ferramenta gratuita que permite criar links personalizados para o seu número de WhatsApp. Com ele, você pode configurar mensagens automáticas de boas-vindas e facilitar o contato direto com seus clientes, sem que eles precisem salvar seu número na agenda.",
  },
  {
    id: "onde-usar",
    question: "Onde posso usar o link do WhatsApp?",
    answer:
      "O link do WhatsApp pode ser utilizado em diversos canais: no seu site, nas redes sociais (Instagram, Facebook, LinkedIn), em e-mails marketing, assinaturas de e-mail, cartões de visita digitais, anúncios pagos e em qualquer material de comunicação onde você queira facilitar o contato direto com o cliente.",
  },
  {
    id: "vantagens",
    question: "As vantagens de ter um link do seu WhatsApp?",
    answer:
      "O link do WhatsApp permite que seus clientes entrem em contato com você de forma rápida e direta, sem precisar salvar seu número. Isso aumenta a taxa de conversão, melhora a experiência do cliente e possibilita o uso de mensagens personalizadas que já direcionam a conversa para o assunto certo.",
  },
  {
    id: "como-criar",
    question: "Como criar link para WhatsApp?",
    answer:
      'Para criar o seu link para WhatsApp, basta inserir o número do seu telefone com DDD no campo acima, adicionar uma mensagem personalizada (opcional) e clicar em "Gerar link". O link será gerado automaticamente e você poderá copiá-lo e compartilhá-lo onde quiser.',
  },
] as const

export function FaqSection() {
  const [openItems, setOpenItems] = React.useState<string[]>(
    faqItems.map((item) => item.id)
  )

  const allValues = faqItems.map((item) => item.id)
  const allOpen = openItems.length === allValues.length

  function toggleAll() {
    if (allOpen) {
      setOpenItems([])
    } else {
      setOpenItems(allValues)
    }
  }

  return (
    <section id="faq" className="flex w-full items-center justify-center">
      <main className="flex w-full max-w-300 flex-col gap-10 px-6 py-20 md:px-12 lg:px-20">
        <header className="flex w-full flex-col gap-4">
          <Button
            variant="outline"
            size="sm"
            className="w-max shrink-0 self-end"
            onClick={toggleAll}
          >
            {allOpen ? "Fechar todos" : "Abrir todos"}
            {allOpen ? (
              <ChevronUp className="size-4 text-foreground" />
            ) : (
              <ChevronDown className="size-4 text-foreground" />
            )}
          </Button>

          <h1 className="heading-base text-center text-foreground">
            Perguntas mais comuns
          </h1>
        </header>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="flex w-full flex-col"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="w-full border-brand-accent-cyan py-6"
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent className="pr-11 text-left text-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </section>
  )
}
