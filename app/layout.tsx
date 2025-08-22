import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import React from 'react'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RedigoPA - Basta Perdere Ore con la Burocrazia Scolastica',
  description: 'RedigoPA è la prima piattaforma che trasforma la compilazione di atti amministrativi da incubo burocratico a processo guidato di 5 minuti. Utilizzata da centinaia di scuole italiane.',
  keywords: 'RedigoPA, burocrazia scolastica, PON, PNRR, appalti, MePA, GDPR scuola, dirigente scolastico, DSGA',
  authors: [{ name: 'RedigoPA Team' }],
  creator: 'RedigoPA',
  publisher: 'RedigoPA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://redigopa.it',
    siteName: 'RedigoPA',
    title: 'RedigoPA - Basta Perdere Ore con la Burocrazia Scolastica',
    description: 'La prima piattaforma che trasforma la compilazione di atti amministrativi da incubo burocratico a processo guidato di 5 minuti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RedigoPA - Semplifica la burocrazia scolastica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RedigoPA - Basta Perdere Ore con la Burocrazia Scolastica',
    description: 'La prima piattaforma che trasforma la compilazione di atti amministrativi da incubo burocratico a processo guidato di 5 minuti.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0E5977',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 