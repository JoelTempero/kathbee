import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream pt-20 relative overflow-hidden">
      <span
        className="absolute top-[20%] left-[15%] text-4xl opacity-10 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'bobble 4s ease-in-out infinite' }}
      >
        🎵
      </span>
      <span
        className="absolute bottom-[25%] right-[10%] text-5xl opacity-10 pointer-events-none select-none"
        aria-hidden="true"
        style={{ animation: 'bobble 5s ease-in-out 1s infinite' }}
      >
        🐝
      </span>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 relative z-10"
      >
        <motion.span
          className="text-8xl md:text-9xl block mb-6"
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          🐝
        </motion.span>
        <h1 className="text-6xl md:text-7xl text-charcoal mb-4">404</h1>
        <p className="text-xl md:text-2xl text-charcoal/60 mb-3 font-display">
          Oh buzz!
        </p>
        <p className="text-lg text-charcoal/50 mb-8 max-w-md mx-auto">
          This page seems to have flown away. Let's get you back to the hive!
        </p>
        <Link to="/" className="group btn btn-primary text-lg px-8">
          Fly Back Home
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  )
}
