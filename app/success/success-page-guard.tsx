"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useLinkStore } from "@/stores/use-link-store"
import { SuccessPage } from "@/features/success/page"

export function SuccessPageGuard() {
  const router = useRouter()
  const link = useLinkStore((state) => state.link)

  useEffect(() => {
    if (!link) {
      router.replace("/")
    }
  }, [link, router])

  if (!link) {
    return null
  }

  return <SuccessPage />
}
