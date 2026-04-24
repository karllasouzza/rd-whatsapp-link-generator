import { z } from "zod"
import { CARGO_OPTIONS } from "./cargo-options"

export const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z
    .string()
    .regex(
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/,
      "Número de WhatsApp inválido"
    ),
  mensagem: z.string().min(1, "Mensagem é obrigatória"),
  cargo: z.enum(CARGO_OPTIONS, {
    error: "Selecione um cargo",
  }),
})

export type FormData = z.infer<typeof formSchema>
