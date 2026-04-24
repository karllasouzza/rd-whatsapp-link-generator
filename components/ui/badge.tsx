import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-transparent px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-3 focus:ring-ring/50",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white",
        success: "bg-brand-accent-lime text-brand-primary",
        outline: "border-border bg-transparent text-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
      size: {
        default: "px-3 py-1 text-sm",
        sm: "px-2 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
