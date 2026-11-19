'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useReveal } from '@/lib/useReveal'

export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  // liga os reveals de scroll a cada troca de página
  useReveal(pathname)

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
