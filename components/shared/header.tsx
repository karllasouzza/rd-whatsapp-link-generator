import { RdStationLogo } from "@/components/ui/icons/rd-station-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 max-h-20 min-h-20 w-full items-center justify-center bg-background">
      <section className="flex w-full items-center justify-center px-20 py-6 md:justify-between">
        <RdStationLogo />
        <span className="hidden heading-xs-semibold md:flex">
          Gerador link do WhatsApp
        </span>
      </section>
    </header>
  )
}
