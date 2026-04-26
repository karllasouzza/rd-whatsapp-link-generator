"use client"

import { ChevronLeftIcon } from "@/components/ui/icons/chevron-left-icon"
import Link from "next/link"
import { useLinkStore } from "@/stores/use-link-store"

export function BackLink() {
  const resetLink = useLinkStore((state) => state.resetLink)

  const handleClick = () => {
    resetLink()
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      className="flex w-max items-center gap-2 text-link transition-opacity hover:opacity-80"
    >
      <ChevronLeftIcon size={16} className="shrink-0" />
      <span className="body-md">Gerar outro link</span>
    </Link>
  )
}
