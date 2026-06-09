import { useState } from 'react'
import type { HomeContent } from '../types/home'
import { assetUrl } from '../lib/assetUrl'
import { scrollToSection } from '../lib/scrollToSection'

type HeaderProps = Pick<HomeContent, 'heroLogo' | 'navAbout' | 'navPortfolio' | 'navContact'>

const navItems = [
  { id: 'about', labelKey: 'navAbout' as const },
  { id: 'portfolio', labelKey: 'navPortfolio' as const },
  { id: 'contact', labelKey: 'navContact' as const },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden>
      <span
        className={`block h-px w-full bg-stone-800 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span
        className={`block h-px w-full bg-stone-800 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'scale-x-0 opacity-0' : ''
        }`}
      />
      <span
        className={`block h-px w-full bg-stone-800 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? '-translate-y-[7px] -rotate-45' : ''
        }`}
      />
    </span>
  )
}

export function Header({ heroLogo, navAbout, navPortfolio, navContact }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const labels = { navAbout, navPortfolio, navContact }

  const handleNavClick = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header className="pointer-events-none fixed top-0 right-0 z-50 p-4 md:p-6">
      <div
        className={`pointer-events-auto origin-top-right overflow-hidden border border-stone-300/60 bg-stone-50/95 shadow-lg backdrop-blur-md transition-[width,height,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'h-[22rem] w-72 px-8 pb-10 pt-5' : 'h-12 w-12 p-0'
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setOpen(false)
          }
        }}
      >
        <button
          type="button"
          className={`absolute z-10 flex cursor-pointer items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? 'top-4 right-4 h-8 w-8' : 'inset-0 h-12 w-12'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onFocus={() => setOpen(true)}
        >
          <HamburgerIcon open={open} />
        </button>

        <div
          className={`flex h-full flex-col items-center transition-opacity duration-300 ${
            open ? 'pointer-events-auto opacity-100 delay-150' : 'pointer-events-none opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={() => handleNavClick('hero')}
            className="mb-10 mt-2 shrink-0 cursor-pointer"
            aria-label="Back to top"
          >
            <img src={assetUrl(heroLogo)} alt="ArtistPages" className="h-10 w-auto md:h-11" />
          </button>

          <nav aria-label="Main">
            <ul className="flex flex-col items-center gap-7">
              {navItems.map(({ id, labelKey }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className="cursor-pointer font-serif text-2xl font-medium tracking-wide text-stone-700 decoration-stone-800 underline-offset-[10px] transition-[color,text-decoration] duration-300 hover:text-stone-900 hover:underline md:text-[1.65rem]"
                  >
                    {labels[labelKey]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
