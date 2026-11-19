'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

interface Book {
  title: string
  year: number
  kind: string
  desc: string
  hue: string
  pages: number
  publisher: string
  about: string
  gallery: string[]
}

const BOOKS: Book[] = [
  {
    title: 'Margem de Cadernos',
    year: 2014,
    kind: 'Poesia',
    desc: 'Estreia na literatura: versos escritos nas bordas de cadernos escolares.',
    hue: '#de5b8b',
    pages: 96,
    publisher: 'Edições da Cheia',
    about: 'Reunião dos primeiros poemas de Revoredo, colhidos ao longo de duas décadas nas margens de cadernos, guardanapos e folhas soltas. Um livro de estreia que já anuncia o diálogo entre canção e poesia que marcaria toda a obra.',
    gallery: ['Capa', 'Miolo', 'Manuscrito'],
  },
  {
    title: 'O Rio por Dentro',
    year: 2017,
    kind: 'Poesia',
    desc: 'Poemas de travessia sobre pertencimento, água e memória.',
    hue: '#2099b3',
    pages: 120,
    publisher: 'Casa Ribeirinha',
    about: 'Segundo livro, escrito durante uma temporada às margens do rio. A água atravessa cada verso como metáfora de tempo, origem e passagem — um mergulho na paisagem interior do artista.',
    gallery: ['Capa', 'Orelha', 'Lançamento'],
  },
  {
    title: 'Boca de Noite',
    year: 2019,
    kind: 'Contos',
    desc: 'Prosa breve e febril, colhida das madrugadas de estrada.',
    hue: '#fb198b',
    pages: 148,
    publisher: 'Noturna Editorial',
    about: 'Primeira incursão na prosa: contos curtos e febris nascidos das madrugadas de turnê. Personagens de beira de estrada, bares e camarins habitam narrativas que respiram o ritmo da canção.',
    gallery: ['Capa', 'Sumário', 'Sessão de autógrafos'],
  },
  {
    title: 'Palavra Rasa',
    year: 2022,
    kind: 'Ensaio',
    desc: 'Reflexões sobre canção, silêncio e o ofício de dizer pouco.',
    hue: '#145e7c',
    pages: 84,
    publisher: 'Edições da Cheia',
    about: 'Livro de ensaios sobre o ofício de escrever e compor. Revoredo reflete sobre o valor do silêncio, da economia da palavra e da escuta — um manifesto discreto sobre dizer muito com pouco.',
    gallery: ['Capa', 'Trecho', 'Debate'],
  },
  {
    title: 'Ainda Verso',
    year: 2024,
    kind: 'Poesia',
    desc: 'Antologia dos trinta anos, reunindo inéditos e favoritos do público.',
    hue: '#68789c',
    pages: 208,
    publisher: 'Casa Ribeirinha',
    about: 'Antologia comemorativa dos trinta anos de carreira, reunindo poemas inéditos ao lado dos favoritos do público. Um panorama da voz poética de Revoredo, do primeiro caderno ao palco de hoje.',
    gallery: ['Capa', 'Edição especial', 'Turnê literária'],
  },
]

const SARAUS = [
  { name: 'Sarau da Cheia', place: 'Praça central · mensal', note: 'Encontro de poesia falada que reúne vozes novas e veteranas.' },
  { name: 'Noite de Versos', place: 'Livrarias & bares', note: 'Circuito itinerante de leitura com música ao fundo.' },
  { name: 'Palavra na Roda', place: 'Escolas públicas', note: 'Oficina-sarau que leva poesia a jovens leitores.' },
]

export default function LiteraturaPage() {
  const p = PAGE_MAP.literatura.palette
  const [poem, setPoem] = useState(0)
  const [openBook, setOpenBook] = useState<Book | null>(null)
  const poems = [
    ['Escrevo como quem afina', 'uma corda que não existe —', 'o som vem depois,', 'quando a mão já esqueceu o medo.'],
    ['A palavra rasa é funda:', 'cabe nela o rio inteiro', 'e a vontade de dizer', 'sem gastar o que se sente.'],
    ['De tanto andar por dentro', 'virei paisagem de mim.', 'Quem canta se atravessa,', 'quem escreve fica.'],
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(90% 70% at 85% 10%, ${withAlpha('#fb198b', 0.18)}, transparent 55%), radial-gradient(70% 60% at 5% 90%, ${withAlpha('#2099b3', 0.16)}, transparent 60%)` }}
        />
        <Section className="relative">
          <Reveal>
            <Kicker p={p}>Capítulo 05 — Literatura</Kicker>
            <h1 className="mt-6 font-serif text-5xl leading-[0.92] md:text-8xl">
              A carreira
              <br />
              da <span style={{ color: p.accent }}>palavra</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed" style={{ color: p.muted }}>
              Antes mesmo da canção, veio o verso. Escritor e poeta, Revoredo faz da
              literatura a outra metade da sua voz — em livros, saraus e leituras
              que espalham a palavra falada.
            </p>
          </Reveal>
        </Section>
      </section>

      {/* Poem rotator */}
      <Section className="py-16 md:py-24">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border px-8 py-14 md:px-16 md:py-20"
            style={{ borderColor: p.line, background: withAlpha('#fff', 0.35) }}
          >
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: p.accent2 }}>
                  Do caderno · trecho {poem + 1}
                </span>
                <div className="mt-6 font-serif text-3xl italic leading-snug md:text-4xl">
                  {poems[poem].map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                {poems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPoem(i)}
                    aria-label={`Trecho ${i + 1}`}
                    className="h-2 rounded-full transition-all"
                    style={{ width: i === poem ? 28 : 10, background: i === poem ? p.accent : p.line }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Books */}
      <Section className="py-8 md:py-16">
        <Reveal>
          <Kicker p={p}>Bibliografia</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Os livros</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 70}>
              <button
                onClick={() => setOpenBook(b)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border text-left transition-transform hover:-translate-y-1.5"
                style={{ borderColor: p.line, background: withAlpha('#fff', 0.4) }}
              >
                <div
                  className="flex aspect-[3/4] flex-col justify-between p-6"
                  style={{ background: `linear-gradient(155deg, ${b.hue}, ${withAlpha(b.hue, 0.55)})`, color: '#fff' }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{b.kind}</span>
                  <div>
                    <div className="font-serif text-3xl leading-none">{b.title}</div>
                    <div className="mt-1 text-sm opacity-80">{b.year}</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed" style={{ color: p.muted }}>{b.desc}</p>
                  <span className="mt-4 text-xs font-medium uppercase tracking-[0.14em]" style={{ color: p.accent }}>
                    Saber mais →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Saraus */}
      <Section className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <Reveal>
            <Kicker p={p}>Palavra viva</Kicker>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Saraus &amp;<br />leituras
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: p.muted }}>
              A poesia sai do papel e vira encontro. Revoredo organiza e conduz
              saraus que já se tornaram tradição em diversas cidades.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col">
              {SARAUS.map((s, i) => (
                <div
                  key={s.name}
                  className="grid grid-cols-[auto_1fr] gap-5 border-t py-6"
                  style={{ borderColor: p.line }}
                >
                  <span className="font-display text-4xl" style={{ color: p.accent2 }}>0{i + 1}</span>
                  <div>
                    <h3 className="font-serif text-2xl">{s.name}</h3>
                    <div className="text-sm" style={{ color: p.accent }}>{s.place}</div>
                    <p className="mt-1 text-[15px] leading-relaxed" style={{ color: p.muted }}>{s.note}</p>
                  </div>
                </div>
              ))}
              <div className="border-t" style={{ borderColor: p.line }} />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pb-8">
        <Reveal>
          <Link
            href="/projetos"
            className="group flex w-full items-center justify-between rounded-3xl px-8 py-10 text-left"
            style={{ background: `linear-gradient(120deg, ${withAlpha('#fb198b', 0.16)}, ${withAlpha('#2099b3', 0.16)})` }}
          >
            <span className="font-serif text-3xl md:text-4xl">O multiartista em projetos e coletivos</span>
            <span className="text-2xl transition-transform group-hover:translate-x-2" style={{ color: p.accent }}>→</span>
          </Link>
        </Reveal>
      </Section>

      {/* Book detail modal */}
      {openBook && (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
          style={{ background: withAlpha('#1a0d12', 0.55), backdropFilter: 'blur(6px)' }}
          onClick={() => setOpenBook(null)}
          role="dialog"
          aria-modal="true"
          aria-label={openBook.title}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-t-3xl sm:rounded-3xl"
            style={{ background: p.bg, boxShadow: `0 40px 120px ${withAlpha('#000', 0.5)}`, animation: 'pageIn .4s ease both' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenBook(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full text-xl transition-transform hover:scale-110"
              style={{ background: withAlpha(p.fg, 0.08), color: p.fg }}
            >
              ×
            </button>

            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              {/* Cover */}
              <div
                className="flex aspect-[3/4] flex-col justify-between p-7 sm:aspect-auto"
                style={{ background: `linear-gradient(155deg, ${openBook.hue}, ${withAlpha(openBook.hue, 0.5)})`, color: '#fff' }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{openBook.kind}</span>
                <div>
                  <div className="font-serif text-4xl leading-none">{openBook.title}</div>
                  <div className="mt-2 text-sm opacity-80">{openBook.year} · {openBook.publisher}</div>
                </div>
              </div>

              {/* Details */}
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: p.accent2 }}>
                  <span>{openBook.year}</span>
                  <span>{openBook.pages} páginas</span>
                  <span>{openBook.kind}</span>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed" style={{ color: p.muted }}>
                  {openBook.about}
                </p>

                <div className="mt-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: p.accent }}>
                    Do livro
                  </span>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {openBook.gallery.map((g) => (
                      <div
                        key={g}
                        className="flex aspect-[3/4] items-end rounded-lg p-3"
                        style={{ background: `linear-gradient(160deg, ${withAlpha(openBook.hue, 0.7)}, ${withAlpha(openBook.hue, 0.25)})`, color: '#fff' }}
                      >
                        <span className="text-[10px] font-medium uppercase tracking-[0.1em] opacity-90">{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
