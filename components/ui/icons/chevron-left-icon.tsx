"use client"

import { cn } from "@/lib/utils"

interface ChevronLeftIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function ChevronLeftIcon({
  className,
  size = 9,
  color,
  ...props
}: ChevronLeftIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M1.44547 6.43901C1.18109 6.69605 1.18109 7.11167 1.44547 7.36597L6.84547 12.6187C7.10984 12.8757 7.53734 12.8757 7.79891 12.6187C8.06047 12.3617 8.06328 11.946 7.79891 11.6917L2.87703 6.90659L7.80172 2.1187C8.06609 1.86167 8.06609 1.44605 7.80172 1.19175C7.53734 0.937453 7.10984 0.934718 6.84828 1.19175L1.44547 6.43901Z"
        fill={fillColor}
      />
    </svg>
  )
}
