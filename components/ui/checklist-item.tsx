"use client"

import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  CheckCircleIcon,
  type checkCircleVariants,
} from "@/components/ui/icons/check-circle-icon"

interface ChecklistItemProps
  extends React.ComponentProps<"li">, VariantProps<typeof checkCircleVariants> {
  children: React.ReactNode
  iconSize?: number
  textClassName?: string
}

export function ChecklistItem({
  children,
  className,
  variant = "cyan",
  iconSize = 20,
  textClassName,
  ...props
}: ChecklistItemProps) {
  return (
    <li
      data-slot="checklist-item"
      className={cn(
        "flex flex-row items-center gap-3 hover:[&>svg]:animate-pulse",
        className
      )}
      {...props}
    >
      <CheckCircleIcon variant={variant} size={iconSize} />
      <p
        className={cn("p-0 body-sm text-foreground md:body-md", textClassName)}
      >
        {children}
      </p>
    </li>
  )
}
