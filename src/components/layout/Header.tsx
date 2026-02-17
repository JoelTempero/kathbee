import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { images } from '../../data/content'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-warm-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-warm-white/90 backdrop-blur-sm shadow-sm py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3 no-underline">
          <img
            src={images.logo}
            alt="Kath Bee"
            className="h-11 w-11 rounded-full object-cover border-[3px] border-honey group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-xl md:text-2xl font-bold text-charcoal">
            Kath Bee
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-semibold no-underline px-3 py-2 rounded-full transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-honey-dark bg-cream'
                  : 'text-charcoal hover:text-honey-dark hover:bg-cream/60'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full hover:bg-cream transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl relative z-50"
            >
              <div className="flex flex-col py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`px-6 py-3.5 text-base font-semibold no-underline transition-colors block ${
                        location.pathname === link.path
                          ? 'text-honey-dark bg-cream border-l-4 border-honey'
                          : 'text-charcoal hover:text-honey-dark hover:bg-cream/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="px-6 py-4 border-t border-gray-100">
                <a
                  href="mailto:songs4kids@gmail.com"
                  className="text-sm text-charcoal/60 no-underline hover:text-honey-dark transition-colors"
                >
                  ✉️ songs4kids@gmail.com
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
