'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/interior/exterior-wide.jpg"
          alt="Soleto restaurant exterior on Commercial Road"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-serif italic text-tagline text-gold-500">Get in Touch</p>
          <h1 className="font-serif text-h1 text-white mt-2">Contact</h1>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <ScrollReveal direction="left">
              <div>
                <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
                  Visit Us
                </p>
                <h2 className="font-serif text-h2 mt-2 mb-8" style={{ color: 'var(--text-primary)' }}>
                  We&apos;d Love to See You
                </h2>

                <div className="space-y-8">
                  {/* Address */}
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--accent)' }}>
                      Address
                    </h3>
                    <address className="not-italic text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                      Soleto Bistro Trattoria Italiana<br />
                      11 Commercial Road<br />
                      Southampton SO15 1GF
                    </address>
                    <p className="text-sm mt-2 italic" style={{ color: 'var(--text-secondary)' }}>
                      Directly opposite the Mayflower Theatre
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--accent)' }}>
                      Telephone
                    </h3>
                    <a href="tel:02380234044"
                       className="link-underline text-[17px]"
                       style={{ color: 'var(--text-primary)' }}>
                      023 8023 4044
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--accent)' }}>
                      Email
                    </h3>
                    <a href="mailto:info@soleto.co.uk"
                       className="link-underline text-[17px]"
                       style={{ color: 'var(--text-primary)' }}>
                      info@soleto.co.uk
                    </a>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--accent)' }}>
                      Opening Hours
                    </h3>
                    <div className="space-y-2 text-[17px]" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex justify-between max-w-xs">
                        <span>Monday</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between max-w-xs">
                        <span>Tuesday — Saturday</span>
                        <span>12:00 — 22:00</span>
                      </div>
                      <div className="flex justify-between max-w-xs">
                        <span>Sunday</span>
                        <span>12:00 — 20:00</span>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                        style={{ color: 'var(--accent)' }}>
                      Follow Us
                    </h3>
                    <div className="flex gap-5">
                      <a
                        href="https://www.instagram.com/soletoitalian/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[17px]"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.facebook.com/SoletoItalianHampshire"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[17px]"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        Facebook
                      </a>
                    </div>
                  </div>

                  {/* Book CTA */}
                  <div className="pt-4">
                    <a
                      href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Book a Table
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="right">
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.8!2d-1.4044!3d50.9097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487476b0e5961c1b%3A0x7c6d9e9e3e9f8a0!2sSoleto!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Soleto location on Google Maps"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Theatre Banner */}
      <section className="py-16 border-t" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-serif italic text-tagline" style={{ color: 'var(--accent)' }}>
              Pre-Theatre Dining
            </p>
            <h2 className="font-serif text-h3 mt-3" style={{ color: 'var(--text-primary)' }}>
              Heading to the Mayflower Theatre?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re directly opposite. Book a table for a leisurely Italian meal
              before the show, or join us after for drinks and dessert.
            </p>
            <div className="mt-6">
              <a
                href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Reserve for Theatre Night
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
