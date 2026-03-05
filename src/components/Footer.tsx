'use client'

import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-section">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
            {/* Brand */}
            <div>
              <h2 className="font-serif text-h3 font-medium tracking-wider mb-4"
                  style={{ color: 'var(--text-primary)' }}>
                S<span style={{ color: 'var(--accent)' }}>O</span>LETO
              </h2>
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

            {/* Quick Links */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                  style={{ color: 'var(--accent)' }}>
                Explore
              </h3>
              <ul className="space-y-3">
                {[
                  { href: '/menu/', label: 'The Menu' },
                  { href: '/our-story/', label: 'Our Story' },
                  { href: '/gallery/', label: 'Gallery' },
                  { href: '/private-dining/', label: 'Private Dining' },
                  { href: '/contact/', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm transition-colors duration-300"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
                  style={{ color: 'var(--accent)' }}>
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
              <div className="mt-6">
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
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
             style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            &copy; {new Date().getFullYear()} Soleto Bistro Trattoria Italiana. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
            Steps from the Mayflower Theatre, Southampton
          </p>
        </div>
      </div>
    </footer>
  )
}
