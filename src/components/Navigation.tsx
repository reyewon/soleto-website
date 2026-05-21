'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/menu/', label: 'Menu' },
  { href: '/our-story/', label: 'Story' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/private-dining/', label: 'Private' },
  { href: '/contact/', label: 'Visit' },
]

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [overImage, setOverImage] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // Show nav after the first scroll on the homepage (image-first bleed pattern).
  // Inner pages show the nav from the off.
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(isHome ? y > 80 : true)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Detect when the top of the viewport sits over a section flagged
  // as transparent / image. That flips the nav colour to light.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            setOverImage(el.dataset.navTransparent !== undefined)
          }
        })
      },
      {
        rootMargin: '0px 0px -99% 0px',
        threshold: [0, 0.01],
      }
    )
    document.querySelectorAll('section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navVisible = scrolled || !isHome
  const navInk = overImage ? '#f3ece0' : 'var(--text-primary)'
  const navBg = overImage ? 'transparent' : 'var(--nav-bg)'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          opacity: navVisible || isOpen ? 1 : 0,
          pointerEvents: navVisible || isOpen ? 'auto' : 'none',
          transition: 'opacity 800ms cubic-bezier(0.19, 1, 0.22, 1)',
          backgroundColor: navBg,
          backdropFilter: overImage ? 'none' : 'blur(8px)',
        }}
      >
        <div
          className="relative grid grid-cols-3 items-center px-6 md:px-10"
          style={{ paddingTop: '22px', paddingBottom: '22px' }}
        >
          {/* Left: Menu word, the editorial "word-button" */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="link-underline"
              style={{
                color: navInk,
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: 'var(--step-eyebrow)',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'color 0.6s cubic-bezier(0.19,1,0.22,1)',
              }}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              Menu
            </button>
          </div>

          {/* Centre: small Soleto logo, stacked crossfade between light + dark */}
          <div className="flex justify-center">
            <Link href="/" aria-label="Soleto" className="relative block">
              <div className="relative inline-block">
                <Image
                  src="/images/branding/logo-light.png"
                  alt="Soleto"
                  width={2000}
                  height={357}
                  priority
                  className="h-5 md:h-[22px] w-auto block transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  style={{ opacity: overImage ? 1 : 0 }}
                />
                <Image
                  src="/images/branding/logo-dark.png"
                  alt=""
                  aria-hidden="true"
                  width={2000}
                  height={357}
                  className="absolute top-0 left-0 h-5 md:h-[22px] w-auto transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"
                  style={{ opacity: overImage ? 0 : 1 }}
                />
              </div>
            </Link>
          </div>

          {/* Right: Reserve word */}
          <div className="flex justify-end">
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{
                color: navInk,
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: 'var(--step-eyebrow)',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                transition: 'color 0.6s cubic-bezier(0.19,1,0.22,1)',
              }}
            >
              Reserve
            </a>
          </div>
        </div>

        {/* Hairline below nav, only when scrolled and not over image */}
        <div
          style={{
            height: '1px',
            background: 'var(--rule)',
            opacity: overImage ? 0 : 0.4,
            transition: 'opacity 0.6s ease',
          }}
        />
      </header>

      {/* Full-screen takeover menu, navy backdrop + cream/gold palette */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: '#1d2f3d' }}
          >
            {/* Close X, top-right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-10"
              aria-label="Close menu"
              style={{
                color: '#f3ece0',
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: 'var(--step-eyebrow)',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}
            >
              Close
            </button>

            {/* Centred logo, top, light variant for navy backdrop */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              aria-label="Soleto"
              className="absolute top-6 left-1/2 -translate-x-1/2 md:top-8"
            >
              <Image
                src="/images/branding/logo-light.png"
                alt="Soleto"
                width={2000}
                height={357}
                className="h-5 md:h-[22px] w-auto"
              />
            </Link>

            {/* Vertical anchor list, magazine contents */}
            <nav className="h-full flex flex-col items-center justify-center px-8 gap-6 md:gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.6,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="flex items-baseline gap-4"
                >
                  <span
                    style={{
                      color: '#b89569',
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.27em',
                      fontWeight: 400,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Link
                    href={link.href}
                    className="font-serif"
                    style={{
                      color: pathname === link.href ? '#b89569' : '#f3ece0',
                      fontSize: 'clamp(1.85rem, 5vw, 3.5rem)',
                      fontWeight: 340,
                      fontVariationSettings: "'opsz' 96, 'SOFT' 30, 'WONK' 0",
                      letterSpacing: '-0.005em',
                      lineHeight: 1,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + navLinks.length * 0.06,
                  duration: 0.6,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="mt-10 md:mt-14"
              >
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: '#b89569',
                    background: 'transparent',
                    border: 0,
                    borderBottom: '1px solid currentColor',
                    paddingBottom: '6px',
                  }}
                >
                  Reserve a Table
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
                style={{ color: '#f3ece0', opacity: 0.55 }}
              >
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                  }}
                >
                  11 Commercial Road
                </p>
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                  }}
                  className="tabular"
                >
                  Southampton SO15 1GF
                </p>
              </motion.div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
