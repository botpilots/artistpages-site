import { getPreviewVideo, loadPortfolio } from '../lib/loadPortfolio'
import type { HomeContent } from '../types/home'
import { LoopingVideo } from './LoopingVideo'

const projects = loadPortfolio()

type PortfolioProps = Pick<HomeContent, 'portfolioEyebrow' | 'portfolioTitle' | 'portfolioVisitLabel'>

export function Portfolio({ portfolioEyebrow, portfolioTitle, portfolioVisitLabel }: PortfolioProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section id="portfolio" className="border-t border-stone-200 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-sm font-medium tracking-[0.2em] text-stone-500 uppercase">
            {portfolioEyebrow}
          </h2>
          <p className="mt-3 text-2xl leading-snug font-medium text-stone-900 md:text-3xl">
            {portfolioTitle}
          </p>
        </div>

        <ul className="grid gap-12 md:grid-cols-2 md:gap-10">
          {projects.map((project) => {
            const previewVideo = getPreviewVideo(project)

            return (
              <li key={project.title} className="flex flex-col gap-5">
                {previewVideo ? (
                  <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
                    <div className="mx-auto aspect-9/16 max-h-136 w-full max-w-xs">
                      <LoopingVideo
                        src={previewVideo}
                        poster={project.coverImage?.image}
                        alt={
                          project.gallery?.find((item) => item.type === 'video')?.alt ??
                          `${project.title} website preview`
                        }
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="space-y-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-medium text-stone-900">{project.title}</h3>
                    {project.siteUrl ? (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-amber-800 hover:text-amber-900"
                      >
                        {portfolioVisitLabel}
                      </a>
                    ) : null}
                  </div>
                  <p className="text-base leading-relaxed text-stone-600">{project.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
