import { RdStationLogo } from "@/components/ui/icons/rd-station-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-20 h-20 max-h-20 w-full items-center justify-center bg-background">
      <section className="flex w-full items-center justify-center px-20 py-6 md:justify-between">
        <RdStationLogo />
        <h6 className="heading-xs-semibold hidden md:flex">
          Gerador link do WhatsApp
        </h6>
      </section>
    </header>
  );
}
