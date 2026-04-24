import type { FormData } from "./form-schema"

interface SubmitResult {
  success: boolean
  error?: string
}

export async function submitForm(data: FormData): Promise<SubmitResult> {
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

    if (!response.ok) {
      return {
        success: false,
        error: `Erro ao enviar formulário: ${response.status}`,
      }
    }

    return { success: true }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro de rede desconhecido"
    return { success: false, error: message }
  }
}
