"use client"

import { useState, useCallback } from "react"

function applyPhoneMask(digits: string): string {
  if (digits.length === 0) return ""
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`
}

export function usePhoneMask(initialValue = "") {
  const initialDigits = initialValue.replace(/\D/g, "").slice(0, 11)
  const [rawDigits, setRawDigits] = useState(initialDigits)
  const [maskedValue, setMaskedValue] = useState(applyPhoneMask(initialDigits))

  const updateFromDigits = useCallback((digits: string) => {
    const trimmed = digits.slice(0, 11)
    setRawDigits(trimmed)
    setMaskedValue(applyPhoneMask(trimmed))
  }, [])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const digits = e.target.value.replace(/\D/g, "")
      updateFromDigits(digits)
    },
    [updateFromDigits]
  )

  const setValue = useCallback(
    (value: string) => {
      const digits = value.replace(/\D/g, "")
      updateFromDigits(digits)
    },
    [updateFromDigits]
  )

  return { maskedValue, rawDigits, onChange, setValue }
}
