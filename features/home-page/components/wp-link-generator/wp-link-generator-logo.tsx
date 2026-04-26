import Image from "next/image"

export function WpLinkGeneratorLogo() {
  return (
    <figure className="absolute inset-x-0 bottom-[-12.8px] mx-auto h-[98.52px] w-[97.55px] -rotate-[12.76deg] md:bottom-[-28.23px] md:left-[17.13px] md:mx-0 md:h-[176.14px] md:w-[174.42px] min-[1377px]:bottom-[50.69px] min-[1377px]:left-[25.78px] min-[1377px]:h-[242.16px] min-[1377px]:w-[239.79px] min-[1686px]:bottom-[32.6px] min-[1686px]:left-[35.92px] min-[1686px]:h-[345.39px] min-[1686px]:w-[342px]">
      <Image
        src="/images/whatsapp-logo.png"
        alt="WhatsApp logo"
        fill
        className="object-contain"
        sizes="(max-width: 767px) 97px, (max-width: 1376px) 174px, (max-width: 1685px) 239px, 342px"
        priority
      />
    </figure>
  )
}
