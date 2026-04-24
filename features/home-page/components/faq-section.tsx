import { SectionHeading } from "@/components/ui/section-heading"
import { MainSection } from "@/components/shared/main-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    value: "o-que-e",
    question: "O que é o Gerador de link para WhatsApp?",
    answer:
      "O gerador de link para WhatsApp é uma ferramenta gratuita que permite criar links personalizados para o seu número de WhatsApp. Com ele, você pode configurar mensagens automáticas de boas-vindas e facilitar o contato direto com seus clientes, sem que eles precisem salvar seu número na agenda.",
  },
  {
    value: "onde-usar",
    question: "Onde posso usar o link do WhatsApp?",
    answer:
      "O link do WhatsApp pode ser utilizado em diversos canais: no seu site, nas redes sociais (Instagram, Facebook, LinkedIn), em e-mails marketing, assinaturas de e-mail, cartões de visita digitais, anúncios pagos e em qualquer material de comunicação onde você queira facilitar o contato direto com o cliente.",
  },
  {
    value: "vantagens",
    question: "As vantagens de ter um link do seu WhatsApp?",
    answer:
      "O link do WhatsApp permite que seus clientes entrem em contato com você de forma rápida e direta, sem precisar salvar seu número. Isso aumenta a taxa de conversão, melhora a experiência do cliente e possibilita o uso de mensagens personalizadas que já direcionam a conversa para o assunto certo.",
  },
  {
    value: "como-criar",
    question: "Como criar link para WhatsApp?",
    answer:
      "Para criar o seu link para WhatsApp, basta inserir o número do seu telefone com DDD no campo acima, adicionar uma mensagem personalizada (opcional) e clicar em \"Gerar link\". O link será gerado automaticamente e você poderá copiá-lo e compartilhá-lo onde quiser.",
  },
] as const

export function FaqSection() {
  return (
    <MainSection variant="centered" bg="secondary" id="faq">
      <div className="flex flex-col gap-8">
        <SectionHeading>Perguntas mais comuns</SectionHeading>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="body-sm-semibold text-text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="body-sm text-text-secondary">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MainSection>
  )
}
