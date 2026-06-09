import type { HomeContent } from '../types/home'
import { assetUrl } from '../lib/assetUrl'

type HeroProps = Pick<HomeContent, 'heroLogo' | 'heroSubtitleLead' | 'heroSubtitleFollow'>

export function Hero({ heroLogo, heroSubtitleLead, heroSubtitleFollow }: HeroProps) {
  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 text-center">
        <img
          src={assetUrl(heroLogo)}
          alt="ArtistPages"
          className="animate-fade-in-logo h-auto w-full max-w-sm md:max-w-md"
        />
        <p className="font-serif text-lg leading-relaxed text-stone-800 md:text-xl">
          <span className="animate-fade-in-tagline-1">{heroSubtitleLead}</span>{' '}
          <span className="animate-fade-in-tagline-2">{heroSubtitleFollow}</span>
        </p>
      </div>
    </section>
  )
}
