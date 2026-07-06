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
          fontFamily: 'Newsreader, Georgia, serif',
          fontSize: 'var(--step-label)',
          letterSpacing: '0.14em',
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
  fontFamily: 'Newsreader, Georgia, serif',
  fontSize: 'var(--step-label)',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  color: 'var(--text-muted)',
}

export default function ContactContent() {
  return (
    <>
      {/* Hero, minimal */}
      <section data-nav-transparent className="relative h-[46vh] min-h-[330px] overflow-hidden seam-btm">
        <ParallaxBg>
          <Image
            src="/images/interior/exterior-wide.jpg"
            alt=""
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
            <span className="smallcaps">Forty steps from the Mayflower foyer</span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'var(--step-h1)', color: 'var(--text-primary)' }}
          >
            Find us
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
              11 Commercial Road, Southampton
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
                      <span>Tuesday to Saturday</span>
                      <span>17:00 to 22:00</span>
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
                    Summer evenings only; lunches return in September. Special hours may apply on theatre nights and bank holidays; please call to confirm.
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

      {/* Before or after the show: ticket panel over the dining room */}
      <section
        data-nav-transparent
        className="relative seam-top seam-btm"
        style={{
          paddingTop: 'clamp(5rem, 14vh, 10rem)',
          paddingBottom: 'clamp(5rem, 14vh, 10rem)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/interior/peek-through.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 max-w-[640px] mx-auto px-5">
          <ScrollReveal>
            <div
              className="ticket text-center"
              style={{ padding: 'clamp(2.2rem, 5vw, 3.4rem) clamp(1.6rem, 4vw, 3rem)' }}
            >
              <div className="ticket-keyline" />
              <span className="smallcaps smallcaps-oxblood block mb-4">
                Directly opposite the Mayflower Theatre
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
              >
                Before or after the show
              </h2>
              <p
                className="mx-auto mt-5"
                style={{
                  maxWidth: '30em',
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                Tell us your curtain time when you book and we will pace dinner
                around it. Pre-theatre tables are seated from five o&rsquo;clock.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-oxblood mt-8"
              >
                Reserve a table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
