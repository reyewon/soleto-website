'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STORAGE_KEY = 'soleto_refurb_banner_v1'

/**
 * Date window during which the banner is allowed to render.
 * Dates are inclusive of START and EXCLUSIVE of END so the banner
 * disappears automatically on the morning of END.
 *
 * If the refurbishment dates shift, change these two constants and rebuild.
 */
const CLOSURE_START = new Date('2026-05-24T00:00:00')
const CLOSURE_END = new Date('2026-06-08T00:00:00')

function withinWindow(now: Date) {
  return now >= CLOSURE_START && now < CLOSURE_END
}

/**
 * Refurbishment closure notice. Floats at the very top of the viewport,
 * full width with a small inset (so it visually sits "in front of" the page
 * rather than locked into the page chrome). Same visual family as the
 * cookies banner — bone bg, hairline border, soft shadow, subtle slide in.
 *
 * The banner self-disables outside the CLOSURE_START / CLOSURE_END window
 * so it can't be left up by mistake after the restaurant re-opens.
 */
export default function RefurbishmentBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Outside the closure window? Stay hidden.
    if (!withinWindow(new Date())) return

    // Already dismissed in this browser? Stay hidden.
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === 'dismissed') return
    } catch {
      /* localStorage blocked, fall through */
    }

    setOpen(true)
  }, [])

  const handleDismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, 'dismissed')
    } catch {
      /* localStorage blocked, ephemeral dismiss is fine */
    }
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
          className="fixed top-2 left-2 right-2 md:top-3 md:left-3 md:right-3 z-[210]"
          style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--rule)',
            boxShadow: '0 6px 24px rgba(26, 22, 18, 0.08)',
            padding: '12px 16px',
          }}
        >
          <div className="flex items-center gap-4">
            <p
              style={{
                fontFamily: 'Newsreader, Georgia, serif',
                fontSize: '10px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-muted)',
                whiteSpace: 'nowrap',
              }}
              className="hidden md:block"
            >
              While we refurbish
            </p>
            <span
              className="hidden md:block"
              aria-hidden="true"
              style={{
                width: '1px',
                height: '14px',
                background: 'var(--rule)',
              }}
            />
            <p
              style={{
                fontSize: 'var(--step-body)',
                lineHeight: 1.4,
                color: 'var(--text-primary)',
                margin: 0,
                flex: '1 1 auto',
                minWidth: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Newsreader, Georgia, serif',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  marginRight: '0.5rem',
                }}
                className="md:hidden"
              >
                While we refurbish &nbsp;·&nbsp;
              </span>
              Soleto is closed for refurbishment until early June. Please call{' '}
              <a
                href="tel:02380234044"
                className="link-underline tabular"
                style={{ color: 'var(--text-primary)' }}
              >
                023 8023 4044
              </a>{' '}
              or{' '}
              <a
                href="mailto:info@soleto.co.uk"
                className="link-underline"
                style={{ color: 'var(--text-primary)' }}
              >
                email us
              </a>{' '}
              to book ahead.
            </p>
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Dismiss"
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px 6px',
                marginLeft: 'auto',
                flexShrink: 0,
                transition: 'color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
