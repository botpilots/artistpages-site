import { assetUrl } from '../lib/assetUrl'

type LoopingVideoProps = {
  src: string
  poster?: string
  alt: string
  className?: string
}

export function LoopingVideo({ src, poster, alt, className }: LoopingVideoProps) {
  return (
    <video
      className={className}
      src={assetUrl(src)}
      poster={poster ? assetUrl(poster) : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={alt}
    />
  )
}
