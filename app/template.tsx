import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen min-h-screen flex-1 flex-col">
      <Header />
      <main className="h-max w-screen flex-1">{children}</main>
      <Footer />
    </div>
  )
}
