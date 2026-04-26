import { create } from "zustand"

interface LinkState {
  link: string
}

interface LinkActions {
  generateLink: (rawDigits: string, message: string) => string
  resetLink: () => void
}

type LinkStore = LinkState & LinkActions

export const useLinkStore = create<LinkStore>()((set) => ({
  link: "",
  resetLink: () => set({ link: "" }),
  generateLink: (rawDigits: string, message: string) => {
    const link = `https://wa.me/55${rawDigits}?text=${encodeURIComponent(message ?? "")}`
    set({ link })
    return link
  },
}))
