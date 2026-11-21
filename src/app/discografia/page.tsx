'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
// import { Kicker, PlayButton, Reveal, Section, useNowPlaying, withAlpha } from '@/components/ui'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const BACKDROP = '/assets/live-2.png'

type Kind = 'Álbum' | 'EP' | 'Single'

interface Release {
  title: string
  year: number
  kind: Kind
  tracks: number
  photo: string
  url: string
}

const FEATURED_DESC =
  'Novela musical onde a obra expande as possibilidades da canção, unindo música, poesia, performance e dramaturgia sonora em uma única experiência narrativa.'

const RELEASES: Release[] = [
  {
    title: 'Fino Fio',
    year: 2026,
    kind: 'Álbum',
    tracks: 8,
    photo: '/albuns/fino-fio.png',
    url: 'https://open.spotify.com/album/2d7QirVaGXE6hSfNb8BeuR?si=7gf3HwmtSEWcgK7RNpw_Ew',
  },
  {
    title: 'A Vida Inteira',
    year: 2026,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/a-vida-inteira.png',
    url: 'https://open.spotify.com/album/3nSaBV1kXNm4605McSVacl?si=sr5fSh5HTJeRaB5in0PPHg',
  },
  {
    title: 'A Paixão',
    year: 2026,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/a-paixao.png',
    url: 'https://open.spotify.com/album/5KOKDA6MxlqIzcQplruMJC?si=1c-LfdKbQY-b5556pJ1G8w',
  },
  {
    title: 'Romance Épico',
    year: 2026,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/romance-epico.png',
    url: 'https://open.spotify.com/album/1yHOpQKCqgcYWbToBvESRD?si=puWldFL-TT2q8JQ86aNIng',
  },
  {
    title: 'Poema Ingênuo',
    year: 2026,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/poema-ingenuo.png',
    url: 'https://open.spotify.com/album/7LKlNcFZnXDrXFwiVvIDZV?si=C6BFkTqtS32OG1EJkzs5MA',
  },
  {
    title: 'Agreste',
    year: 2024,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/agreste.png',
    url: 'https://open.spotify.com/album/2p7R3KKCmWK5vTX7CSUZQ9?si=0pTOuBUGRyq8VHY_Q-_m_A',
  },
  {
    title: 'Arrumação',
    year: 2021,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/arrumacao.png',
    url: 'https://open.spotify.com/album/62zDYSfwgahQwOwMpMU1p4?si=x8JiGfsjTuuB_AUoIL58Kw',
  },
  {
    title: 'Revoredo',
    year: 2020,
    kind: 'Álbum',
    tracks: 11,
    photo: '/albuns/revoredo.png',
    url: 'https://open.spotify.com/album/73B4Z5lqA91C3fdjU3GwBm?si=HS2i2yacSsG91G-MoiErfg',
  },
  {
    title: 'Quase Tudo',
    year: 2020,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/quase-tudo.png',
    url: 'https://open.spotify.com/album/0swvPccsYLkFyM8endEW1R?si=c_dcaTavTIGVCGDpxqC-bQ',
  },
  {
    title: 'De Repente',
    year: 2020,
    kind: 'Single',
    tracks: 1,
    photo: '/albuns/de-repente.png',
    url: 'https://open.spotify.com/album/6VJyMD72cq3EeApszPJP9G?si=qstDvCr8RjKc3uKNOTLvSw',
  },
]

const FILTERS = ['Todos', 'Álbum', 'Single'] as const

export default function DiscografiaPage() {
  const p = PAGE_MAP.discografia.palette
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos')
  // Temporariamente comentado enquanto os arquivos de áudio não são adicionados:
  // const np = useNowPlaying()

  const list = useMemo(
    () => (filter === 'Todos' ? RELEASES : RELEASES.filter((r) => r.kind === filter)),
    [filter],
  )

  return (
    <div className="relative">
      {/* Subtle full-page backdrop of the artist */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img src={BACKDROP} alt="" aria-hidden className="h-full w-full object-cover opacity-[0.24]" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${withAlpha(p.bg, 0.88)} 0%, ${withAlpha(p.bg, 0.56)} 45%, ${withAlpha(p.bg, 0.92)} 100%)` }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-10">
          {/* Prominent artist photo on the right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
            <img src={BACKDROP} alt="" aria-hidden className="h-full w-full object-cover object-top opacity-90" />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(90deg, ${p.bg} 0%, ${withAlpha(p.bg, 0.5)} 30%, transparent 70%), linear-gradient(0deg, ${p.bg}, transparent 40%)` }}
            />
          </div>
          <Section className="relative">
            <Reveal>
              <Kicker p={p}>Capítulo 03 — Discografia</Kicker>
              <h1 className="mt-6 font-serif text-6xl leading-[0.9] md:text-8xl lg:text-[8.5rem]">
                O <span style={{ color: p.accent }}>catálogo</span>
                <br />
                sonoro
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed" style={{ color: p.muted }}>
                Álbuns, EPs e singles que marcam a trajetória de Revoredo. Explore o
                catálogo e ouça cada obra nas plataformas digitais.
              </p>
            </Reveal>
          </Section>
        </section>

        {/* Featured */}
        <Section className="py-10">
          <Reveal>
            {(() => {
              const feat = RELEASES[0]
              // const id = 'feat-' + feat.title
              // const playing = np.active === id
              return (
                <div
                  className="grid gap-8 overflow-hidden rounded-3xl border p-6 md:grid-cols-[280px_1fr] md:p-8"
                  style={{ borderColor: p.line, background: p.surface }}
                >
                  <div
                    className="overflow-hidden rounded-2xl border"
                    style={{
                      borderColor: p.line,
                      boxShadow: `0 18px 40px ${withAlpha('#000', 0.45)}`,
                    }}
                  >
                    <img
                      src={feat.photo}
                      alt={`Capa de ${feat.title} (${feat.kind}, ${feat.year})`}
                      className="aspect-square w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                      Destaque · {feat.year} · {feat.kind} · {feat.tracks} faixas
                    </span>
                    <h2 className="mt-3 font-serif text-4xl md:text-5xl">{feat.title}</h2>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: p.muted }}>
                      {FEATURED_DESC}
                    </p>
                    <div className="mt-6">
                      {/* <PlayButton p={p} playing={playing} onToggle={() => np.toggle(id)} label="Ouvir álbum" /> */}
                      <a
                        href={feat.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:scale-[1.03]"
                        style={{
                          background: 'transparent',
                          color: p.fg,
                          border: `1px solid ${p.line}`,
                        }}
                      >
                        <span
                          className="grid h-5 w-5 place-items-center rounded-full"
                          style={{ background: p.accent, color: p.bg }}
                        >
                          <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor" aria-hidden="true">
                            <path d="M0 0.5L9 5L0 9.5V0.5Z" />
                          </svg>
                        </span>
                        Ouvir álbum
                        <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })()}
          </Reveal>
        </Section>

        {/* Filters */}
        <Section className="pt-8">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const active = f === filter
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  className="rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all"
                  style={{
                    background: active ? p.accent : 'transparent',
                    color: active ? p.bg : p.muted,
                    border: `1px solid ${active ? p.accent : p.line}`,
                  }}
                >
                  {f}
                </button>
              )
            })}
          </div>
        </Section>

        {/* Grid — album-cover style */}
        <Section className="py-14">
          {list.length === 0 ? (
            <div
              className="rounded-2xl border px-6 py-12 text-center text-sm"
              style={{ borderColor: p.line, color: p.muted, background: p.surface }}
            >
              Nenhum lançamento nesta categoria no momento.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
              {list.map((r, i) => {
                const id = `${filter}-${r.title}-${r.year}`
                // const playing = np.active === id
                return (
                  <div
                    key={id}
                    style={{ animation: 'pageIn 0.45s both', animationDelay: `${(i % 4) * 45}ms` }}
                  >
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvir ${r.title} no Spotify`}
                      className="group block focus-visible:outline-none"
                    >
                      <article className="flex flex-col">
                        {/* Cover */}
                        <div
                          className="relative overflow-hidden rounded-2xl border transition-transform duration-300 group-hover:-translate-y-1.5 group-focus-visible:ring-2 group-focus-visible:ring-[#ffc82f]"
                          style={{
                            borderColor: p.line,
                            boxShadow: `0 18px 40px ${withAlpha('#000', 0.45)}`,
                          }}
                        >
                          <img
                            src={r.photo}
                            alt={`Capa de ${r.title} (${r.kind}, ${r.year})`}
                            className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          {/* Hover overlay pointing to Spotify */}
                          <div
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#011115]/0 transition-colors duration-300 group-hover:bg-[#011115]/35"
                            aria-hidden="true"
                          >
                            <span
                              className="grid h-14 w-14 scale-90 place-items-center rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                              style={{ background: '#03121a', color: p.accent }}
                            >
                              <svg width="15" height="16" viewBox="0 0 9 10" fill="currentColor">
                                <path d="M0 0.5L9 5L0 9.5V0.5Z" />
                              </svg>
                            </span>
                          </div>
                          {/* Play overlay (temporariamente comentado)
                          <button
                            onClick={() => np.toggle(id)}
                            aria-label={playing ? 'Pausar' : 'Tocar'}
                            className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                            style={{
                              background: withAlpha('#011115', playing ? 0.35 : 0.001),
                              opacity: playing ? 1 : undefined,
                            }}
                          >
                            <span
                              className={`grid h-14 w-14 place-items-center rounded-full transition-all duration-300 ${
                                playing ? 'scale-100 opacity-100' : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                              }`}
                              style={{ background: '#03121a', color: p.accent }}
                            >
                              {playing ? (
                                <span className="flex items-end gap-[3px]">
                                  <span className="w-[3px] bg-current" style={{ height: 14, animation: 'eq .9s ease-in-out infinite alternate' }} />
                                  <span className="w-[3px] bg-current" style={{ height: 14, animation: 'eq .9s .2s ease-in-out infinite alternate' }} />
                                  <span className="w-[3px] bg-current" style={{ height: 14, animation: 'eq .9s .1s ease-in-out infinite alternate' }} />
                                </span>
                              ) : (
                                <svg width="15" height="16" viewBox="0 0 9 10" fill="currentColor"><path d="M0 0.5L9 5L0 9.5V0.5Z" /></svg>
                              )}
                            </span>
                          </button>
                          */}
                        </div>
                        {/* Meta below cover */}
                        <div className="mt-4 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-xl leading-tight">{r.title}</h3>
                            <p className="mt-0.5 text-sm" style={{ color: p.muted }}>
                              {r.kind} · {r.year}
                            </p>
                          </div>
                          <span
                            className="mt-1 shrink-0 font-mono text-[11px] uppercase tracking-[0.12em]"
                            style={{ color: p.muted }}
                          >
                            {/* {playing ? '● tocando' : `${r.tracks}f`} */}
                            {`${r.tracks}f`}
                          </span>
                        </div>
                      </article>
                    </a>
                  </div>
                )
              })}
            </div>
          )}
        </Section>

        <Section className="pb-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border px-8 py-10" style={{ borderColor: p.line }}>
              <h2 className="font-serif text-3xl md:text-4xl">Além de cada Disco, um Projeto.</h2>
              <Link
                href="/projetos"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.14em]"
                style={{ background: p.accent, color: p.bg }}
              >
                Ver Projetos
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>
    </div>
  )
}
