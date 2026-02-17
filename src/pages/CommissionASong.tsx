import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'
import { services, testimonials } from '../data/content'

export default function CommissionASong() {
  return (
    <>
      <PageHero
        title="Bee-Spoke Songs"
        subtitle="Custom songs crafted just for you"
        emoji="🐝"
      />

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start p-8 rounded-2xl ${
                  i % 2 === 0 ? 'bg-cream' : 'bg-warm-white border-2 border-cream'
                }`}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl text-white mx-auto md:mx-0 ${
                    service.color === 'coral' ? 'bg-coral' : service.color === 'sky' ? 'bg-sky' : 'bg-lavender'
                  }`}>
                    {service.emoji}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl text-charcoal mb-4">{service.title}</h2>
                    <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-honey-dark font-bold hover:gap-3 transition-all no-underline"
                    >
                      {service.ctaText}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-3">How It Works</h2>
            <p className="text-white/70 text-lg">From idea to your very own song</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                emoji: '💬',
                title: 'Tell Kath About Them',
                desc: 'Share all the interesting, fun and quirky things about the person the song is for.',
              },
              {
                step: '2',
                emoji: '🎵',
                title: 'Kath Creates the Song',
                desc: 'Kath will cleverly craft a unique song with meaningful lyrics and a catchy melody.',
              },
              {
                step: '3',
                emoji: '🎉',
                title: 'Enjoy Your Song!',
                desc: 'Receive your song via Zoom performance, video recording, or in person (Nelson area).',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-honey text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <span className="text-3xl block mb-3">{item.emoji}</span>
                  <h3 className="text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-honey/10 text-honey-dark font-bold text-sm px-4 py-1.5 rounded-full mb-4">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl text-charcoal">What People Say</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const accents = ['border-honey', 'border-sky', 'border-coral']
              const bgAccents = ['bg-honey', 'bg-sky', 'bg-coral']
              return (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <motion.blockquote
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`bg-white rounded-2xl p-7 shadow-md border-t-4 ${accents[i % 3]} h-full flex flex-col`}
                  >
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-honey text-lg">&#9733;</span>
                      ))}
                    </div>
                    <p className="text-charcoal/80 text-base leading-relaxed mb-6 flex-grow italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className={`w-10 h-10 rounded-full ${bgAccents[i % 3]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {t.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="text-charcoal font-bold text-sm block">{t.author}</span>
                        <span className="text-charcoal/50 text-xs">{t.role}</span>
                      </div>
                    </div>
                  </motion.blockquote>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Ready to commission your song?</h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Get in touch and let's create something special together!
            </p>
            <Link to="/contact" className="btn btn-primary text-lg px-10 py-4">
              Contact Kath
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
