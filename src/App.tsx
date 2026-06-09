import aboutContent from '../content/about.json'
import contactContent from '../content/contact.json'
import homeContent from '../content/home.json'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import type { AboutContent } from './types/about'
import type { ContactContent } from './types/contact'
import type { HomeContent } from './types/home'

const home = homeContent as HomeContent
const about = aboutContent as AboutContent
const contact = contactContent as ContactContent

export default function App() {
  return (
    <>
      <Header
        heroLogo={home.heroLogo}
        navAbout={home.navAbout}
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
        <Portfolio
          portfolioEyebrow={home.portfolioEyebrow}
          portfolioTitle={home.portfolioTitle}
          portfolioVisitLabel={home.portfolioVisitLabel}
        />
        <Contact {...contact} />
      </main>
    </>
  )
}
