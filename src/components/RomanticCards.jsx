import { motion } from 'framer-motion'

const CARDS = [
  {
    icon: '🌹',
    title: 'Cinta',
    desc: 'Perasaan sederhana yang terus tumbuh setiap hari, seperti bunga yang mekar tak henti-hentinya.',
    color: 'from-rose-600/30 to-pink-800/20',
    glow: 'rgba(244,63,94,0.3)',
    delay: 0,
  },
  {
    icon: '✨',
    title: 'Kenangan',
    desc: 'Setiap momen bersamamu selalu jadi cerita terbaik yang selalu ingin aku ceritakan ulang.',
    color: 'from-pink-600/30 to-rose-900/20',
    glow: 'rgba(236,72,153,0.3)',
    delay: 0.15,
  },
  {
    icon: '💌',
    title: 'Harapan',
    desc: 'Semoga kita terus berjalan bersama sejauh mungkin, mengukir kisah yang tak pernah usai.',
    color: 'from-fuchsia-700/30 to-pink-900/20',
    glow: 'rgba(192,38,211,0.25)',
    delay: 0.3,
  },
]

export default function RomanticCards() {
  return (
    <section id="cards" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: '#FFB3C6' }}>
            Tiga hal tentang kita
          </p>
          <h2 className="section-title gradient-text">Rasa yang Kugenggam</h2>
          <div className="mt-4 flex justify-center gap-2">
            {['💕', '🌸', '💕'].map((e, i) => (
              <span key={i} className="text-lg opacity-60">{e}</span>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: card.delay, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.04, y: -8 }}
              className="glass-card p-8 flex flex-col items-center text-center group cursor-default"
              style={{
                background: `linear-gradient(135deg, ${card.color.replace('from-', '').split(' ')[0]}, ${card.color.split(' ').pop()})`,
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-5xl mb-5 group-hover:animate-float"
                style={{ filter: `drop-shadow(0 0 16px ${card.glow})` }}
              >
                {card.icon}
              </motion.div>

              {/* Title */}
              <h3
                className="font-playfair text-2xl font-bold mb-4 gradient-text"
              >
                {card.title}
              </h3>

              {/* Divider */}
              <div
                className="w-12 h-0.5 mb-5 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${card.glow.replace('0.3)', '0.8)').replace('0.25)', '0.8)')}, transparent)` }}
              />

              {/* Description */}
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: 'rgba(255,220,230,0.85)' }}
              >
                {card.desc}
              </p>

              {/* Bottom glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-6 text-xs tracking-widest uppercase"
                style={{ color: card.glow.replace('rgba(', 'rgb(').replace(',0.3)', ')').replace(',0.25)', ')') }}
              >
                ✦ selalu ✦
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
