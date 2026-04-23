import { Typography } from "@/components/ui/typography"

export function Footer() {
  return (
    <footer className="bg-bg-secondary">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-2 px-6 py-6 text-text-secondary lg:px-20">
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
        >
          <Typography variant="footer-bold">Política de Privacidade</Typography>
        </a>
        <Typography variant="footer-regular">
          © 2023 Resultados Digitais
        </Typography>
      </div>
    </footer>
  )
}
