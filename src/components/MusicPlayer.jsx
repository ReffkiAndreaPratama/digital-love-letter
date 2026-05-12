import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Royalty-free romantic BGM
const MUSIC_URL = 'https://www.bensound.com/bensound-music/bensound-romantic.mp3'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [triedAutoplay, setTriedAutoplay] = useState(false)

  // Try autoplay on first user interaction
  useEffect(() => {
    const tryAutoplay = () => {
      if (!triedAutoplay && audioRef.current) {
        audioRef.current
          .play()
          .then(() => setPlaying(true))
          .catch(() => {}) // autoplay blocked
        setTriedAutoplay(true)
        document.removeEventListener('click', tryAutoplay)
        document.removeEventListener('keydown', tryAutoplay)
      }
    }
    document.addEventListener('click', tryAutoplay)
    document.addEventListener('keydown', tryAutoplay)
    return () => {
      document.removeEventListener('click', tryAutoplay)
      document.removeEventListener('keydown', tryAutoplay)
    }
  }, [triedAutoplay])

  const toggle = (e) => {
    e.stopPropagation()
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} loop preload="auto" />

      <motion.button
        id="music-toggle"
        onClick={toggle}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={playing ? 'Mute music' : 'Unmute music'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: 'rgba(255,107,157,0.15)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,107,157,0.35)',
          boxShadow: '0 4px 20px rgba(255,107,157,0.25)',
        }}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div
              key="bars"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex items-end gap-0.5 h-5"
            >
              {[0, 0.1, 0.2, 0.15, 0.05].map((delay, i) => (
                <div
                  key={i}
                  className="music-bar"
                  style={{ animationDelay: `${delay}s`, animationDuration: `${0.6 + i * 0.1}s` }}
                />
              ))}
            </motion.div>
          ) : (
            <motion.span
              key="muted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ fontSize: '20px' }}
            >
              🎵
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip on first load */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-8 right-24 z-50 text-xs px-3 py-1.5 rounded-full"
        style={{
          background: 'rgba(255,107,157,0.15)',
          border: '1px solid rgba(255,107,157,0.3)',
          color: '#FFB3C6',
          backdropFilter: 'blur(8px)',
          whiteSpace: 'nowrap',
        }}
      >
        🎵 Klik untuk musik romantis
      </motion.div>
    </>
  )
}
