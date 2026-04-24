import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

interface BannerSectionProps {
  children: React.ReactNode
  media?: {
    src: string | StaticImport
    alt: string
    className?: string
  }
  className?: string
}

export function BannerSection({
  children,
  media,
  className,
}: BannerSectionProps) {
  return (
    <section className={cn("px-6", className)}>
      <div className="bg-form-gradient rounded-3xl p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-12">
        <div>{children}</div>
        {media && (
          <Image
            src={media.src}
            alt={media.alt}
            className={cn("absolute inset-0 object-cover", media.className)}
            width={400}
            height={404}
          />
        )}
      </div>
    </section>
  )
}
