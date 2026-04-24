import * as React from "react"
import { CircleCheck } from "lucide-react"

import { cn } from "@/lib/utils"

interface ChecklistItemProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export function ChecklistItem({
  children,
  className,
  ...props
}: ChecklistItemProps) {
  return (
    <div
      data-slot="checklist-item"
      className={cn("flex items-start gap-3", className)}
      {...props}
    >
      <CircleCheck className="mt-0.5 size-5 shrink-0 text-brand-accent-lime" />
      <span className="body-sm text-text-secondary">{children}</span>
    </div>
  )
}
