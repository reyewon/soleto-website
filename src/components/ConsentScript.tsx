'use client'

import Script from 'next/script'

// Read the env var inline at module level. If unset, no GA snippet is injected.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

/**
 * Google Consent Mode v2 + GA4 loader.
 *
 * On every page load this:
 *  1. Initialises gtag with consent defaults set to DENIED for ad + analytics
 *     storage. `wait_for_update: 500` gives the banner up to 500ms to apply
 *     stored consent before the first measurement event fires.
 *  2. If we have a stored "accepted" choice in localStorage, immediately flips
 *     `analytics_storage` to granted before any pageviews are sent.
 *  3. Loads the GA4 gtag script and configures the measurement ID.
 *
 * With Consent Mode v2, GA4 will still receive anonymous "modelled" pings when
 * analytics_storage is denied — so we get visitor counts and rough geography
 * even if the user ignores the banner, but no cookies or client ID are set.
 */
export default function ConsentScript() {
  if (!GA_ID) return null

  return (
    <>
      <Script
        id="consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
            try {
              var stored = window.localStorage.getItem('soleto_consent_v1');
              if (stored === 'accepted') {
                gtag('consent', 'update', { analytics_storage: 'granted' });
              }
            } catch (e) { /* localStorage blocked, treat as no consent */ }
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `,
        }}
      />
      <Script
        id="ga4"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
    </>
  )
}
