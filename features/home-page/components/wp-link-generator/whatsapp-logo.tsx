import Image from "next/image"

const logoVariants = [
  {
    className:
      "absolute inset-x-0 bottom-[-12.8] mx-auto rotate-[-12.76deg] md:hidden",
    width: 97.55,
    height: 98.52,
  },
  {
    className:
      "absolute inset-x-0 bottom-[-28.23] left-[17.13px] hidden rotate-[-12.76deg] md:block lg:hidden",
    width: 174.42,
    height: 176.14,
  },
  {
    className:
      "absolute inset-x-0 bottom-[50.69px] left-[25.78px] hidden rotate-[-12.76deg] lg:block xl:hidden",
    width: 239.79,
    height: 242.16,
  },
  {
    className:
      "absolute inset-x-0 bottom-[32.6px] left-[35.92px] hidden rotate-[-12.76deg] xl:block",
    width: 342,
    height: 345.39,
  },
] as const

export function WhatsAppLogo() {
  return (
    <>
      {logoVariants.map((variant, index) => (
        <Image
          key={index}
          src="/images/whatsapp-logo.png"
          alt="WhatsApp logo"
          className={variant.className}
          width={variant.width}
          height={variant.height}
          priority
        />
      ))}
    </>
  )
}
