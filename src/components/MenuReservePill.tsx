'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

const SCROLL_TRIGGER = 250

/**
 * Mobile-only reserve pill, only mounted on the /menu page.
 *
 * Stays hidden at the very top of the page so it doesn't fight the hero
 * fade-in. Fades in once the visitor has scrolled past the trigger point.
 *
 * Same visual family as the cookies banner — bone bg, hairline border,
 * soft shadow, gentle slide-in. Sits along the bottom of the viewport,
 * full width with a small inset, so it reads as a floating note rather
 * than locked-to-page chrome.
 */
export default function MenuReservePill() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_TRIGGER)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-[180]"
          style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--rule)',
            boxShadow: '0 6px 24px rgba(26, 22, 18, 0.08)',
            padding: '12px 16px',
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <p
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-muted)',
              }}
            >
              Hungry?
            </p>
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: '11px',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}
            >
              Reserve a table
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
