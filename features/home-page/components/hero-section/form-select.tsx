"use client"

import { Controller, type Control } from "react-hook-form"
import { Label } from "@/components/ui/label"
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
  control: Control<FormData>
}

export function FormSelectWithLabel({ control }: FormSelectWithLabelProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="role" className="body-sm-bold text-secondary-foreground">
        Cargo
      </Label>
      <Controller
        name="role"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <Select value={field.value || ""} onValueChange={field.onChange}>
              <SelectTrigger
                id="role"
                aria-invalid={fieldState.invalid}
                aria-describedby={fieldState.invalid ? "role-error" : undefined}
                className="min-h-11.75 w-full bg-background"
              >
                <SelectValue placeholder="Selecione seu cargo" />
              </SelectTrigger>
              <SelectContent align="end">
                {CARGO_OPTIONS.map((option, i) => (
                  <SelectItem key={`option-${i}`} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldState.invalid && fieldState.error?.message && (
              <p id="role-error" className="caption text-destructive">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  )
}
