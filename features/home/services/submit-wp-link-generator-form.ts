"use server"

import type { FormData } from "../lib/form-schema"

interface SubmitResult {
  success: boolean
  error?: string
}

export async function submitWpLinkGeneratorFormService(
  data: FormData
): Promise<SubmitResult> {
  try {
    const response = await fetch(
      "https://hooks.zapier.com/hooks/catch/13309391/uie4g8v/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )

    console.log(response)

    if (!response.ok) {
      return {
        success: false,
        error: `Erro ao enviar formulário: ${response.status}`,
      }
    }

    return { success: true }
  } catch {
    return {
      success: false,
      error: "Erro de conexão. Verifique sua internet e tente novamente.",
    }
  }
}
