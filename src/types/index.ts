export interface NavLink {
  label: string
  path: string
}

export interface SocialLink {
  platform: string
  href: string
  color: string
}

export interface Award {
  year: string
  title: string
  isWinner: boolean
}

export interface Service {
  id: string
  slug: string
  title: string
  emoji: string
  description: string
  ctaText: string
  color: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface FunFact {
  emoji: string
  fact: string
}

export interface FreeDownload {
  title: string
  emoji: string
  description: string
  ctaText: string
}

export interface Book {
  title: string
  year: string
  publisher: string
  image?: string
}

export interface MusicPlatform {
  name: string
  href: string
  color: string
}
