"use client"

import { cn } from "@/lib/utils"

interface CaretDownIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function CaretDownIcon({
  className,
  size = 16,
  color,
  ...props
}: CaretDownIconProps) {
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
        d="M5.69276 6.66667H10.3073C10.6269 6.66667 10.7869 7.09243 10.5609 7.34143L8.25365 9.88424C8.1136 10.0386 7.88649 10.0386 7.74644 9.88424L5.43915 7.34143C5.21319 7.09243 5.37323 6.66667 5.69276 6.66667Z"
        fill={fillColor}
      />
    </svg>
  )
}
