import { motion } from 'framer-motion'

export default function ParallaxBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Deep gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, #3d001a 0%, #1a0010 35%, #0d0008 70%, #000005 100%)',
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="orb w-96 h-96 bg-rose-600"
        style={{ top: '10%', left: '5%' }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb w-80 h-80 bg-pink-500"
        style={{ top: '60%', right: '5%' }}
        animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="orb w-64 h-64 bg-rose-400"
        style={{ bottom: '20%', left: '30%' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="orb w-72 h-72 bg-pink-700"
        style={{ top: '40%', left: '60%' }}
        animate={{ x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,157,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,157,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,0,16,0.8), transparent)',
        }}
      />
      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgba(13,0,8,0.8), transparent)',
        }}
      />
    </div>
  )
}
