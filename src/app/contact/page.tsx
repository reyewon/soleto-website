import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Soleto Italian restaurant, 11 Commercial Road, Southampton SO15 1GF, opposite the Mayflower Theatre. Call 023 8023 4044 or email info@soleto.co.uk. Summer evenings: Tuesday to Saturday, 17:00 to 22:00.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/contact/',
  },
  openGraph: {
    title: 'Contact | Soleto Trattoria Italiana',
    description:
      '11 Commercial Road, Southampton SO15 1GF. Call 023 8023 4044 or email info@soleto.co.uk.',
    url: 'https://www.soleto.co.uk/contact/',
    images: [
      {
        url: '/images/og-contact.jpg',
        alt: 'Soleto restaurant exterior on Commercial Road Southampton',
      },
    ],
  },
}

export default function Page() {
  return <ContactContent />
}
