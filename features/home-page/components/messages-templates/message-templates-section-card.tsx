interface MessageTemplatesSectionCardProps {
  title: string
  message: string
}

export function MessageTemplatesSectionCard({
  title,
  message,
}: MessageTemplatesSectionCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-lg border border-muted shadow bg-card p-6">
      <p className="heading-xs self-start text-brand-accent-blue">{title}</p>
      <span className="body-sm whitespace-pre-line text-muted-foreground text-left">
        {message}
      </span>
    </article>
  )
}
