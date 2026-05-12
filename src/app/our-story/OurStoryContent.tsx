'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import ParallaxBg from '@/components/ParallaxBg'

const RESERVE_URL =
  'https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant'

export default function OurStoryContent() {
  return (
    <>
      {/* Hero, minimal */}
      <section data-nav-transparent className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <ParallaxBg>
          <Image
            src="/images/interior/dining-room.jpg"
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
            Our Story
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
                Where heritage meets the table.
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
                George is Greek. He learned to cook Italian in London, and by 30 he&apos;d
                opened three of his own restaurants. Soleto is what happened when he and
                Dominika put everything they&apos;d learned into one dining room opposite
                the Mayflower Theatre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* George, asymmetric 5/7 */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <ScrollReveal direction="left" className="lg:col-span-5">
              <div className="img-editorial img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/chef/george-meat.jpg"
                  alt="Chef George Jiojioras"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-7 lg:pt-16">
              <div className="lg:max-w-xl">
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  George Jiojioras
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
                    George&apos;s journey began in the kitchens of Greece, where food was never
                    just sustenance, it was the centre of family life. Growing up surrounded by
                    the aromas of fresh herbs, grilled seafood, and slow-cooked stews, he
                    developed an instinctive understanding of Mediterranean flavours.
                  </p>
                  <p>
                    He came to England at 21, started work in an Italian restaurant, and within
                    three years had opened his first trattoria. By 30 he had opened three
                    restaurants. His passion led him deeper into the art of Italian cooking,
                    crafting pasta by hand, mastering the delicate balance of a perfect risotto,
                    and sourcing the finest ingredients with uncompromising care.
                  </p>
                  <p>
                    Today at Soleto, George is the chef patron, a role he describes as
                    near-extinct in modern dining. His kitchen is one where Greek soul meets
                    Italian precision, and where every plate is prepared with the same love and
                    attention he learned at his family&apos;s table. Over the years he has cooked
                    for the likes of Ralph Fiennes, Peter Andre, Paul Whitehouse, and
                    Michelin-starred chef Simon Rogan.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Kitchen */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="lg:max-w-lg lg:ml-auto">
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  Craft, every service.
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
                    Fresh seafood, oysters, lobster, Dover sole, scallops, takes pride of
                    place alongside hand-rolled pasta, premium steaks, and dishes that change
                    with the seasons.
                  </p>
                  <p>
                    The daily specials board, handwritten by George himself, reflects what&apos;s
                    freshest and most inspiring that day. From whole salt-baked fish to a
                    perfectly seared Tomahawk steak, every special is a moment of culinary
                    creativity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="img-editorial img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/chef/george-hands.jpg"
                  alt="Chef George at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dominika + Front of House */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="img-editorial img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/interior/flowers-painting.jpg"
                  alt="Interior detail at Soleto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:max-w-lg">
                <h2
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                    color: 'var(--text-primary)',
                  }}
                >
                  A warm welcome from Dominika.
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
                    While George creates in the kitchen, Dominika ensures every guest feels at
                    home. Together, they&apos;ve built Soleto into a place where warmth and
                    hospitality matter as much as the food.
                  </p>
                  <p>
                    From the moment you walk in, you&apos;re welcomed into the family. Whether
                    it&apos;s recommending the perfect wine to pair with your Dover sole, or
                    setting up the private dining room for a celebration, the personal touch is
                    what makes Soleto different.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Space, photographs */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2
              className="font-serif text-balance"
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                color: 'var(--text-primary)',
                maxWidth: '20ch',
              }}
            >
              The room.
            </h2>
            <p
              className="mt-8"
              style={{
                fontSize: 'var(--step-body)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                maxWidth: '52ch',
              }}
            >
              Commercial Road, directly opposite the Mayflower Theatre. Deep teal walls,
              gold-framed artwork, soft brass lamps, and white linen. An atmosphere that moves
              from relaxed afternoon lunches to intimate candlelit evenings.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: '/images/interior/table-lamp.jpg', alt: 'Brass table lamp' },
              { src: '/images/interior/painting.jpg', alt: 'Gold-framed painting' },
              { src: '/images/interior/wall-art.jpg', alt: 'Gold-framed artwork on teal walls' },
              { src: '/images/interior/oyster-art.jpg', alt: 'Oyster artwork and flowers' },
              { src: '/images/interior/flowers-curtain.jpg', alt: 'Fresh flowers' },
              { src: '/images/interior/blue-column-view.jpg', alt: 'Candlelit table through blue columns' },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.08}>
                <div className="img-editorial img-hover-zoom aspect-[4/5] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition, stripped */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          paddingTop: 'clamp(4rem, 14vh, 11rem)',
          paddingBottom: 'clamp(4rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2
              className="font-serif text-balance"
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)',
                color: 'var(--text-primary)',
              }}
            >
              On the record.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { quote: '#1 Best Restaurants in Southampton', source: 'The Tour Guy, 2025' },
              { quote: 'Top 5 Italian Restaurants in Southampton', source: 'Southampton Times' },
              { quote: "Travellers' Choice 2024 & 2025", source: 'TripAdvisor' },
              { quote: 'Food Hygiene Rating 5/5', source: 'Southampton City Council' },
              { quote: 'Most Deserving of the Michelin Guide', source: "Readers' Choice, Daily Echo, 2026" },
              { quote: 'Best Seafood in Southampton', source: "Readers' Choice, Daily Echo, 2025" },
              { quote: 'Best Places for Dinner in Southampton', source: "Readers' Choice, Daily Echo, 2024" },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div>
                  <p
                    className="font-serif italic"
                    style={{
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
                      lineHeight: 1.3,
                      color: 'var(--text-primary)',
                      fontWeight: 400,
                    }}
                  >
                    {r.quote}
                  </p>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {r.source}
                  </p>
                </div>
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
              <p
                style={{
                  fontSize: 'var(--step-body)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  maxWidth: '36ch',
                }}
              >
                Come and meet us.
              </p>
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
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
                Reserve a table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  )
}
