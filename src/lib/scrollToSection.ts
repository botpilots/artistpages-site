const HEADER_OFFSET_PX = 24

export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) {
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX
  window.scrollTo({ top, behavior: 'smooth' })
}
