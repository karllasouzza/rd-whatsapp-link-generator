"use client"

import { cn } from "@/lib/utils"

interface CheckIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function CheckIcon({
  className,
  size = 16,
  color,
  ...props
}: CheckIconProps) {
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
        d="M15.1392 4.06086L14.4437 4.75638L6.56526 12.6348L5.86666 13.3334L5.17114 12.6379L1.23192 8.69868L0.533325 8.00008L1.92744 6.60597L2.62296 7.30149L5.86666 10.5452L13.0496 3.36534L13.7451 2.66675L15.1392 4.06086Z"
        fill={fillColor}
      />
    </svg>
  )
}
