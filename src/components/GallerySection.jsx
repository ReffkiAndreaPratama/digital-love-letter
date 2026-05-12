import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DEFAULT_PHOTOS = [
  { id: 1, src: '/gallery1.png', caption: 'Senja Bersamamu 🌅' },
  { id: 2, src: '/gallery2.png', caption: 'Bunga Sakura 🌸' },
  { id: 3, src: '/gallery3.png', caption: 'Pagi Istimewa ☕' },
  { id: 4, src: '/gallery4.png', caption: 'Malam Berbintang ✨' },
  { id: 5, src: '/gallery5.png', caption: 'Bunga Untukmu 🌹' },
  { id: 6, src: '/gallery6.png', caption: 'Pantai Impian 🌊' },
]

function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lightbox-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className="relative max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(255,107,157,0.3)' }}>
          <img src={photo.src} alt={photo.caption} className="w-full h-auto max-h-[70vh] object-cover" />
        </div>

        {/* Caption */}
        <p className="text-center mt-4 font-playfair text-lg" style={{ color: '#FFB3C6' }}>
          {photo.caption}
        </p>

        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: 'rgba(255,107,157,0.4)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,107,157,0.5)' }}
        >
          ✕
        </button>
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
        >
          ›
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function GallerySection() {
  const [photos, setPhotos] = useState(DEFAULT_PHOTOS)
  const [lightbox, setLightbox] = useState(null) // index
  const fileRef = useRef(null)

  const handleUpload = useCallback((e) => {
    const files = Array.from(e.target.files)
    files.forEach((file) => {
      const url = URL.createObjectURL(file)
      setPhotos((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), src: url, caption: file.name.replace(/\.[^.]+$/, '') + ' 💕' },
      ])
    })
  }, [])

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevPhoto = () => setLightbox((i) => (i - 1 + photos.length) % photos.length)
  const nextPhoto = () => setLightbox((i) => (i + 1) % photos.length)

  return (
    <section id="gallery" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: '#FFB3C6' }}>
            📸 Galeri kenangan
          </p>
          <h2 className="section-title gradient-text">Momen Terbaik Kita</h2>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,179,198,0.55)' }}>
            Setiap gambar menyimpan seribu kata yang tak terucap
          </p>

          {/* Upload button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => fileRef.current?.click()}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              background: 'rgba(255,107,157,0.12)',
              border: '1px solid rgba(255,107,157,0.35)',
              color: '#FFB3C6',
              backdropFilter: 'blur(8px)',
            }}
          >
            📷 Upload Foto Kamu
          </motion.button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 20 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              style={{ border: '1px solid rgba(255,107,157,0.2)' }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(90,0,40,0.85), transparent)' }}
              >
                <p className="text-sm font-medium text-white font-dancing">{photo.caption}</p>
              </div>
              {/* Heart badge */}
              <div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ fontSize: '18px', filter: 'drop-shadow(0 0 8px rgba(255,107,157,0.8))' }}
              >
                💖
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            photo={photos[lightbox]}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
