import Image from "next/image"

interface WhatsAPPLogoProps {
  sizes?: string
  className?: string
}

export function WhatsAPPLogo({ sizes, className }: WhatsAPPLogoProps) {
  return (
    <figure className={className}>
      <Image
        src="/images/whatsapp-logo.png"
        alt="WhatsApp logo"
        fill
        className="object-contain"
        sizes={sizes}
        preload={true}
      />
    </figure>
  )
}
