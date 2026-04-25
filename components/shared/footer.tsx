export function Footer() {
  return (
    <footer className="flex w-full h-14 items-center justify-center bg-muted p-5 lg:px-20">
      <section className="flex w-max flex-row items-center gap-2 sm:gap-4">
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-bold text-muted-foreground transition-opacity hover:opacity-80"
        >
          Política de Privacidade
        </a>
        <span className="footer-regular text-muted-foreground">
          © 2023 Resultados Digitais
        </span>
      </section>
    </footer>
  )
}
