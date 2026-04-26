"use client"

import { cn } from "@/lib/utils"

interface ChevronUpIconProps extends Omit<React.ComponentProps<"svg">, "color"> {
  size?: number
  color?: string
}

export function ChevronUpIcon({
  className,
  size = 32,
  color,
  ...props
}: ChevronUpIconProps) {
  const fillColor = color || "currentColor"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      {...props}
    >
      <path
        d="M15.3782 11.8812L8.25756 19.0018C7.91414 19.3453 7.91414 19.902 8.25756 20.2454L9.08807 21.0759C9.43091 21.4188 9.98655 21.4194 10.3302 21.0774L16 15.4341L21.6698 21.0774C22.0134 21.4194 22.5691 21.4188 22.9119 21.0759L23.7424 20.2454C24.0859 19.902 24.0859 19.3452 23.7424 19.0018L16.6218 11.8812C16.2784 11.5378 15.7216 11.5378 15.3782 11.8812Z"
        fill={fillColor}
      />
    </svg>
  )
}
