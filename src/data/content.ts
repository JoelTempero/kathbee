import type { Award, Service, Testimonial, FunFact, FreeDownload, Book } from '../types'

export const awards: Award[] = [
  { year: '2022', title: 'APRA Best Children\'s Song — E Tu Tangata', isWinner: true },
  { year: '2020', title: 'APRA Best Children\'s Song — I Love Life', isWinner: true },
  { year: '2019', title: 'APRA Children\'s Video of the Year — Sprinkle A Little Sunshine', isWinner: true },
  { year: '2014', title: 'APRA Children\'s Video of the Year — Dragons Under My Bed', isWinner: true },
  { year: '2010', title: 'APRA Children\'s Video of the Year — Individuality', isWinner: true },
  { year: '2019', title: 'International Songwriting Competition Finalist', isWinner: false },
  { year: '2016', title: 'International Songwriting Competition Finalist', isWinner: false },
  { year: '2014', title: 'International Songwriting Competition Finalist', isWinner: false },
]

export const services: Service[] = [
  {
    id: '1',
    slug: 'personalised-birthday-songs',
    title: 'Personalised Birthday Songs',
    emoji: '🎂',
    description: 'Surprise your child on their birthday or any special occasion with their own personalised song! Kath will gather all the interesting, fun and quirky things about your child to create something truly special.',
    ctaText: 'Enquire Now',
    color: 'coral',
  },
  {
    id: '2',
    slug: 'commercial-commissions',
    title: 'Commercial Commissions',
    emoji: '🎬',
    description: 'Looking for a memorable song or jingle for your Advertisement, TV Show, YouTube video, Company, Conference, Musical or School Centennial? Kath will cleverly craft one especially for you.',
    ctaText: 'Get in Touch',
    color: 'sky',
  },
  {
    id: '3',
    slug: 'singing-telegrams',
    title: 'Singing Telegrams',
    emoji: '🎤',
    description: 'A fun, old-fashioned singing telegram for birthdays, bridal showers and more! Kath writes a special song woven into one of your loved one\'s favourite tunes. Available in person (Nelson area), via Zoom, or as a video.',
    ctaText: 'Book Now',
    color: 'lavender',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: "Kath's songs definitely have the X-Factor - all my children LOVE them!",
    author: 'Ali Caldwell',
    role: 'Music Teacher, Dunedin, NZ',
  },
  {
    quote: 'Kath is the Paul McCartney of children\'s songwriting.',
    author: 'Chris Lam Sam',
    role: "NZ Children's Entertainer & Founder of The Funky Monkeys",
  },
  {
    quote: 'What impressed us the most was how the kaupapa of E Tū Tāngata was captured so beautifully into the song we commissioned. The song has gone viral due to the creative genius of Kath Bee and her team.',
    author: 'Jay Geldard',
    role: 'Founder, E Tū Tāngata',
  },
]

export const funFacts: FunFact[] = [
  { emoji: '⚽', fact: 'Kath played football from age 12 to 40 and represented Nelson as a left back/sweeper!' },
  { emoji: '🥜', fact: 'She\'s had heaps of jobs — from cleaning to being a Tour Guide at Pic\'s Peanut Butter!' },
  { emoji: '🎵', fact: 'Kath has written over 100 original children\'s songs' },
  { emoji: '🏆', fact: 'Five-time APRA Award winner' },
  { emoji: '📚', fact: 'Published author of three picture books' },
  { emoji: '🌏', fact: 'Three-time International Songwriting Competition Finalist' },
  { emoji: '📻', fact: 'Produces and hosts "The Kids\' Mix" radio show on FreshFM' },
  { emoji: '🎤', fact: 'Has entertained tens of thousands of children across NZ over 20+ years' },
  { emoji: '🐉', fact: 'Her book "Dragons Under My Bed" was published by Duck Creek Press in 2017' },
  { emoji: '🦜', fact: 'Wrote a book about a dancing kākāpō called Dougal!' },
  { emoji: '🎹', fact: 'Teaches songwriting at the Nelson Centre of Musical Arts' },
  { emoji: '📺', fact: 'Has over 70 videos on her YouTube channel' },
  { emoji: '📺', fact: 'Wrote songs for TVNZ\'s Poppet Stars, Sing Up UK, and E Tū Tāngata' },
  { emoji: '🇳🇿', fact: 'Based in beautiful Nelson / Whakatū, New Zealand' },
  { emoji: '🐝', fact: 'The "Bee" is real — it\'s actually her name!' },
]

export const freeDownloads: FreeDownload[] = [
  {
    title: 'Colouring Sheets',
    emoji: '🎨',
    description: 'Dragons, bees, camels and more! Print and colour characters from Kath\'s songs.',
    ctaText: 'Download Free',
  },
  {
    title: 'Song Lyrics',
    emoji: '📝',
    description: 'All lyrics available as free PDF downloads. Perfect for singing along!',
    ctaText: 'Get Lyrics',
  },
  {
    title: 'Worksheets',
    emoji: '📚',
    description: "Educational activity sheets for ages 7-12 to accompany songs like 'Magic in Me' and 'I Love Life'.",
    ctaText: 'Download Free',
  },
]

export const books: Book[] = [
  {
    title: 'Dragons Under My Bed',
    year: '2017',
    publisher: 'Duck Creek Press',
  },
  {
    title: 'Dougal the Dancing Kākāpō',
    year: '2023',
    publisher: 'Bateman Books',
  },
  {
    title: 'I Can Do It!',
    year: '2024',
    publisher: 'Scholastic',
  },
]

export const images = {
  logo: 'https://static.wixstatic.com/media/bffd3d_0318055b4f954e83ba464e3a589c9e3e~mv2.png/v1/fill/w_237,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(25).png',
  logoBanner: 'https://static.wixstatic.com/media/bffd3d_4b4bf3b7837543e5bd55a3f90b2f3b81~mv2.jpg/v1/crop/x_17,y_33,w_1193,h_571/fill/w_668,h_321,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bffd3d_4b4bf3b7837543e5bd55a3f90b2f3b81~mv2.jpg',
  profilePic: 'https://static.wixstatic.com/media/bffd3d_0318055b4f954e83ba464e3a589c9e3e~mv2.png/v1/fill/w_237,h_238,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(25).png',
  aboutPortrait: 'https://static.wixstatic.com/media/bffd3d_4f153477965440908db6739769caca7e~mv2.jpeg/v1/fill/w_500,h_500,al_c,q_80,enc_avif,quality_auto/c1a3P16w%20(2).jpeg',
}
