import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "@/components/ui/icons/chevron-left-icon"

export const metadata: Metadata = {
  title: "404 - Página não encontrada | Gerador de Link para WhatsApp",
  description:
    "Ops! Não achamos o que você está procurando! Mas para todos os casos, você pode criar seu link de WhatsApp novamente.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className="flex w-full h-full flex-1 items-center justify-center px-4 md:px-6">
      <div className="flex w-full h-max flex-col items-center gap-10 text-center max-w-3xl">
        <span className="heading-xl text-brand-4">OPS!</span>
        <div className="flex flex-col">
          <h1 className="heading-md text-foreground">
            Não achamos o que você está procurando
          </h1>

          <p className="body-sm text-muted-foreground md:body-lg">
            Mas para todos os casos, você pode criar seu link de WhatsApp
            novamente e continuar com suas mensagens!
          </p>
        </div>

        <Button asChild>
          <Link href="/">
            <ChevronLeftIcon size={20} />
            Voltar e criar um novo link
          </Link>
        </Button>
      </div>
    </section>
  )
}
