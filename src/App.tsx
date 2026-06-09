import homeContent from '../content/home.json'
import { Hero } from './components/Hero'
import type { HomeContent } from './types/home'

const home = homeContent as HomeContent

export default function App() {
  return (
    <main>
      <Hero heroLogo={home.heroLogo} heroSubtitle={home.heroSubtitle} />
    </main>
  )
}
