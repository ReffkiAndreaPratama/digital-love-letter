import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HEART_EMOJIS = ['❤️', '💖', '💕', '💗', '💝', '🌹', '✨']

function BurstHeart({ x, y, emoji, id }) {
  const angle = Math.random() * 360
  const distance = 80 + Math.random() * 120
  const tx = Math.cos((angle * Math.PI) / 180) * distance
  const ty = Math.sin((angle * Math.PI) / 180) * distance

  return (
    <motion.span
      key={id}
      initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      animate={{ x: tx, y: ty, scale: 0, opacity: 0 }}
      transition={{ duration: 0.9 + Math.random() * 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        fontSize: 20 + Math.random() * 16,
        pointerEvents: 'none',
        zIndex: 9999,
        filter: 'drop-shadow(0 0 6px rgba(255,107,157,0.8))',
      }}
    >
      {emoji}
    </motion.span>
  )
}

export default function LoveButton() {
  const [hearts, setHearts] = useState([])
  const btnRef = useRef(null)

  const handleClick = useCallback((e) => {
    const rect = btnRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    const newHearts = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: cx,
      y: cy,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }))
    setHearts((prev) => [...prev, ...newHearts])
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.find((n) => n.id === h.id)))
    }, 1500)
  }, [])

  return (
    <section id="love-button" className="relative py-24 px-6 text-center" style={{ zIndex: 10 }}>
      {/* Burst hearts portal */}
      <AnimatePresence>
        {hearts.map((h) => (
          <BurstHeart key={h.id} {...h} />
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-8"
      >
        <p className="text-xs tracking-[0.4em] uppercase" style={{ color: '#FFB3C6' }}>
          ✨ Klik untuk mengungkapkan ✨
        </p>

        <motion.button
          ref={btnRef}
          id="love-btn"
          onClick={handleClick}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="btn-love font-playfair font-bold text-white px-12 py-5 text-xl md:text-2xl relative overflow-hidden"
          style={{ letterSpacing: '0.05em' }}
        >
          {/* Shimmer shine */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
            }}
            animate={{ backgroundPosition: ['-200% 0', '300% 0'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
          />
          <span className="relative z-10 flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              ❤️
            </motion.span>
            I Love You
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              ❤️
            </motion.span>
          </span>
        </motion.button>

        <p className="text-sm" style={{ color: 'rgba(255,179,198,0.5)' }}>
          — dan selalu akan begitu —
        </p>
      </motion.div>
    </section>
  )
}
