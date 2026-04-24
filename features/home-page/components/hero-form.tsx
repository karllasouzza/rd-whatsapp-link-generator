"use client"

import { useWhatsappForm } from "../hooks/use-whatsapp-form"
import { CARGO_OPTIONS } from "../lib/cargo-options"
import { GeneratedLinkDisplay } from "./generated-link-display"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"

export function HeroForm() {
  const {
    fields,
    errors,
    setField,
    generatedLink,
    generateLink,
    isSubmitting,
    submitError,
    salesHoursEnabled,
    toggleSalesHours,
    autoMessageEnabled,
    toggleAutoMessage,
    phoneMask,
  } = useWhatsappForm()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await generateLink()
  }

  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="heading-md text-text-primary">
          Gerador de Link para WhatsApp
        </h1>
        <p className="body-sm text-text-secondary">
          Crie seu link de WhatsApp e mire conversões com UTMs em seus
          canais de divulgação
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Nome */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="nome" className="body-sm-bold text-text-label">
            Nome
          </Label>
          <Input
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome"
            value={fields.nome}
            onChange={(e) => setField("nome", e.target.value)}
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "nome-error" : undefined}
          />
          {errors.nome && (
            <p id="nome-error" className="caption text-destructive">
              {errors.nome}
            </p>
          )}
        </div>

        {/* Número do WhatsApp */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="whatsapp" className="body-sm-bold text-text-label">
            Número do WhatsApp
          </Label>
          <Input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="numeric"
            placeholder="(99) 99999-9999"
            value={fields.whatsapp}
            onChange={phoneMask.onChange}
            aria-invalid={!!errors.whatsapp}
            aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined}
          />
          {errors.whatsapp && (
            <p id="whatsapp-error" className="caption text-destructive">
              {errors.whatsapp}
            </p>
          )}
        </div>

        {/* Cargo */}
        <div className="flex flex-col gap-1.5">
          <Label className="body-sm-bold text-text-label">
            Cargo
          </Label>
          <Combobox
            value={fields.cargo || null}
            onValueChange={(val) => setField("cargo", (val as string) ?? "")}
          >
            <ComboboxInput
              placeholder="Selecione seu cargo"
              aria-invalid={!!errors.cargo}
              aria-describedby={errors.cargo ? "cargo-error" : undefined}
              className="w-full"
              showClear={!!fields.cargo}
              showTrigger
            />
            <ComboboxContent>
              <ComboboxList>
                {CARGO_OPTIONS.map((option) => (
                  <ComboboxItem key={option} value={option}>
                    {option}
                  </ComboboxItem>
                ))}
                <ComboboxEmpty>Nenhum cargo encontrado</ComboboxEmpty>
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          {errors.cargo && (
            <p id="cargo-error" className="caption text-destructive">
              {errors.cargo}
            </p>
          )}
        </div>

        {/* Mensagem padrão */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="mensagem" className="body-sm-bold text-text-label">
            Mensagem padrão
          </Label>
          <Textarea
            id="mensagem"
            name="mensagem"
            placeholder="Escreva uma mensagem que facilita a comunicação com os seus leads"
            value={fields.mensagem}
            onChange={(e) => setField("mensagem", e.target.value)}
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
            rows={4}
          />
          <p className="caption text-text-placeholder">
            Escreva uma mensagem que facilita a comunicação com os seus leads
          </p>
          {errors.mensagem && (
            <p id="mensagem-error" className="caption text-destructive">
              {errors.mensagem}
            </p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="w-full body-sm-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Gerando..." : "Gerar link do WhatsApp"}
        </Button>

        {submitError && (
          <p className="caption text-destructive text-center">
            {submitError}
          </p>
        )}

        {/* Generated link display */}
        {generatedLink && <GeneratedLinkDisplay link={generatedLink} />}
      </form>

      {/* Toggle section */}
      <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6">
        {/* Ativar horário de vendas */}
        <div className="flex items-start gap-3">
          <Switch
            id="sales-hours"
            checked={salesHoursEnabled}
            onCheckedChange={toggleSalesHours}
          />
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="sales-hours"
              className="body-sm-bold text-text-label cursor-pointer"
            >
              Ativar horário de vendas
            </Label>
            <p className="caption text-text-secondary">
              O Gerador de link do WhatsApp com horário de venda exibe
              automaticamente mensagens diferentes para dentro e fora do
              horário de atendimento.
            </p>
          </div>
        </div>

        {/* Mensagem automática */}
        <div className="flex items-start gap-3">
          <Switch
            id="auto-message"
            checked={autoMessageEnabled}
            onCheckedChange={toggleAutoMessage}
          />
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="auto-message"
              className="body-sm-bold text-text-label cursor-pointer"
            >
              Mensagem automática
            </Label>
            <p className="caption text-text-secondary">
              Você automatiza mensagens como resposta rápida e facilita o
              primeiro contato com seus visitantes. Para isso, basta criar
              uma mensagem de até 10 a 12 palavras.
            </p>
          </div>
        </div>
      </div>

      {/* Badge + Privacy */}
      <div className="mt-6 flex flex-col items-center gap-3">
        <Badge variant="success">Feito 100% gratuito</Badge>
        <p className="caption text-text-placeholder text-center">
          Ao enviar seus dados, você concorda com a{" "}
          <a
            href="https://legal.rdstation.com/pt/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-brand-primary hover:text-brand-accent-blue"
          >
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  )
}
