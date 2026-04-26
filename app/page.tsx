import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crie seu Link do WhatsApp Grátis",
  description:
    "Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais! Ferramenta gratuita e intuitiva para gerar links personalizados.",
  keywords: [
    "WhatsApp",
    "link",
    "gerador",
    "conversas",
    "canal digital",
    "atendimento",
    "RD Station",
  ],
  openGraph: {
    title: "Crie seu Link do WhatsApp Grátis",
    description:
      "Crie seu link de WhatsApp e inicie conversas com um clique nos seus canais digitais!",
    locale: "pt_BR",
    type: "website",
  },
}

export { HomePage as default } from "@/features/home/page"
