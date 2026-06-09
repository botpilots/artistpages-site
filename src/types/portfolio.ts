export type GalleryPhoto = {
  type: 'photo'
  image: string
  offsetX?: number
  offsetY?: number
  alt?: string
}

export type GalleryVideo = {
  type: 'video'
  video: string
  poster?: string
  alt?: string
}

export type GalleryItem = GalleryPhoto | GalleryVideo

export type PortfolioProject = {
  title: string
  date: string
  description: string
  siteUrl?: string
  coverImage?: {
    image: string
    offsetX?: number
    offsetY?: number
    alt?: string
  }
  gallery?: GalleryItem[]
  youtubeLink?: string
}
