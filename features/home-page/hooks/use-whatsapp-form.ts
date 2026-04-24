"use client"

import { useState, useCallback } from "react"
import { formSchema, type FormData } from "../lib/form-schema"
import type { Cargo } from "../lib/cargo-options"
import { submitForm } from "../lib/submit-form"
import { usePhoneMask } from "./use-phone-mask"

type FormErrors = Partial<Record<keyof FormData, string>>

export function useWhatsappForm() {
  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [cargo, setCargo] = useState<Cargo | "">("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [generatedLink, setGeneratedLink] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [salesHoursEnabled, setSalesHoursEnabled] = useState(false)
  const [autoMessageEnabled, setAutoMessageEnabled] = useState(false)

  const phoneMask = usePhoneMask()

  const setField = useCallback(
    (field: keyof FormData, value: string) => {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field]
        return next
      })

      switch (field) {
        case "nome":
          setNome(value)
          break
        case "whatsapp":
          phoneMask.setValue(value)
          break
        case "mensagem":
          setMensagem(value)
          break
        case "cargo":
          setCargo(value as Cargo)
          break
      }
    },
    [phoneMask]
  )

  const generateLink = useCallback(async (): Promise<string | null> => {
    const data = {
      nome,
      whatsapp: phoneMask.maskedValue,
      mensagem,
      cargo,
    }

    const result = formSchema.safeParse(data)

    if (!result.success) {
      const fieldErrors: FormErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormData | undefined
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      setGeneratedLink(null)
      return null
    }

    setErrors({})
    setSubmitError(null)
    setIsSubmitting(true)

    try {
      const link = `https://wa.me/55${phoneMask.rawDigits}?text=${encodeURIComponent(mensagem)}`
      setGeneratedLink(link)

      const submitResult = await submitForm(result.data)

      if (!submitResult.success) {
        setSubmitError(submitResult.error ?? "Erro ao enviar formulário. Tente novamente.")
      }

      return link
    } catch {
      setSubmitError("Ocorreu um erro inesperado. Tente novamente.")
      return null
    } finally {
      setIsSubmitting(false)
    }
  }, [nome, phoneMask.maskedValue, phoneMask.rawDigits, mensagem, cargo])

  const resetForm = useCallback(() => {
    setNome("")
    phoneMask.setValue("")
    setMensagem("")
    setCargo("")
    setErrors({})
    setGeneratedLink(null)
    setSalesHoursEnabled(false)
    setAutoMessageEnabled(false)
  }, [phoneMask])

  const toggleSalesHours = useCallback(() => {
    setSalesHoursEnabled((prev) => !prev)
  }, [])

  const toggleAutoMessage = useCallback(() => {
    setAutoMessageEnabled((prev) => !prev)
  }, [])

  const fields = {
    nome,
    whatsapp: phoneMask.maskedValue,
    mensagem,
    cargo,
  }

  return {
    fields,
    errors,
    setField,
    generatedLink,
    generateLink,
    isSubmitting,
    submitError,
    resetForm,
    salesHoursEnabled,
    toggleSalesHours,
    autoMessageEnabled,
    toggleAutoMessage,
    phoneMask,
  }
}
