import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const EVENTS = [
  {
    label: 'Hari Jadian',
    icon: '💑',
    date: new Date('2024-02-14T00:00:00'),
    color: '#FF6B9D',
  },
  {
    label: 'Pertama Bertemu',
    icon: '🌟',
    date: new Date('2024-01-01T00:00:00'),
    color: '#FFB3C6',
  },
  {
    label: 'Anniversary',
    icon: '🎂',
    date: new Date('2025-02-14T00:00:00'),
    color: '#C9184A',
  },
]

function useCountdown(targetDate) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: false })

  useEffect(() => {
    function calculate() {
      const now = new Date()
      const diff = now - targetDate
      const passed = diff > 0
      const absDiff = Math.abs(diff)
      const days = Math.floor(absDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((absDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((absDiff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((absDiff % (1000 * 60)) / 1000)
      setTime({ days, hours, minutes, seconds, passed })
    }
    calculate()
    const id = setInterval(calculate, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}

function DigitCard({ value, label, color }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="glass-card w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2"
      >
        <span className="countdown-digit" style={{ '--gradient-start': color }}>
          {String(value).padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,179,198,0.6)' }}>
        {label}
      </span>
    </div>
  )
}

function CountdownItem({ event }) {
  const time = useCountdown(event.date)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      className="glass-card p-8 text-center"
    >
      {/* Icon */}
      <div className="text-4xl mb-4" style={{ filter: `drop-shadow(0 0 12px ${event.color}88)` }}>
        {event.icon}
      </div>

      {/* Label */}
      <h3 className="font-playfair text-xl font-bold mb-1" style={{ color: event.color }}>
        {event.label}
      </h3>
      <p className="text-xs mb-6" style={{ color: 'rgba(255,179,198,0.5)' }}>
        {time.passed ? '✨ sudah berlalu' : '⏳ menghitung mundur'}
      </p>

      {/* Digit row */}
      <div className="flex items-start justify-center gap-3 md:gap-4">
        <DigitCard value={time.days} label="Hari" color={event.color} />
        <span className="text-2xl mt-3" style={{ color: event.color }}>:</span>
        <DigitCard value={time.hours} label="Jam" color={event.color} />
        <span className="text-2xl mt-3" style={{ color: event.color }}>:</span>
        <DigitCard value={time.minutes} label="Menit" color={event.color} />
        <span className="text-2xl mt-3" style={{ color: event.color }}>:</span>
        <DigitCard value={time.seconds} label="Detik" color={event.color} />
      </div>
    </motion.div>
  )
}

export default function CountdownSection() {
  return (
    <section id="countdown" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: '#FFB3C6' }}>
            ⏳ Perjalanan kita
          </p>
          <h2 className="section-title gradient-text">Waktu Bersamamu</h2>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,179,198,0.55)' }}>
            Setiap detik yang berlalu adalah memori berharga
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((ev) => (
            <CountdownItem key={ev.label} event={ev} />
          ))}
        </div>
      </div>
    </section>
  )
}
