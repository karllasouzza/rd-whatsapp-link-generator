"use client"

import { useState, useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema, type FormData } from "../lib/form-schema"
import type { Cargo } from "../lib/cargo-options"
import { submitForm } from "../lib/submit-form"
import { usePhoneMask } from "./use-phone-mask"

export function useWhatsappForm() {
  const [generatedLink, setGeneratedLink] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [salesHoursEnabled, setSalesHoursEnabled] = useState(false)
  const [autoMessageEnabled, setAutoMessageEnabled] = useState(false)

  const phoneMask = usePhoneMask()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      message: "",
      role: "" as Cargo,
    },
    mode: "onChange",
  })

  // Sync phone mask with form field
  const whatsappValue = form.watch("whatsapp")
  useEffect(() => {
    if (whatsappValue !== phoneMask.maskedValue) {
      const digits = (whatsappValue || "").replace(/\D/g, "")
      phoneMask.setValue(digits)
    }
  }, [whatsappValue]) // eslint-disable-line react-hooks/exhaustive-deps

  const generateLink = useCallback(
    async (data: FormData): Promise<string | null> => {
      setSubmitError(null)
      setIsSubmitting(true)

      try {
        const link = `https://wa.me/55${phoneMask.rawDigits}?text=${encodeURIComponent(data.message ?? "")}`
        setGeneratedLink(link)

        const submitResult = await submitForm(data)

        if (!submitResult.success) {
          setSubmitError(
            submitResult.error ?? "Erro ao enviar formulário. Tente novamente."
          )
        }

        return link
      } catch {
        setSubmitError("Ocorreu um erro inesperado. Tente novamente.")
        return null
      } finally {
        setIsSubmitting(false)
      }
    },
    [phoneMask.rawDigits]
  )

  const resetForm = useCallback(() => {
    form.reset()
    phoneMask.setValue("")
    setGeneratedLink(null)
    setSalesHoursEnabled(false)
    setAutoMessageEnabled(false)
  }, [form, phoneMask])

  const toggleSalesHours = useCallback(() => {
    setSalesHoursEnabled((prev) => !prev)
  }, [])

  const toggleAutoMessage = useCallback(() => {
    setAutoMessageEnabled((prev) => !prev)
  }, [])

  return {
    form,
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
