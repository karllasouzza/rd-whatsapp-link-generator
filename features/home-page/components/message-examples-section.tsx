import { MainSection } from "@/components/shared/main-section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MessageTemplatesSectionCard } from "./messages-templates/message-templates-section-card"

const examples = [
  {
    title: "Opção 1",
    message:
      "Olá! Obrigado por nos contactar. Meu nome é [Nome da Atendente] e eu sou da equipe da [Nome da Empresa]. Como posso ajudá-lo hoje?",
  },
  {
    title: "Opção 2",
    message:
      "Olá! Que bom que entrou em contato com [Nome da Empresa]. Estou aqui para ajudar. Me conte um pouco mais sobre o que você precisa e vamos encontrar a melhor solução juntos!",
  },
  {
    title: "Opção 3",
    message:
      "Olá! Seja bem-vindo(a) ao nosso atendimento. Somos da [Nome da Empresa] e estamos à disposição para ajudá-lo. Qual assunto você gostaria de tratar?",
  },
] as const

export function MessageExamplesSection() {
  return (
    <MainSection
      variant="centered"
      bg="primary"
      id="exemplos"
      className="py-16 flex flex-col gap-8"
    >
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="heading-md text-center text-foreground">
          Exemplos de mensagem para WhatsApp
        </h1>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {examples.map((example) => (
          <MessageTemplatesSectionCard
            key={example.title}
            title={example.title}
            message={example.message}
          />
        ))}
      </section>

      <Button asChild size="default">
        <a href="#gerador">
          Gere seu link grátis
          <ArrowRight className="size-4" />
        </a>
      </Button>
    </MainSection>
  )
}
