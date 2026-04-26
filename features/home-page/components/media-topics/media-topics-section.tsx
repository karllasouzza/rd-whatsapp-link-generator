import Image from "next/image"

export function MediaTopicsSection() {
  return (
    <section className="flex w-full items-center justify-center bg-background">
      <ul className="flex max-w-300 flex-col gap-8 px-6 py-16 md:px-12 lg:px-20">
        <li className="flex h-55 w-full overflow-hidden object-fill">
          <Image
            src="/images/media-topics-image-sm.png"
            alt="Media Topics"
            width={652}
            height={478}
            className="h-55 w-full overflow-hidden object-fill"
          />
        </li>
      </ul>
    </section>
  )
}
