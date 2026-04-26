"use client"

import { CopyIcon } from "@/components/ui/icons/copy-icon"
import { CheckIcon } from "@/components/ui/icons/check-icon"
import { Button } from "@/components/ui/button"
import { useClipboard } from "@/features/success/hooks/use-clipboard"
import { useLinkStore } from "@/stores/use-link-store"
import { useIsMobile } from "@/hooks/use-mobile"

export function CopyFormattedLinkClipboardCopyButton() {
  const link = useLinkStore((state) => state.link)
  const isMobile = useIsMobile()
  const { copy, copied } = useClipboard()

  const handleCopy = () => copy(link)

  return (
    <Button
      variant={isMobile ? (!copied ? "outline" : "default") : "default"}
      className="w-max disabled:opacity-100"
      onClick={handleCopy}
      disabled={copied}
    >
      {copied ? (
        <CheckIcon size={16} className="text-mint" />
      ) : (
        <CopyIcon size={16} />
      )}
      <span className="body-sm-semibold">
        {copied ? "Link copiado" : "Copie seu link"}
      </span>
    </Button>
  )
}
