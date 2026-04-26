import { MediaTopicsImage } from "./media-topics-image"
import { MediaTopicsList } from "./media-topics-list"

export function MediaTopicsSection() {
  return (
    <section
      id="media-topics"
      className="flex w-full flex-col gap-10 bg-background px-6 py-20 md:px-12 min-[1090px]:flex-row-reverse min-[1090px]:gap-14 lg:p-20"
    >
      <MediaTopicsImage />
      <MediaTopicsList />
    </section>
  )
}
