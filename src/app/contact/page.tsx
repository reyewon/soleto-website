import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Soleto Italian restaurant, 11 Commercial Road, Southampton SO15 1GF, opposite the Mayflower Theatre. Call 023 8023 4044 or email info@soleto.co.uk. Open Tue–Sat 12–22, Sun 12–20.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/contact/',
  },
  openGraph: {
    title: 'Contact | Soleto Bistro Trattoria Italiana',
    description:
      '11 Commercial Road, Southampton SO15 1GF. Call 023 8023 4044 or email info@soleto.co.uk.',
    url: 'https://www.soleto.co.uk/contact/',
    images: [
      {
        url: '/images/interior/exterior-wide.jpg',
        alt: 'Soleto restaurant exterior on Commercial Road Southampton',
      },
    ],
  },
}

export default function Page() {
  return <ContactContent />
}
