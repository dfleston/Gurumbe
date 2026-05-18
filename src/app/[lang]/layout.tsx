import type { Metadata } from 'next'
import '../globals.css'

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
  authors: [{ name: 'Daniel Fernandez Leston' }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Gurumbé Capital — South-to-South Financial Architecture',
    description:
      'We do not construct a new relationship. We frame, claim, and deliver an existing space that history temporarily obscured.',
    type: 'website',
    locale: 'en_US',
  },
}

import { i18n } from '@/i18n/config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )
}
