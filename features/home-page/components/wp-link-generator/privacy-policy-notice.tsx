export function PrivacyPolicyNotice() {
  return (
    <aside className="col-start-1 col-end-3 flex flex-col items-center">
      <p className="caption text-center text-foreground">
        Ao preencher o formulário, concordo * em receber comunicações de acordo
        com meus interesses.
      </p>
      <p className="caption text-center text-foreground">
        Ao informar meus dados, eu concordo com a{" "}
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline hover:text-brand-3"
        >
          Política de Privacidade
        </a>
      </p>
      <p className="caption text-center text-foreground">
        * Você pode alterar suas permissões de comunicação a qualquer tempo.
      </p>
    </aside>
  )
}
