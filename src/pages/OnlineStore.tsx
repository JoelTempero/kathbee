import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'

type Category = 'all' | 'usbees' | 'books' | 'cds' | 'merch' | 'accessories'

interface Product {
  name: string
  price: string
  description: string
  image: string
  category: Category
  badge?: string
  href: string
}

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All Products', emoji: '🛍️' },
  { key: 'usbees', label: 'USBees', emoji: '🐝' },
  { key: 'books', label: 'Picture Books', emoji: '📚' },
  { key: 'cds', label: 'Albums & CDs', emoji: '💿' },
  { key: 'merch', label: 'Merch', emoji: '👕' },
  { key: 'accessories', label: 'Accessories', emoji: '🌈' },
]

const products: Product[] = [
  {
    name: 'Cute Animal USBees',
    price: '$35.00',
    description: 'Adorable animal-shaped USB drives loaded with 85+ songs as MP3s. Multiple animal designs to choose from! Free NZ postage.',
    image: 'https://f4.bcbits.com/img/0026046231_10.jpg',
    category: 'usbees',
    badge: 'Most Popular',
    href: 'https://kathbee.bandcamp.com/merch/cute-animal-usbees-loaded-with-my-songs-free-postage-within-nz',
  },
  {
    name: 'Wooden USBee',
    price: '$39.99',
    description: 'Beautiful wooden USB pre-loaded with 65 songs. Perfect for road trips — hours of sing-along fun!',
    image: 'https://f4.bcbits.com/img/0026034746_10.jpg',
    category: 'usbees',
    href: 'https://kathbee.bandcamp.com/merch/wooden-usbee-with-65-songs',
  },
  {
    name: 'Dragons Under My Bed',
    price: '$20.00',
    description: "Kath's most popular song is now a picture book! A rhyming tale about a messy bedroom where a boy blames dragons. Illustrated by Lisa Allen. Signed by Kath!",
    image: 'https://kiwikidsbooks.nz/wp-content/uploads/2020/12/Dragons-under-my-bed-500x500px.png',
    category: 'books',
    badge: 'APRA Winner',
    href: 'https://kathbee.bandcamp.com/merch/dragons-under-my-bed-book',
  },
  {
    name: 'Dougal the Dancing Kākāpō',
    price: '$21.99',
    description: "Dougal just loves to dance! From hip-hop to tango, ballet to swing — when the music starts, Dougal can't stop. Illustrated by Lisa Allen.",
    image: 'https://www.booktopia.com.au/covers/big/9781776890057/3906/dougal-the-dancing-kakapo.jpg',
    category: 'books',
    href: 'https://www.kathbee.nz/online-store',
  },
  {
    name: 'I Can Do It!',
    price: '$20.00',
    description: "Co-written with Suzy Cato. A sing-along anthem celebrating positive thinking and a can-do attitude! Illustrated by Rose Northey.",
    image: 'https://kiwikidsbooks.nz/wp-content/uploads/2023/09/I-can-do-it-by-Suzy-Cato.png',
    category: 'books',
    badge: 'New',
    href: 'https://kathbee.bandcamp.com/merch/i-can-do-it',
  },
  {
    name: 'Dragons Under My Bed (Album)',
    price: '$10.00',
    description: "Kath's debut album featuring 7 classics including 'Individuality' and 'Dad I Wanna Be a Camel'. Available as CD + digital.",
    image: 'https://f4.bcbits.com/img/a3176227620_10.jpg',
    category: 'cds',
    href: 'https://kathbee.bandcamp.com/album/dragons-under-my-bed',
  },
  {
    name: "I've Got a Dinosaur in My Back Yard!",
    price: '$10.00',
    description: 'A great album for long car trips! 14 tracks of fast songs, slow songs, action songs — all singable and fun!',
    image: 'https://f4.bcbits.com/img/a3221087067_10.jpg',
    category: 'cds',
    href: 'https://kathbee.bandcamp.com/album/ive-got-a-dinosaur-in-my-back-yard',
  },
  {
    name: 'Just Chillin\'',
    price: '$10.00',
    description: "An album for you and the kids to chill out to! Relax, kick back, unwind — or put it on in the bedroom and Kath will sing the kids to sleep.",
    image: 'https://f4.bcbits.com/img/a2109782610_10.jpg',
    category: 'cds',
    href: 'https://kathbee.bandcamp.com/album/just-chillin',
  },
  {
    name: 'Allsorts',
    price: '$10.00',
    description: "A mixed bag of songs for up to 10 year olds (and adults!). Different genres, upbeat originals, fun and thought-provoking lyrics.",
    image: 'https://f4.bcbits.com/img/a3548570842_10.jpg',
    category: 'cds',
    href: 'https://kathbee.bandcamp.com/album/allsorts',
  },
  {
    name: 'Kath Bee T-Shirts',
    price: '$50.00',
    description: "Featuring designs by artist Wyatt Black inspired by Kath's song lyrics. Available in Staple (unisex) and Maple (fitted) styles.",
    image: '',
    category: 'merch',
    href: 'https://www.beautifulthings.nz/kathbee',
  },
  {
    name: 'Song Lyric Art Prints',
    price: '$30.00',
    description: "Beautiful art prints by Wyatt Black with designs inspired by songs like 'Individuality', 'Magic in Me', and 'Sprinkle A Little Sunshine'.",
    image: '',
    category: 'merch',
    href: 'https://www.beautifulthings.nz/kathbee',
  },
  {
    name: 'Carrie Tote Bags',
    price: '$40.00',
    description: "Cream tote bags with Wyatt Black designs. Available with single or double-sided printing. Dragon, fairy, and sunshine designs!",
    image: '',
    category: 'merch',
    href: 'https://www.beautifulthings.nz/kathbee',
  },
  {
    name: 'Song Lyric Badges',
    price: '$8.00',
    description: "37mm pin badges featuring Wyatt Black's colourful designs. Collect dragons, fairies, sunshine and more!",
    image: '',
    category: 'merch',
    href: 'https://www.beautifulthings.nz/kathbee',
  },
  {
    name: 'Rainbow Ribbon Wands',
    price: '$7.99',
    description: "Hand-made rainbow ribbon wands with all 7 colours. Short sticks for safety, lightweight for any age. Personally signed by Kath!",
    image: 'https://f4.bcbits.com/img/0026034822_10.jpg',
    category: 'accessories',
    href: 'https://kathbee.bandcamp.com/merch/rainbow-ribbon-wands',
  },
]

const merchEmojis: Record<string, string> = {
  'Kath Bee T-Shirts': '👕',
  'Song Lyric Art Prints': '🖼️',
  'Carrie Tote Bags': '👜',
  'Song Lyric Badges': '📌',
}

export default function OnlineStore() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <>
      <PageHero
        title="Online Store"
        subtitle="Albums, books, USBees, merch & more"
        emoji="🛍️"
      />

      {/* Category Filter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
                    activeCategory === cat.key
                      ? 'bg-honey text-white border-honey shadow-md'
                      : 'bg-white text-charcoal/70 border-gray-200 hover:border-honey hover:text-honey-dark'
                  }`}
                >
                  <span className="mr-1.5">{cat.emoji}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Product count */}
          <p className="text-center text-charcoal/40 text-sm mb-8">
            Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''} — All prices in NZD
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.05}>
                <motion.a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="group bg-white rounded-2xl border-2 border-gray-100 overflow-hidden h-full flex flex-col hover:shadow-xl hover:border-honey/30 transition-all duration-300 no-underline"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-cream overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-7xl">{merchEmojis[product.name] || '🛍️'}</span>
                      </div>
                    )}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-honey text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-base font-bold text-charcoal mb-1.5 group-hover:text-honey-dark transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-charcoal/50 text-sm leading-relaxed mb-4 flex-grow">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-honey-dark font-bold text-lg">{product.price}</span>
                      <span className="flex items-center gap-1.5 text-sm text-charcoal/40 group-hover:text-honey-dark font-semibold transition-colors">
                        <ShoppingBag size={15} />
                        View
                        <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Full Discography Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-charcoal to-soft-black text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 text-center">
                <span className="text-6xl block mb-2">🎶</span>
                <span className="text-white/50 text-sm font-semibold">30 RELEASES</span>
              </div>
              <div className="text-center md:text-left flex-grow">
                <h2 className="text-2xl md:text-3xl text-white mb-2">Full Digital Discography</h2>
                <p className="text-white/60 text-lg mb-1">
                  Get all 30 releases — over 100 songs — with a 20% discount on Bandcamp.
                </p>
                <p className="text-honey-light font-bold text-xl">$86.80 NZD</p>
              </div>
              <a
                href="https://kathbee.bandcamp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-honey text-white font-bold rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-transform no-underline flex-shrink-0 inline-flex items-center gap-2"
              >
                Bandcamp
                <ExternalLink size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Merch by Wyatt Black */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl text-charcoal mb-3">Merch by Wyatt Black 🎨</h2>
            <p className="text-charcoal/60 max-w-xl mx-auto">
              T-shirts, art prints, tote bags & badges featuring original designs inspired by Kath's song lyrics.
              Designs include dragons, fairies, sunshine, and more!
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-gradient-to-br from-lavender to-sky rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
              <span className="absolute top-4 right-6 text-4xl opacity-20 pointer-events-none select-none" aria-hidden="true" style={{ animation: 'bobble 4s ease-in-out infinite' }}>🐉</span>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {['👕 T-Shirts $50', '🖼️ Art Prints $30', '👜 Tote Bags $40', '📌 Badges $8'].map(item => (
                  <span key={item} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-white/80 text-lg mb-6">
                Available designs: Dragon, "I Love Life", "Magic In Me", "Individuality", "Sprinkle a Little Sunshine", "There are Fairies" & more
              </p>
              <a
                href="https://www.beautifulthings.nz/kathbee"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-lavender font-bold rounded-full px-8 py-3.5 hover:-translate-y-0.5 transition-transform no-underline inline-flex items-center gap-2"
              >
                Browse Merch
                <ExternalLink size={18} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Free Stuff CTA */}
      <section className="py-12 md:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-xl text-charcoal mb-3">Looking for free downloads?</h3>
            <p className="text-charcoal/60 mb-6">
              Colouring sheets, lyrics, and activity worksheets are available for free!
            </p>
            <Link
              to="/extras"
              className="group inline-flex items-center gap-2 text-honey-dark font-bold no-underline"
            >
              Go to Free Downloads
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
