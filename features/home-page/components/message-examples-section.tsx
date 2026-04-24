import { SectionHeading } from "@/components/ui/section-heading"
import { MainSection } from "@/components/shared/main-section"
import { Button } from "@/components/ui/button"
import { MessageExampleCard } from "./message-example-card"

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
    <MainSection variant="centered" bg="primary" id="exemplos">
      <div className="flex flex-col gap-8">
        <SectionHeading highlight="mensagem para WhatsApp">
          Exemplos de mensagem para WhatsApp
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <MessageExampleCard
              key={example.title}
              title={example.title}
              message={example.message}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href="#gerador">Gere seu link grátis</a>
          </Button>
        </div>
      </div>
    </MainSection>
  )
}
