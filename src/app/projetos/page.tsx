'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const PORTRAIT = '/assets/portrait-pink.png'

const AREAS = ['Todos', 'Curadoria', 'Oficinas', 'Cena', 'Coletivos'] as const

interface Project {
  title: string
  area: Exclude<(typeof AREAS)[number], 'Todos'>
  year: string
  role: string
  desc: string
}

const PROJECTS: Project[] = [
  { title: 'Festival Raiz', area: 'Curadoria', year: '2023–25', role: 'Curador & produtor', desc: 'Curadoria de três edições de um festival que celebra a canção brasileira de raiz e novas vozes.' },
  { title: 'Coletivo Maré', area: 'Coletivos', year: '2018–', role: 'Fundador', desc: 'Coletivo de artistas que ocupa praças e espaços públicos com música, poesia e artes visuais.' },
  { title: 'Oficina da Canção', area: 'Oficinas', year: '2016–', role: 'Facilitador', desc: 'Formação em composição e canção para jovens artistas, já em dezenas de turmas.' },
  { title: 'Contação de Rua', area: 'Cena', year: '2020–22', role: 'Contador & diretor', desc: 'Espetáculo de contação de histórias que percorreu escolas e centros culturais.' },
  { title: 'Auto da Palavra', area: 'Cena', year: '2021', role: 'Ator & músico', desc: 'Espetáculo teatral que mistura dramaturgia, música ao vivo e poesia falada.' },
  { title: 'Escola Livre de Música', area: 'Oficinas', year: '2019–', role: 'Coordenador', desc: 'Projeto social de ensino musical gratuito em comunidades periféricas.' },
  { title: 'Mostra Palco Aberto', area: 'Curadoria', year: '2022', role: 'Curador', desc: 'Mostra de artistas independentes com programação de shows, debates e residências.' },
  { title: 'Roda Viva de Arte', area: 'Coletivos', year: '2017–', role: 'Articulador', desc: 'Rede de coletivos que organiza intervenções e ações formativas colaborativas.' },
]

export default function ProjetosPage() {
  const p = PAGE_MAP.projetos.palette
  const [area, setArea] = useState<(typeof AREAS)[number]>('Todos')
  const list = useMemo(
    () => (area === 'Todos' ? PROJECTS : PROJECTS.filter((x) => x.area === area)),
    [area],
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(95% 75% at 20% 0%, ${withAlpha('#f3c909', 0.22)}, transparent 55%), radial-gradient(80% 70% at 95% 100%, ${withAlpha('#e08317', 0.28)}, transparent 60%)` }}
        />
        <Section className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <Reveal>
              <Kicker p={p}>Capítulo 06 — Projetos</Kicker>
              <h1 className="mt-6 font-serif text-5xl leading-[0.92] md:text-8xl">
                O gesto
                <br />
                <span style={{ color: p.accent }}>coletivo</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed" style={{ color: p.muted }}>
                Multiartista por vocação, Revoredo faz da arte um trabalho de muitas
                mãos: curadoria de festivais, oficinas, coletivos, espetáculos,
                contação de histórias e teatro.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl" style={{ boxShadow: `0 30px 80px ${withAlpha('#000', 0.45)}` }}>
                  <img src={PORTRAIT} alt="Retrato de Revoredo" className="w-full object-cover" />
                </div>
                <div
                  className="absolute -right-4 -top-4 rotate-6 rounded-xl px-5 py-3 font-mono text-xs uppercase tracking-[0.2em]"
                  style={{ background: p.accent, color: '#20160b' }}
                >
                  Multiartista
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* Discipline strip */}
      <Section className="py-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-3 lg:grid-cols-6" style={{ background: p.line }}>
          {['Curadoria', 'Produção', 'Oficinas', 'Teatro', 'Contação', 'Coletivos'].map((d, i) => (
            <Reveal key={d} delay={i * 50}>
              <div className="p-6 text-center" style={{ background: p.bg }}>
                <div className="font-serif text-lg" style={{ color: p.accent }}>{d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Filters + grid */}
      <Section className="py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Kicker p={p}>Portfólio</Kicker>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">Projetos &amp; frentes</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => {
                const active = a === area
                return (
                  <button
                    key={a}
                    onClick={() => setArea(a)}
                    className="rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] transition-all"
                    style={{
                      background: active ? p.accent : 'transparent',
                      color: active ? '#20160b' : p.muted,
                      border: `1px solid ${active ? p.accent : p.line}`,
                    }}
                  >
                    {a}
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {list.map((pr, i) => (
            <Reveal key={pr.title} delay={(i % 2) * 80}>
              <article
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 md:p-9"
                style={{ borderColor: p.line, background: p.surface }}
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: p.accent }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em]" style={{ borderColor: p.line, color: p.accent }}>
                    {pr.area}
                  </span>
                  <span className="font-mono text-sm" style={{ color: p.muted }}>{pr.year}</span>
                </div>
                <div className="relative mt-8">
                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">{pr.title}</h3>
                  <div className="mt-1 text-sm font-medium uppercase tracking-[0.1em]" style={{ color: p.accent2 }}>{pr.role}</div>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: p.muted }}>{pr.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <Section className="pb-8">
        <Reveal>
          <div
            className="rounded-3xl px-8 py-16 text-center md:px-16 md:py-24"
            style={{ background: `linear-gradient(120deg, ${withAlpha('#e08317', 0.32)}, ${withAlpha('#633c15', 0.5)})` }}
          >
            <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-[1.05] md:text-5xl">
              Trinta anos, muitas vozes, uma só obra.
            </h2>
            <Link
              href="/"
              className="group mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-transform hover:scale-[1.03]"
              style={{ background: p.accent, color: '#20160b' }}
            >
              Voltar ao início
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
