import type { Metadata } from "next"
import { SuccessPageGuard } from "./success-page-guard"

export const metadata: Metadata = {
  title: "Link gerado com sucesso!",
  description:
    "Seu link personalizado do WhatsApp foi gerado. Copie e compartilhe para iniciar conversas com seus clientes com um clique.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Link do WhatsApp gerado com sucesso!",
    description:
      "Seu link personalizado do WhatsApp foi gerado. Copie e compartilhe para iniciar conversas com seus clientes com um clique.",
    locale: "pt_BR",
    type: "website",
    siteName: "Gerador de Link para WhatsApp",
  },
}

export default function SuccessPage() {
  return <SuccessPageGuard />
}
