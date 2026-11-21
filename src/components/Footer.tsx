'use client'

import Link from 'next/link'
import { PAGES } from '@/lib/pages'
import { usePage } from '@/lib/usePage'

const CONTACT_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/revoredo/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@Revoredomusicaepoesia' },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/intl-pt/artist/1nhJndkg9Rvy8ZvN2ndnIj?si=MSVwQ0c6TWG1Aw99wjOw5Q',
  },
  { label: 'abrevoredo@gmail.com', href: 'mailto:abrevoredo@gmail.com' },
]

export function Footer() {
  const { page, palette } = usePage()
  const isDiscografia = page.key === 'discografia'
  return (
    <footer
      className="relative z-10 mt-24 border-t px-6 pb-10 pt-16 md:px-12 lg:px-20"
      style={{
        borderColor: palette.line,
        background: isDiscografia
          ? 'linear-gradient(180deg, rgba(1,17,21,0.32) 0%, rgba(1,17,21,0.9) 38%, #011115 100%)'
          : undefined,
      }}
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
                {CONTACT_LINKS.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="transition-colors hover:opacity-70"
                    >
                      {item.label}
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
