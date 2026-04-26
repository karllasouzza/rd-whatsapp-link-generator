import { z } from "zod"
import { ROLES } from "../types/roles"

export const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: z
    .string()
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Número de WhatsApp inválido"),
  role: z.enum(ROLES, {
    error: "Selecione um cargo",
  }),
  message: z.string().optional(),
})

export type FormData = z.infer<typeof formSchema>
