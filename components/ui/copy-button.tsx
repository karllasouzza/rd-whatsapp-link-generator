"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, type buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

type CopyButtonProps = Omit<React.ComponentProps<"button">, "onClick"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    textToCopy: string
  }

function CopyButton({
  textToCopy,
  className,
  variant = "outline",
  size = "default",
  children,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API not available
    }
  }, [textToCopy])

  return (
    <Button
      data-slot="copy-button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={handleCopy}
      {...props}
    >
      {copied ? (
        <Check className="size-4" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      {children}
    </Button>
  )
}

export { CopyButton }
export type { CopyButtonProps }
