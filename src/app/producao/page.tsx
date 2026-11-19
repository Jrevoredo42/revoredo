'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const LIVE_1 = '/assets/live-1.png'

const WORKS = [
  { artist: 'Marina Aché', title: 'Corredeira', year: 2025, role: 'Produção & mixagem', type: 'Álbum' },
  { artist: 'Coletivo Maré', title: 'Vozes da Cheia', year: 2024, role: 'Direção musical', type: 'Ao vivo' },
  { artist: 'Téo Sabiá', title: 'Aurora', year: 2024, role: 'Produção', type: 'Single' },
  { artist: 'Dandara Luz', title: 'Fôlego', year: 2023, role: 'Produção & arranjos', type: 'EP' },
  { artist: 'Banda Ventania', title: 'Sertão Elétrico', year: 2022, role: 'Produção', type: 'Álbum' },
  { artist: 'Joana Ferro', title: 'Casa Aberta', year: 2021, role: 'Co-produção', type: 'Álbum' },
  { artist: 'Rael do Cais', title: 'Maré Baixa', year: 2020, role: 'Produção & mix', type: 'Single' },
  { artist: 'Orquestra de Rua', title: 'Praça', year: 2019, role: 'Direção & produção', type: 'Ao vivo' },
]

const SERVICES = [
  { t: 'Produção de disco', d: 'Da pré-produção à masterização, conduzindo a obra do primeiro esboço ao master final.' },
  { t: 'Direção musical', d: 'Arranjos, escolha de banda e concepção de shows e projetos ao vivo.' },
  { t: 'Mixagem & sonoridade', d: 'Uma assinatura sonora orgânica, com espaço, textura e verdade.' },
]

export default function ProducaoPage() {
  const p = PAGE_MAP.producao.palette
  const [hover, setHover] = useState<number | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(100% 80% at 80% 0%, ${withAlpha('#a10002', 0.4)}, transparent 55%), radial-gradient(80% 70% at 0% 100%, ${withAlpha('#c16448', 0.28)}, transparent 60%)`,
          }}
        />
        <Section className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <Reveal>
              <Kicker p={p}>Capítulo 04 — Produção musical</Kicker>
              <h1 className="mt-6 font-serif text-5xl leading-[0.95] md:text-8xl">
                O som
                <br />
                dos <span style={{ color: p.accent }}>outros</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: p.muted }}>
                Como produtor, Revoredo emprestou ouvido e mão a dezenas de
                artistas. Discos, singles e espetáculos que ganharam corpo no seu
                estúdio e sob sua direção.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8">
                {[
                  { n: '60+', l: 'discos produzidos' },
                  { n: '35', l: 'artistas' },
                  { n: '15', l: 'anos de estúdio' },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-5xl md:text-6xl" style={{ color: p.accent }}>{s.n}</div>
                    <div className="text-sm" style={{ color: p.muted }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* Services */}
      <Section className="py-16 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl md:grid-cols-3" style={{ background: p.line }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="flex h-full flex-col gap-3 p-8" style={{ background: p.bg }}>
                <span className="font-mono text-xs" style={{ color: p.accent }}>0{i + 1}</span>
                <h3 className="font-serif text-2xl">{s.t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: p.muted }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Works — interactive list */}
      <Section className="py-16 md:py-24">
        <Reveal>
          <Kicker p={p}>Selo de produção</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Trabalhos selecionados</h2>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="flex flex-col">
            {WORKS.map((w, i) => (
              <Reveal key={i} delay={(i % 4) * 50}>
                <div
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t py-5 transition-all hover:pl-3 md:grid-cols-[auto_1fr_auto] md:gap-8"
                  style={{ borderColor: p.line }}
                >
                  <span className="hidden font-mono text-sm md:block" style={{ color: p.muted }}>{w.year}</span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-medium md:text-xl">{w.artist}</span>
                      <span className="font-serif italic" style={{ color: p.accent }}>{w.title}</span>
                    </div>
                    <div className="text-sm md:hidden" style={{ color: p.muted }}>{w.year} · {w.role}</div>
                    <div className="hidden text-sm md:block" style={{ color: p.muted }}>{w.role}</div>
                  </div>
                  <span
                    className="rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]"
                    style={{ borderColor: p.line, color: p.fg }}
                  >
                    {w.type}
                  </span>
                </div>
              </Reveal>
            ))}
            <div className="border-t" style={{ borderColor: p.line }} />
          </div>

          {/* sticky preview card */}
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-3xl border" style={{ borderColor: p.line }}>
                <div className="relative aspect-[4/5]">
                  <img src={LIVE_1} alt="Revoredo dirigindo uma apresentação" className="h-full w-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(0deg, ${withAlpha('#0d0100', 0.9)}, transparent 60%)` }} />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                      {hover !== null ? WORKS[hover].type : 'Em foco'}
                    </div>
                    <div className="mt-1 font-serif text-2xl">
                      {hover !== null ? WORKS[hover].artist : 'No estúdio'}
                    </div>
                    <div className="text-sm" style={{ color: p.muted }}>
                      {hover !== null ? `${WORKS[hover].title} · ${WORKS[hover].year}` : 'Passe o mouse sobre um trabalho'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Quote band */}
      <Section className="py-16">
        <Reveal>
          <div
            className="rounded-3xl px-8 py-16 md:px-16 md:py-20"
            style={{ background: `linear-gradient(120deg, ${withAlpha('#821e16', 0.5)}, ${withAlpha('#0d0100', 0.9)})` }}
          >
            <p className="max-w-3xl font-serif text-3xl leading-snug md:text-4xl">
              “Produzir é escutar o que o artista ainda não sabe que quer dizer — e
              abrir espaço para que ele diga.”
            </p>
            <div className="mt-6 font-mono text-xs uppercase tracking-[0.2em]" style={{ color: p.accent }}>
              Revoredo, sobre o ofício
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pb-8">
        <Reveal>
          <Link
            href="/literatura"
            className="group flex w-full items-center justify-between rounded-3xl border px-8 py-10 text-left"
            style={{ borderColor: p.line }}
          >
            <span className="font-serif text-3xl md:text-4xl">Da produção à palavra escrita</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2" style={{ color: p.accent }}>→</span>
          </Link>
        </Reveal>
      </Section>
    </>
  )
}
