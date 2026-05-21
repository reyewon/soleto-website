'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'soleto_consent_v1'

type ConsentChoice = 'accepted' | 'declined' | null

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dispatchEvent: (event: Event) => boolean
  }
}

function getStoredChoice(): ConsentChoice {
  if (typeof window === 'undefined') return null
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (value === 'accepted' || value === 'declined') return value
  } catch {
    /* localStorage blocked */
  }
  return null
}

function setStoredChoice(choice: 'accepted' | 'declined') {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    /* localStorage blocked */
  }
}

/**
 * Cookie consent banner, bottom-right corner card. Mounts at app shell level.
 *
 * Appears 5s after load on `/` (so the hero wordmark fade can finish), 0.8s
 * on every other route. If the visitor has already accepted or declined in a
 * previous session, the banner never renders.
 *
 * Listens for a custom `soleto:reset-consent` event so the `Reset preferences`
 * button on the privacy page can re-show the banner without a page reload.
 */
export default function CookieBanner() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Already chose? Stay hidden.
    if (getStoredChoice() !== null) return

    const isHome = pathname === '/'
    const delayMs = isHome ? 5000 : 800
    const timer = window.setTimeout(() => setOpen(true), delayMs)
    return () => window.clearTimeout(timer)
  }, [pathname])

  // Reset trigger from /privacy
  useEffect(() => {
    const handler = () => {
      try {
        window.localStorage.removeItem(STORAGE_KEY)
      } catch {
        /* localStorage blocked */
      }
      setOpen(true)
    }
    window.addEventListener('soleto:reset-consent', handler)
    return () => window.removeEventListener('soleto:reset-consent', handler)
  }, [])

  const handleAccept = () => {
    setStoredChoice('accepted')
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    window.dispatchEvent(new Event('soleto:consent-accepted'))
    setOpen(false)
  }

  const handleDecline = () => {
    setStoredChoice('declined')
    window.dispatchEvent(new Event('soleto:consent-declined'))
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookies"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-[200] w-[calc(100vw-2rem)] md:w-auto md:max-w-[560px] flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-5"
          style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--rule)',
            padding: '10px 14px',
            boxShadow: '0 6px 24px rgba(26, 22, 18, 0.06)',
          }}
        >
          <p
            style={{
              fontSize: '13px',
              lineHeight: 1.4,
              color: 'var(--text-secondary)',
              margin: 0,
              flex: '1 1 auto',
              minWidth: 0,
            }}
          >
            Cookies for analytics.{' '}
            <Link
              href="/privacy/"
              className="link-underline"
              style={{ color: 'var(--text-muted)' }}
            >
              More
            </Link>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-muted)',
                backgroundColor: 'transparent',
                border: 0,
                padding: '6px 4px',
                cursor: 'pointer',
                transition: 'color 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              Decline
            </button>
            <button
              type="button"
              onClick={handleAccept}
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: '10px',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--bg-primary)',
                backgroundColor: 'var(--text-primary)',
                border: '1px solid var(--text-primary)',
                padding: '7px 14px',
                cursor: 'pointer',
                transition: 'background-color 0.4s cubic-bezier(0.19, 1, 0.22, 1), border-color 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent)'
                e.currentTarget.style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--text-primary)'
              }}
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
