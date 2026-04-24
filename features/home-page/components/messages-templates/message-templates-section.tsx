import { MainSection } from "@/components/shared/main-section"
import { Button } from "@/components/ui/button"
import { MessageTemplatesSectionCard } from "./message-templates-section-card"
import { ArrowRight } from "lucide-react"

const MESSAGES_TEMPLATES = [
  {
    title: "Opção 1",
    message:
      "Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!",
  },
  {
    title: "Opção 2",
    message:
      "Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.",
  },
  {
    title: "Opção 3",
    message:
      "Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você! 😍",
  },
] as const

export function MessagesTemplatesSection() {
  return (
    <section className="flex w-full flex-col gap-8 px-6 py-16 md:px-12 lg:px-20 bg-secondary">
      <header className="mb-6 flex flex-col gap-2">
        <h3 className="heading-md text-center text-foreground">
          Exemplos de mensagem para WhatsApp
        </h3>
      </header>


      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {MESSAGES_TEMPLATES.map((example) => (
          <MessageTemplatesSectionCard
            key={example.title}
            title={example.title}
            message={example.message}
          />
        ))}
      </section>

      <Button asChild size="default" className="mx-auto w-max">
        <a href="#hero-section">
          Gere seu link grátis
          <ArrowRight className="size-4 stroke-2" />
        </a>
      </Button>
    </section>
  )
}
