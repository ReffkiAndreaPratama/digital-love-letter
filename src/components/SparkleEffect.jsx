import { useEffect, useRef } from 'react'

export default function SparkleEffect() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function createSparkle() {
      const sparkle = document.createElement('div')
      const x = Math.random() * 100
      const y = Math.random() * 100
      const size = Math.random() * 12 + 6
      const dur = Math.random() * 2 + 1.5
      const delay = Math.random() * 3

      sparkle.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" fill="#FFB3C6"/>
      </svg>`
      sparkle.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        pointer-events: none;
        opacity: 0;
        --dur: ${dur}s;
        --delay: ${delay}s;
        animation: sparklePop ${dur}s ease-in-out ${delay}s infinite;
        filter: drop-shadow(0 0 4px rgba(255,179,198,0.8));
      `
      container.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), (dur + delay) * 1000 * 3)
    }

    for (let i = 0; i < 20; i++) createSparkle()
    const interval = setInterval(createSparkle, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 2 }}
    />
  )
}
