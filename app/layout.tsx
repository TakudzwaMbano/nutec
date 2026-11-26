import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { PriceGuideEdgeButton } from '@/components/price-guide-edge-button'
import { WhatsAppIcon } from '@/components/whatsapp-icon'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nutec Masters | Nutec & Wendy Houses in Cape Town',
  description: 'Premium Nutec houses, Wendy houses and property improvement services across Cape Town and the Western Cape. Contact Nutec Masters for a free quote.',
  generator: 'Nutec Masters',
  icons: {
    icon: '/logos/logo.jpeg',
    apple: '/logos/logo.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased">
        {children}
        <PriceGuideEdgeButton />
        <a
          className="whatsapp-edge-button"
          href="https://wa.me/27751079569"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Nutec Masters on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
