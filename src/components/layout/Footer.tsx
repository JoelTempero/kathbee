import { Link } from 'react-router-dom'
import { Music, Youtube, Facebook, Instagram } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { musicPlatforms } from '../../data/social'
import { images } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-soft-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative bee */}
      <span
        className="absolute top-8 right-12 text-3xl opacity-10 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'bobble 4s ease-in-out infinite' }}
      >
        🐝
      </span>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="block mb-4">
              <img
                src={images.logoBanner}
                alt="Kath Bee - Songs for Kids"
                className="w-full max-w-[220px] rounded-lg opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/60 mb-6 leading-relaxed">
              Award-winning children's songwriter & entertainer from New Zealand.
              Creating songs that touch children's hearts since 2001.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Music, href: 'https://open.spotify.com/artist/5pYeD8r1vE9mMyA9qAs7qk', bg: '#1DB954', label: 'Spotify' },
                { Icon: Youtube, href: 'https://www.youtube.com/kathbeesongs4kids/', bg: '#FF0000', label: 'YouTube' },
                { Icon: Facebook, href: 'https://www.facebook.com/kathbeesongs/', bg: '#1877F2', label: 'Facebook' },
                { Icon: Instagram, href: 'https://www.instagram.com/kath_bee_songs4kids/', bg: '#E4405F', label: 'Instagram' },
              ].map(({ Icon, href, bg, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ background: bg }}
                >
                  <Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-honey-light">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors no-underline text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-honey-light">Music Platforms</h4>
            <ul className="space-y-3">
              {musicPlatforms.map((platform) => (
                <li key={platform.name}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors no-underline text-sm"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-base font-bold mb-3 text-honey-light">Contact</h4>
              <a
                href="mailto:songs4kids@gmail.com"
                className="text-white/60 hover:text-white transition-colors no-underline text-sm"
              >
                songs4kids@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Kath Bee. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Made with 🐝 in Nelson, New Zealand
          </p>
        </div>
      </div>
    </footer>
  )
}
