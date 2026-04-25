import { ChecklistItem } from "../../../../components/ui/checklist-item"

const HOW_TO_CREATE_TIPS = [
  "Deixe bem claro de qual empresa se trata, mencione o nome do seu negócio logo na mensagem para reforçar a identificação com a marca.",
  "Informe claramente os próximos passos para evitar ansiedade. Por exemplo, um vendedor entrará em contato? Quanto tempo isso demora?",
  "Faça uma comunicação humanizada, ou seja, escreva como você estivesse falando com outra pessoa (até porque, está mesmo!), seguindo os padrões da sua marca.",
  1,
]
export function HowToCreateCheckedList() {
  return (
    <aside className="flex flex-col gap-3 text-left">
      {HOW_TO_CREATE_TIPS.map((tip, index) => (
        <ChecklistItem key={`tip-${index}`}>{tip}</ChecklistItem>
      ))}
    </aside>
  )
}
