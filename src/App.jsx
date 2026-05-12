import FloatingHearts from './components/FloatingHearts'
import SparkleEffect from './components/SparkleEffect'
import ParallaxBackground from './components/ParallaxBackground'
import HeroSection from './components/HeroSection'
import LoveMessageSection from './components/LoveMessageSection'
import RomanticCards from './components/RomanticCards'
import LoveButton from './components/LoveButton'
import MusicPlayer from './components/MusicPlayer'
import CountdownSection from './components/CountdownSection'
import GallerySection from './components/GallerySection'

function SectionDivider({ emoji = '💖' }) {
  return (
    <div className="flex items-center justify-center gap-6 py-4" style={{ zIndex: 10, position: 'relative' }}>
      <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,157,0.3))' }} />
      <span className="text-xl opacity-60">{emoji}</span>
      <div className="h-px flex-1 max-w-xs" style={{ background: 'linear-gradient(90deg, rgba(255,107,157,0.3), transparent)' }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed layers */}
      <ParallaxBackground />
      <FloatingHearts />
      <SparkleEffect />
      <MusicPlayer />

      {/* Scrollable content */}
      <main className="relative" style={{ zIndex: 10 }}>
        <HeroSection />
        <SectionDivider emoji="💌" />
        <LoveMessageSection />
        <SectionDivider emoji="🌹" />
        <RomanticCards />
        <SectionDivider emoji="✨" />
        <LoveButton />
        <SectionDivider emoji="⏳" />
        <CountdownSection />
        <SectionDivider emoji="📸" />
        <GallerySection />

        {/* Footer */}
        <footer className="text-center py-16 px-6" style={{ zIndex: 10, position: 'relative' }}>
          <div className="text-3xl mb-4 animate-heartbeat" style={{ filter: 'drop-shadow(0 0 16px rgba(255,107,157,0.8))' }}>
            💖
          </div>
          <p className="font-dancing text-xl" style={{ color: '#FFB3C6' }}>
            Dibuat dengan cinta, untukmu selamanya.
          </p>
          <p className="text-xs mt-3 tracking-widest" style={{ color: 'rgba(255,179,198,0.35)' }}>
            ✦ &nbsp; selalu &nbsp; ✦
          </p>
        </footer>
      </main>
    </div>
  )
}
