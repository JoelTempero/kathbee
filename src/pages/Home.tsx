import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, ArrowRight, ExternalLink, Music, Youtube, Facebook, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SocialIcons from '../components/ui/SocialIcons'
import { images, awards, services, testimonials, freeDownloads } from '../data/content'
import { musicPlatforms } from '../data/social'

const serviceColors: Record<string, string> = {
  coral: 'bg-coral',
  sky: 'bg-sky',
  lavender: 'bg-lavender',
}

const floatingNotes = ['🎵', '🎶', '🎼', '🐝', '🌟', '🎵']

const cubeFaces = [
  { platform: 'Spotify', icon: Music, color: '#1DB954', bg: 'bg-[#1DB954]', href: 'https://open.spotify.com/artist/5pYeD8r1vE9mMyA9qAs7qk', text: '100+ songs streaming' },
  { platform: 'YouTube', icon: Youtube, color: '#FF0000', bg: 'bg-[#FF0000]', href: 'https://www.youtube.com/kathbeesongs4kids/', text: '70+ music videos' },
  { platform: 'Facebook', icon: Facebook, color: '#1877F2', bg: 'bg-[#1877F2]', href: 'https://www.facebook.com/kathbeesongs/', text: 'Join the community' },
  { platform: 'Instagram', icon: Instagram, color: '#E4405F', bg: 'bg-[#E4405F]', href: 'https://www.instagram.com/kath_bee_songs4kids/', text: 'Behind the scenes' },
  { platform: 'TikTok', icon: Music, color: '#000000', bg: 'bg-[#000000]', href: 'https://www.tiktok.com/@kathbeesongs', text: 'Fun clips & songs' },
  { platform: 'Bandcamp', icon: Music, color: '#629AA9', bg: 'bg-[#629AA9]', href: 'https://kathbee.bandcamp.com/', text: 'Buy music directly' },
]

const kathVideos = [
  { id: 'i1Q3amfRv0Q' },
  { id: 'w8w-IIox4wA' },
  { id: '9ue-p2xbjZE' },
  { id: '3OA-_xagx7g' },
  { id: 'JuwK8a2d4wk' },
  { id: '1PmasG7Tbds' },
]

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(2)

  return (
    <>
      {/* Hero Section - Logo-centered with profile pic */}
      <section className="min-h-screen flex items-center pt-24 pb-16 md:pt-28 md:pb-20 bg-gradient-to-br from-cream via-warm-white to-peach relative overflow-hidden wave-divider">
        <div className="absolute top-[-50%] right-[-20%] w-[80%] h-[150%] bg-[radial-gradient(ellipse,rgba(245,166,35,0.08)_0%,transparent_70%)] animate-[float_20s_ease-in-out_infinite] pointer-events-none" />
        {floatingNotes.map((note, i) => (
          <span
            key={i}
            className="absolute text-2xl md:text-3xl opacity-10 pointer-events-none select-none"
            aria-hidden="true"
            style={{
              top: `${15 + i * 14}%`,
              left: `${5 + (i * 17) % 90}%`,
              animation: `bobble ${3 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            }}
          >
            {note}
          </span>
        ))}

        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Profile picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
              className="mb-6"
            >
              <img
                src={images.profilePic}
                alt="Kath Bee"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-honey shadow-xl"
              />
            </motion.div>

            {/* Big Logo Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 w-full max-w-2xl"
            >
              <img
                src={images.logoBanner}
                alt="Kath Bee - Songs for Kids"
                className="w-full rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-charcoal/60 mb-8 font-medium leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Catchy, fun, thoughtful songs that quickly become family favourites
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://open.spotify.com/artist/5pYeD8r1vE9mMyA9qAs7qk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8"
              >
                <Play size={22} />
                Listen Now
              </a>
              <Link to="/commission-a-song" className="btn btn-secondary text-lg px-8">
                Commission a Song
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <SocialIcons size="lg" className="justify-center" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute top-[18%] left-[5%] bg-gradient-to-br from-honey-light to-honey text-white px-5 py-3 rounded-2xl shadow-xl hidden lg:block"
              style={{ animation: 'bobble 3s ease-in-out infinite' }}
            >
              <span className="font-bold text-sm">🏆 5x APRA Winner</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute top-[25%] right-[5%] bg-sky text-white px-5 py-3 rounded-2xl shadow-xl hidden lg:block"
              style={{ animation: 'bobble 3s ease-in-out 0.5s infinite' }}
            >
              <span className="font-bold text-sm">🎵 100+ Songs</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="absolute bottom-[22%] left-[8%] bg-coral text-white px-5 py-3 rounded-2xl shadow-xl hidden lg:block"
              style={{ animation: 'bobble 4s ease-in-out 1s infinite' }}
            >
              <span className="font-bold text-sm">📚 3 Picture Books</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-white wave-divider wave-divider-cream">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={images.aboutPortrait}
                  alt="Kath Bee portrait"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-honey text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg hidden md:block">
                  20+ years of songs! 🎶
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl text-charcoal mb-6">Who is Kath Bee?</h2>
              <p className="text-charcoal/70 text-lg mb-4 leading-relaxed">
                Kath Bee is first and foremost a brilliant songwriter. She prides herself on writing
                well-crafted songs with meaningful, clever lyrics and catchy melodies.
              </p>
              <p className="text-charcoal/70 text-lg mb-4 leading-relaxed">
                Kath's most loved songs include 'Individuality', 'Dad I wanna be a Camel', 'E Tū
                Tāngata', 'Sprinkle A Little Sunshine', 'Magic in Me', 'Dragons Under My Bed' and
                many more.
              </p>
              <p className="text-charcoal/70 text-lg mb-6 leading-relaxed">
                She has the ability to dive into the mind of a child, creating songs that touch
                children's hearts and stick with them into adulthood.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {awards.filter(a => a.isWinner).slice(0, 3).map((award, i) => (
                  <span
                    key={i}
                    className="bg-honey text-white px-4 py-1.5 rounded-full text-sm font-semibold"
                  >
                    🏆 {award.title.split('—')[0].trim()} {award.year}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-honey-dark font-bold transition-all no-underline"
              >
                Read more about Kath
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section — 3D CoverFlow Carousel */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-cream to-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Watch Kath's Videos 📺</h2>
            <p className="text-lg text-charcoal/60">
              Award-winning music videos, sing-alongs, and live performances
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div
              className="relative flex items-center justify-center"
              style={{ perspective: '1200px', minHeight: '380px' }}
            >
              {kathVideos.map((video, i) => {
                const offset = i - activeVideo
                const absOffset = Math.abs(offset)
                const isActive = offset === 0

                return (
                  <motion.div
                    key={video.id}
                    className="absolute w-[260px] md:w-[400px] lg:w-[480px] cursor-pointer"
                    animate={{
                      rotateY: offset * -25,
                      z: -absOffset * 60,
                      x: `${offset * 82}%`,
                      scale: isActive ? 1.35 : Math.max(0.65, 0.85 - absOffset * 0.1),
                      opacity: absOffset > 2 ? 0.3 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    style={{
                      transformStyle: 'preserve-3d',
                      zIndex: 10 - absOffset,
                    }}
                    onClick={() => !isActive && setActiveVideo(i)}
                  >
                    <div
                      className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow ${
                        isActive ? 'shadow-2xl ring-3 ring-honey/50' : 'hover:shadow-xl'
                      }`}
                    >
                      <div className="aspect-video relative">
                        {isActive ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                            title="Kath Bee Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full absolute inset-0"
                          />
                        ) : (
                          <div className="relative group">
                            <img
                              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                              alt="Kath Bee Video thumbnail"
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                              <div className="w-11 h-11 md:w-14 md:h-14 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                                <Play size={22} className="text-charcoal ml-0.5" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Navigation arrows */}
              {activeVideo > 0 && (
                <button
                  onClick={() => setActiveVideo(prev => prev - 1)}
                  className="absolute left-2 md:left-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Previous video"
                >
                  <ChevronLeft size={24} className="text-charcoal" />
                </button>
              )}
              {activeVideo < kathVideos.length - 1 && (
                <button
                  onClick={() => setActiveVideo(prev => prev + 1)}
                  className="absolute right-2 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Next video"
                >
                  <ChevronRight size={24} className="text-charcoal" />
                </button>
              )}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {kathVideos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === activeVideo ? 'bg-honey w-8' : 'bg-charcoal/20 hover:bg-charcoal/40 w-2.5'
                  }`}
                  aria-label={`Video ${i + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* YouTube CTA */}
          <AnimatedSection delay={0.1} className="text-center mt-8">
            <a
              href="https://www.youtube.com/kathbeesongs4kids/?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#FF0000] text-white font-bold rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-transform no-underline inline-flex items-center gap-2"
            >
              <Youtube size={22} />
              Subscribe — 70+ Videos
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Spotify Music Section */}
      <section className="py-20 md:py-28 bg-warm-white wave-divider">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Listen on Spotify 🎵</h2>
            <p className="text-lg text-charcoal/60">
              Stream over 100 songs on your favourite platform
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg mb-6">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/5pYeD8r1vE9mMyA9qAs7qk?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Kath Bee on Spotify"
              />
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {musicPlatforms.map((platform, i) => (
              <AnimatedSection key={platform.name} delay={i * 0.05}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:-translate-y-1 hover:shadow-lg transition-all no-underline text-charcoal font-semibold text-sm"
                >
                  <ExternalLink size={18} style={{ color: platform.color }} className="group-hover:scale-110 transition-transform" />
                  {platform.name}
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Socials Feed Cube */}
      <section className="py-20 md:py-28 bg-charcoal text-white relative overflow-hidden">
        <span className="absolute top-12 right-12 text-4xl opacity-10 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 4s ease-in-out infinite' }}>🐝</span>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl text-white mb-3">Socials Feed 🌐</h2>
            <p className="text-lg text-white/70 mb-2">Find Kath everywhere — hover to pause!</p>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* The 3D Cube */}
            <AnimatedSection className="flex-shrink-0">
              <div className="cube-scene">
                <div className="cube">
                  {cubeFaces.map((face, i) => {
                    const faceNames = ['front', 'right', 'back', 'left', 'top', 'bottom'] as const
                    const Icon = face.icon
                    return (
                      <a
                        key={face.platform}
                        href={face.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`cube-face cube-face--${faceNames[i]} ${face.bg} text-white no-underline hover:brightness-110 transition-all`}
                      >
                        <Icon size={48} className="mb-3" />
                        <span className="font-display text-xl font-bold">{face.platform}</span>
                        <span className="text-white/80 text-sm mt-1">{face.text}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Social links list */}
            <div className="flex-grow w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cubeFaces.map((face, i) => {
                  const Icon = face.icon
                  return (
                    <AnimatedSection key={face.platform} delay={i * 0.05}>
                      <a
                        href={face.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all no-underline"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: face.color }}
                        >
                          <Icon size={22} color="white" />
                        </div>
                        <div>
                          <span className="text-white font-bold block">{face.platform}</span>
                          <span className="text-white/50 text-sm">{face.text}</span>
                        </div>
                        <ArrowRight size={16} className="ml-auto text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all" />
                      </a>
                    </AnimatedSection>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bee-Spoke Songs */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-honey to-honey-dark text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-3">Bee-Spoke Songs 🐝</h2>
            <p className="text-lg text-white/80">Custom songs crafted just for you</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 0.1}>
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-5 ${serviceColors[service.color] || 'bg-honey'}`}>
                    {service.emoji}
                  </div>
                  <h3 className="text-xl mb-3 text-white">{service.title}</h3>
                  <p className="text-white/80 mb-5 leading-relaxed text-sm flex-grow">
                    {service.description}
                  </p>
                  <Link
                    to="/commission-a-song"
                    className="group text-honey-light font-semibold inline-flex items-center gap-2 transition-all no-underline text-sm"
                  >
                    {service.ctaText}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Free Stuff */}
      <section className="py-20 md:py-28 bg-white wave-divider wave-divider-cream">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">Free Stuff! 🎁</h2>
            <p className="text-lg text-charcoal/60">
              Download colouring sheets, lyrics, and activity worksheets
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {freeDownloads.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-cream rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <span className="text-4xl block mb-4">{item.emoji}</span>
                  <h3 className="text-lg mb-2 text-charcoal">{item.title}</h3>
                  <p className="text-charcoal/60 mb-5 text-sm flex-grow">{item.description}</p>
                  <Link to="/extras" className="btn btn-primary text-sm px-6 py-2.5 mx-auto">
                    {item.ctaText}
                  </Link>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Song Titles Ribbon */}
      <section className="py-6 bg-cream overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
          {['Individuality', 'Dad I Wanna Be a Camel', 'E Tū Tāngata', 'Sprinkle A Little Sunshine', 'Magic in Me', 'Dragons Under My Bed', 'I Love Life', 'Individuality', 'Dad I Wanna Be a Camel', 'E Tū Tāngata', 'Sprinkle A Little Sunshine', 'Magic in Me'].map((song, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 text-honey-dark/40 text-lg font-bold">
              <span className="text-honey/40">🎵</span>
              {song}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-cream relative overflow-hidden">
        <span className="absolute top-10 left-8 text-5xl opacity-5 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 5s ease-in-out infinite' }}>⭐</span>
        <span className="absolute bottom-16 right-12 text-4xl opacity-5 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 4s ease-in-out 1s infinite' }}>🎵</span>

        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block bg-honey/10 text-honey-dark font-bold text-sm px-4 py-1.5 rounded-full mb-4">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl text-charcoal mb-3">What People Say</h2>
            <p className="text-charcoal/50 text-lg">Loved by parents, teachers & children across New Zealand</p>
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
                    className={`bg-white rounded-2xl p-7 shadow-md border-t-4 ${accents[i % 3]} h-full flex flex-col relative`}
                  >
                    {/* Star rating */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-honey text-lg">&#9733;</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-charcoal/80 text-base leading-relaxed mb-6 flex-grow italic">
                      "{t.quote}"
                    </p>

                    {/* Author */}
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

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="text-5xl block mb-4">💬</span>
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4">Get in Touch</h2>
            <p className="text-lg text-charcoal/60 mb-8">
              Questions, commissions, or just want to say hi?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary text-lg px-8">
                Send a Message
              </Link>
              <a
                href="mailto:songs4kids@gmail.com"
                className="btn btn-secondary"
              >
                ✉️ songs4kids@gmail.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
