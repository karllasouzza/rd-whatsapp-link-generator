import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

import { MessagesTemplatesList } from "./message-templates-list"

export function MessagesTemplatesSection() {
  return (
    <section className="flex w-full items-center justify-center bg-[#F8FAFA]">
      <div className="flex max-w-7xl flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <header className="mb-6 flex flex-col gap-2">
          <h3 className="heading-md text-center text-foreground">
            Exemplos de mensagem para WhatsApp
          </h3>
        </header>

        <MessagesTemplatesList />

        <Button asChild size="default" className="mx-auto w-max">
          <a href="#wp-link-generator">
            Gere seu link grátis
            <ArrowRight className="size-4 stroke-2" />
          </a>
        </Button>
      </div>
    </section>
  )
}
