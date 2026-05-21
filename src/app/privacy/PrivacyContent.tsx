'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const labelStyle = {
  fontFamily: 'Inter Tight, system-ui, sans-serif',
  fontSize: 'var(--step-eyebrow)',
  letterSpacing: '0.27em',
  textTransform: 'uppercase' as const,
  fontWeight: 500,
  color: 'var(--text-muted)',
}

const bodyStyle = {
  fontSize: 'var(--step-body)',
  lineHeight: 1.7,
  color: 'var(--text-secondary)',
}

const sectionHeadingStyle = {
  fontFamily: 'Fraunces, Georgia, serif',
  fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
  fontWeight: 450,
  color: 'var(--text-primary)',
  letterSpacing: '-0.005em',
  lineHeight: 1.15,
  marginBottom: '1.5rem',
}

export default function PrivacyContent() {
  const [resetMessage, setResetMessage] = useState<string | null>(null)

  const handleReset = () => {
    window.dispatchEvent(new Event('soleto:reset-consent'))
    setResetMessage('Preferences reset. The cookies banner will reappear shortly.')
    window.setTimeout(() => setResetMessage(null), 5000)
  }

  return (
    <>
      {/* Page header */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(8rem, 16vh, 13rem)',
          paddingBottom: 'clamp(3rem, 8vh, 5rem)',
        }}
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <h1
              className="font-serif text-balance"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                fontWeight: 450,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
                lineHeight: 1.05,
              }}
            >
              Privacy &amp; Cookies
            </h1>
            <p className="mt-6" style={labelStyle}>
              Last updated 13 May 2026
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section
        style={{
          backgroundColor: 'var(--bg-primary)',
          paddingTop: 'clamp(2rem, 6vh, 4rem)',
          paddingBottom: 'clamp(5rem, 14vh, 11rem)',
        }}
      >
        <div className="max-w-[760px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <p
              style={{
                fontSize: 'var(--step-lead)',
                lineHeight: 1.65,
                color: 'var(--text-primary)',
              }}
            >
              We try to keep this short and in plain English. Soleto is a small
              family-run restaurant, and this page covers how we handle visitor
              data on the website, what cookies we use, and how you can opt out.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>Who we are</h2>
              <p style={bodyStyle}>
                Soleto Trattoria Italiana, 11 Commercial Road, Southampton,
                Hampshire, SO15 1GF, United Kingdom. We&apos;re the data controller
                for personal information collected through this website. Contact us
                on <a href="tel:02380234044" className="link-underline tabular" style={{ color: 'var(--text-primary)' }}>023 8023 4044</a>{' '}
                or <a href="mailto:info@soleto.co.uk" className="link-underline" style={{ color: 'var(--text-primary)' }}>info@soleto.co.uk</a> if you
                have any questions about the data we hold or want to exercise any of
                your rights under UK GDPR.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>What we collect</h2>
              <p style={bodyStyle}>
                When you visit this site, our analytics tool (Google Analytics 4)
                records basic page-visit information by default: the page you&apos;re
                looking at, an approximate country and city, the type of device, and
                whether you arrived from a search engine or a link. By default this
                is anonymous and no cookies are set, thanks to Google&apos;s
                Consent Mode v2 in its &ldquo;denied&rdquo; state.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                If you click &ldquo;Accept&rdquo; on the cookies banner, we turn on
                full analytics: a cookie is set so we can recognise return visits
                and understand how people move between pages. We never sell this
                data, never share it with third parties for advertising, and we don&apos;t
                run any marketing pixels on this site.
              </p>
              <p style={{ ...bodyStyle, marginTop: '1.25rem' }}>
                If you submit information through the booking link, that&apos;s
                handled by our reservation system Dojo, not by us, and is covered by
                their own privacy policy.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>Cookies we use</h2>
              <p style={bodyStyle}>
                Cookies are small text files stored by your browser. On this site we
                use the following:
              </p>
              <ul className="mt-5 space-y-4" style={bodyStyle}>
                <li>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    Essential
                  </span>{' '}
                  &mdash; a single <span className="tabular">localStorage</span> entry
                  (<span className="tabular">soleto_consent_v1</span>) that remembers
                  whether you accepted or declined cookies, so we don&apos;t keep asking.
                  No tracking value. Always set.
                </li>
                <li>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    Analytics (Google Analytics 4)
                  </span>{' '}
                  &mdash; cookies named <span className="tabular">_ga</span> and{' '}
                  <span className="tabular">_ga_*</span> that recognise return
                  visitors and aggregate session data. Set only after you click
                  Accept.
                </li>
                <li>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    Embedded map (Google Maps)
                  </span>{' '}
                  &mdash; when the contact page&apos;s map is loaded, Google sets
                  its own cookies (most commonly <span className="tabular">NID</span>).
                  We don&apos;t load the map iframe at all until you either accept the
                  cookies banner or click the &ldquo;Show map&rdquo; button on the
                  contact page.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>Your rights</h2>
              <p style={bodyStyle}>
                Under UK GDPR you have the right to know what data we hold about
                you, ask us to correct or delete it, object to how we use it, and
                lodge a complaint with the Information Commissioner&apos;s Office (ICO)
                at <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="link-underline" style={{ color: 'var(--text-primary)' }}>ico.org.uk</a>. Since
                website analytics data is anonymous (or pseudonymous if you&apos;ve
                accepted cookies), in practice the easiest way to exercise these
                rights on our site is to clear your browser cookies or use the
                Reset preferences button below.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>How long we keep data</h2>
              <p style={bodyStyle}>
                Analytics data is retained by Google for 14 months and then deleted.
                Our internal records related to actual reservations and email
                correspondence are kept for as long as needed to provide good
                service and to comply with HMRC record-keeping requirements
                (typically 6 years for financial records).
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14">
              <h2 style={sectionHeadingStyle}>Change your mind</h2>
              <p style={bodyStyle}>
                You can withdraw or update your consent at any time. The button
                below clears the stored choice and brings the cookies banner back
                so you can make a fresh decision.
              </p>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-reserve"
                >
                  Reset preferences
                </button>
                {resetMessage && (
                  <p
                    style={{
                      fontFamily: 'Inter Tight, system-ui, sans-serif',
                      fontSize: 'var(--step-eyebrow)',
                      letterSpacing: '0.27em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      color: 'var(--accent)',
                    }}
                  >
                    {resetMessage}
                  </p>
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-14 pt-8" style={{ borderTop: '1px solid var(--rule)' }}>
              <p style={bodyStyle}>
                Questions about anything on this page? Email{' '}
                <a
                  href="mailto:info@soleto.co.uk"
                  className="link-underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  info@soleto.co.uk
                </a>{' '}
                or call <a href="tel:02380234044" className="tabular link-underline" style={{ color: 'var(--text-primary)' }}>023 8023 4044</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
