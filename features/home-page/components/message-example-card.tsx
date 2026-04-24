import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface MessageExampleCardProps {
  title: string
  message: string
}

export function MessageExampleCard({ title, message }: MessageExampleCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="heading-xs text-text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="body-sm text-text-secondary whitespace-pre-line">
          {message}
        </p>
      </CardContent>
    </Card>
  )
}
