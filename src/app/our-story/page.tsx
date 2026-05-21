import type { Metadata } from 'next'
import OurStoryContent from './OurStoryContent'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'The story of Soleto, founded by George and Dominika Jiojioras, bringing Greek heritage and Italian craft to Southampton. Award-winning family restaurant opposite the Mayflower Theatre.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/our-story/',
  },
  openGraph: {
    title: 'Our Story | Soleto Trattoria Italiana',
    description:
      'Founded by George and Dominika Jiojioras, bringing Greek heritage and Italian craft to Southampton.',
    url: 'https://www.soleto.co.uk/our-story/',
    images: [
      {
        url: '/images/og-story.jpg',
        alt: 'Head chef George Jiojioras at Soleto Southampton',
      },
    ],
  },
}

export default function Page() {
  return <OurStoryContent />
}
