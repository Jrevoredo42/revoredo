'use client'

import { usePathname } from 'next/navigation'
import { pageFromPath } from '@/lib/pages'

/** Página ativa + paleta, derivadas da rota atual. */
export function usePage() {
  const page = pageFromPath(usePathname())
  return { page, palette: page.palette }
}
