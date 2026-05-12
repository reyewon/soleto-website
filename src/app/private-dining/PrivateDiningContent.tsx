'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

export default function PrivateDiningContent() {
  return (
    <>
      {/* Hero, minimal */}
      <section data-nav-transparent className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <ParallaxBg>
          <Image
            src="/images/interior/chandelier-room.jpg"
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
            Private Dining
          </h1>
        </div>
      </section>

      {/* Intro, asymmetric 7/5 */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4.5rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4.5rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <ScrollReveal direction="left" className="md:col-span-7">
              <h2
                className="font-serif text-balance"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 4rem)',
                  color: 'var(--text-primary)',
                }}
              >
                A separate room. Shaped around the evening you have in mind.
              </h2>
            </ScrollReveal>
            <div className="md:col-span-5 md:pt-8">
              <p
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-secondary)',
                }}
              >
                A dining room away from the main restaurant. Seats up to 14 guests. Birthdays,
                anniversaries, company dinners, family gatherings: whatever the occasion, the
                menu and the evening are shaped around you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Room, asymmetric 5/7 */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="img-editorial img-hover-zoom aspect-[4/5] relative">
                <Image
                  src="/images/interior/chandelier-room-2.jpg"
                  alt="Private dining table setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7 lg:pt-12">
              <div className="lg:max-w-xl">
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Terracotta, chandelier, wooden table.
                </h2>
                <div
                  className="space-y-5 mt-8"
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <p>
                    Rich terracotta walls, warmed by a crystal chandelier and a gold-framed
                    mirror. A rustic wooden table at the centre, set for an intimate dinner
                    party.
                  </p>
                  <p>
                    Ideal for groups seeking privacy, with dedicated service from our team to
                    make every detail right.
                  </p>
                </div>

                {/* Quiet info list, no decorative icons */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { label: 'Capacity', value: 'Up to 14 guests, seated.' },
                    {
                      label: 'Occasions',
                      value: 'Birthdays, anniversaries, corporate, celebrations.',
                    },
                    { label: 'Menu', value: 'Bespoke, by George, for your evening.' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p
                        style={{
                          fontFamily: 'Inter Tight, system-ui, sans-serif',
                          fontSize: 'var(--step-eyebrow)',
                          letterSpacing: '0.27em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                          color: 'var(--text-muted)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: 'var(--step-body)',
                          lineHeight: 1.5,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 14vh, 10rem)',
          paddingBottom: 'clamp(4rem, 14vh, 10rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    maxWidth: '36ch',
                  }}
                >
                  To arrange a private dining evening, please call or email us directly.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-10">
                  <a
                    href="tel:02380234044"
                    className="tabular link-underline"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    023 8023 4044
                  </a>
                  <a
                    href="mailto:info@soleto.co.uk"
                    className="link-underline"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    info@soleto.co.uk
                  </a>
                </div>
              </div>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  textDecoration: 'underline',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '0.18em',
                  alignSelf: 'flex-end',
                }}
              >
                Enquire
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
