import { DM_Sans, Red_Hat_Display } from "next/font/google"

export const fontMono = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-mono",
})
