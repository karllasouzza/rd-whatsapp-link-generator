import Image from "next/image"

import { Typography } from "@/components/ui/typography"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E1E4E8] bg-bg-primary">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 lg:px-20">
        <Image
          src="/rd-station-logo.svg"
          alt="RD Station"
          width={143}
          height={32}
          priority
        />
        <Typography variant="heading-xs-semibold">
          Gerador link do WhatsApp
        </Typography>
      </div>
    </header>
  )
}
