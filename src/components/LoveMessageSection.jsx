import { motion } from 'framer-motion'

const QUOTES = [
  {
    text: 'Di antara banyak hal indah di dunia ini, aku bersyukur bisa menemukan seseorang sepertimu.',
    author: '— untukmu, selalu',
  },
  {
    text: 'Kamu bukan hanya bagian dari hariku. Kamu adalah alasanku menyambut pagi dengan senyum.',
    author: '— dari hatiku',
  },
  {
    text: 'Bersamamu, waktu terasa terlalu singkat. Dan tanpamu, sedetik pun terasa lama.',
    author: '— rinduku untukmu',
  },
]

export default function LoveMessageSection() {
  return (
    <section id="message" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: '#FFB3C6' }}>
            💌 Surat untuk kamu
          </p>
          <h2 className="section-title gradient-text">Kata-Kata Untukmu</h2>
        </motion.div>

        {/* Quote cards */}
        <div className="flex flex-col gap-8">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.15, type: 'spring', stiffness: 80 }}
              className="glass-card p-8 md:p-10 relative overflow-hidden"
            >
              {/* Big decorative quote mark */}
              <div
                className="absolute -top-2 -left-2 font-playfair text-9xl leading-none select-none pointer-events-none"
                style={{ color: 'rgba(255,107,157,0.08)', fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              {/* Glow orb */}
              <div
                className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(255,107,157,0.15) 0%, transparent 70%)',
                }}
              />

              <blockquote className="relative z-10">
                <p
                  className="font-playfair text-lg md:text-xl leading-relaxed italic mb-6"
                  style={{ color: 'rgba(255,225,235,0.95)' }}
                >
                  "{q.text}"
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-8 h-0.5 rounded" style={{ background: 'linear-gradient(90deg, #FF6B9D, transparent)' }} />
                  <span className="text-sm font-medium tracking-wide" style={{ color: '#FF6B9D' }}>
                    {q.author}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Bottom heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
          className="text-center mt-12 text-4xl animate-float"
        >
          💝
        </motion.div>
      </div>
    </section>
  )
}
