'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

const faqItems: { question: string; answer: string }[] = [
  {
    question: 'What kind of events does Soleto cater for?',
    answer:
      'Weddings, corporate dinners, anniversaries, milestone birthdays, family gatherings and private celebrations. We cater both in our private dining room in Southampton and at the venue of your choice across Hampshire.',
  },
  {
    question: 'How many guests can the private dining room seat?',
    answer:
      'Up to 14 guests seated, in a dedicated room separated from the main restaurant. For groups larger than 14 we offer off-site private catering, with no upper limit by arrangement.',
  },
  {
    question: 'Does Soleto offer off-site private catering in Southampton?',
    answer:
      'Yes. George and the kitchen team cater off-site for groups of 30 or more across Southampton, Hampshire and surrounding areas. Menu, service and timing are shaped around your event.',
  },
  {
    question: 'Who designs the catering menu?',
    answer:
      'Head chef and chef patron George Jiojioras designs every bespoke menu in conversation with you. Italian and Mediterranean by default, with fresh seafood and hand-rolled pasta as house signatures, plus full dietary flexibility (vegetarian, gluten-free and others on request).',
  },
  {
    question: 'How do I enquire about private dining or catering at Soleto?',
    answer:
      'Call 023 8023 4044 or email info@soleto.co.uk. Please share guest numbers, the date, any dietary needs, and whether you would like to dine in our private room or have us cater at your venue.',
  },
]

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
            Private Dining &amp; Catering
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
                  fontWeight: 340,
                  fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 0",
                  letterSpacing: '-0.01em',
                  lineHeight: 1.08,
                  color: 'var(--text-primary)',
                }}
              >
                A private room for fourteen. Off-site catering for thirty and beyond.
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
                Soleto&rsquo;s private dining and catering service covers two things. In
                Southampton, a separate dining room that seats up to 14 guests for birthdays,
                anniversaries and celebrations. Off-site, our chef George cooks for weddings
                and corporate events of 30 or more, anywhere across Hampshire. Menus shaped
                around your evening, by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Private Room, asymmetric 5/7 */}
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
                  alt="Soleto private dining room with a wooden table, crystal chandelier and terracotta walls, Southampton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7 lg:pt-12">
              <div className="lg:max-w-xl">
                <p
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  In the restaurant
                </p>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    fontWeight: 340,
                    fontVariationSettings: "'opsz' 96, 'SOFT' 30, 'WONK' 0",
                    letterSpacing: '-0.005em',
                    lineHeight: 1.12,
                    color: 'var(--text-primary)',
                  }}
                >
                  The Private Room
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
                    party. Tucked away from the main restaurant so the evening is entirely
                    yours.
                  </p>
                  <p>
                    Ideal for groups seeking privacy in central Southampton, with dedicated
                    service from our team and a bespoke menu by George.
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

      {/* Catering by George, asymmetric 7/5 (mirror of The Private Room) */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <ScrollReveal direction="left" className="lg:col-span-7 lg:pt-12 lg:order-1">
              <div className="lg:max-w-xl lg:ml-auto">
                <p
                  aria-describedby="catering-intro"
                  style={{
                    fontFamily: 'Inter Tight, system-ui, sans-serif',
                    fontSize: 'var(--step-eyebrow)',
                    letterSpacing: '0.27em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  Private catering Southampton
                </p>
                <h2
                  className="font-serif italic"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.4vw, 3rem)',
                    fontWeight: 340,
                    fontVariationSettings: "'opsz' 96, 'SOFT' 30, 'WONK' 0",
                    letterSpacing: '-0.01em',
                    lineHeight: 1.12,
                    color: 'var(--text-primary)',
                    textWrap: 'balance',
                  }}
                >
                  Cooking for your event, on your terms.
                </h2>
                <p
                  id="catering-intro"
                  className="mt-8"
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Soleto&rsquo;s private catering service is led by chef patron George
                  Jiojioras. For groups of 30 or more, George and the kitchen team cook at the
                  venue of your choice across Southampton, Hampshire and the surrounding
                  area &mdash; weddings, corporate dinners, anniversaries, and family
                  gatherings shaped around what you actually want to eat.
                </p>
                <div
                  className="space-y-3 mt-6"
                  style={{
                    fontSize: 'var(--step-body)',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <p>
                    Weddings of any size, with menus tasted in advance. Corporate dinners and
                    away days, set against a relaxed Mediterranean table. Family milestones,
                    cooked the way you would cook them yourself if you had a kitchen brigade.
                  </p>
                  <p>
                    Fresh seafood, hand-rolled pasta, the prime cuts you would see on the
                    daily specials board. Full dietary flexibility &mdash; vegetarian,
                    gluten-free and other requirements handled without ceremony.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {[
                    { label: 'Minimum size', value: '30 guests, no upper limit.' },
                    {
                      label: 'Where',
                      value: 'Southampton, Hampshire & surrounding venues.',
                    },
                    {
                      label: 'Menu',
                      value: 'Designed with George around your event.',
                    },
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

            <ScrollReveal direction="right" className="lg:col-span-5 lg:order-2">
              <div className="img-editorial img-hover-zoom aspect-[4/5] relative">
                <Image
                  src="/images/chef/george-meat.jpg"
                  alt="Chef George Jiojioras with two prime cuts at Soleto kitchen, Southampton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ — AEO / GEO citations */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p
              style={{
                fontFamily: 'Inter Tight, system-ui, sans-serif',
                fontSize: 'var(--step-eyebrow)',
                letterSpacing: '0.27em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Common questions
            </p>
            <h2
              className="font-serif text-balance"
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                fontWeight: 340,
                fontVariationSettings: "'opsz' 96, 'SOFT' 30, 'WONK' 0",
                letterSpacing: '-0.005em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '2.5rem',
              }}
            >
              Private dining and catering at Soleto, answered.
            </h2>
          </ScrollReveal>

          <div className="space-y-10">
            {faqItems.map((item, i) => (
              <ScrollReveal key={item.question} delay={i * 0.05}>
                <article>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.05rem, 1.5vw, 1.35rem)',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.question}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--step-body)',
                      lineHeight: 1.7,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.answer}
                  </p>
                </article>
              </ScrollReveal>
            ))}
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
                  To arrange private dining or catering, call or email Soleto directly.
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
                    href="mailto:info@soleto.co.uk?subject=Private%20dining%20or%20catering%20enquiry"
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
