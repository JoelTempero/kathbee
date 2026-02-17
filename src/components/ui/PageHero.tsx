import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  emoji?: string
  bgColor?: string
}

export default function PageHero({ title, subtitle, emoji, bgColor = 'bg-cream' }: PageHeroProps) {
  return (
    <section className={`${bgColor} pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden wave-divider`}>
      {/* Subtle floating decorations */}
      <span
        className="absolute top-[20%] left-[10%] text-3xl opacity-5 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'bobble 4s ease-in-out infinite' }}
      >
        🎵
      </span>
      <span
        className="absolute top-[30%] right-[15%] text-2xl opacity-5 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'bobble 5s ease-in-out 1s infinite' }}
      >
        🐝
      </span>

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {emoji && (
            <motion.span
              className="text-5xl md:text-6xl block mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
            >
              {emoji}
            </motion.span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-charcoal mb-4">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
