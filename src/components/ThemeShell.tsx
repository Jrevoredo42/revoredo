'use client'

import type { ReactNode } from 'react'
import { usePage } from '@/lib/usePage'

/** Aplica o fundo/cor da paleta da rota atual ao redor de toda a página. */
export function ThemeShell({ children }: { children: ReactNode }) {
  const { palette } = usePage()
  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ background: palette.bg, color: palette.fg }}
    >
      {children}
    </div>
  )
}
