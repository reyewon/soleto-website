'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

type Category = 'all' | 'food' | 'interior' | 'drinks'

interface GalleryImage {
  src: string
  alt: string
  category: Category
  span?: string
}

const galleryImages: GalleryImage[] = [
  // Food
  { src: '/images/hero-lobster.jpg', alt: 'Fresh lobster on Italian ceramic', category: 'food', span: 'col-span-2 row-span-2' },
  { src: '/images/food/jan-1.jpg', alt: 'Fresh oysters on ice', category: 'food' },
  { src: '/images/food/oct-3.jpg', alt: 'Beautifully plated dish', category: 'food' },
  { src: '/images/food/jan-30.jpg', alt: 'Seared scallops with guanciale', category: 'food' },
  { src: '/images/food/oct-40.jpg', alt: 'Rib-eye steak with fries', category: 'food', span: 'col-span-2' },
  { src: '/images/food/jul-2.jpg', alt: 'Meringue dessert with berries', category: 'food' },
  { src: '/images/food/oct-20.jpg', alt: 'Pappardelle ragu', category: 'food' },
  { src: '/images/food/jan-49.jpg', alt: 'Surf and turf', category: 'food', span: 'col-span-2' },
  { src: '/images/food/jan-20.jpg', alt: 'Dover sole with capers', category: 'food' },
  { src: '/images/food/oct-60.jpg', alt: 'Gnocchi with sage', category: 'food' },
  { src: '/images/food/jul-7.jpg', alt: 'Seafood risotto', category: 'food' },
  { src: '/images/food/jan-40.jpg', alt: 'Salt-baked whole fish', category: 'food', span: 'col-span-2' },
  // Interior
  { src: '/images/interior/dining-room.jpg', alt: 'Main dining room', category: 'interior', span: 'col-span-2' },
  { src: '/images/interior/flowers-painting.jpg', alt: 'Oyster painting and flowers', category: 'interior' },
  { src: '/images/interior/wine-cabinet.jpg', alt: 'Wine cabinet corner table', category: 'interior' },
  { src: '/images/interior/table-lamp.jpg', alt: 'Brass table lamp', category: 'interior' },
  { src: '/images/interior/chandelier-room.jpg', alt: 'Private dining room with chandelier', category: 'interior', span: 'col-span-2 row-span-2' },
  { src: '/images/interior/wall-art.jpg', alt: 'Gold-framed artwork on teal walls', category: 'interior' },
  { src: '/images/interior/peek-through.jpg', alt: 'View through the dining room', category: 'interior' },
  { src: '/images/interior/flowers-curtain.jpg', alt: 'Fresh flowers and navy curtains', category: 'interior' },
  { src: '/images/interior/wine-display.jpg', alt: 'Wine and lamp display', category: 'interior' },
  // Drinks
  { src: '/images/drinks/cocktail.jpg', alt: 'Cucumber champagne cocktail', category: 'drinks' },
  { src: '/images/drinks/champagne-detail.jpg', alt: 'Champagne bucket', category: 'drinks' },
  { src: '/images/drinks/wine-bottles.jpg', alt: 'Fine wine collection', category: 'drinks' },
]

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'food', label: 'Food' },
  { value: 'interior', label: 'Interior' },
  { value: 'drinks', label: 'Drinks' },
]

export default function GalleryPage() {
  const [active, setActive] = useState<Category>('all')
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = active === 'all' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/interior/chandelier-room.jpg"
          alt="Soleto private dining room"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-tagline text-gold-500">Soleto</p>
          <h1 className="font-serif text-h1 text-white mt-2">Gallery</h1>
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
                className={`text-[13px] font-medium tracking-[0.12em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                  active === cat.value ? '' : 'border-transparent'
                }`}
                style={{
                  color: active === cat.value ? 'var(--accent)' : 'var(--text-secondary)',
                  borderColor: active === cat.value ? 'var(--accent)' : 'transparent',
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
                  onClick={() => setLightbox(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
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
                src={lightbox}
                alt="Gallery image"
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

      {/* CTA */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              Follow Us
            </p>
            <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
              See More on Instagram
            </h2>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/soletoitalian/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
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
