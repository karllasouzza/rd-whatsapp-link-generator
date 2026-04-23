import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const mainSectionVariants = cva("flex", {
  variants: {
    variant: {
      centered: "flex-col items-center text-center",
      split: "flex-col lg:grid lg:grid-cols-2",
      full: "flex-col items-stretch",
    },
    bg: {
      primary: "bg-bg-primary",
      secondary: "bg-bg-secondary",
      tertiary: "bg-bg-tertiary",
    },
  },
  defaultVariants: {
    variant: "full",
    bg: "primary",
  },
})

interface MainSectionProps
  extends VariantProps<typeof mainSectionVariants>,
    React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function MainSection({
  children,
  variant,
  bg,
  className,
  id,
  ...props
}: MainSectionProps) {
  return (
    <section
      id={id}
      className={cn(mainSectionVariants({ bg }), className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-6 py-14 md:px-12 lg:px-[120px] lg:py-20",
          variant === "split" && "lg:grid lg:grid-cols-2",
          variant === "centered" && "items-center text-center",
          variant === "full" && "items-stretch"
        )}
      >
        {children}
      </div>
    </section>
  )
}
