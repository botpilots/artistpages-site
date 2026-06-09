import type { WhoIAmContent } from '../types/about'
import { assetUrl } from '../lib/assetUrl'

type WhoIAmProps = WhoIAmContent

function ProfileBlock({
  title,
  image,
  imageAlt,
  description,
  link,
  reversed,
}: {
  title: string
  image: string
  imageAlt: string
  description: string
  link?: { url: string; label: string }
  reversed?: boolean
}) {
  return (
    <div
      className={`flex flex-col gap-8 md:items-center ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="shrink-0 md:w-2/5">
        <img
          src={assetUrl(image)}
          alt={imageAlt}
          className="aspect-[4/5] w-full rounded-sm object-cover object-center shadow-md"
        />
      </div>
      <div className="md:w-3/5">
        <h3 className="font-serif text-xl font-medium text-stone-900">{title}</h3>
        <p className="mt-3 font-reading text-base leading-relaxed text-stone-700">{description}</p>
        {link ? (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-medium text-amber-800 underline decoration-amber-800/30 underline-offset-2 hover:text-amber-900"
          >
            {link.label}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export function WhoIAm({
  eyebrow,
  ingress,
  techTitle,
  techImage,
  techImageAlt,
  techDescription,
  cvUrl,
  cvLabel,
  artistTitle,
  artistImage,
  artistImageAlt,
  artistDescription,
  closing,
}: WhoIAmProps) {
  return (
    <section id="who-i-am" className="border-t border-stone-200 bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">{eyebrow}</p>
        <p className="mt-3 font-serif text-2xl leading-snug font-medium text-stone-900 md:text-3xl">
          {ingress}
        </p>

        <div className="mt-12 space-y-16">
          <ProfileBlock
            title={techTitle}
            image={techImage}
            imageAlt={techImageAlt}
            description={techDescription}
            link={{ url: cvUrl, label: cvLabel }}
          />
          <ProfileBlock
            title={artistTitle}
            image={artistImage}
            imageAlt={artistImageAlt}
            description={artistDescription}
            reversed
          />
        </div>

        <p className="mt-16 text-center font-serif text-xl font-medium text-stone-800">{closing}</p>
      </div>
    </section>
  )
}
