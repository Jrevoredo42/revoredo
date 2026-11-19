'use client'

import Link from 'next/link'
import { PAGES } from '@/lib/pages'
import { usePage } from '@/lib/usePage'

export function Footer() {
  const { palette } = usePage()
  return (
    <footer
      className="mt-24 border-t px-6 pb-10 pt-16 md:px-12 lg:px-20"
      style={{ borderColor: palette.line }}
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-md">
            <div
              className="font-display text-6xl leading-[0.85] tracking-[0.08em]"
              style={{ color: palette.fg }}
            >
              RE<br />VO<br />RE<br />DO
            </div>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: palette.muted }}>
              Música, poesia e cena. Trinta anos costurando canção, palavra e
              coletivo em uma só obra viva.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p
                className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em]"
                style={{ color: palette.accent }}
              >
                Navegar
              </p>
              <ul className="space-y-2.5">
                {PAGES.map((pg) => (
                  <li key={pg.key}>
                    <Link
                      href={pg.href}
                      className="text-sm transition-colors hover:opacity-70"
                      style={{ color: palette.muted }}
                    >
                      {pg.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p
                className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em]"
                style={{ color: palette.accent }}
              >
                Contato
              </p>
              <ul className="space-y-2.5 text-sm" style={{ color: palette.muted }}>
                {['Instagram', 'YouTube', 'Spotify', 'contato@revoredo.art'].map((x) => (
                  <li key={x}>
                    <a href="#" className="transition-colors hover:opacity-70">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col justify-between gap-2 border-t pt-6 text-xs sm:flex-row"
          style={{ borderColor: palette.line, color: palette.muted }}
        >
          <span>© {new Date().getFullYear()} Revoredo. Todos os direitos reservados.</span>
          <span className="font-mono uppercase tracking-[0.2em]">Feito com canção &amp; palavra</span>
        </div>
      </div>
    </footer>
  )
}
