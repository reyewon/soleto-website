'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function PrivateDiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/interior/chandelier-room.jpg"
          alt="Soleto private dining room with crystal chandelier"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-tagline text-gold-500">Exclusive Events</p>
          <h1 className="font-serif text-h1 text-white mt-2">Private Dining</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              Your Own Space
            </p>
            <h2 className="font-serif text-h2 mt-3" style={{ color: 'var(--text-primary)' }}>
              Celebrate in Style
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              For those moments that deserve something special, our private dining room
              offers an intimate setting away from the main restaurant. Whether it&apos;s
              a birthday celebration, anniversary dinner, corporate event, or family
              gathering, we&apos;ll create an unforgettable experience tailored to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Room */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="img-hover-zoom aspect-[4/5] relative">
                <Image
                  src="/images/interior/chandelier-room-2.jpg"
                  alt="Private dining room setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="lg:max-w-lg">
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  The Room
                </p>
                <h2 className="font-serif text-h2 mt-2 mb-6" style={{ color: 'var(--text-primary)' }}>
                  Elegance and Intimacy
                </h2>
                <div className="divider-gold !mx-0" />
                <div className="space-y-5 mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Our private dining room is dressed in rich terracotta tones, warmed
                    by a crystal chandelier and gold-framed mirror. A rustic wooden table
                    creates the perfect setting for an intimate dinner party atmosphere.
                  </p>
                  <p>
                    The room is ideal for groups seeking privacy and exclusivity,
                    with dedicated service from our team to ensure every detail is perfect.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border"
                         style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Capacity</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Up to 14 guests seated</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border"
                         style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Occasions</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Birthdays, anniversaries, corporate events, celebrations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border"
                         style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Bespoke Menus</h3>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Tailored menus crafted by George for your event</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-h2" style={{ color: 'var(--text-primary)' }}>
              Enquire About Private Dining
            </h2>
            <div className="divider-gold" />
            <p className="mt-6 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              To arrange a private dining experience, please contact us directly.
              We&apos;ll work with you to create the perfect evening.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:02380234044" className="btn-primary">
                Call to Enquire
              </a>
              <a href="mailto:info@soleto.co.uk" className="btn-outline">
                Email Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
