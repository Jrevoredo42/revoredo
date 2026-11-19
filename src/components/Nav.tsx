'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PAGES } from '@/lib/pages'
import { usePage } from '@/lib/usePage'

export function Nav() {
  const pathname = usePathname()
  const { page, palette } = usePage()
  const current = page.key
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // fecha o menu mobile ao trocar de rota
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? `${palette.bg}e6` : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: `1px solid ${scrolled ? palette.line : 'transparent'}`,
        }}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <Link
            href="/"
            aria-hidden={!scrolled}
            tabIndex={scrolled ? 0 : -1}
            className={`font-display text-2xl leading-none tracking-[0.14em] transition-all duration-300 ${
              scrolled ? 'translate-y-0 opacity-100 hover:opacity-70' : 'pointer-events-none -translate-y-1 opacity-0'
            }`}
            style={{ color: palette.fg }}
          >
            REVOREDO
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {PAGES.map((pg) => {
              const active = pg.key === current
              return (
                <Link
                  key={pg.key}
                  href={pg.href}
                  className="group relative py-1 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors"
                  style={{ color: active ? palette.fg : palette.muted }}
                >
                  {pg.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                    style={{
                      width: active ? '100%' : '0%',
                      background: palette.accent,
                    }}
                  />
                </Link>
              )
            })}
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label="Menu"
          >
            <span
              className="h-px w-6 transition-all"
              style={{ background: palette.fg, transform: open ? 'translateY(6px) rotate(45deg)' : '' }}
            />
            <span
              className="h-px w-6 transition-all"
              style={{ background: palette.fg, opacity: open ? 0 : 1 }}
            />
            <span
              className="h-px w-6 transition-all"
              style={{ background: palette.fg, transform: open ? 'translateY(-6px) rotate(-45deg)' : '' }}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center px-8 transition-all duration-500 lg:hidden"
        style={{
          background: palette.bg,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {PAGES.map((pg, i) => (
          <Link
            key={pg.key}
            href={pg.href}
            className="flex items-baseline gap-4 border-b py-5 text-left"
            style={{
              borderColor: palette.line,
              transitionDelay: `${i * 40}ms`,
              transform: open ? 'none' : 'translateY(12px)',
              opacity: open ? 1 : 0,
              transition: 'all 0.5s',
            }}
          >
            <span className="font-mono text-xs" style={{ color: palette.accent }}>
              {pg.index}
            </span>
            <span
              className="font-serif text-3xl"
              style={{ color: pg.key === current ? palette.accent : palette.fg }}
            >
              {pg.label}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
