import { MessageTemplatesCard } from "./message-templates-card"

const MESSAGES_TEMPLATES = [
  {
    title: "Opção 1",
    message:
      "Olá! Obrigado por seu interesse em falar com [Nome da Empresa]. Me conta qual é a sua dúvida para eu lhe fornecer as melhores informações!",
  },
  {
    title: "Opção 2",
    message:
      "Oi, tudo bem? Obrigado por entrar em contato com [Nome da Empresa]. Qual é a sua dúvida? Assim, eu consigo ajudar você rapidamente.",
  },
  {
    title: "Opção 3",
    message:
      "Olá! Seja bem-vindo a/ao [Nome da Empresa]! Meu nome é [Nome do Atendente], irei fazer o seu atendimento hoje. Me conta como posso ajudar você! 😍",
  },
] as const

export function MessagesTemplatesList() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {MESSAGES_TEMPLATES.map((example) => (
        <MessageTemplatesCard
          key={example.title}
          title={example.title}
          message={example.message}
        />
      ))}
    </ul>
  )
}
