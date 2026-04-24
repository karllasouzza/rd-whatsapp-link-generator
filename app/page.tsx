import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { HomePage } from "@/features/home-page/page"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}
