import type { PortfolioProject } from '../types/portfolio'

const modules = import.meta.glob('../../content/portfolio/*.json', {
  eager: true,
}) as Record<string, { default: PortfolioProject }>

export function loadPortfolio(): PortfolioProject[] {
  return Object.values(modules)
    .map((module) => module.default)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPreviewVideo(project: PortfolioProject): string | undefined {
  const video = project.gallery?.find(
    (item): item is Extract<typeof item, { type: 'video' }> =>
      item.type === 'video' && Boolean(item.video),
  )
  return video?.video
}
