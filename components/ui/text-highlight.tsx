import { cn } from "@/lib/utils"

export interface TextHighlightProps {
  children: React.ReactNode
  variant?: "cyan" | "lime"
  className?: string
  nowrap?: boolean
}

const variantColors: Record<string, string> = {
  cyan: "before:bg-brand-6",
  lime: "before:bg-lime-2",
}

export function TextHighlight({
  children,
  variant = "cyan",
  className,
  nowrap = false,
}: TextHighlightProps) {
  const highlightColor = variantColors[variant]

  return (
    <span
      style={
        {
          boxDecorationBreak: "clone",
          WebkitBoxDecorationBreak: "clone",
        } as React.CSSProperties
      }
      className={cn(
        "relative z-10 inline bg-transparent px-2",
        "before:absolute before:inset-x-0 before:bottom-0 before:h-1/2",
        "before:-z-10 before:rounded-md",
        "before:content-['']",
        "before:transition-[height] before:duration-300 before:ease-out hover:before:h-full",
        highlightColor,
        nowrap && "whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  )
}
