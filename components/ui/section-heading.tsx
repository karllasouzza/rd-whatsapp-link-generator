import * as React from "react"

import { cn } from "@/lib/utils"

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface SectionHeadingProps extends React.ComponentProps<"h2"> {
  children: string
  highlight?: string
  as?: HeadingTag
}

function SectionHeading({
  children,
  highlight,
  as: Tag = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const renderContent = () => {
    if (!highlight) return children

    const index = children.indexOf(highlight)
    if (index === -1) return children

    const before = children.slice(0, index)
    const after = children.slice(index + highlight.length)

    return (
      <>
        {before}
        <span className="text-brand-primary">{highlight}</span>
        {after}
      </>
    )
  }

  return (
    <Tag
      data-slot="section-heading"
      className={cn("heading-md md:heading-lg text-text-primary", className)}
      {...props}
    >
      {renderContent()}
    </Tag>
  )
}

export { SectionHeading }
export type { SectionHeadingProps }
