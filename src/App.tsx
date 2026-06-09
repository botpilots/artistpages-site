import aboutContent from '../content/about.json'
import contactContent from '../content/contact.json'
import homeContent from '../content/home.json'
import offerContent from '../content/offer.json'
import whoIAmContent from '../content/who-i-am.json'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Offer } from './components/Offer'
import { Portfolio } from './components/Portfolio'
import { WhoIAm } from './components/WhoIAm'
import type { AboutContent, OfferContent, WhoIAmContent } from './types/about'
import type { ContactContent } from './types/contact'
import type { HomeContent } from './types/home'

const home = homeContent as HomeContent
const about = aboutContent as AboutContent
const offer = offerContent as OfferContent
const whoIAm = whoIAmContent as WhoIAmContent
const contact = contactContent as ContactContent

export default function App() {
  return (
    <>
      <Header
        heroLogo={home.heroLogo}
        navAbout={home.navAbout}
        navOffer={home.navOffer}
        navWhoIAm={home.navWhoIAm}
        navPortfolio={home.navPortfolio}
        navContact={home.navContact}
      />
      <main>
        <Hero
          heroLogo={home.heroLogo}
          heroSubtitleLead={home.heroSubtitleLead}
          heroSubtitleFollow={home.heroSubtitleFollow}
        />
        <About {...about} />
        <Offer {...offer} />
        <Portfolio
          portfolioEyebrow={home.portfolioEyebrow}
          portfolioTitle={home.portfolioTitle}
          portfolioVisitLabel={home.portfolioVisitLabel}
        />
        <WhoIAm {...whoIAm} />
        <Contact {...contact} />
      </main>
    </>
  )
}
