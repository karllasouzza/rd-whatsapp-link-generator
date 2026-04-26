"use client"

import { useState, useCallback, useEffect } from "react"
import { useForm, type FieldErrors } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"

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
  }, [whatsappValue, phoneMask])

  const generateLink = useCallback(
    async (data: FormData): Promise<void> => {
      setSubmitError(null)
      setIsSubmitting(true)
      const loadingToastId = toast.loading("Gerando link...")

      try {
        const submitResult = await submitWpLinkGeneratorFormService(data)

        if (!submitResult.success) {
          const errorMsg =
            submitResult.error ?? "Erro ao enviar formulário. Tente novamente."
          setSubmitError(errorMsg)
          toast.error(errorMsg, { id: loadingToastId })
          form.setError("root", { message: errorMsg })
          return
        }

        useLinkStore
          .getState()
          .generateLink(phoneMask.rawDigits, data.message ?? "")
        toast.success("Link gerado com sucesso!", { id: loadingToastId })
        router.push("/success")
        return
      } catch {
        const errorMsg = "Ocorreu um erro inesperado. Tente novamente."
        setSubmitError(errorMsg)
        toast.error(errorMsg, { id: loadingToastId })
        form.setError("root", { message: errorMsg })
        return
      } finally {
        setIsSubmitting(false)
      }
    },
    [phoneMask, router]
  )

  const onInvalid = useCallback(
    (errors: FieldErrors<FormData>) => {
      const firstFieldKey = Object.keys(errors)[0]
      if (firstFieldKey) {
        const firstError = errors[firstFieldKey as keyof FormData]
        const errorMsg =
          firstError?.message ?? "Verifique os campos do formulário."
        toast.error(errorMsg)
        form.setFocus(firstFieldKey as keyof FormData)
      }
    },
    [form]
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
    onInvalid,
    resetForm,
    phoneMask,
  }
}
