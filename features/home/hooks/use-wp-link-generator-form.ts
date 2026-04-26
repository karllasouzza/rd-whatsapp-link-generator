"use client"

import { useState, useCallback, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { formSchema, type FormData } from "../lib/form-schema"
import type { Role } from "../types/roles"
import { submitWpLinkGeneratorFormService } from "../services/submit-wp-link-generator-form"
import { usePhoneMask } from "./use-phone-mask"
import { useRouter } from "next/navigation"
import { useLinkStore } from "../../../stores/use-link-store"

export function useWpLinkGeneratorForm() {
  const router = useRouter()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const phoneMask = usePhoneMask()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      message: "",
      role: "" as Role,
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
  }, [whatsappValue])

  const generateLink = useCallback(
    async (data: FormData): Promise<void> => {
      setSubmitError(null)
      setIsSubmitting(true)

      try {
        useLinkStore.getState().generateLink(phoneMask.rawDigits, data.message ?? "")

        const submitResult = await submitWpLinkGeneratorFormService(data)

        if (!submitResult.success) {
          setSubmitError(
            submitResult.error ?? "Erro ao enviar formulário. Tente novamente."
          )
        }

        router.push("/success")
        return
      } catch {
        setSubmitError("Ocorreu um erro inesperado. Tente novamente.")
        return
      } finally {
        setIsSubmitting(false)
      }
    },
    []
  )

  const resetForm = useCallback(() => {
    form.reset()
    phoneMask.setValue("")
  }, [form, phoneMask])

  return {
    form,
    generateLink,
    isSubmitting,
    submitError,
    resetForm,
    phoneMask,
  }
}
