"use client"

import type {
  ControllerFieldState,
  ControllerRenderProps,
} from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CARGO_OPTIONS } from "../../lib/cargo-options"
import type { FormData } from "../../lib/form-schema"

interface FormSelectWithLabelProps {
  field: ControllerRenderProps<FormData, "role">
  fieldState: ControllerFieldState
}

export function WpLinkGeneratorRoleSelect({
  field,
  fieldState,
}: FormSelectWithLabelProps) {
  return (
    <Select value={field.value || ""} onValueChange={field.onChange}>
      <SelectTrigger
        id="role"
        aria-invalid={fieldState.invalid}
        aria-describedby={fieldState.invalid ? "role-error" : undefined}
        className="w-full bg-background"
      >
        <SelectValue placeholder="Selecione seu cargo" />
      </SelectTrigger>
      <SelectContent>
        {CARGO_OPTIONS.map((option, i) => (
          <SelectItem key={`option-${i}`} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
