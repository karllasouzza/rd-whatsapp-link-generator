interface MessageTemplatesSectionCardProps {
  title: string
  message: string
}

export function MessageTemplatesCard({
  title,
  message,
}: MessageTemplatesSectionCardProps) {
  return (
    <li className="flex flex-col gap-4 rounded-lg border border-muted shadow bg-card p-6">
      <p className="heading-xs self-start text-brand-3">{title}</p>
      <span className="body-sm whitespace-pre-line text-muted-foreground text-left">
        {message}
      </span>
    </li>
  )
}
