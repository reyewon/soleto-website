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
      <section data-nav-transparent className="relative h-[52vh] min-h-[360px] overflow-hidden seam-btm">
        <ParallaxBg>
          <Image
            src="/images/interior/chandelier-room.jpg"
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
            <span className="smallcaps">In the restaurant <span className="amp">&amp;</span> at your venue</span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'var(--step-h1)', color: 'var(--text-primary)' }}
          >
            Private dining <span className="amp">&amp;</span> catering
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
        <div className="max-w-[880px] mx-auto px-6 md:px-10 text-center">
          <div className="grid grid-cols-1">
            <ScrollReveal>
              <h2
                className="font-serif"
                style={{
                  fontSize: 'var(--step-h2)',
                  color: 'var(--text-primary)',
                }}
              >
                Two kinds of booking
              </h2>
              <div className="prose-cols mt-10">
                <p className="dropcap">
                  Soleto&rsquo;s private dining and catering service covers two things. In
                  Southampton, a separate dining room seats up to 14 guests for birthdays,
                  anniversaries and celebrations behind their own door.
                </p>
                <p>
                  Away from Commercial Road, George cooks for weddings and corporate
                  events of 30 or more, anywhere across Hampshire. Menus are shaped
                  around your evening, by hand.
                </p>
              </div>
            </ScrollReveal>
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
                    fontFamily: 'Newsreader, Georgia, serif',
                    fontSize: 'var(--step-label)',
                    letterSpacing: '0.14em',
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
                          fontFamily: 'Newsreader, Georgia, serif',
                          fontSize: 'var(--step-label)',
                          letterSpacing: '0.14em',
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
                    fontFamily: 'Newsreader, Georgia, serif',
                    fontSize: 'var(--step-label)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  Private catering Southampton
                </p>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    fontWeight: 340,
                    letterSpacing: '-0.005em',
                    lineHeight: 1.12,
                    color: 'var(--text-primary)',
                    textWrap: 'balance',
                  }}
                >
                  Catering at your venue
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
                  area: weddings, corporate dinners, anniversaries, and family
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
                    daily specials board. Full dietary flexibility: vegetarian,
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
                          fontFamily: 'Newsreader, Georgia, serif',
                          fontSize: 'var(--step-label)',
                          letterSpacing: '0.14em',
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
                fontFamily: 'Newsreader, Georgia, serif',
                fontSize: 'var(--step-label)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              Private dining and catering
            </p>
            <h2
              className="font-serif text-balance"
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                fontWeight: 340,
                letterSpacing: '-0.005em',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '2.5rem',
              }}
            >
              Common questions
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

      {/* Enquiries: the page's ticket moment, over the private room */}
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
            src="/images/interior/chandelier-room-2.jpg"
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
                Private dining <span className="amp">&amp;</span> catering enquiries
              </span>
              <h2
                className="font-serif"
                style={{ fontSize: 'var(--step-h2)', color: 'var(--text-primary)' }}
              >
                Tell us about your evening
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
                Call or email with the date, the numbers and the occasion, and
                George will shape a menu around it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
                <a href="tel:02380234044" className="link-sc tabular">
                  023 8023 4044
                </a>
                <a
                  href="mailto:info@soleto.co.uk?subject=Private%20dining%20or%20catering%20enquiry"
                  className="btn-oxblood"
                >
                  Enquire by email
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
