'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="relative z-30 border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-section">
        <ScrollReveal>
          {/* Brand, full width on mobile */}
          <div className="mb-10 md:mb-0 md:grid md:grid-cols-3 md:gap-10">
            <div className="mb-8 md:mb-0">
              <Image
                src="/images/branding/logo-dark.png"
                alt="Soleto"
                width={2000}
                height={357}
                className="h-9 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                Authentic Italian dining in the heart of Southampton&apos;s theatre district,
                steps from the Mayflower Theatre.
              </p>
              {/* Social Links */}
              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/soletoitalian/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:opacity-70"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/SoletoItalianHampshire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:opacity-70"
                  style={{ color: 'var(--text-primary)' }}
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours + Contact, 2 columns on mobile, part of 3-col grid on desktop */}
            <div className="grid grid-cols-2 gap-8 md:contents">
              {/* Opening Hours */}
              <div>
                <h3 className="mb-4 md:mb-6"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                    }}>
                  Opening Hours
                </h3>
                <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <div className="flex justify-between max-w-[200px]">
                    <span>Tue &ndash; Sat</span>
                    <span>17 &ndash; 22</span>
                  </div>
                  <div className="flex justify-between max-w-[200px]">
                    <span>Sun &amp; Mon</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed mt-4 max-w-[260px]" style={{ color: 'var(--text-secondary)', opacity: 0.75 }}>
                  Summer evenings only &mdash; lunches return in September. Special hours may apply on theatre nights and bank holidays; please call to confirm.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 md:mb-6"
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      color: 'var(--text-muted)',
                    }}>
                  Visit Us
                </h3>
                <address className="not-italic text-sm space-y-3" style={{ color: 'var(--text-secondary)' }}>
                  <p>11 Commercial Road<br />Southampton SO15 1GF</p>
                  <p>
                    <a href="tel:02380234044" className="link-underline transition-colors duration-300">
                      023 8023 4044
                    </a>
                  </p>
                  <p>
                    <a href="mailto:info@soleto.co.uk" className="link-underline transition-colors duration-300">
                      info@soleto.co.uk
                    </a>
                  </p>
                </address>
                {/* Desktop reserve button, stays in contact column */}
                <div className="hidden md:block mt-6">
                  <a
                    href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs"
                  >
                    Reserve a Table
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile reserve button, full width below the grid */}
          <div className="mt-6 md:hidden">
            <a
              href="https://web.dojo.app/create_booking/vendor/bxU6ck62m7nZ2hSjU6_X9UfdHHqOIAn9Nfy8-GrJbI8_restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs block text-center w-full"
            >
              Reserve a Table
            </a>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
             style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs text-center md:text-left" style={{ color: 'var(--text-secondary)' }}>
            &copy; {new Date().getFullYear()} Soleto Trattoria Italiana. All rights reserved.
            <span className="mx-2" style={{ color: 'var(--border)' }}>|</span>
            <Link
              href="/privacy/"
              className="link-underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              Privacy &amp; cookies
            </Link>
            <span className="mx-2" style={{ color: 'var(--border)' }}>|</span>
            Designed by{' '}
            <a
              href="https://kombu.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              Kombu Web Design
            </a>
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
              <svg className="w-3 h-3" style={{ color: 'var(--accent)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.7 Google
            </span>
            <span className="text-xs" style={{ color: 'var(--border)' }}>|</span>
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g186299-d8337696-Reviews-Soleto-Southampton_Hampshire_England.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs flex items-center gap-1.5 transition-opacity duration-300 hover:opacity-70"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Soleto on TripAdvisor, 4.5 stars"
            >
              {/* TripAdvisor owl mark, minimal single-colour */}
              <svg className="w-4 h-4" viewBox="0 0 28 16" fill="currentColor" aria-hidden="true" style={{ color: 'var(--accent)' }}>
                <path d="M14 0C9.97 0 6.36 1.22 3.71 3.11H0l2.16 2.36a6.35 6.35 0 1 0 9.48 8.41L14 16l2.36-2.12a6.35 6.35 0 1 0 9.48-8.41L28 3.11h-3.71A17.13 17.13 0 0 0 14 0zM7.82 13.06a4.73 4.73 0 1 1 0-9.46 4.73 4.73 0 0 1 0 9.46zm12.36 0a4.73 4.73 0 1 1 0-9.46 4.73 4.73 0 0 1 0 9.46zM7.82 5.4a2.93 2.93 0 1 0 0 5.86 2.93 2.93 0 0 0 0-5.86zm12.36 0a2.93 2.93 0 1 0 0 5.86 2.93 2.93 0 0 0 0-5.86z"/>
              </svg>
              4.5 TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
