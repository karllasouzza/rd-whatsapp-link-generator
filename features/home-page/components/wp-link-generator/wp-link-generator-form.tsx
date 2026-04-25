"use client"

import { Controller } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

import { useWpLinkGeneratorForm } from "../../hooks/use-wp-link-generator-form"
import { WpLinkGeneratorRoleSelect } from "./wp-link-generator-role-select"
import { PrivacyPolicyNotice } from "./privacy-policy-notice"

export function WpLinkGeneratorForm() {
  const { form, generateLink, isSubmitting, submitError, phoneMask } =
    useWpLinkGeneratorForm()

  return (
    <form
      onSubmit={form.handleSubmit(generateLink)}
      noValidate
      className="grid w-full grid-flow-row grid-cols-2 gap-6"
    >
      {/* WhatsApp Number */}
      <fieldset className="col-start-1 col-end-3 flex w-full flex-col gap-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
        <Label
          htmlFor="whatsapp"
          className="body-sm-bold text-secondary-foreground"
        >
          Número do WhatsApp
        </Label>
        <Controller
          name="whatsapp"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              id="whatsapp"
              type="tel"
              inputMode="numeric"
              placeholder="(99) 99999-9999"
              value={phoneMask.maskedValue}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "")
                const masked = phoneMask.setValue(digits)
                field.onChange(masked)
              }}
              onBlur={(e) => {
                field.onBlur()
                phoneMask.onChange(e)
              }}
              aria-invalid={fieldState.invalid}
              aria-describedby={
                fieldState.invalid ? "whatsapp-error" : undefined
              }
            />
          )}
        />
        {form.formState.errors.whatsapp && (
          <p id="whatsapp-error" className="caption text-destructive">
            {form.formState.errors.whatsapp.message}
          </p>
        )}
      </fieldset>

      {/* Name */}
      <fieldset className="col-start-1 col-end-3 flex flex-col gap-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <Label
          htmlFor="name"
          className="body-sm-bold text-secondary-foreground"
        >
          Nome
        </Label>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              aria-invalid={fieldState.invalid}
              aria-describedby={fieldState.invalid ? "name-error" : undefined}
            />
          )}
        />
        {form.formState.errors.name && (
          <p id="name-error" className="caption text-destructive">
            {form.formState.errors.name.message}
          </p>
        )}
      </fieldset>

      {/* Role */}
      <WpLinkGeneratorRoleSelect control={form.control} />

      {/* Default Message */}
      <fieldset className="col-start-1 col-end-3 flex flex-col gap-2">
        <Label
          htmlFor="message"
          className="body-sm-bold text-secondary-foreground"
        >
          Mensagem padrão (opcional)
        </Label>
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Textarea
              {...field}
              id="message"
              placeholder="Escreva uma mensagem que facilita a comunicação com os seus leads"
              aria-invalid={fieldState.invalid}
              aria-describedby={
                fieldState.invalid ? "message-error" : undefined
              }
              rows={4}
            />
          )}
        />
        {form.formState.errors.message && (
          <p id="message-error" className="caption text-destructive">
            {form.formState.errors.message.message}
          </p>
        )}
      </fieldset>

      {submitError && (
        <p className="caption col-start-1 col-end-3 text-center text-destructive">
          {submitError}
        </p>
      )}

      <PrivacyPolicyNotice />

      {/* Submit */}
      <Button
        type="submit"
        variant="default"
        size="default"
        className="body-sm-semibold! z-20 col-start-1 col-end-3 mx-auto mt-2 w-max"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Gerando..." : "Gerar link grátis"}
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}
