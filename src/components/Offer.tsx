import type { OfferContent } from '../types/about'

type OfferProps = OfferContent

export function Offer({
  eyebrow,
  ingress,
  summary,
  pricing,
  featuresTitle,
  features,
  footnote,
}: OfferProps) {
  return (
    <section id="offer" className="border-t border-stone-200 bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">{eyebrow}</p>
        <p className="mt-3 font-serif text-2xl leading-snug font-medium text-stone-900 md:text-3xl">
          {ingress}
        </p>

        <p className="mt-8 font-reading text-lg leading-relaxed text-stone-700">{summary}</p>

        <p className="mt-6 font-serif text-xl font-medium text-stone-900">{pricing}</p>

        <div className="mt-12">
          <h3 className="font-serif text-xl font-medium text-stone-900">{featuresTitle}</h3>
          <ul className="mt-4 space-y-2 font-reading text-base leading-relaxed text-stone-700">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-stone-400" aria-hidden="true">
                  →
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-reading text-base leading-relaxed text-stone-600 italic">
            {footnote}
          </p>
        </div>
      </div>
    </section>
  )
}
