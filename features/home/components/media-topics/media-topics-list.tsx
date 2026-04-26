import { ShareSquareIcon } from "@/components/ui/icons/share-square-icon"
import { ChatIcon } from "@/components/ui/icons/chat-icon"
import { LightningIcon } from "@/components/ui/icons/lightning-icon"

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
        <li
          key={index}
          className="flex w-full h-max flex-col gap-3 rounded-sm border-2 border-brand-6 p-6 transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          <div className="flex flex-col gap-2">
            <topic.icon variant="cyan" className="size-7.5" />
            <h4 className="body-sm-bold md:subtitle-xs-bold">{topic.title}</h4>
          </div>
          <span className="body-xs text-muted-foreground">
            {topic.description}
          </span>
        </li>
      ))}
    </ul>
  )
}
