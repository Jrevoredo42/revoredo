'use client'

import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Reveal, Section, withAlpha } from '@/components/ui'

const PORTRAIT = '/revoredo-bio.jpg'
const LIVE_2 = '/assets/live-2.png'

const TIMELINE = [
  {
    year: '2026',
    title: 'Fino Fio & Prêmio Copergás (JGE)',
    text: 'Lança o álbum e novela musical "Fino Fio" (30 de abril), o single "A Vida Inteira" com Gabi da Pele Preta e os clipes "Areia" e "Passotempo". No mesmo ano, vence o Prêmio Copergás do Festival Janeiro de Grandes Espetáculos nas categorias Melhor Cantor e Melhor Show (com "Encruzilhada Agreste") e celebra sua trajetória com o show comemorativo "Revoredo 30 Anos".',
  },
  {
    year: '2025',
    title: 'Primeiros capítulos de "Fino Fio" & Produção',
    text: 'Inicia o ciclo de singles da novela musical "Fino Fio" — entre eles "Poema Ingênuo" (com Kléber Albuquerque) e "Romance Épico" — e assina a produção musical do single "Tumbeiro", de Gabi da Pele Preta.',
  },
  {
    year: '2024',
    title: 'Single "Agreste" & Circulação',
    text: 'Apresenta o single "Agreste", de grande repercussão, e leva seus espetáculos em circulação por Pernambuco e pelo Sudeste (turnê "Encruzilhada Agreste" em São Paulo e Rio de Janeiro), além dos shows intimistas "Ô de Casa!" e "Te Canto a Canção".',
  },
  {
    year: '2022',
    title: 'Prêmio da Música de Pernambuco & FEMUAG',
    text: 'Vence o Prêmio da Música de Pernambuco nas categorias Melhor Show e Melhor Cantor Regional. Realiza o I Festival de Música Autoral de Garanhuns (FEMUAG) e assina a produção musical do EP de Gabi da Pele Preta e dos lançamentos de Lili Novais ("Meu Canto no Mundo" e "Do Jeito Mais Simples").',
  },
  {
    year: '2021',
    title: 'Trilogia Trancada & Studio Tear Online',
    text: 'Conclui a "Trilogia Trancada" (2020/2021), conjunto de canções compostas e produzidas remotamente durante o isolamento social com visualizers próprios, realiza o festival Studio Tear Online e produz o single "Agora", de Lili Novais.',
  },
  {
    year: '2020',
    title: 'Álbum de estreia "Revoredo"',
    text: 'Lança seu primeiro álbum solo homônimo, produzido por Juliano Holanda, com 11 faixas autorais inéditas prensadas em CD edição de luxo e elogiado pela crítica musical brasileira.',
  },
  {
    year: '2019',
    title: 'Ayô — Histórias de Griô',
    text: 'Assina a direção musical e atua como músico no espetáculo "Ayô — Histórias de Griô" (Coletivo Tear), levando contos, mitos, lendas e cantigas do universo afro-brasileiro a diversos territórios.',
  },
  {
    year: '2018',
    title: 'O Livro em Cena',
    text: 'Como produtor e ator, desenvolve "O Livro em Cena", projeto voltado à literatura contemporânea brasileira que integra leituras, performances e canções para sensibilizar novos leitores.',
  },
  {
    year: '2016',
    title: 'Luanda Ruanda — Histórias Africanas',
    text: 'Assina a direção musical do espetáculo cênico "Luanda Ruanda — Histórias Africanas" (Coletivo Tear), dedicado às infâncias e à prática ancestral da narração oral de matriz africana.',
  },
  {
    year: '2015',
    title: 'Histórias da Caixola',
    text: 'Integra música e teatro na direção musical de "Histórias da Caixola", coletânea de contos infantis produzida pelo Coletivo Tear com intervenções musicais ao vivo.',
  },
  {
    year: '2013–14',
    title: 'Taumatrópio (Rumos Itaú Cultural)',
    text: 'Assina a direção musical e trilha sonora original do espetáculo "Taumatrópio" (Cia. Teatro de Retalhos), selecionado pelo edital Rumos Itaú Cultural 2013–2014.',
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
                Revoredo é músico, compositor, poeta e arte-educador, transita entre a música e a literatura.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ boxShadow: `0 30px 80px ${withAlpha('#000', 0.5)}` }}
                >
                  <img
                    src={PORTRAIT}
                    alt="Retrato de Revoredo em salto segurando um tecido claro"
                    className="w-full object-cover"
                  />
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
                “Sou feito de Barro e de Arvoredo, sou voo de pássaro e o céu é meu chão. Se queres saber respondo em rimas, se quiseres ouvir te canto a canção...”
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: p.muted }}>
              <p>
                Músico, compositor, poeta, escritor, produtor musical e arte-educador de Garanhuns, no Agreste pernambucano. Com 30 anos de trajetória dedicados à música, à literatura, às artes cênicas e à formação artística, consolidou-se como um dos principais expoentes da cena contemporânea de Pernambuco. Sua obra nasce do encontro entre palavra e melodia, tradição e contemporaneidade, traduzindo a força cultural de seu território em experiências poéticas e sonoras.
              </p>
              <p>
                Integrante da mostra coletiva de música REVERBO, é fundador do Coletivo Tear e gestor do Espaço Cultural Aldeia Tear e do selo Studio Tear. Atua também como realizador e curador de iniciativas voltadas à música autoral em sua região — como o Studio Tear, o Festival de Música Autoral de Garanhuns (FEMUAG) e a Mostra Mundaú de Canções —, além de ministrar projetos de formação artística, produção, gestão de carreira e musicalização infantil.
              </p>
              <p style={{ color: p.fg }}>
                Na música, construiu uma discografia autoral que vai do álbum de estreia &quot;Revoredo&quot; (2020), produzido por Juliano Holanda, à &quot;Trilogia Trancada&quot; (2021), ao single &quot;Agreste&quot; (2024) e ao lançamento de &quot;Fino Fio&quot; (2026). Reconhecido por sua potência no palco, venceu o Prêmio da Música de Pernambuco (2022) e o Prêmio Copergás do Festival Janeiro de Grandes Espetáculos (2026) nas categorias Melhor Cantor e Melhor Show.
              </p>
              <p>
                Além da carreira solo, destaca-se como produtor musical — assinando o trabalho autoral de artistas como Gabi da Pele Preta e Lili Novais —, diretor musical de espetáculos cênicos e escritor dos livros infantis &quot;Dianimal&quot; (CEPE) e &quot;O Casaco Oco do Isaac&quot; (Vacatussa). Revoredo é a música que nasce do chão agrestino, é poesia que pulsa no compasso do tempo.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-20 md:py-28">
        <Reveal>
          <Kicker p={p}>Linha do tempo</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">Em marcos</h2>
        </Reveal>
        <div className="relative mt-14">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px md:left-1/2"
            style={{ background: p.line }}
          />
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <Reveal key={`${t.year}-${t.title}`} delay={i * 60}>
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
