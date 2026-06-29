import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Veno Media — Where Creativity Meets Growth',
  description:
    'Veno Media is a premium creative marketing agency helping ambitious brands scale through strategic content, social media management, influencer marketing, branding, video production, and performance-driven campaigns.',
  keywords: [
    'marketing agency',
    'creative agency',
    'social media management',
    'influencer marketing',
    'brand strategy',
    'performance marketing',
    'video production',
    'SEO',
    'Veno Media',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Veno Media — Where Creativity Meets Growth',
    description:
      'A premium creative marketing agency helping ambitious brands grow through creativity, strategy, and measurable performance.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d2e73',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
