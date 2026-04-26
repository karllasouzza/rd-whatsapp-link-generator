# Gerador de Link para WhatsApp

Aplicação web desenvolvida para gerar links personalizados do WhatsApp de forma rápida e intuitiva. O usuário insere um número de telefone, define uma mensagem opcional e recebe um link pronto para compartilhar em seus canais digitais.

---

## Funcionalidades

- **Geração de link do WhatsApp** — crie links no formato `https://wa.me/...` com número e mensagem pré-preenchida.
- **Máscara de telefone brasileiro** — input formatado automaticamente no padrão nacional (com DDD).
- **Validação de formulário** — verificação de campos obrigatórios e formatos válidos antes da submissão.
- **Página de sucesso** — exibição do link gerado com opção de copiar para a área de transferência.
- **Seções institucionais** — benefícios, FAQ, templates de mensagem e guia de uso.
- **SEO otimizado** — metadados dinâmicos por página, Open Graph, favicons e manifesto PWA.
- **Responsivo** — layout adaptável para desktop, tablet e mobile.

---

## Estrutura de Pastas

```
.
├── app/                    # Rotas e layout principal do Next.js
│   ├── success/            # Página de sucesso após gerar o link
│   ├── layout.tsx          # Root layout com fontes, SEO e providers
│   ├── page.tsx            # Página inicial (Home)
│   └── globals.css         # Estilos globais e tokens de design
├── components/
│   ├── shared/             # Componentes compartilhados (Header, Footer, Logo)
│   └── ui/                 # Componentes de interface reutilizáveis (shadcn/ui)
│       └── icons/          # Ícones em SVG como componentes React
├── features/
│   ├── home/               # Funcionalidades da página inicial
│   │   ├── components/     # Seções da landing page
│   │   ├── hooks/          # Hooks específicos do domínio
│   │   ├── lib/            # Schema de validação do formulário
│   │   ├── services/       # Submissão do formulário
│   │   └── types/          # Tipagens do domínio
│   └── success/            # Funcionalidades da página de sucesso
│       ├── components/
│       └── hooks/
├── hooks/                  # Hooks globais reutilizáveis
├── lib/                    # Utilitários e configuração de fontes
├── stores/                 # Estado global (Zustand)
├── public/                 # Assets estáticos (imagens, favicons)
└── types/                  # Tipagens globais (declarações de módulo)
```

---

## Tecnologias Utilizadas

Além do React e Next.js acabei optando em utilizar também o TailwindCSS junto com o shadcn/ui (sempre customizando os componentes) para garantir uma padronização global e consistência entre os navegadores e dispositivos.

- **[Next.js](https://nextjs.org/)** — framework React com suporte a SSR, SSG e App Router.
- **[React](https://react.dev/)** — biblioteca para construção de interfaces declarativas.
- **[TypeScript](https://www.typescriptlang.org/)** — tipagem estática para maior segurança e DX.
- **[Tailwind CSS](https://tailwindcss.com/)** — utilitários CSS para estilização rápida e consistente.
- **[shadcn/ui](https://ui.shadcn.com/)** — componentes de UI acessíveis e customizáveis.
- **[Zustand](https://github.com/pmndrs/zustand)** — gerenciamento de estado global leve e simples.
- **[React Hook Form](https://react-hook-form.com/)** — gerenciamento de formulários com performance otimizada.
- **[Zod](https://zod.dev/)** — validação de schemas TypeScript-first.
- **[Sonner](https://sonner.emilkowal.ski/)** — toast notifications elegantes.

---

## Scripts Disponíveis

| Comando         | Descrição                                               |
|-----------------|---------------------------------------------------------|
| `yarn dev`      | Inicia o servidor de desenvolvimento com Turbopack      |
| `yarn build`    | Gera a build de produção                                |
| `yarn start`    | Inicia o servidor de produção                           |
| `yarn lint`     | Executa o ESLint para análise estática de código        |
| `yarn format`   | Formata os arquivos TypeScript com Prettier             |
| `yarn typecheck`| Verifica tipagens do TypeScript sem emitir arquivos     |

---

## Decisões de Arquitetura

Acabei escolhendo utilizar uam separação usando a pastas `features` para garantir que cada componente ficasse em seu devido escopo.

### Feature-based Organization
O projeto segue uma estrutura de **features**, onde cada funcionalidade (home, success) agrupa seus próprios componentes, hooks, serviços e tipos. Isso facilita a manutenção e a escalabilidade do código.

---

## Como Executar

1. Instale as dependências:
   ```bash
   yarn install
   ```

2. Inicie o ambiente de desenvolvimento:
   ```bash
   yarn dev
   ```

3. Acesse `http://localhost:3000` no navegador.

---

## Pontos de Extensão

Alguns pontos de extensão que encontrei são:

- Integração com analytics ou tag manager.
- Testes end-to-end (E2E) com Playwright.
- Internacionalização (i18n) para outros idiomas.
- Exportação do link como QR Code.
- Histórico de links gerados.
