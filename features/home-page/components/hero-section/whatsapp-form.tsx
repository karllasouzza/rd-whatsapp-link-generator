"use client"

import { Controller } from "react-hook-form"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

import { useWhatsappForm } from "../../hooks/use-whatsapp-form"
import { FormSelectWithLabel } from "./form-select"

export function WhatsAppForm() {
  const { form, generateLink, isSubmitting, submitError, phoneMask } =
    useWhatsappForm()

  return (
    <form
      onSubmit={form.handleSubmit(generateLink)}
      noValidate
      className="flex flex-col gap-6"
    >
      {/* WhatsApp Number */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="whatsapp" className="body-sm-bold text-secondary-foreground">
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
                phoneMask.setValue(digits)
                field.onChange(e.target.value)
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
      </div>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="body-sm-bold text-secondary-foreground">
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
      </div>

      {/* Role */}
      <FormSelectWithLabel control={form.control} />

      {/* Default Message */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="body-sm-bold text-secondary-foreground">
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
      </div>

      {submitError && (
        <p className="caption text-center text-destructive">{submitError}</p>
      )}

      {/* Privacy Policy */}
      <div className="mt-2 flex flex-col items-center">
        <p className="caption text-center text-foreground">
          Ao preencher o formulário, concordo * em receber comunicações de
          acordo com meus interesses. Ao informar meus dados, eu concordo com a{" "}
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline hover:text-accent"
          >
            Política de Privacidade
          </a>
        </p>
        <p className="caption text-center text-foreground">
          * Você pode alterar suas permissões de comunicação a qualquer tempo.
        </p>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="default"
        size="default"
        className="body-sm-semibold! z-20 mx-auto mt-2 w-max"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Gerando..." : "Gerar link grátis"}
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}
