import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'
import { funFacts } from '../data/content'

const cardStyles = [
  { bg: 'bg-honey', rotate: 'rotate-1' },
  { bg: 'bg-coral', rotate: '-rotate-1' },
  { bg: 'bg-sky', rotate: 'rotate-2' },
  { bg: 'bg-lavender', rotate: '-rotate-2' },
  { bg: 'bg-grass', rotate: 'rotate-1' },
  { bg: 'bg-honey-light', rotate: '-rotate-1' },
  { bg: 'bg-coral', rotate: 'rotate-2' },
  { bg: 'bg-sky', rotate: '-rotate-2' },
  { bg: 'bg-lavender', rotate: 'rotate-1' },
  { bg: 'bg-grass', rotate: '-rotate-1' },
  { bg: 'bg-honey', rotate: 'rotate-2' },
  { bg: 'bg-coral', rotate: '-rotate-2' },
]

export default function FunFacts() {
  return (
    <>
      <PageHero
        title="Fun Facts About Me!"
        subtitle="Get to know the real Kath Bee"
        emoji="🤩"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {funFacts.map((fact, i) => {
              const style = cardStyles[i % cardStyles.length]
              return (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ scale: 1.04, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`${style.bg} ${style.rotate} rounded-2xl p-6 text-white shadow-md cursor-default h-full`}
                  >
                    <span className="text-4xl block mb-3">{fact.emoji}</span>
                    <p className="font-semibold text-base leading-snug">{fact.fact}</p>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
        <span className="absolute top-8 right-10 text-6xl opacity-10 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 4s ease-in-out infinite' }}>🐝</span>
        <span className="absolute bottom-12 left-6 text-5xl opacity-10 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 5s ease-in-out 1.5s infinite' }}>🎵</span>

        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">The Buzz on Kath 🐝</h2>
          </AnimatedSection>
          <div className="space-y-6">
            <AnimatedSection>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  Kath's teaching style is relaxed yet energetic, establishing rapport effortlessly
                  across all age groups. Her classes are interactive and incorporate movement.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  Her passion centres on writing songs for the 5-10 year age group, however she writes
                  songs for any age including adults. She currently teaches songwriting at the Nelson
                  Centre of Musical Arts.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  Kath regularly meets adults who blush and say <em>"your songs were my childhood"</em>.
                  She's a 'with them' not 'at them' performer who has entertained tens of thousands of
                  children across NZ over the past 20 years.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  Based in beautiful Nelson / Whakatū, New Zealand, Kath has been creating songs that
                  touch children's hearts since 2001.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-honey to-honey-dark text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-4">Want to hear Kath's songs?</h2>
            <p className="text-white/80 text-lg mb-8">
              Stream over 100 songs on your favourite platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://open.spotify.com/artist/5pYeD8r1vE9mMyA9qAs7qk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-honey-dark font-bold rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-transform no-underline"
              >
                Listen on Spotify
              </a>
              <Link
                to="/contact"
                className="btn btn-outline-white"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
