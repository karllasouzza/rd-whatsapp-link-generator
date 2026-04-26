import type { Metadata } from "next"
import Script from "next/script"
import { Toaster } from "sonner"

import { ThemeProvider } from "@/components/shared/theme-provider"
import { fontHeading, fontSans, fontSubtitle } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Gerador de Link para WhatsApp",
    template: "%s | Gerador de Link para WhatsApp",
  },
  description:
    "Gere links para WhatsApp facilmente, inicie conversas instantaneamente em seus canais digitais!",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon.ico", sizes: "48x48" },
    ],
    apple: "/favicons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Gerador de Link para WhatsApp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn(
        "flex flex-1",
        "antialiased",
        fontHeading.variable,
        "font-sans",
        fontSans.variable,
        fontSubtitle.variable
      )}
    >
      <body className="flex flex-1">
        <Script
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/f27fe8ea-077c-495c-ba90-3765efbb4c3d-loader.js"
          async
        />
        <ThemeProvider>
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
