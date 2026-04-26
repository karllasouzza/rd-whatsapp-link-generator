"use client"

import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const checkCircleVariants = cva("shrink-0", {
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

interface CheckCircleIconProps
  extends
    Omit<React.ComponentProps<"svg">, "color">,
    VariantProps<typeof checkCircleVariants> {
  size?: number
  color?: string
}

export function CheckCircleIcon({
  className,
  variant = "cyan",
  size = 24,
  color,
  ...props
}: CheckCircleIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(checkCircleVariants({ variant }), className)}
      {...props}
    >
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02942 21 3 16.9706 3 12C3 7.02942 7.02942 3 12 3C16.9706 3 21 7.02942 21 12ZM10.959 16.7654L17.6364 10.088C17.8631 9.86127 17.8631 9.49361 17.6364 9.26687L16.8153 8.44573C16.5885 8.21895 16.2209 8.21895 15.9941 8.44573L10.5484 13.8914L8.00592 11.3489C7.77918 11.1222 7.41152 11.1222 7.18475 11.3489L6.3636 12.1701C6.13686 12.3968 6.13686 12.7645 6.3636 12.9912L10.1378 16.7654C10.3646 16.9922 10.7322 16.9922 10.959 16.7654Z"
        fill={fillColor}
      />
    </svg>
  )
}
