"use client"

import { Controller } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight, Loader2 } from "lucide-react"

import { useWpLinkGeneratorForm } from "../../hooks/use-wp-link-generator-form"
import { WpLinkGeneratorRoleSelect } from "./wp-link-generator-role-select"
import { WpLinkGeneratorPrivacyPolicy } from "./wp-link-generator-privacy-policy"

export function WpLinkGeneratorForm() {
  const { form, generateLink, isSubmitting, submitError, phoneMask } =
    useWpLinkGeneratorForm()

  return (
    <form
      onSubmit={form.handleSubmit(generateLink)}
      noValidate
      className="flex w-full flex-col items-center justify-center gap-8 **:z-20"
    >
      <div className="grid w-full grid-flow-row grid-cols-2 gap-6">
        {/* WhatsApp Number */}
        <fieldset className="col-start-1 col-end-3 flex w-full flex-col gap-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
          <Label
            htmlFor="whatsapp"
            className="body-sm-bold text-secondary-foreground"
          >
            Número do WhatsApp*
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
            Nome*
          </Label>
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Input
                id="name"
                type="text"
                placeholder="Luna"
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
        <fieldset className="col-start-1 col-end-3 flex w-full min-w-0 flex-col gap-2">
          <Label
            htmlFor="role"
            className="body-sm-bold text-secondary-foreground"
          >
            Cargo
          </Label>
          <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <>
                <WpLinkGeneratorRoleSelect
                  field={field}
                  fieldState={fieldState}
                />
                {fieldState.invalid && fieldState.error?.message && (
                  <p id="role-error" className="caption text-destructive">
                    {fieldState.error.message}
                  </p>
                )}
              </>
            )}
          />
        </fieldset>

        {/* Default Message */}
        <fieldset className="col-start-1 col-end-3 flex flex-col gap-2">
          <Label
            htmlFor="message"
            className="body-sm-bold text-secondary-foreground"
          >
            Mensagem (Opcional)
          </Label>
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Textarea
                {...field}
                id="message"
                placeholder="Crie uma mensagem que facilite a interação com os contatos."
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

        {/* Submit Error */}
        {submitError && (
          <p className="col-start-1 col-end-3 text-center caption text-destructive">
            {submitError}
          </p>
        )}
      </div>

      {/* Privacy Policy */}
      <WpLinkGeneratorPrivacyPolicy />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        size="default"
        className="col-start-1 col-end-3 m-0 mx-auto w-max border-0 ring-0"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Gerando...
          </>
        ) : (
          <>
            Gerar link grátis
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}
