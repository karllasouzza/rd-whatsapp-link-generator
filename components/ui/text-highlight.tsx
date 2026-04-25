import { cn } from "@/lib/utils"

export interface TextHighlightProps {
  children: React.ReactNode
  variant?: "cyan" | "lime" | "blue" | "primary"
  className?: string
  nowrap?: boolean
}

const variantColors: Record<string, string> = {
  cyan: "before:bg-brand-accent-cyan",
  lime: "before:bg-brand-accent-lime",
  blue: "before:bg-brand-accent-blue",
  primary: "before:bg-brand-primary",
}

/**
 * TextHighlight com marca-texto na base usando ::before.
 * O pseudo-elemento (pill arredondado) inicia na metade do texto
 * e fica parcialmente atrás dele, escondendo a curva superior.
 *
 * box-decoration-break: clone garante que, se o texto quebrar linha,
 * cada fragmento receba seu próprio marcador.
 */
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
        "relative z-10 inline bg-transparent",
        "before:absolute before:inset-x-0 before:bottom-0 before:h-1/2",
        "before:-z-10 before:rounded-full",
        "before:content-['']",
        highlightColor,
        nowrap && "whitespace-nowrap",
        className
      )}
    >
      {children}
    </span>
  )
}
