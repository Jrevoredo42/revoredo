'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import type { Palette } from '@/lib/pages'

/** Scroll-reveal wrapper. Adds `.reveal` (see index.css + useReveal). */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: keyof HTMLElementTagNameMap
}) {
  const Comp = Tag as any
  return (
    <Comp className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Comp>
  )
}

/** Small kicker label with an accent tick — used above section headings. */
export function Kicker({ children, p }: { children: ReactNode; p: Palette }) {
  return (
    <span
      className="inline-flex items-center gap-3 font-mono uppercase tracking-[0.35em] text-[11px]"
      style={{ color: p.muted }}
    >
      <span className="h-px w-8" style={{ background: p.accent }} />
      {children}
    </span>
  )
}

/** A play / pause pill that fakes audio playback state (single per group). */
export function PlayButton({
  p,
  playing,
  onToggle,
  label = 'Ouvir',
}: {
  p: Palette
  playing: boolean
  onToggle: () => void
  label?: string
}) {
  return (
    <button
      onClick={onToggle}
      className="group inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:scale-[1.03]"
      style={{
        background: playing ? p.accent : 'transparent',
        color: playing ? p.bg : p.fg,
        border: `1px solid ${playing ? p.accent : p.line}`,
      }}
    >
      <span
        className="grid h-5 w-5 place-items-center rounded-full"
        style={{ background: playing ? p.bg : p.accent, color: playing ? p.accent : p.bg }}
      >
        {playing ? (
          <span className="flex items-end gap-[2px]">
            <Bar d="0ms" /> <Bar d="180ms" /> <Bar d="90ms" />
          </span>
        ) : (
          <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
            <path d="M0 0.5L9 5L0 9.5V0.5Z" />
          </svg>
        )}
      </span>
      {playing ? 'Tocando' : label}
    </button>
  )
}

function Bar({ d }: { d: string }) {
  return (
    <span
      className="w-[2px] rounded-full bg-current"
      style={{ height: 8, animation: `eq 0.9s ${d} ease-in-out infinite alternate` }}
    />
  )
}

/** Full-bleed section wrapper with consistent horizontal padding. */
export function Section({
  children,
  className = '',
  style,
  id,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  id?: string
}) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-20 ${className}`} style={style}>
      <div className="mx-auto w-full max-w-[1280px]">{children}</div>
    </section>
  )
}

/** A horizontal marquee band of repeated words. */
export function Marquee({ words, p }: { words: string[]; p: Palette }) {
  const line = [...words, ...words]
  return (
    <div
      className="overflow-hidden border-y py-5"
      style={{ borderColor: p.line }}
    >
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <span key={k} className="flex shrink-0">
            {line.map((w, i) => (
              <span
                key={i}
                className="mx-6 font-serif italic text-2xl md:text-3xl"
                style={{ color: i % 2 ? p.accent : p.muted }}
              >
                {w}
                <span className="mx-6 not-italic" style={{ color: p.line }}>
                  ✦
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

/** Utility to make an rgba string from a hex + alpha. */
export function withAlpha(hex: string, a: number) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.replace(/(.)/g, '$1$1') : h, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}

/** Hook: single active playing index within a list. */
export function useNowPlaying() {
  const [active, setActive] = useState<string | null>(null)
  return {
    active,
    toggle: (id: string) => setActive((cur) => (cur === id ? null : id)),
  }
}
