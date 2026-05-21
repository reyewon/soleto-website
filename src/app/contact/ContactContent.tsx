'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

const MAP_SRC =
  'https://maps.google.com/maps?q=Soleto+Trattoria+Italiana,+11+Commercial+Road,+Southampton+SO15+1GF&z=16&output=embed'

/**
 * Loads the Google Maps iframe only when the user has accepted cookies or has
 * manually clicked "Show map". Otherwise renders a styled placeholder so we
 * don't fire Google's NID cookie without consent.
 */
function ConsentGatedMap() {
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem('soleto_consent_v1') === 'accepted') {
        setShowMap(true)
      }
    } catch {
      /* localStorage blocked */
    }
    const onAccepted = () => setShowMap(true)
    const onDeclined = () => setShowMap(false)
    window.addEventListener('soleto:consent-accepted', onAccepted)
    window.addEventListener('soleto:consent-declined', onDeclined)
    return () => {
      window.removeEventListener('soleto:consent-accepted', onAccepted)
      window.removeEventListener('soleto:consent-declined', onDeclined)
    }
  }, [])

  if (showMap) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{
          border: 0,
          position: 'absolute',
          inset: 0,
          filter: 'saturate(0.55) contrast(1.05) brightness(0.94) sepia(0.18)',
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Soleto location on Google Maps"
      />
    )
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        border: '1px solid var(--rule)',
      }}
    >
      <p
        style={{
          fontFamily: 'Inter Tight, system-ui, sans-serif',
          fontSize: 'var(--step-eyebrow)',
          letterSpacing: '0.27em',
          textTransform: 'uppercase',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginBottom: '1.25rem',
        }}
      >
        Map
      </p>
      <p
        className="font-serif italic"
        style={{
          fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
          color: 'var(--text-primary)',
          lineHeight: 1.25,
          maxWidth: '22ch',
          marginBottom: '1.75rem',
        }}
      >
        Google Maps sets cookies. Click to load it for this visit.
      </p>
      <button
        type="button"
        onClick={() => setShowMap(true)}
        className="btn-reserve"
      >
        Show map
      </button>
    </div>
  )
}

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

const labelStyle = {
  fontFamily: 'Inter Tight, system-ui, sans-serif',
  fontSize: 'var(--step-eyebrow)',
  letterSpacing: '0.27em',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  color: 'var(--text-muted)',
}

export default function ContactContent() {
  return (
    <>
      {/* Hero, minimal */}
      <section data-nav-transparent className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <ParallaxBg>
          <Image
            src="/images/interior/exterior-wide.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
        </ParallaxBg>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-h1" style={{ color: '#f3ece0' }}>
            Contact
          </h1>
        </div>
      </section>

      {/* Address as architecture + grid */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4.5rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4.5rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 7rem)',
                fontWeight: 420,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                textWrap: 'balance',
              }}
            >
              11 Commercial Road, Southampton.
            </h2>
            <p
              className="mt-6"
              style={{
                fontSize: 'var(--step-body)',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
              }}
            >
              Directly opposite the Mayflower Theatre.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <p style={labelStyle} className="mb-3">
                    Telephone
                  </p>
                  <a
                    href="tel:02380234044"
                    className="tabular link-underline"
                    style={{
                      fontSize: 'var(--step-lead)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    023 8023 4044
                  </a>
                </div>

                <div>
                  <p style={labelStyle} className="mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:info@soleto.co.uk"
                    className="link-underline"
                    style={{
                      fontSize: 'var(--step-lead)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    info@soleto.co.uk
                  </a>
                </div>

                <div className="sm:col-span-2">
                  <p style={labelStyle} className="mb-3">
                    Opening Hours
                  </p>
                  <div
                    className="tabular space-y-1"
                    style={{
                      fontSize: 'var(--step-body)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div className="flex justify-between max-w-xs">
                      <span>Tuesday &ndash; Saturday</span>
                      <span>17:00 &ndash; 22:00</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Sunday &amp; Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: 'var(--text-muted)',
                      maxWidth: '32ch',
                    }}
                  >
                    Summer evenings only &mdash; lunches return in September. Special hours may apply on theatre nights and bank holidays; please call to confirm.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p style={labelStyle} className="mb-3">
                    Follow
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/soletoitalian/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        fontSize: 'var(--step-body)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/SoletoItalianHampshire"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                      style={{
                        fontSize: 'var(--step-body)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div className="sm:col-span-2 pt-4">
                  <a
                    href={RESERVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif italic"
                    style={{
                      fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                      fontWeight: 400,
                      color: 'var(--accent)',
                      letterSpacing: '-0.01em',
                      lineHeight: 1,
                      textDecoration: 'underline',
                      textDecorationThickness: '1px',
                      textUnderlineOffset: '0.18em',
                    }}
                  >
                    Reserve a table
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] relative overflow-hidden">
                <ConsentGatedMap />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Theatre note, italic over warm bg */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 12vh, 9rem)',
          paddingBottom: 'clamp(4rem, 12vh, 9rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h2
              className="font-serif italic text-balance"
              style={{
                fontSize: 'clamp(1.85rem, 4vw, 3.5rem)',
                fontWeight: 400,
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
                maxWidth: '22ch',
              }}
            >
              A stone&rsquo;s throw from the Mayflower. Book for a leisurely evening, before or after
              the show.
            </h2>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
