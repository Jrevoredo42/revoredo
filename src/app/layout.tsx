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
