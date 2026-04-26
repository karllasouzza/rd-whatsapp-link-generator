import { FaqAccordion } from "./faq-accordion"

interface FaqContentProps {
  openItems: string[]
  onValueChange: (value: string[]) => void
}

export function FaqContent({ openItems, onValueChange }: FaqContentProps) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      <aside className="w-max">
        <h3 className="heading-sm text-nowrap whitespace-nowrap text-left text-foreground">
          Perguntas mais comuns
        </h3>
      </aside>

      <FaqAccordion openItems={openItems} onValueChange={onValueChange} />
    </div>
  )
}
