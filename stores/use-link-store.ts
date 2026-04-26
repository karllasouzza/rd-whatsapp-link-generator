import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LinkState {
  link: string
}

interface LinkActions {
  generateLink: (rawDigits: string, message: string) => string
  resetLink: () => void
}

type LinkStore = LinkState & LinkActions

export const useLinkStore = create<LinkStore>()(
  persist(
    (set) => ({
      link: "",
      resetLink: () => set({ link: "" }),
      generateLink: (rawDigits: string, message: string) => {
        const link = `https://wa.me/55${rawDigits}?text=${encodeURIComponent(message ?? "")}`
        set({ link })
        return link
      },
    }),
    {
      name: "whatsapp-link-storage",
    }
  )
)
