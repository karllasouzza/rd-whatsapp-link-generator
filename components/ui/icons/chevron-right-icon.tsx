"use client"

import { cn } from "@/lib/utils"

interface ChevronRightIconProps extends Omit<
  React.ComponentProps<"svg">,
  "color"
> {
  size?: number
  color?: string
}

export function ChevronRightIcon({
  className,
  size = 9,
  color,
  ...props
}: ChevronRightIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size || 9}
      height={size || 14}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M7.55453 6.43901C7.81891 6.69605 7.81891 7.11167 7.55453 7.36597L2.15453 12.6187C1.89016 12.8757 1.46266 12.8757 1.20109 12.6187C0.939531 12.3617 0.936719 11.946 1.20109 11.6917L6.12297 6.90659L1.19828 2.1187C0.933906 1.86167 0.933906 1.44605 1.19828 1.19175C1.46266 0.937453 1.89016 0.934718 2.15172 1.19175L7.55453 6.43901Z"
        fill={fillColor}
      />
    </svg>
  )
}
