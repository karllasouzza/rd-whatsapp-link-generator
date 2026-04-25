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
      primary: "bg-background",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    },
  },
  defaultVariants: {
    variant: "full",
    bg: "primary",
  },
})

interface MainSectionProps
  extends
    VariantProps<typeof mainSectionVariants>,
    React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function MainSection({
  children,
  variant = "full",
  bg = "primary",
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
      <aside
        className={cn(
          "mx-auto flex w-full max-w-300 flex-col gap-10 px-6 md:px-12 lg:px-[120px]",
          variant === "split" && "lg:grid lg:grid-cols-2",
          variant === "centered" && "items-center text-center",
          variant === "full" && "items-stretch"
        )}
      >
        {children}
      </aside>
    </section>
  )
}
