import { HowToCreateCheckedList } from "./how-to-create-checked-list"

export function HowToCreateMessageSection() {
  return (
    <section
      id="how-to-create-message"
      className="flex w-full items-center justify-center bg-background px-6 py-18 md:px-12 lg:px-20"
    >
      <main className="flex w-full max-w-300 gap-10">
        <div className="flex flex-col gap-4">
          <header className="mb-6 flex flex-col gap-2">
            <h3 className="heading-md text-center text-foreground">
              Como criar mensagens automáticas para o WhatsApp
            </h3>
            <p className="body-lg text-center text-foreground">
              Agora que você viu como fazer link do WhatsApp é fácil, confira
              algumas ideias para mensagens que agilizam a comunicação!
            </p>
          </header>

          <HowToCreateCheckedList />
        </div>
      </main>
    </section>
  )
}
