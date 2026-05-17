import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gurumbé Capital — South-to-South Financial Architecture',
  description:
    'A thematic investment vehicle bridging Spain and the Global South. Deploying capital, knowledge, and culture through a South-to-South financial architecture.',
  keywords: [
    'investment',
    'Africa',
    'Spain',
    'South-to-South',
    'real estate',
    'energy infrastructure',
    'fractional asset issuance',
    'corridor',
  ],
  authors: [{ name: 'David F. Leston' }],
  openGraph: {
    title: 'Gurumbé Capital — South-to-South Financial Architecture',
    description:
      'We do not construct a new relationship. We frame, claim, and deliver an existing space that history temporarily obscured.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
