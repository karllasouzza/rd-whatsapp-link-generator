import { MediaTopicsImage } from "./media-topics-image"
import { MediaTopicsList } from "./media-topics-list"

export function MediaTopicsSection() {
  return (
    <section
      id="media-topics"
      className="flex w-full items-center justify-center bg-background px-6 py-20 md:px-12 lg:p-20"
    >
      <div className="flex w-full max-w-362 flex-col gap-10 min-[1090px]:flex-row-reverse min-[1090px]:gap-14">
        <MediaTopicsImage />
        <MediaTopicsList />
      </div>
    </section>
  )
}
