import { SectionHeading } from "@/components/ui/section-heading"
import { MainSection } from "@/components/shared/main-section"
import { ChecklistItem } from "./checklist-item"

export function BenefitsSection() {
  return (
    <MainSection variant="centered" bg="primary" id="beneficios">
      <div className="flex flex-col gap-8">
        <SectionHeading highlight="Gerador de link do WhatsApp">
          Acelere suas conversas com o Gerador de link do WhatsApp
        </SectionHeading>

        <div className="flex flex-col gap-4 text-left md:text-center">
          <p className="body-sm md:body-md text-text-secondary">
            O WhatsApp é uma das plataformas de comunicação mais populares do
            mundo, com mais de 2 bilhões de usuários. Ter um link direto para o
            seu WhatsApp facilita o contato com clientes e potenciais
            compradores.
          </p>
          <p className="body-sm md:body-md text-text-secondary">
            Quando você tem um link do WhatsApp fácil de compartilhar, você
            reduz as etapas que o cliente precisa para falar com você, aumentando
            suas chances de conversão.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-left">
          <ChecklistItem>Chama a atenção do cliente</ChecklistItem>
          <ChecklistItem>
            Oferece uma ótima experiência ao cliente
          </ChecklistItem>
          <ChecklistItem>
            Facilita a comunicação direta com sua empresa
          </ChecklistItem>
          <ChecklistItem>
            Cria uma primeira impressão positiva e profissional
          </ChecklistItem>
        </div>
      </div>
    </MainSection>
  )
}
