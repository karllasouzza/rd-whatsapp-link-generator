"use client"

import { cn } from "@/lib/utils"

interface LoaderIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function LoaderIcon({
  className,
  size = 24,
  color,
  ...props
}: LoaderIconProps) {
  const strokeColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 animate-spin", className)}
      {...props}
    >
      <path
        d="M21 12a9 9 0 1 1-6.219-8.56"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
