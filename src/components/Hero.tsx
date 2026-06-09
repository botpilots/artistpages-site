import type { HomeContent } from '../types/home'
import { assetUrl } from '../lib/assetUrl'

type HeroProps = Pick<HomeContent, 'heroLogo' | 'heroSubtitle'>

export function Hero({ heroLogo, heroSubtitle }: HeroProps) {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        <div className="flex w-full shrink-0 justify-center md:w-5/12 md:justify-start">
          <img
            src={assetUrl(heroLogo)}
            alt="ArtistPages"
            className="h-auto w-full max-w-sm md:max-w-md"
          />
        </div>

        <div className="flex w-full justify-center md:w-7/12 md:justify-start">
          <p className="max-w-xl text-center text-lg leading-relaxed text-stone-700 md:text-left md:text-xl md:leading-relaxed">
            {heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
