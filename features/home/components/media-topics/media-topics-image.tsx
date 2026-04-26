import Image from "next/image"

export function MediaTopicsImage() {
  return (
    <figure className="relative flex h-55 w-full overflow-hidden rounded-md md:h-75 min-[1090px]:h-auto min-[1090px]:w-85 min-[1090px]:self-stretch">
      <Image
        src="/images/media-topics-image-base.png"
        alt="Uma mulher, de pele clara, cabelo castanho, usando uma blusa vermelha e calças jeans. Ela esta com um celular em mãos para criar um link de WhatsApp, rápido, fácil e eficiente. Imagem"
        fill
        className="min-[1180px]:object-center object-cover object-top"
        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 100vw, 340px"
        priority
      />
    </figure>
  )
}
