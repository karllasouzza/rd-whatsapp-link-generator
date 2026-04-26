import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { cn } from "@/lib/utils"
import { fontHeading, fontSans, fontSubtitle } from "@/lib/fonts"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"

export const metadata: Metadata = {
  title: "Gerador de Link para WhatsApp",
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
      <body className="flex flex-1 overflow-y-auto">
        <ThemeProvider>
          <section className="flex w-screen flex-1 flex-col">
            <Header />
            <main className="h-max w-screen flex-1 ">
              {children}
            </main>
            <Footer />
          </section>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
