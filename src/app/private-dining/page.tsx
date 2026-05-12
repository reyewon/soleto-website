import type { Metadata } from 'next'
import PrivateDiningContent from './PrivateDiningContent'

export const metadata: Metadata = {
  title: 'Private Dining',
  description:
    'Host your private event at Soleto Southampton, opposite the Mayflower Theatre, intimate dining room seating up to 14 guests with bespoke menus by head chef George Jiojioras. Perfect for birthdays, anniversaries and corporate events.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/private-dining/',
  },
  openGraph: {
    title: 'Private Dining | Soleto Bistro Trattoria Italiana',
    description:
      'Intimate private dining room in Southampton, opposite the Mayflower Theatre, seating up to 14 guests with bespoke menus.',
    url: 'https://www.soleto.co.uk/private-dining/',
    images: [
      {
        url: '/images/interior/chandelier-room.jpg',
        alt: 'Soleto private dining room with crystal chandelier',
      },
    ],
  },
}

export default function Page() {
  return <PrivateDiningContent />
}
