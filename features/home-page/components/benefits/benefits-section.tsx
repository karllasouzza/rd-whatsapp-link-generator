import { BenefitsIntro } from "./benefits-intro"
import { BenefitsList } from "./benefits-list"
import { TextHighlight } from "@/components/ui/text-highlight"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="flex w-full items-center justify-center overflow-hidden bg-background"
    >
      <main className="flex max-w-300 flex-col gap-10 px-6 py-14 md:px-12 lg:flex-row lg:items-start lg:px-20">
        <header className="flex h-max w-full">
          <h3 className="heading-xl text-left text-foreground">
            Acelere suas conversas com o{" "}
            <TextHighlight nowrap variant="cyan">
              Gerador de link de
            </TextHighlight>{" "}
            <TextHighlight variant="lime">WhatsApp</TextHighlight>
          </h3>
        </header>

        <section className="flex w-full flex-col gap-6">
          <BenefitsIntro />

          <BenefitsList />

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
