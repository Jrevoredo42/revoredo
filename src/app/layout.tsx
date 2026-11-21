import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../index.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ThemeShell } from '@/components/ThemeShell'

export const metadata: Metadata = {
  title: 'Revoredo',
  description:
    'Showcasing the artistic journey of Revoredo, this elegant portfolio website features his music, literature, and multi-disciplinary projects, highlighting his achievements.',
  robots: { index: false },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeShell>
          <Nav />
          {children}
          <Footer />
        </ThemeShell>
      </body>
    </html>
  )
}
