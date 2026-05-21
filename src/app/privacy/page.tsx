import type { Metadata } from 'next'
import PrivacyContent from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy & Cookies',
  description:
    "Soleto's privacy and cookies policy. How we handle visitor data, what cookies we use, and how to withdraw consent. UK GDPR and PECR compliant.",
  alternates: {
    canonical: 'https://www.soleto.co.uk/privacy/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy & Cookies | Soleto',
    description:
      'How we handle visitor data and cookies at Soleto. UK GDPR and PECR compliant.',
    url: 'https://www.soleto.co.uk/privacy/',
  },
}

export default function Page() {
  return <PrivacyContent />
}
