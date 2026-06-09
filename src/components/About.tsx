import type { AboutContent } from '../types/about'

type AboutProps = AboutContent

export function About({ eyebrow, ingress, paragraphs, whoWeAreTitle, whoWeAreItems }: AboutProps) {
  return (
    <section id="about" className="border-t border-stone-200 bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">{eyebrow}</p>
        <p className="mt-3 font-serif text-2xl leading-snug font-medium text-stone-900 md:text-3xl">
          {ingress}
        </p>

        <div className="mt-8 space-y-6 font-reading text-lg leading-relaxed text-stone-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-xl font-medium text-stone-900">{whoWeAreTitle}</h3>
          <ul className="mt-4 space-y-2 font-reading text-base leading-relaxed text-stone-700">
            {whoWeAreItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-stone-400" aria-hidden="true">
                  –
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
