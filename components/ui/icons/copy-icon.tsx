"use client"

import { cn } from "@/lib/utils"

interface CopyIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function CopyIcon({
  className,
  size = 16,
  color,
  ...props
}: CopyIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M13.3334 2.66669H6.00002V10H13.3334V2.66669ZM4.00002 6.00002H2.66669V7.33335V12V13.3334H4.00002H8.66669H10V12V10.6667H8.66669V12H4.00002V7.33335H5.33335V6.00002H4.00002Z"
        fill={fillColor}
      />
    </svg>
  )
}
