import { SectionHeading } from "@/components/ui/section-heading"
import { MainSection } from "@/components/shared/main-section"

export function HowToSection() {
  return (
    <MainSection variant="centered" bg="secondary" id="como-criar">
      <div className="flex flex-col gap-8">
        <SectionHeading highlight="mensagens automáticas para WhatsApp">
          Como criar mensagens automáticas para WhatsApp
        </SectionHeading>

        <div className="flex flex-col gap-6 text-left">
          <p className="body-sm md:body-md text-text-secondary">
            Agora que você já sabe como fazer link de WhatsApp, é hora de criar
            mensagens automáticas que vão facilitar ainda mais a comunicação com
            seus clientes.
          </p>

          <div className="flex flex-col gap-2">
            <p className="body-sm-semibold text-text-primary">
              1. Defina bem claro de quem se trata
            </p>
            <p className="body-sm text-text-secondary">
              Apresente a sua marca. É importante que a mensagem leve o
              nome do seu negócio logo na abertura, permitindo uma rápida
              identificação com a marca. Por exemplo: {'"'}Olá! Bem-vindo à
              [Nome da Empresa]. Como posso ajudá-lo?{'"'}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="body-sm-semibold text-text-primary">
              2. Informe claramente a sua comunicação
            </p>
            <p className="body-sm text-text-secondary">
              Seja transparente com seu público. Deixe claro o motivo do
              contato e como você pode ajudar. Quanto mais direto, melhor a
              experiência do cliente.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="body-sm-semibold text-text-primary">
              3. Faça uma comunicação humanizada
            </p>
            <p className="body-sm text-text-secondary">
              Use um tom profissional, ou seja, escreva como se você
              estivesse falando com o cliente pessoalmente, de forma
              próxima. Isso melhora o engajamento e a qualidade da sua
              marca.
            </p>
          </div>
        </div>
      </div>
    </MainSection>
  )
}
