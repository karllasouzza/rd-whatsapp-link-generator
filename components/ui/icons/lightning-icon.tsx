"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const lightningIconVariants = cva("shrink-0", {
  variants: {
    variant: {
      cyan: "text-brand-5",
      lime: "text-lime-2",
      purple: "text-purple-4",
    },
  },
  defaultVariants: {
    variant: "cyan",
  },
})

interface LightningIconProps
  extends
    Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof lightningIconVariants> {
  size?: number
  color?: string
}

export function LightningIcon({
  className,
  variant = "cyan",
  size = 30,
  color,
  ...props
}: LightningIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(lightningIconVariants({ variant }), className)}
      {...props}
    >
      <path
        d="M7.5 16.25L8.75 5H17.5L15.625 11.25H22.5V13.125L12.5 25L14.375 16.25H7.5Z"
        fill={fillColor}
      />
    </svg>
  )
}
