import React from "react"
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { Plus_Jakarta_Sans as V0_Font_Plus_Jakarta_Sans, IBM_Plex_Mono as V0_Font_IBM_Plex_Mono, Lora as V0_Font_Lora } from 'next/font/google'

// Initialize fonts
const _plusJakartaSans = V0_Font_Plus_Jakarta_Sans({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800"] })
const _ibmPlexMono = V0_Font_IBM_Plex_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700"] })
const _lora = V0_Font_Lora({ subsets: ['latin'], weight: ["400","500","600","700"] })

export const metadata: Metadata = {
  title: 'Shadcn UI Components - Free Tailwind CSS Component Library | Next.js Template',
  description: 'Free, open-source UI component library built with shadcn/ui, Radix UI, Tailwind CSS, and Next.js. Copy-paste accessible React components for modern web applications.',
  keywords: ['shadcn ui', 'tailwind css', 'react components', 'nextjs', 'ui library', 'design system', 'radix ui', 'free ui kit', 'component library', 'nextjs template', 'typescript', 'open source'],
  authors: [{ name: 'Avinash Sangle', url: 'https://avinashsangle.com' }],
  creator: 'Avinash Sangle',
  publisher: 'Avinash Sangle',
  generator: 'v0.app',
  metadataBase: new URL('https://templates.avinashsangle.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://templates.avinashsangle.com',
    title: 'Shadcn UI Components - Free Tailwind CSS Component Library',
    description: 'Free React component library with shadcn/ui, Radix UI, and Tailwind CSS. Production-ready, accessible components.',
    siteName: 'Shadcn UI Component Library',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadcn UI Components - Free Tailwind CSS Library',
    description: 'Free, open-source React component library with shadcn/ui and Tailwind CSS',
    creator: '@avi_sangle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
