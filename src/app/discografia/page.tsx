'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, PlayButton, Reveal, Section, useNowPlaying, withAlpha } from '@/components/ui'

const BACKDROP = '/assets/live-2.png'

type Kind = 'Álbum' | 'EP' | 'Single'

interface Release {
  title: string
  year: number
  kind: Kind
  tracks: number
  desc: string
  hue: string
}

const RELEASES: Release[] = [
  { title: 'Raiz Viva', year: 2025, kind: 'Álbum', tracks: 11, desc: 'Gravado ao vivo em círculo, sem retoques. O disco-síntese de trinta anos.', hue: '#ffc82f' },
  { title: 'Palavra Rasa', year: 2024, kind: 'Single', tracks: 1, desc: 'Canção-manifesto sobre o excesso de ruído e a economia da palavra.', hue: '#457187' },
  { title: 'Do Avesso', year: 2023, kind: 'EP', tracks: 5, desc: 'Cinco faixas intimistas, voz e violão, gravadas em uma única madrugada.', hue: '#d2dee2' },
  { title: 'Correnteza', year: 2021, kind: 'Álbum', tracks: 12, desc: 'Uma travessia sonora pelos rios do país, com participações especiais.', hue: '#ffc82f' },
  { title: 'Beira', year: 2019, kind: 'Single', tracks: 1, desc: 'Balada de fronteira, indicada a prêmios de melhor canção.', hue: '#457187' },
  { title: 'Terra Batida', year: 2017, kind: 'Álbum', tracks: 10, desc: 'Disco de estrada, escrito entre uma cidade e outra da turnê.', hue: '#ffc82f' },
  { title: 'Cardume', year: 2015, kind: 'EP', tracks: 4, desc: 'Experimentos com percussão de água e vozes sobrepostas.', hue: '#d2dee2' },
  { title: 'Primeira Voz', year: 2008, kind: 'Álbum', tracks: 9, desc: 'O álbum de estreia. Cru, urgente, feito com o que havia à mão.', hue: '#ffc82f' },
]

const FILTERS = ['Todos', 'Álbum', 'EP', 'Single'] as const

export default function DiscografiaPage() {
  const p = PAGE_MAP.discografia.palette
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos')
  const np = useNowPlaying()

  const list = useMemo(
    () => (filter === 'Todos' ? RELEASES : RELEASES.filter((r) => r.kind === filter)),
    [filter],
  )

  return (
    <div className="relative">
      {/* Subtle full-page backdrop of the artist */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img src={BACKDROP} alt="" aria-hidden className="h-full w-full object-cover opacity-[0.12]" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${p.bg} 0%, ${withAlpha(p.bg, 0.72)} 40%, ${p.bg} 100%)` }}
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
                Álbuns, EPs e singles que marcam a trajetória. Dê play e deixe cada
                faixa contar seu próprio capítulo.
              </p>
            </Reveal>
          </Section>
        </section>

        {/* Featured */}
        <Section className="py-10">
          <Reveal>
            {(() => {
              const feat = RELEASES[0]
              const id = 'feat-' + feat.title
              const playing = np.active === id
              return (
                <div
                  className="grid gap-8 overflow-hidden rounded-3xl border p-6 md:grid-cols-[280px_1fr] md:p-8"
                  style={{ borderColor: p.line, background: p.surface }}
                >
                  <div
                    className="flex aspect-square flex-col justify-between rounded-2xl p-6"
                    style={{ background: `linear-gradient(150deg, ${feat.hue}, ${withAlpha('#032e53', 0.9)})`, color: '#03121a' }}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.2em]">Destaque · {feat.year}</span>
                    <div className="font-display text-5xl leading-none">{feat.title}</div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                      {feat.kind} · {feat.tracks} faixas
                    </span>
                    <h2 className="mt-3 font-serif text-4xl md:text-5xl">{feat.title}</h2>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: p.muted }}>
                      {feat.desc}
                    </p>
                    <div className="mt-6">
                      <PlayButton p={p} playing={playing} onToggle={() => np.toggle(id)} label="Ouvir álbum" />
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {list.map((r, i) => {
              const id = r.title + r.year
              const playing = np.active === id
              return (
                <Reveal key={id} delay={(i % 4) * 60}>
                  <article className="group flex flex-col">
                    {/* Cover */}
                    <div
                      className="relative aspect-square overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1.5"
                      style={{
                        background: `linear-gradient(150deg, ${r.hue}, ${withAlpha('#032e53', 0.95)})`,
                        boxShadow: `0 18px 40px ${withAlpha('#000', 0.45)}`,
                      }}
                    >
                      {/* subtle sheen */}
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{ background: `radial-gradient(120% 90% at 20% 10%, ${withAlpha('#fff', 0.35)}, transparent 45%)` }}
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-5" style={{ color: '#03121a' }}>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{r.kind}</span>
                        <span className="font-display text-4xl leading-[0.85]">{r.title}</span>
                      </div>
                      {/* Play overlay */}
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
                          style={{ background: '#03121a', color: r.hue }}
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
                        style={{ color: playing ? p.accent : p.muted }}
                      >
                        {playing ? '● tocando' : `${r.tracks}f`}
                      </span>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </Section>

        <Section className="pb-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border px-8 py-10" style={{ borderColor: p.line }}>
              <h2 className="font-serif text-3xl md:text-4xl">Por trás de cada disco, uma produção.</h2>
              <Link
                href="/producao"
                className="group inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.14em]"
                style={{ background: p.accent, color: p.bg }}
              >
                Ver produção musical
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </Reveal>
        </Section>
      </div>
    </div>
  )
}
