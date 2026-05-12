import type { Metadata } from 'next'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse photos of Soleto Italian restaurant in Southampton, our dishes, elegant interior, private dining room and drinks. Located opposite the Mayflower Theatre.',
  alternates: {
    canonical: 'https://www.soleto.co.uk/gallery/',
  },
  openGraph: {
    title: 'Gallery | Soleto Bistro Trattoria Italiana',
    description:
      'Photos of our dishes, elegant interior and private dining room at Soleto Southampton.',
    url: 'https://www.soleto.co.uk/gallery/',
    images: [
      {
        url: '/images/interior/peek-through.jpg',
        alt: 'Inside Soleto Italian restaurant Southampton',
      },
    ],
  },
}

export default function Page() {
  return <GalleryContent />
}
