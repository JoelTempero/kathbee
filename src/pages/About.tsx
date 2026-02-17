import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'
import { images, awards, books } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        title="About Kath Bee"
        subtitle="Award-winning children's songwriter & entertainer from New Zealand"
        emoji="🐝"
      />

      {/* Main Bio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-start">
            <AnimatedSection>
              <img
                src={images.aboutPortrait}
                alt="Kath Bee portrait"
                className="w-full rounded-2xl shadow-xl sticky top-28"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="mb-6">
                <img
                  src={images.logoBanner}
                  alt="Kath Bee - Songs for Kids"
                  className="w-full max-w-sm rounded-xl shadow-md"
                />
              </div>
              <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  Kath Bee is first and foremost a brilliant songwriter. She prides herself on
                  writing well-crafted songs with meaningful, clever lyrics and catchy melodies.
                </p>
                <p>
                  Kath's most loved songs include 'Individuality', 'Dad I wanna be a Camel', 'E Tū
                  Tāngata', 'Sprinkle A Little Sunshine', 'Magic in Me', 'Dragons Under My Bed' and
                  many more. She has the ability to dive into the mind of a child, creating songs
                  that touch children's hearts and stick with them into adulthood.
                </p>
                <p>
                  Kath regularly meets adults who blush and say{' '}
                  <em>"your songs were my childhood"</em>. She's a 'with them' not 'at them'
                  performer who has entertained tens of thousands of children across NZ over the
                  past 20 years.
                </p>
                <p>
                  She's also a published author of three picture books, has over 100 songs streaming
                  online, plus a variety of videos on her YouTube Channel.
                </p>
                <p>
                  Kath is a multi-award-winning songwriter, with a career spanning over 20 years and
                  has toured NZ extensively, performing everywhere from Primary Schools and libraries
                  to Teddy Bears' Picnics, Music Festivals and everywhere in between.
                </p>
                <p>
                  Her songs have been commissioned by TVNZ's Poppet Stars, E Tū Tāngata, and Sing
                  Up UK, among many others. She produces and hosts "The Kids' Mix" radio show on
                  FreshFM and five other community stations.
                </p>
                <p>
                  Her passion centres on writing songs for the 5-10 year age group, however she
                  writes songs for any age including adults.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-cream to-warm-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Awards & Recognition 🏆</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {awards.map((award, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className={`flex items-center gap-4 p-5 rounded-xl transition-all ${
                    award.isWinner
                      ? 'bg-honey text-white shadow-md'
                      : 'bg-white border-2 border-honey-light text-charcoal'
                  }`}
                >
                  <span className="text-2xl">{award.isWinner ? '🏆' : '🌏'}</span>
                  <div>
                    <span className="font-bold block">{award.title}</span>
                    <span className={`text-sm ${award.isWinner ? 'text-white/80' : 'text-charcoal/60'}`}>
                      {award.year}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Published Books */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Published Books 📚</h2>
            <p className="text-lg text-charcoal/60">
              Kath is also a published author of three picture books
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book, i) => (
              <AnimatedSection key={book.title} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <span className="text-5xl block mb-4">📖</span>
                  <h3 className="text-lg text-charcoal mb-2">{book.title}</h3>
                  <p className="text-charcoal/60 text-sm mb-1">{book.publisher}</p>
                  <p className="text-honey-dark font-bold text-sm">{book.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-honey to-honey-dark text-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-white mb-4">Want to know more?</h2>
            <p className="text-white/80 text-lg mb-8">
              Check out the fun facts page or get in touch!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/fun-facts" className="btn btn-outline-white">
                Fun Facts About Kath
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn bg-white text-honey-dark font-bold rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-transform no-underline">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
