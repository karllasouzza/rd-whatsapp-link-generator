"use client"

import { cn } from "@/lib/utils"

interface ArrowRightIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function ArrowRightIcon({
  className,
  size = 16,
  color,
  ...props
}: ArrowRightIconProps) {
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
        d="M13.6344 8.63431L14.2739 7.99758L13.6372 7.36085L9.58012 3.30379L8.94057 2.66425L7.6671 3.94053L8.30383 4.57726L10.8226 7.09601H2.62959H1.72803V8.89915H2.62959H10.8198L8.30102 11.4179L7.6671 12.0546L8.94057 13.3309L9.5773 12.6942L13.6344 8.63713V8.63431Z"
        fill={fillColor}
      />
    </svg>
  )
}
