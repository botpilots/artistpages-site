import { deobfuscateEmail } from '../lib/deobfuscateEmail'
import type { ContactContent } from '../types/contact'

type ContactProps = ContactContent

export function Contact({ eyebrow, title, description, email, emailLabel }: ContactProps) {
  const decodedEmail = deobfuscateEmail(email)
  const decodedLabel = deobfuscateEmail(emailLabel)

  return (
    <section id="contact" className="border-t border-stone-200 bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">{eyebrow}</p>
        <h2 className="mt-3 font-serif text-2xl font-medium text-stone-900 md:text-3xl">{title}</h2>
        <p className="mt-4 font-reading text-lg leading-relaxed text-stone-600">{description}</p>

        {email ? (
          <a
            href={`mailto:${decodedEmail}`}
            className="mt-8 inline-block text-base font-medium text-amber-800 underline decoration-amber-800/30 underline-offset-4 transition-colors hover:text-amber-900"
          >
            {decodedLabel}
          </a>
        ) : null}
      </div>
    </section>
  )
}
