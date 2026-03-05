'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu/', label: 'Menu' },
  { href: '/our-story/', label: 'Our Story' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/private-dining/', label: 'Private Dining' },
  { href: '/contact/', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled
            ? 'py-3 backdrop-blur-md shadow-sm'
            : 'py-5'
        }`}
        style={{
          backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <h1 className="font-serif text-[28px] md:text-[32px] font-medium tracking-[0.08em]"
                style={{ color: 'var(--text-primary)' }}>
              S
              <span className="text-accent" style={{ color: 'var(--accent)' }}>O</span>
              LETO
            </h1>
            <p className="text-[8px] tracking-[0.35em] uppercase font-sans font-medium -mt-1"
               style={{ color: 'var(--text-secondary)' }}>
              Bistro Trattoria Italiana
            </p>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`link-underline text-[13px] font-medium tracking-[0.12em] uppercase transition-colors duration-300 ${
                  pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                    ? ''
                    : ''
                }`}
                style={{ color: 'var(--text-primary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: theme toggle + book CTA + hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 transition-transform duration-300 hover:scale-110"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              style={{ color: 'var(--text-primary)' }}
            >
              {theme === 'light' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>

            {/* Book CTA - Desktop */}
            <a
              href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block btn-primary"
            >
              Book a Table
            </a>

            {/* Hamburger - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
              aria-label="Toggle menu"
            >
              <span
                className="w-6 h-[1.5px] transition-all duration-500 ease-luxury"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  transform: isOpen ? 'rotate(45deg) translateY(3.75px)' : 'none',
                }}
              />
              <span
                className="w-6 h-[1.5px] transition-all duration-500 ease-luxury"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="w-6 h-[1.5px] transition-all duration-500 ease-luxury"
                style={{
                  backgroundColor: 'var(--text-primary)',
                  transform: isOpen ? 'rotate(-45deg) translateY(-3.75px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: 'var(--bg-primary)' }}
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    href={link.href}
                    className="font-serif text-h3 tracking-wide transition-colors duration-300"
                    style={{ color: pathname === link.href ? 'var(--accent)' : 'var(--text-primary)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4"
              >
                <a
                  href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Table
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
