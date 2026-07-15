import type { Metadata } from 'next'
import './globals.css'
import { Navbar1 } from '@/components/Navbar1'
import { Footer6 } from '@/components/Footer6'
import ReadingProgress from '@/components/ReadingProgress'
import BackToTop from '@/components/BackToTop'
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  // metadataBase makes all relative URLs (canonical, OG images) absolute
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Article and section pages set their own title; this appends the site name
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    type: 'website',
    locale: 'nl_NL',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="min-h-screen flex flex-col relative">
        <div className="relative z-10 flex flex-col min-h-screen">
          <ReadingProgress />
          <Navbar1 />
          <main className="flex-1">
            {children}
          </main>
          <Footer6 />
        </div>
        <BackToTop />
        <div className="fixed bottom-0 left-0 w-full pointer-events-none -z-10" aria-hidden>
          <img src="/images/bg_content.svg" alt="" className="w-full h-auto select-none" />
        </div>
      </body>
    </html>
  )
}
