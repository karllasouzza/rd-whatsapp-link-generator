import { DM_Sans, Nunito_Sans, Red_Hat_Display } from "next/font/google"

export const fontHeading = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSubtitle = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-subtitle",
})
