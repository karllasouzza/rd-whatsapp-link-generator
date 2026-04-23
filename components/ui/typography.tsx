import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      "heading-xl":
        "font-[family-name:var(--font-heading)] text-[48px] font-bold leading-[140%]",
      "heading-lg":
        "font-[family-name:var(--font-heading)] text-[40px] font-bold leading-[140%]",
      "heading-md":
        "font-[family-name:var(--font-heading)] text-[32px] font-bold leading-[140%]",
      "heading-sm":
        "font-[family-name:var(--font-heading)] text-2xl font-bold leading-[140%]",
      "heading-xs":
        "font-[family-name:var(--font-heading)] text-xl font-bold leading-[140%]",
      "heading-xs-semibold":
        "font-[family-name:var(--font-heading)] text-xl font-semibold leading-[140%]",
      "body-lg":
        "font-[family-name:var(--font-sans)] text-xl font-normal leading-[140%]",
      "body-lg-bold":
        "font-[family-name:var(--font-sans)] text-xl font-bold leading-[140%]",
      "body-md":
        "font-[family-name:var(--font-sans)] text-lg font-normal leading-[140%]",
      "body-sm":
        "font-[family-name:var(--font-sans)] text-base font-normal leading-[140%]",
      "body-sm-bold":
        "font-[family-name:var(--font-sans)] text-base font-bold leading-[140%]",
      "body-sm-semibold":
        "font-[family-name:var(--font-sans)] text-base font-semibold leading-[140%]",
      "body-xs":
        "font-[family-name:var(--font-sans)] text-sm font-normal leading-[140%]",
      caption:
        "font-[family-name:var(--font-sans)] text-xs font-normal leading-[140%]",
      "caption-italic":
        "font-[family-name:var(--font-sans)] text-xs italic font-normal leading-[140%]",
      "subtitle-xs":
        "font-[family-name:var(--font-subtitle)] text-xl font-bold leading-[140%]",
      "footer-bold":
        "font-[family-name:var(--font-subtitle)] text-sm font-bold leading-[120%] underline",
      "footer-regular":
        "font-[family-name:var(--font-subtitle)] text-sm font-normal leading-[120%]",
    },
  },
  defaultVariants: {
    variant: "body-md",
  },
})

// Default element mapping
const defaultElementMap: Record<string, React.ElementType> = {
  "heading-xl": "h1",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
  "heading-xs": "h5",
  "heading-xs-semibold": "h5",
  "body-lg": "p",
  "body-lg-bold": "p",
  "body-md": "p",
  "body-sm": "p",
  "body-sm-bold": "p",
  "body-sm-semibold": "p",
  "body-xs": "p",
  caption: "span",
  "caption-italic": "span",
  "subtitle-xs": "p",
  "footer-bold": "span",
  "footer-regular": "span",
}

type TypographyProps = {
  as?: React.ElementType
  variant?: VariantProps<typeof typographyVariants>["variant"]
} & React.HTMLAttributes<HTMLElement>

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as, variant = "body-md", className, ...props }, ref) => {
    const Component = as || defaultElementMap[variant as string] || "p"
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
