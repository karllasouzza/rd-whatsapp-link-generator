import { BenefitsIntro } from "./benefits-intro"
import { BenefitsList } from "./benefits-list"
import { TextHighlight } from "@/components/ui/text-highlight"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "@/components/ui/icons/arrow-right-icon"

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="mx-auto flex w-full max-w-362 flex-col gap-10 bg-background px-6 py-14 md:px-12 lg:flex-row lg:items-start lg:px-20"
    >
      <header className="flex h-max w-full">
        <h2 className="text-left heading-md text-foreground md:heading-xl">
          Acelere suas conversas com o{" "}
          <TextHighlight nowrap variant="cyan">
            Gerador de link de
          </TextHighlight>{" "}
          <TextHighlight variant="lime">WhatsApp</TextHighlight>
        </h2>
      </header>

      <div className="flex w-full flex-col gap-6">
        <BenefitsIntro />

        <BenefitsList />

        <Button asChild size="default" className="w-max">
          <a href="#wp-link-generator">
            Gere seu link grátis
            <ArrowRightIcon size={16} />
          </a>
        </Button>
      </div>
    </section>
  )
}
