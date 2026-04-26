import type { ElementType } from "react"

type TopicIcon = ElementType

interface MediaTopicsCardProps {
  icon: TopicIcon
  title: string
  description: string
  index: number
}

export function MediaTopicsCard({
  icon: Icon,
  title,
  description,
  index,
}: MediaTopicsCardProps) {
  return (
    <li
      key={index}
      className="flex w-full h-max flex-col gap-3 rounded-sm border-2 border-brand-6 p-6 transition-transform duration-300 ease-out hover:scale-[1.03]"
    >
      <div className="flex flex-col gap-2">
        <Icon variant="cyan" className="size-7.5" />
        <h4 className="body-sm-bold md:subtitle-xs-bold">{title}</h4>
      </div>
      <span className="body-xs text-muted-foreground">{description}</span>
    </li>
  )
}
