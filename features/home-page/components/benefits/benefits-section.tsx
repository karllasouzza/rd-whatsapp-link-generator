import { ChecklistItem } from "../../../../components/ui/checklist-item"
import { TextHighlight } from "@/components/ui/text-highlight"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const BENEFITS: string[] = [
  "Otimiza a geração de Leads.",
  "Ofereça uma opção rápida e prática para tirar dúvidas sobre produtos e serviços.",
  "Oferece uma ótima experiência ao usuário.",
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="flex w-full items-center justify-center overflow-hidden bg-background"
    >
      <main className="flex max-w-300 flex-col gap-10 px-6 py-14 md:px-12 lg:flex-row lg:items-start lg:px-20">
        <header className="flex h-max w-full">
          <h3 className="heading-md text-left text-foreground md:text-center">
            Acelere suas conversas com o{" "}
            <TextHighlight nowrap variant="cyan">
              Gerador de link de
            </TextHighlight>{" "}
            <TextHighlight variant="lime">WhatsApp</TextHighlight>
          </h3>
        </header>

        <section className="flex w-full flex-col gap-6">
          <article className="flex flex-col justify-start gap-2">
            <span className="body-sm md:body-md text-left text-foreground">
              O WhatsApp é uma das plataformas preferidas pelos brasileiros —{" "}
              <b>são mais de 165 milhões de usuários*</b> (ou 96,4% da população
              que faz uso das redes sociais). Quando você traz um link de
              WhatsApp nas redes sociais ou site da sua empresa, só tem
              vantagens:
            </span>
            <i className="body-xs md:body-md text-left text-muted-foreground italic">
              *Dados da pesquisa Digital 2022: Brazil
            </i>
          </article>

          <ul className="flex flex-col gap-3 text-left">
            {BENEFITS.map((benefit, index) => (
              <ChecklistItem key={`benefit-${index}`}>{benefit}</ChecklistItem>
            ))}
          </ul>

          <Button asChild size="default" className="w-max">
            <a href="#hero-section">
              Gere seu link grátis
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </section>
      </main>
    </section>
  )
}
