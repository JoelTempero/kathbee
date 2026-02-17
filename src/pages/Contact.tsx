import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import PageHero from '../components/ui/PageHero'
import SocialIcons from '../components/ui/SocialIcons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Questions, commissions, or just want to say hi?"
        emoji="💬"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl text-charcoal mb-6">Let's Connect!</h2>
              <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
                Whether you're interested in a Bee-Spoke song, want to book a performance, or just
                want to chat about music for kids, I'd love to hear from you.
              </p>

              <div className="space-y-5 mb-8">
                <a
                  href="mailto:songs4kids@gmail.com"
                  className="flex items-center gap-4 p-4 bg-cream rounded-xl hover:bg-honey/10 transition-colors no-underline group"
                >
                  <div className="w-12 h-12 bg-honey rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} color="white" />
                  </div>
                  <div>
                    <span className="text-sm text-charcoal/50 block">Email</span>
                    <span className="text-honey-dark font-bold group-hover:text-honey transition-colors">
                      songs4kids@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-cream rounded-xl">
                  <div className="w-12 h-12 bg-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} color="white" />
                  </div>
                  <div>
                    <span className="text-sm text-charcoal/50 block">Location</span>
                    <span className="text-charcoal font-bold">Nelson / Whakatū, New Zealand</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg text-charcoal mb-4">Find me online</h3>
                <SocialIcons />
              </div>

              <div className="mt-8 p-5 bg-honey/10 rounded-xl border-2 border-honey/20">
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  <strong className="text-charcoal">Looking for a Bee-Spoke Song?</strong> Check out
                  the{' '}
                  <Link to="/commission-a-song" className="text-honey-dark font-bold no-underline hover:underline">
                    Commission a Song
                  </Link>{' '}
                  page for details on personalised birthday songs, commercial commissions, and
                  singing telegrams!
                </p>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              {submitted ? (
                <div className="bg-cream rounded-2xl p-12 text-center shadow-lg">
                  <span className="text-6xl block mb-4">🐝</span>
                  <h3 className="text-2xl text-charcoal mb-3">Thank you!</h3>
                  <p className="text-charcoal/60 text-lg mb-6">
                    Your message has been sent. Kath will be in touch soon!
                  </p>
                  <Link to="/" className="group inline-flex items-center gap-2 text-honey-dark font-bold no-underline">
                    Back to Home
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-warm-white rounded-2xl p-6 md:p-8 shadow-lg space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="What's your name?"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-body focus:border-honey focus:ring-1 focus:ring-honey outline-none transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-body focus:border-honey focus:ring-1 focus:ring-honey outline-none transition-colors bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2">
                      What's this about?
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-body focus:border-honey focus:ring-1 focus:ring-honey outline-none transition-colors bg-white"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="birthday-song">Birthday Song Commission</option>
                      <option value="commercial">Commercial Commission</option>
                      <option value="singing-telegram">Singing Telegram</option>
                      <option value="performance">Performance Booking</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me what you're thinking..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-base font-body focus:border-honey focus:ring-1 focus:ring-honey outline-none transition-colors resize-y bg-white"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full justify-center text-lg">
                    Send Message 🐝
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
