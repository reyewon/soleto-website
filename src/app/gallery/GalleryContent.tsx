'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

type Category = 'all' | 'food' | 'interior' | 'drinks'

interface GalleryImage {
  src: string
  alt: string
  category: Category
  span?: string
  position?: string
}

const galleryImages: GalleryImage[] = [
  { src: '/images/hero-lobster.jpg', alt: 'Fresh lobster on Italian ceramic', category: 'food', span: 'col-span-2 row-span-2', position: 'center 65%' },
  { src: '/images/interior/dining-room.jpg', alt: 'Main dining room', category: 'interior', span: 'col-span-2' },
  { src: '/images/food/jan-1.jpg', alt: 'Fresh oysters on ice', category: 'food' },
  { src: '/images/drinks/cocktail.jpg', alt: 'Cucumber champagne cocktail', category: 'drinks' },
  { src: '/images/interior/flowers-painting.jpg', alt: 'Oyster painting and flowers', category: 'interior' },
  { src: '/images/food/oct-3.jpg', alt: 'Beautifully plated dish', category: 'food' },
  { src: '/images/food/jan-30.jpg', alt: 'Seared scallops with guanciale', category: 'food' },
  { src: '/images/interior/blue-column-view.jpg', alt: 'Candlelit table through blue columns', category: 'interior', span: 'col-span-2 row-span-2' },
  { src: '/images/food/oct-40.jpg', alt: 'Rib-eye steak with fries', category: 'food', span: 'col-span-2' },
  { src: '/images/interior/oyster-art.jpg', alt: 'Oyster artwork and fresh flowers', category: 'interior' },
  { src: '/images/drinks/champagne-detail.jpg', alt: 'Champagne bucket', category: 'drinks' },
  { src: '/images/food/jul-2.jpg', alt: 'Meringue dessert with berries', category: 'food' },
  { src: '/images/food/oct-20.jpg', alt: 'Pappardelle ragu', category: 'food', position: '35% center' },
  { src: '/images/interior/table-lamp.jpg', alt: 'Brass table lamp', category: 'interior' },
  { src: '/images/food/jan-49.jpg', alt: 'Surf and turf', category: 'food', span: 'col-span-2' },
  { src: '/images/interior/wall-art.jpg', alt: 'Gold-framed artwork on teal walls', category: 'interior' },
  { src: '/images/food/jan-20.jpg', alt: 'Dover sole with capers', category: 'food' },
  { src: '/images/drinks/wine-bottles.jpg', alt: 'Fine wine collection', category: 'drinks' },
  { src: '/images/interior/peek-through.jpg', alt: 'View through the dining room', category: 'interior' },
  { src: '/images/food/oct-60.jpg', alt: 'Gnocchi with sage', category: 'food' },
  { src: '/images/interior/flowers-curtain.jpg', alt: 'Fresh flowers and navy curtains', category: 'interior' },
  { src: '/images/food/jul-7.jpg', alt: 'Seafood risotto', category: 'food' },
  { src: '/images/food/jan-40.jpg', alt: 'Salt-baked whole fish', category: 'food', span: 'col-span-2' },
  { src: '/images/interior/painting.jpg', alt: 'Gold-framed painting at Soleto', category: 'interior' },
]

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'food', label: 'Food' },
  { value: 'interior', label: 'Interior' },
  { value: 'drinks', label: 'Drinks' },
]

export default function GalleryContent() {
  const [active, setActive] = useState<Category>('all')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const filtered = active === 'all' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <>
      {/* Hero */}
      <section data-nav-transparent className="relative h-[46vh] min-h-[330px] overflow-hidden seam-btm">
        <ParallaxBg>
          <Image
            src="/images/interior/peek-through.jpg"
            alt="View through the Soleto dining room"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </ParallaxBg>
      </section>

      {/* Page title, book-page opener */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(3.5rem, 9vh, 6.5rem)',
          paddingBottom: 'clamp(1rem, 3vh, 2rem)',
        }}
      >
        <div className="max-w-[880px] mx-auto px-6 text-center">
          <div className="chapterline mb-6">
            <span className="smallcaps">The dining room, the food, the bar</span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'var(--step-h1)', color: 'var(--text-primary)' }}
          >
            Gallery
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 border-b" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className="pb-2 border-b transition-all duration-500"
                style={{
                  fontFamily: 'Newsreader, Georgia, serif',
                  fontSize: 'var(--step-label)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: active === cat.value ? 'var(--text-primary)' : 'var(--text-muted)',
                  borderColor: active === cat.value ? 'var(--text-primary)' : 'transparent',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className={`img-hover-zoom relative cursor-pointer ${img.span || ''}`}
                  onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    style={img.position ? { objectPosition: img.position } : undefined}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Closing, quiet Instagram link */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 12vh, 9rem)',
          paddingBottom: 'clamp(4rem, 12vh, 9rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  maxWidth: '36ch',
                }}
              >
                More on Instagram, freshly added.
              </p>
              <a
                href="https://www.instagram.com/soletoitalian/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic link-underline"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 420,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.005em',
                  lineHeight: 1,
                }}
              >
                @soletoitalian
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
