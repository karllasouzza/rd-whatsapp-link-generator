"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useLinkStore } from "@/stores/use-link-store"

export function LinkStoreProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(useLinkStore.persist.hasHydrated())

    const unsub = useLinkStore.persist.onFinishHydration(() => {
      setHydrated(true)
    })

    return unsub
  }, [])

  if (!hydrated) {
    return null
  }

  return children
}
