import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 max-h-20 w-full items-center justify-center bg-background">
      <section className="flex w-full items-center justify-center px-20 py-6 md:justify-between">
        <Image
          src="/rd-station-logo.svg"
          alt="RD Station"
          width={143}
          height={32}
          priority
        />
        <h6 className="heading-xs-semibold hidden md:flex">
          Gerador link do WhatsApp
        </h6>
      </section>
    </header>
  )
}
