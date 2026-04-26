"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ChevronUpIcon } from "@/components/ui/icons/chevron-up-icon"

import { ALL_FAQ_ITEMS_IDS } from "./faq-accordion"
import { FaqContent } from "./faq-content"

export function FaqSection() {
  const [openItems, setOpenItems] = useState<string[]>(ALL_FAQ_ITEMS_IDS)

  const isAllFaqItemsOpened = openItems.length === ALL_FAQ_ITEMS_IDS.length

  function toggleAllAccordion() {
    if (isAllFaqItemsOpened) {
      setOpenItems([])
    } else {
      setOpenItems(ALL_FAQ_ITEMS_IDS)
    }
  }

  return (
    <section id="faq" className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-4 px-6 py-20 md:px-12 lg:px-20">
        <Button
          variant="outline"
          size="sm"
          className="w-max shrink-0 self-end"
          onClick={toggleAllAccordion}
        >
          {isAllFaqItemsOpened ? "Fechar todos" : "Abrir todos"}
          <ChevronUpIcon
            size={16}
            className={`text-foreground transition-transform duration-300 ${
              isAllFaqItemsOpened ? "" : "rotate-180"
            }`}
          />
        </Button>

        <FaqContent openItems={openItems} onValueChange={setOpenItems} />
      </div>
    </section>
  )
}
