import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'
import { freeDownloads } from '../data/content'

export default function Extras() {
  return (
    <>
      <PageHero
        title="Free Stuff!"
        subtitle="Download colouring sheets, lyrics, and activity worksheets"
        emoji="🎁"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freeDownloads.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <span className="text-5xl block mb-4">{item.emoji}</span>
                  <h2 className="text-xl text-charcoal mb-3">{item.title}</h2>
                  <p className="text-charcoal/60 mb-6 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                  <a
                    href="https://www.kathbee.nz/extras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mx-auto"
                  >
                    {item.ctaText}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-16 md:py-24 bg-cream wave-divider">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Watch on YouTube 📺</h2>
            <p className="text-lg text-charcoal/60">
              Over 70 videos of songs, stories, and fun for kids
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UULFrGa0aMJf_rRm2sFf9kIzGw"
                  title="Kath Bee YouTube videos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="text-center mt-8">
            <a
              href="https://www.youtube.com/kathbeesongs4kids/?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Subscribe on YouTube
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Radio Show */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-sky to-grass rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <span
                className="absolute top-4 right-6 text-4xl opacity-20 pointer-events-none select-none"
                aria-hidden="true"
                style={{ animation: 'bobble 4s ease-in-out infinite' }}
              >
                📻
              </span>
              <span className="text-5xl block mb-4">📻</span>
              <h2 className="text-3xl md:text-4xl text-white mb-4">The Kids' Mix Radio Show</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Kath produces and hosts "The Kids' Mix" on FreshFM and five other community stations.
                The show features songs, stories, fun facts, giveaways and a "What's THAT Noise?" segment.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Listeners can phone in to say 'Kia ora' to Kath! The show airs Saturdays and Sundays from 7-9am.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Want a personalised song?</h2>
            <p className="text-charcoal/60 text-lg mb-8">
              Check out Kath's Bee-Spoke song commission service!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/commission-a-song" className="btn btn-primary">
                Bee-Spoke Songs
                <ArrowRight size={18} />
              </Link>
              <Link to="/online-store" className="btn btn-secondary">
                Visit Store
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
