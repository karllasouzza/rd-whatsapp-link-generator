import { cn } from "@/lib/utils"

export interface TextHighlightProps {
  children: React.ReactNode
  variant?: "cyan" | "lime" | "blue" | "primary"
  className?: string
}

/**
 * TextHighlight component for displaying text with colored background highlights.
 *
 * @example
 * // Basic usage with cyan highlight
 * <TextHighlight variant="cyan">Gerador de link de</TextHighlight>
 *
 * @example
 * // Lime highlight variant
 * <TextHighlight variant="lime">WhatsApp</TextHighlight>
 *
 * @example
 * // Custom className
 * <TextHighlight variant="blue" className="font-bold">Custom text</TextHighlight>
 */
export function TextHighlight({
  children,
  variant = "cyan",
  className,
}: TextHighlightProps) {
  const variantStyles = {
    cyan: "after:bg-brand-accent-cyan",
    lime: "after:bg-brand-accent-lime",
    blue: "after:bg-brand-accent-blue",
    primary: "after:bg-brand-primary",
  }

  return (
    <span
      className={cn(
        "relative z-10 inline",
        "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1/2 after:rounded-md after:-z-10",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
