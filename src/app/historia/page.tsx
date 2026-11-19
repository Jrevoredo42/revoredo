'use client'

import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const PORTRAIT = '/assets/portrait-pink.png'
const LIVE_2 = '/assets/live-2.png'

const TIMELINE = [
  {
    year: '1995',
    title: 'Os primeiros acordes',
    text: 'Ainda adolescente, começa a tocar em bares e rodas de amigos. A canção brasileira e a poesia de rua se tornam obsessão diária.',
  },
  {
    year: '2001',
    title: 'A primeira demо',
    text: 'Grava a primeira coleção de canções autorais em um estúdio caseiro. O material circula em fitas e começa a formar público.',
  },
  {
    year: '2008',
    title: 'Estrada e estúdio',
    text: 'Assume também a produção de outros artistas. Descobre no estúdio uma segunda voz — a de quem molda o som dos outros.',
  },
  {
    year: '2014',
    title: 'A palavra escrita',
    text: 'Publica o primeiro livro de poemas e passa a organizar saraus. Música e literatura deixam de andar separadas.',
  },
  {
    year: '2019',
    title: 'Coletivos e curadoria',
    text: 'Integra coletivos de arte, produz festivais e assina curadorias, ampliando a obra para o campo do encontro e da formação.',
  },
  {
    year: '2025',
    title: 'Raiz Viva',
    text: 'Lança o disco que sintetiza a trajetória: gravado ao vivo, em círculo, celebrando trinta anos de estrada.',
  },
]

export default function HistoriaPage() {
  const p = PAGE_MAP.historia.palette
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-16 md:pb-24">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(90% 70% at 15% 0%, ${withAlpha('#d76c34', 0.28)}, transparent 60%)` }}
        />
        <Section className="relative">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            <Reveal>
              <Kicker p={p}>Capítulo 02 — Biografia</Kicker>
              <h1 className="mt-6 font-serif text-5xl leading-[0.98] md:text-8xl">
                A vida
                <br />
                em <span style={{ color: p.accent }}>canção</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed" style={{ color: p.muted }}>
                Da roda de bar ao teatro, da fita cassete ao streaming — a história
                de Revoredo é a de alguém que nunca separou o fazer artístico do
                viver em comunidade.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ boxShadow: `0 30px 80px ${withAlpha('#000', 0.5)}` }}
                >
                  <img src={PORTRAIT} alt="Retrato de Revoredo sobre fundo magenta" className="w-full object-cover" />
                </div>
                <div
                  className="absolute -bottom-5 -left-5 rounded-xl px-5 py-4 font-mono text-xs uppercase tracking-[0.2em]"
                  style={{ background: p.accent, color: p.bg }}
                >
                  Desde 1995
                </div>
              </div>
            </Reveal>
          </div>
        </Section>
      </section>

      {/* Prose bio */}
      <Section className="py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Kicker p={p}>Em síntese</Kicker>
              <p className="mt-6 font-serif text-2xl leading-snug md:text-3xl">
                “Faço canção do mesmo lugar de onde escrevo poema: da vontade de
                dividir o que sinto.”
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: p.muted }}>
              <p>
                Nascido no interior e criado entre discos de vinil e livros
                emprestados, Revoredo cedo entendeu que arte era uma forma de
                pertencer. A primeira viola veio das mãos de um tio; os primeiros
                versos, dos cadernos de escola preenchidos nas margens.
              </p>
              <p>
                Ao longo dos anos noventa, tocou em todo canto que aceitasse um
                cantor com voz grave e repertório próprio. Foi ali, no atrito com o
                público, que sua canção ganhou músculo — a mistura de MPB, samba de
                raiz e a poesia falada que marcaria toda a obra.
              </p>
              <p style={{ color: p.fg }}>
                Nos anos 2000, ao começar a produzir outros artistas, descobriu uma
                nova vocação. Passou a habitar o estúdio como quem habita uma
                oficina: escutando, aparando, revelando. Essa escuta atenta se
                estenderia depois à literatura e à curadoria.
              </p>
              <p>
                Hoje, com trinta anos de trajetória, Revoredo é uma referência para
                quem entende a arte como gesto coletivo. Sua história não é a de um
                artista solitário, mas a de alguém que sempre puxou os outros para
                dentro da roda.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-20 md:py-28">
        <Reveal>
          <Kicker p={p}>Linha do tempo</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Trinta anos, em marcos</h2>
        </Reveal>
        <div className="relative mt-14">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px md:left-1/2"
            style={{ background: p.line }}
          />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
                <div
                  className={`relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-12 ${
                    i % 2 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <span
                    className="absolute left-0 top-1.5 z-10 h-4 w-4 -translate-x-[4px] rounded-full md:left-1/2 md:-translate-x-1/2"
                    style={{ background: p.accent, boxShadow: `0 0 0 5px ${p.bg}` }}
                  />
                  <div className={`pl-10 md:pl-0 ${i % 2 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="font-display text-5xl md:text-6xl" style={{ color: p.accent }}>
                      {t.year}
                    </div>
                  </div>
                  <div className={`pl-10 md:pl-0 ${i % 2 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <h3 className="font-serif text-2xl">{t.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: p.muted }}>
                      {t.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing image band */}
      <Section className="py-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img src={LIVE_2} alt="Revoredo em apresentação ao vivo" className="h-[52vh] w-full object-cover" />
            <div
              className="absolute inset-0 flex items-end p-8 md:p-14"
              style={{ background: `linear-gradient(0deg, ${withAlpha('#000', 0.8)}, transparent 70%)` }}
            >
              <div>
                <h2 className="font-serif text-3xl md:text-5xl">A história continua no palco.</h2>
                <Link
                  href="/discografia"
                  className="group mt-5 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em]"
                  style={{ color: p.accent }}
                >
                  Ouça a discografia
                  <span className="transition-transform group-hover:translate-x-1.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
