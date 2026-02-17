import { Music, Youtube, Facebook, Instagram } from 'lucide-react'
import { socialLinks } from '../../data/social'

interface SocialIconsProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

function getIcon(platform: string, size: number) {
  switch (platform) {
    case 'Spotify': return <Music size={size} />
    case 'YouTube': return <Youtube size={size} />
    case 'Facebook': return <Facebook size={size} />
    case 'Instagram': return <Instagram size={size} />
    case 'TikTok': return <Music size={size} />
    case 'Bandcamp': return <Music size={size} />
    default: return <Music size={size} />
  }
}

export default function SocialIcons({ size = 'md', className = '' }: SocialIconsProps) {
  const iconSize = size === 'sm' ? 18 : size === 'lg' ? 28 : 22
  const buttonSize = size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-14 h-14' : 'w-11 h-11'

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map(({ platform, href, color }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={platform}
          className={`${buttonSize} rounded-full bg-white flex items-center justify-center shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
          style={{ color }}
        >
          {getIcon(platform, iconSize)}
        </a>
      ))}
    </div>
  )
}
