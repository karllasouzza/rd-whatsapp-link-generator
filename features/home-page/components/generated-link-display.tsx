"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { CopyButton } from "@/components/ui/copy-button"

interface GeneratedLinkDisplayProps {
  link: string
}

export function GeneratedLinkDisplay({ link }: GeneratedLinkDisplayProps) {
  if (!link) return null

  return (
    <div className="flex flex-col gap-2">
      <label className="body-sm-bold text-text-label">
        Seu link gerado
      </label>
      <InputGroup className="h-auto">
        <InputGroupInput
          readOnly
          value={link}
          className="truncate body-xs"
          aria-label="Link gerado para WhatsApp"
        />
        <InputGroupAddon align="inline-end">
          <CopyButton
            textToCopy={link}
            variant="default"
            size="xs"
          >
            Copiar
          </CopyButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
