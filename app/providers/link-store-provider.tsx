"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useLinkStore } from "@/stores/use-link-store"

export function LinkStoreProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const unsub = useLinkStore.persist.onFinishHydration(() => {
      setHydrated(true)
    })

    // If already hydrated before effect runs
    if (useLinkStore.persist.hasHydrated()) {
      setHydrated(true)
    }

    return unsub
  }, [])

  if (!hydrated) {
    return null
  }

  return children
}
