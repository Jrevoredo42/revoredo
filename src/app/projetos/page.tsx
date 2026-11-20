'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const PORTRAIT = '/revoredo-projetos.jpg'

const AREAS = ['Todos', 'Shows', 'Oficinas', 'Contação de Histórias', 'Literatura', 'Cena', 'Coletivos'] as const

interface Project {
  title: string
  area: Exclude<(typeof AREAS)[number], 'Todos'>
  year: string
  role: string
  desc: string
}

const PROJECTS: Project[] = [
  {
    title: 'Revoredo 30 Anos',
    area: 'Shows',
    year: '2026',
    role: 'Produtor, Cantor',
    desc: 'Um espetáculo comemorativo que celebra os 30 anos de trajetória de Revoredo com banda completa, reunindo canções marcantes de sua carreira, músicas inéditas e clássicos que atravessaram suas influências musicais ao longo do tempo. Um show potente, afetivo e cheio de memória.',
  },
  {
    title: 'Fino Fio',
    area: 'Shows',
    year: '2026',
    role: 'Produtor, Cantor',
    desc: 'Show "Fino Fio": inspirado em sua recém-lançada novela musical, o novo show de Revoredo traz uma experiência semiacústica marcada por cordas, acordeon e camadas poéticas. O repertório percorre as canções do álbum "Fino Fio" e outras músicas emblemáticas de sua trajetória autoral.',
  },
  {
    title: 'Ô de Casa!',
    area: 'Shows',
    year: '2024',
    role: 'Produtor, Cantor',
    desc: 'Um show pensado para acontecer na intimidade das salas e encontros afetivos. Em formato voz e violão, Revoredo apresenta suas canções autorais ao lado de clássicos da música brasileira em uma experiência acolhedora, próxima e cheia de conversa musical.',
  },
  {
    title: 'Encruzilhada Agreste',
    area: 'Shows',
    year: '2024',
    role: 'Produtor Musical, Cantor',
    desc: 'O encontro entre Revoredo e Gabi da Pele Preta em uma celebração de 10 anos de parceria. Um show que mistura sanfona, rock’n’roll, territorialidade, ancestralidade e denúncia social, atravessando o repertório autoral da dupla e releituras de compositores consagrados do Agreste. Show com banda completa.',
  },
  {
    title: 'Te Canto a Canção',
    area: 'Shows',
    year: '2024',
    role: 'Produtor, Músico',
    desc: 'Show acústico e intimista com Revoredo e Mestre Zezinho de Arcoverde, unindo voz, violão e sanfona em versões delicadas e emocionantes de canções autorais.',
  },
  {
    title: 'Luanda Ruanda — Histórias Africanas',
    area: 'Contação de Histórias',
    year: '2016',
    role: 'Direção Musical, Músico',
    desc: 'Um espetáculo cênico que traz a prática ancestral da narração oral, voltado para as infâncias, e que nos conduz por costumes diaspóricos, lendas e texturas sonoras da riquíssima cultura de matriz africana. Uma viagem que nos transporta para outro mundo e, ao mesmo tempo, traz esse mundo para dentro de nós.',
  },
  {
    title: 'Ayô — Histórias de Griô',
    area: 'Contação de Histórias',
    year: '2019',
    role: 'Direção Musical, Músico',
    desc: 'Visa levar histórias, contos, mitos, lendas e cantigas do universo afro-brasileiro de casa em casa, embaixo de árvores, nos terreiros e em diversos territórios.',
  },
  {
    title: 'Histórias da Caixola',
    area: 'Contação de Histórias',
    year: '2015',
    role: 'Direção Musical, Músico',
    desc: 'Coletânea de contos infantis, com textos produzidos pelo Coletivo Tear e contos de autores contemporâneos, narrados por Stephany Metódio e intervenções musicais de Alexandre Revoredo. As histórias mexem com o universo lúdico dos contos e se integram com as linguagens artísticas da música e do teatro.',
  },
  {
    title: 'O Livro em Cena',
    area: 'Literatura',
    year: '2018',
    role: 'Produtor, Ator',
    desc: 'Projeto voltado para a literatura contemporânea, onde os artistas caminham por várias obras produzidas atualmente na literatura brasileira. Através de leituras, performances, canções e de uma interação direta com o público, os artistas mostram novos gêneros literários, novos autores e novas formas de publicação, contextualizando o público com a literatura contemporânea, numa fórmula eficaz para sensibilização à leitura longe do cânone literário.',
  },
  {
    title: 'Te Canto a Canção — Caminhos Sensíveis para a Composição Musical',
    area: 'Oficinas',
    year: '2026–27',
    role: 'Facilitador · Oficina (6–8h) / Palestra (3h)',
    desc: 'Mergulho no universo da composição musical percorrendo a história da canção brasileira, seus movimentos artísticos e transformações estéticas. Entre escutas, reflexões e experimentações criativas, compartilha técnicas de construção de letras, melodias e repertórios. Público-alvo: músicos, compositores, professores e interessados a partir de 16 anos.',
  },
  {
    title: 'Da Criação à Distribuição — Caminhos Possíveis para a Música',
    area: 'Oficinas',
    year: '2026–27',
    role: 'Facilitador · Oficina (6–8h) / Palestra (3h)',
    desc: 'Conecta a criação artística à produção, ao lançamento e à circulação musical, abordando gravação, distribuição digital, planejamento de carreira e estratégias para a música independente. Público-alvo: compositores, arranjadores, produtores, músicos, professores e interessados a partir de 16 anos.',
  },
  {
    title: 'Meu Amigo Escritor — Encontro Literário com Revoredo',
    area: 'Oficinas',
    year: '2026–27',
    role: 'Escritor & Mediador · Encontro (50–90 min)',
    desc: 'Encontro afetivo, lúdico e participativo que aproxima crianças e adolescentes (5 a 14 anos) do universo da criação literária por meio dos livros "Dianimal" e "O Casaco Oco do Isaac". Entre histórias, música, poesia e conversas, estimula a imaginação, o gosto pela leitura e a expressão artística.',
  },
  {
    title: 'O Bicho Livro — Escrita Criativa e Narrativas para as Infâncias',
    area: 'Oficinas',
    year: '2026–27',
    role: 'Facilitador · Oficina (6h)',
    desc: 'Experiência criativa pelos caminhos da literatura para as infâncias, explorando construção de personagens, enredos, recursos poéticos e processos de editoração, publicação independente, editais e prêmios literários. Público-alvo: escritores, poetas, professores, mediadores de leitura e interessados a partir de 16 anos.',
  },
  {
    title: 'Recital para Reavoar',
    area: 'Cena',
    year: 'Em cartaz',
    role: 'Direção Musical · Cia. Teatro de Retalhos',
    desc: 'Espetáculo cênico da Cia. Teatro de Retalhos com direção musical e trilha sonora original assinadas por Revoredo, integrando música, poesia e artes cênicas.',
  },
  {
    title: 'Taumatrópio',
    area: 'Cena',
    year: '2013–14',
    role: 'Direção Musical · Cia. Teatro de Retalhos',
    desc: 'Espetáculo da Cia. Teatro de Retalhos com direção musical e trilha sonora original de Revoredo, selecionado pelo edital Rumos Itaú Cultural 2013–2014.',
  },
  {
    title: 'Coletivo Tear',
    area: 'Coletivos',
    year: 'Ativo',
    role: 'Fundador & Gestor',
    desc: 'Coletivo de artes integradas do Agreste meridional de Pernambuco que mantém o selo musical Studio Tear, o espaço cultural independente Aldeia Tear e a editora cartonera Severina Catadora, promovendo ações de fruição, difusão e formação artística e cultural.',
  },
  {
    title: 'Mostra Coletiva REVERBO',
    area: 'Coletivos',
    year: 'Ativo',
    role: 'Integrante',
    desc: 'Mostra coletiva de música autoral pernambucana que reúne compositores e intérpretes em encontros de criação, circulação e fortalecimento da canção contemporânea.',
  },
  {
    title: 'FEMUAG, Mostra Mundaú & Studio Tear',
    area: 'Coletivos',
    year: '2021–',
    role: 'Idealizador, Curador & Diretor Musical',
    desc: 'Iniciativas voltadas à música autoral em Garanhuns e no Agreste pernambucano, reunindo o Festival de Música Autoral de Garanhuns (FEMUAG), a Mostra Mundaú de Canções e o Studio Tear Online.',
  },
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
                Multiartista de Garanhuns, no Agreste pernambucano, Revoredo faz da arte um encontro coletivo: shows em circulação, oficinas criativas de música e literatura, contação de histórias, artes cênicas e coletivos culturais.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div className="overflow-hidden rounded-2xl" style={{ boxShadow: `0 30px 80px ${withAlpha('#000', 0.45)}` }}>
                  <img
                    src={PORTRAIT}
                    alt="Retrato de Revoredo sorrindo com camisa estampada colorida"
                    className="w-full object-cover"
                  />
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
          {['Shows', 'Oficinas', 'Contação', 'Literatura', 'Cena', 'Coletivos'].map((d, i) => (
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
                    type="button"
                    aria-pressed={active}
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

        {list.length === 0 ? (
          <div
            className="mt-12 rounded-2xl border px-6 py-12 text-center text-sm"
            style={{ borderColor: p.line, color: p.muted, background: p.surface }}
          >
            Nenhum projeto nesta categoria no momento.
          </div>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {list.map((pr, i) => (
              <div
                key={`${area}-${pr.area}-${pr.title}`}
                style={{ animation: 'pageIn 0.45s both', animationDelay: `${(i % 2) * 55}ms` }}
              >
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
              </div>
            ))}
          </div>
        )}
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
