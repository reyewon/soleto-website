'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/interior/dining-room.jpg"
          alt="Soleto restaurant dining room"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-tagline text-gold-500">The Jiojioras Family</p>
          <h1 className="font-serif text-h1 text-white mt-2">Our Story</h1>
        </div>
      </section>

      {/* Story Intro */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              From Greece, With Love
            </p>
            <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
              Where Heritage Meets the Table
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              Soleto is more than a restaurant — it&apos;s a family&apos;s love letter to the
              Mediterranean. Born from Greek roots and shaped by a deep reverence for Italian
              cuisine, every dish we serve carries the warmth of tradition and the spark of
              something personal.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* George Section */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/chef/george-cooking.jpg"
                  alt="Head Chef George Jiojioras in the kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:max-w-lg">
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  Head Chef
                </p>
                <h2 className="font-serif text-h2 mt-2 mb-6" style={{ color: 'var(--text-primary)' }}>
                  George Jiojioras
                </h2>
                <div className="divider-gold !mx-0" />
                <div className="space-y-5 mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    George&apos;s journey began in the kitchens of Greece, where food was never
                    just sustenance — it was the centre of family life. Growing up surrounded
                    by the aromas of fresh herbs, grilled seafood, and slow-cooked stews,
                    he developed an instinctive understanding of Mediterranean flavours.
                  </p>
                  <p>
                    His passion led him to Italy, where he immersed himself in the art of
                    Italian cooking — learning to craft pasta by hand, master the delicate
                    balance of a perfect risotto, and source the finest ingredients with
                    uncompromising care.
                  </p>
                  <p>
                    Today at Soleto, George brings all of this together. His kitchen is one
                    where Greek soul meets Italian precision, and where every plate is
                    prepared with the same love and attention he learned at his family&apos;s
                    table.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Kitchen */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="lg:max-w-lg lg:ml-auto">
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  The Kitchen
                </p>
                <h2 className="font-serif text-h2 mt-2 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Craft and Passion
                </h2>
                <div className="divider-gold !mx-0" />
                <div className="space-y-5 mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Our kitchen is where the magic happens. Fresh seafood — oysters, lobster,
                    Dover sole, scallops — takes pride of place alongside hand-rolled pasta,
                    premium steaks, and dishes that change with the seasons.
                  </p>
                  <p>
                    The daily specials board, handwritten by George himself, reflects what&apos;s
                    freshest and most inspiring that day. From whole salt-baked fish to a
                    perfectly seared Tomahawk steak, every special is a moment of
                    culinary creativity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/chef/george-hands.jpg"
                  alt="Chef George's hands at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dominika & Front of House */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="img-hover-zoom aspect-[3/4] relative">
                <Image
                  src="/images/interior/flowers-painting.jpg"
                  alt="Elegant interior details at Soleto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:max-w-lg">
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  Front of House
                </p>
                <h2 className="font-serif text-h2 mt-2 mb-6" style={{ color: 'var(--text-primary)' }}>
                  A Warm Welcome
                </h2>
                <div className="divider-gold !mx-0" />
                <div className="space-y-5 mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    While George creates in the kitchen, Dominika ensures every guest
                    feels at home. Together, they&apos;ve built Soleto into a place where
                    warmth and hospitality are just as important as the food.
                  </p>
                  <p>
                    From the moment you walk in, you&apos;re welcomed into the family.
                    Whether it&apos;s recommending the perfect wine to pair with your Dover
                    sole, or setting up the private dining room for a special celebration,
                    the personal touch is what makes Soleto different.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Space */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              11 Commercial Road
            </p>
            <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
              Our Home
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              Set on Commercial Road, directly opposite the Mayflower Theatre, Soleto
              occupies a space that&apos;s as warm and inviting as the food. Deep teal walls,
              gold-framed artwork, soft brass lamps, and white linen tablecloths create
              an atmosphere that moves seamlessly from relaxed afternoon lunches to intimate
              candlelit evenings.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: '/images/interior/table-lamp.jpg', alt: 'Brass table lamp' },
              { src: '/images/interior/wine-cabinet.jpg', alt: 'Wine cabinet' },
              { src: '/images/interior/wall-art.jpg', alt: 'Gold-framed artwork' },
              { src: '/images/interior/chandelier-room.jpg', alt: 'Private dining room' },
              { src: '/images/interior/flowers-curtain.jpg', alt: 'Fresh flowers' },
              { src: '/images/interior/wine-display.jpg', alt: 'Wine selection' },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.08}>
                <div className="img-hover-zoom aspect-[4/5] relative">
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

      {/* CTA */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h2" style={{ color: 'var(--text-primary)' }}>
              Come and Meet Us
            </h2>
            <div className="divider-gold" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Table
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
