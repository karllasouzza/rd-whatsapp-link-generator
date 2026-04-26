import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

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
    <section className="flex w-full flex-1 items-center justify-center px-4 md:px-6">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-3">
          <span className="heading-xl text-brand-4">404</span>

          <h1 className="heading-md text-foreground md:heading-lg lg:heading-xl">
            Ops! Não achamos o que você está procurando!
          </h1>

          <p className="body-sm text-muted-foreground md:body-lg">
            Mas para todos os casos, você pode criar seu link de WhatsApp
            novamente!
          </p>
        </div>

        <Button asChild>
          <Link href="/">
            <ArrowLeft size={20} />
            Gerar link
          </Link>
        </Button>
      </div>
    </section>
  )
}
