"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  CheckCircleIcon,
  type checkCircleVariants,
} from "@/components/ui/check-circle-icon"

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
      className={cn("flex flex-row items-center gap-3", className)}
      {...props}
    >
      <CheckCircleIcon variant={variant} size={iconSize} />
      <p className={cn("body-sm p-0 text-foreground", textClassName)}>
        {children}
      </p>
    </li>
  )
}
