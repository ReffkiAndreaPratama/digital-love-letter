import { useEffect, useRef } from 'react'

const HEARTS = ['❤️', '💖', '💕', '💗', '🌸', '✨', '💝']

export default function FloatingHearts() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function createHeart() {
      const heart = document.createElement('div')
      heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)]
      const size = Math.random() * 20 + 14
      const startX = Math.random() * 100
      const duration = Math.random() * 6 + 7
      const delay = Math.random() * 2

      heart.style.cssText = `
        position: absolute;
        bottom: -50px;
        left: ${startX}%;
        font-size: ${size}px;
        opacity: 0;
        pointer-events: none;
        animation: floatHeart ${duration}s ease-in ${delay}s forwards;
        z-index: 1;
        filter: drop-shadow(0 0 6px rgba(255,107,157,0.6));
      `
      container.appendChild(heart)
      setTimeout(() => heart.remove(), (duration + delay) * 1000)
    }

    const interval = setInterval(createHeart, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
