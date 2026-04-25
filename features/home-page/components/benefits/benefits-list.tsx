import { ChecklistItem } from "@/components/ui/checklist-item"

const BENEFITS: string[] = [
  "Otimiza a geração de Leads.",
  "Ofereça uma opção rápida e prática para tirar dúvidas sobre produtos e serviços.",
  "Oferece uma ótima experiência ao usuário.",
]

export function BenefitsList() {
  return (
    <ul className="flex flex-col gap-3 text-left">
      {BENEFITS.map((benefit, index) => (
        <ChecklistItem key={`benefit-${index}`}>{benefit}</ChecklistItem>
      ))}
    </ul>
  )
}
