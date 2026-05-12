import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
      style={{ zIndex: 10 }}
    >
      {/* Cinematic top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }}
      />

      {/* Small label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-6"
      >
        <span
          className="text-xs tracking-[0.4em] uppercase font-medium px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255,107,157,0.12)',
            border: '1px solid rgba(255,107,157,0.3)',
            color: '#FFB3C6',
          }}
        >
          ✨ Sebuah pesan dari hatiku ✨
        </span>
      </motion.div>

      {/* Main title with heartbeat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
        className="mb-6"
      >
        <h1
          className="section-title gradient-text"
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          <span className="inline-block animate-heartbeat">Untuk</span>{' '}
          <span className="inline-block animate-heartbeat" style={{ animationDelay: '0.2s' }}>
            Kamu
          </span>{' '}
          <span
            className="inline-block animate-heartbeat"
            style={{ animationDelay: '0.4s', filter: 'drop-shadow(0 0 20px rgba(255,107,157,0.8))' }}
          >
            💖
          </span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9 }}
        className="font-dancing text-2xl md:text-3xl mb-4"
        style={{ color: '#FFB3C6', maxWidth: '600px', lineHeight: 1.6 }}
      >
        Karena kamu adalah alasan terbaik<br />untuk tersenyum setiap harinya
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="text-sm tracking-widest mb-12"
        style={{ color: 'rgba(255,179,198,0.5)' }}
      >
        — scroll untuk melanjutkan —
      </motion.p>

      {/* Hero decorative divider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="flex items-center gap-4"
        style={{ color: 'rgba(255,107,157,0.4)' }}
      >
        <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D)' }} />
        <span className="text-2xl animate-pulse">💗</span>
        <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, #FF6B9D, transparent)' }} />
      </motion.div>

      {/* Cinematic bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }}
      />
    </section>
  )
}
