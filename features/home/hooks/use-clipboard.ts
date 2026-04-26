"use client"

import { useState, useCallback, useRef, useEffect } from "react"

export function useClipboard() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setError(null)
      setCopied(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Falha ao copiar para a área de transferência"
      setError(message)
      setCopied(false)
    }
  }, [])

  return { copy, copied, error }
}
