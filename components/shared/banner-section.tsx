import * as React from "react"

import { cn } from "@/lib/utils"

interface BannerSectionProps {
  children: React.ReactNode
  media?: React.ReactNode
  className?: string
}

export function BannerSection({ children, media, className }: BannerSectionProps) {
  return (
    <section className={cn("px-6", className)}>
      <div className="mx-auto max-w-[1200px] rounded-3xl bg-form-gradient p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-12">
        <div>{children}</div>
        {media && (
          <div className="hidden lg:block">
            {media}
          </div>
        )}
      </div>
    </section>
  )
}
