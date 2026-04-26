import { ShareSquareIcon } from "@/components/ui/icons/share-square-icon"
import { ChatIcon } from "@/components/ui/icons/chat-icon"
import { LightningIcon } from "@/components/ui/icons/lightning-icon"

import { MediaTopicsCard } from "./media-topics-card"

const TOPICS = [
  {
    icon: ShareSquareIcon,
    title: "Atalho rumo às vendas",
    description:
      "O Gerador de link do WhatsApp faz com que usuários se transformem em contatos (Leads) e iniciem conversas certeiras com sua marca.",
  },
  {
    icon: ChatIcon,
    title: "Mensagem automática",
    description:
      "Você automatiza mensagens estimulando o início da conversa, o que facilita a vida dos usuários e clientes.",
  },
  {
    icon: LightningIcon,
    title: "Rápido e 100% gratuito",
    description:
      "Não sabe como fazer link de WhatsApp? O Gerador da RD Station é fácil de usar e permite gerar links em segundos!",
  },
] as const

export function MediaTopicsList() {
  return (
    <ul className="grid w-full grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 min-[1090px]:grid-cols-3 min-[1090px]:gap-8">
      {TOPICS.map((topic, index) => (
        <MediaTopicsCard
          key={index}
          icon={topic.icon}
          title={topic.title}
          description={topic.description}
          index={index}
        />
      ))}
    </ul>
  )
}
