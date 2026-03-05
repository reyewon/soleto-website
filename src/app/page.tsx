'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const featuredDishes = [
  {
    name: 'Fresh Lobster',
    description: 'Whole lobster, garlic butter, seasonal vegetables',
    image: '/images/hero-lobster.jpg',
    tag: 'Signature',
  },
  {
    name: 'Seared Scallops',
    description: 'Hand-dived scallops, guanciale, whole-grain mustard',
    image: '/images/food/jan-30.jpg',
    tag: 'From the Sea',
  },
  {
    name: 'Pappardelle Ragu',
    description: 'Handmade pappardelle, slow-cooked Bolognese',
    image: '/images/food/oct-20.jpg',
    tag: 'Handmade Pasta',
  },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          <Image
            src="/images/hero-spread.jpg"
            alt="Soleto Italian Restaurant - Beautifully presented dishes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'var(--overlay)' }} />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          >
            <h1 className="font-serif text-white text-display font-medium tracking-wider mb-2">
              S<span className="text-gold-500">O</span>LETO
            </h1>
            <div className="divider-gold !bg-white/60 mx-auto" />
            <p className="font-serif italic text-white/90 text-tagline mt-4">
              Bistro Trattoria Italiana
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white/95 text-[#1e1e1e] text-[13px] font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-gold-600 hover:text-white"
            >
              Book a Table
            </a>
            <Link
              href="/menu/"
              className="inline-block px-10 py-4 border border-white/60 text-white text-[13px] font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-white/10"
            >
              View Menu
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="w-[1px] h-12 bg-white/40"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              Est. Southampton
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-h1 mt-4 text-balance" style={{ color: 'var(--text-primary)' }}>
              A Mediterranean Soul in the Heart of Southampton
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="divider-gold" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-[17px] leading-[1.8] mt-6" style={{ color: 'var(--text-secondary)' }}>
              Steps from the Mayflower Theatre, Soleto brings the warmth of the Mediterranean
              to Commercial Road. Our family kitchen celebrates the finest Italian traditions —
              fresh seafood landed daily, handmade pasta, and premium cuts, all prepared with
              the passion and craft of head chef George Jiojioras.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                From Our Kitchen
              </p>
              <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
                The Soleto Table
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={dish.name} delay={i * 0.15}>
                <Link href="/menu/" className="group block">
                  <div className="img-hover-zoom aspect-[4/5] relative mb-6">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-semibold bg-white/90 dark:bg-navy-900/80 backdrop-blur-sm"
                            style={{ color: 'var(--accent)' }}>
                        {dish.tag}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-h3 group-hover:text-gold-600 transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}>
                    {dish.name}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {dish.description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-14">
              <Link href="/menu/" className="btn-outline">
                Explore the Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="img-hover-zoom aspect-[4/5] relative">
                <Image
                  src="/images/chef/george-cooking.jpg"
                  alt="Head Chef George Jiojioras preparing dishes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:max-w-lg">
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  The Jiojioras Family
                </p>
                <h2 className="font-serif text-h2 mt-3 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Where Greek Heritage Meets Italian Craft
                </h2>
                <div className="divider-gold !mx-0" />
                <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                  George and Dominika Jiojioras bring a lifetime of Mediterranean passion to every
                  plate. With roots in Greece and a deep love for Italian cuisine, George&apos;s
                  kitchen is where tradition meets creativity — from hand-rolled pasta to the
                  freshest seafood, each dish tells a story.
                </p>
                <div className="mt-8">
                  <Link href="/our-story/" className="btn-outline">
                    Our Story
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Theatre Proximity Banner */}
      <section className="relative py-section overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-interior.jpg"
            alt="Soleto restaurant interior"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline text-gold-500">
              Pre-Theatre Dining
            </p>
            <h2 className="font-serif text-h2 text-white mt-3">
              Steps from the Mayflower Theatre
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-white/80">
              Perfectly positioned opposite Southampton&apos;s iconic Mayflower Theatre,
              Soleto is the ideal setting for a memorable evening. Enjoy a leisurely
              Italian meal before the curtain rises, or continue the night with us after
              the show.
            </p>
            <div className="mt-8">
              <a
                href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-white/95 text-[#1e1e1e] text-[13px] font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-gold-600 hover:text-white"
              >
                Reserve for Theatre Night
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Interior Gallery Strip */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                The Space
              </p>
              <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
                An Intimate Setting
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: '/images/interior/dining-room.jpg', alt: 'Main dining room' },
              { src: '/images/interior/flowers-painting.jpg', alt: 'Elegant interior details' },
              { src: '/images/interior/wine-cabinet.jpg', alt: 'Wine cabinet corner' },
              { src: '/images/interior/chandelier-room.jpg', alt: 'Private dining room' },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.1}>
                <Link href="/gallery/" className="img-hover-zoom aspect-square relative block">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link href="/gallery/" className="link-underline text-sm tracking-[0.1em] uppercase font-medium"
                    style={{ color: 'var(--accent)' }}>
                View Full Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews/Social Proof */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              What Our Guests Say
            </p>
            <h2 className="font-serif text-h2 mt-3 mb-12" style={{ color: 'var(--text-primary)' }}>
              Loved by Southampton
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Google */}
              <div className="p-8 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-[2.5rem] font-medium" style={{ color: 'var(--text-primary)' }}>4.7</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>570+ reviews on Google</p>
              </div>

              {/* TripAdvisor */}
              <div className="p-8 border" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: 'var(--accent)' }} fill={i < 4 ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-[2.5rem] font-medium" style={{ color: 'var(--text-primary)' }}>4.5</p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  948+ reviews on TripAdvisor &middot; Travellers&apos; Choice
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              Join Us
            </p>
            <h2 className="font-serif text-h1 mt-3" style={{ color: 'var(--text-primary)' }}>
              Your Table Awaits
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              Whether it&apos;s a pre-theatre dinner, a celebration with family, or a quiet
              evening for two — we&apos;d love to welcome you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Table
              </a>
              <a href="tel:02380234044" className="btn-outline">
                Call Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
