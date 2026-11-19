'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { PAGE_MAP } from '@/lib/pages'
import { Kicker, Marquee, Reveal, Section, withAlpha } from '@/components/ui'
import { ContactSection } from '@/components/ContactSection'

gsap.registerPlugin(ScrollTrigger)

const FOTO_HERO = '/assets/foto-hero.webp'
const LIVE_1 = '/assets/live-1.png'

function scrollToContato() {
  document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Words that drift through the empty crimson expanse of the hero. */
const AMBIENT_WORDS = [
  { t: 'canção', cls: 'top-[13%] right-[9%]', size: 'text-6xl' },
  { t: 'verso', cls: 'top-[9%] right-[34%]', size: 'text-4xl' },
  { t: 'poesia', cls: 'top-[27%] right-[22%]', size: 'text-5xl' },
  { t: 'raiz', cls: 'top-[40%] right-[11%]', size: 'text-4xl' },
  { t: 'palco', cls: 'top-[47%] right-[30%]', size: 'text-3xl' },
  { t: 'palavra', cls: 'top-[20%] right-[46%]', size: 'text-3xl' },
]

const ROLES = [
  { t: 'Cantor', d: 'Voz e presença de palco forjadas em duas décadas de estrada.' },
  { t: 'Compositor', d: 'Autor de um cancioneiro que atravessa MPB, samba e canção de raiz.' },
  { t: 'Produtor musical', d: 'Assinatura sonora em discos e shows de dezenas de artistas.' },
  { t: 'Escritor & Poeta', d: 'Livros publicados e saraus que espalham a palavra falada.' },
]

const STATS = [
  { n: '30', l: 'anos de carreira' },
  { n: '12', l: 'discos & singles' },
  { n: '400+', l: 'shows realizados' },
  { n: '05', l: 'livros publicados' },
]

const SHOWS = [
  { date: '18 OUT', city: 'São Paulo · SP', venue: 'Sesc Pompeia', tag: 'Turnê Raiz Viva' },
  { date: '02 NOV', city: 'Rio de Janeiro · RJ', venue: 'Teatro Rival', tag: 'Voz & Violão' },
  { date: '23 NOV', city: 'Belo Horizonte · MG', venue: 'Palácio das Artes', tag: 'Turnê Raiz Viva' },
  { date: '14 DEZ', city: 'Recife · PE', venue: 'Teatro do Parque', tag: 'Sarau Cantado' },
]

const RELEASES = [
  { title: 'Raiz Viva', year: '2025', kind: 'Álbum', color: '#e06382' },
  { title: 'Palavra Rasa', year: '2024', kind: 'Single', color: '#2fa59b' },
  { title: 'Do Avesso', year: '2023', kind: 'EP', color: '#d85177' },
]

export default function HomePage() {
  const p = PAGE_MAP.home.palette
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        // Ambient words drifting in the hero void (desktop only)
        gsap.utils.toArray<HTMLElement>('.hero-word').forEach((el, i) => {
          gsap.set(el, { opacity: 0 })
          gsap.to(el, {
            opacity: gsap.utils.random(0.12, 0.24),
            duration: 1.6,
            delay: 0.6 + i * 0.18,
            ease: 'power2.out',
          })
          gsap.to(el, {
            y: gsap.utils.random(-26, -12),
            x: gsap.utils.random(-10, 10),
            duration: gsap.utils.random(5, 8),
            delay: i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        })

        // Parallax: glow drifts down, wordmark lifts as you scroll past the hero (desktop only)
        const hero = self.selector?.('.hero-sec')[0]
        if (hero) {
          gsap.to('.hero-glow', {
            yPercent: 24,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
          gsap.to('.hero-words', {
            yPercent: -14,
            ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
        }
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {

        // Count-up statistics. The element keeps its literal fallback text, so
        // if the trigger never fires the number is still shown — never blank.
        gsap.utils.toArray<HTMLElement>('.stat-num').forEach((el) => {
          const target = Number(el.dataset.target || '0')
          const suffix = el.dataset.suffix || ''
          const pad = el.dataset.pad === '1'
          const obj = { v: 0 }
          gsap.to(obj, {
            v: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            onUpdate: () => {
              const n = Math.round(obj.v)
              el.textContent = (pad ? String(n).padStart(2, '0') : String(n)) + suffix
            },
          })
        })

        // Release covers: subtle rise only (no opacity change) so a mis-measured
        // ScrollTrigger can never leave the cards invisible — the <Reveal>
        // wrapper already handles their fade-in.
        gsap.from('.release-card', {
          y: 36,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.release-grid', start: 'top 85%', once: true },
        })

        // Recompute trigger positions once fonts/images settle — the Make
        // preview iframe can mount at the wrong size on first paint.
        ScrollTrigger.refresh()
        const onLoad = () => ScrollTrigger.refresh()
        window.addEventListener('load', onLoad)
        return () => window.removeEventListener('load', onLoad)
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={root}>
      {/* ===================== HERO ===================== */}
      <section className="hero-sec relative flex min-h-[100svh] items-end overflow-hidden">
        {/* crimson gradient ground */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(130% 100% at 78% 8%, ${withAlpha('#e06382', 0.7)} 0%, ${withAlpha('#c93864', 0.45)} 26%, ${withAlpha('#a90f49', 0.6)} 52%, ${p.bg} 78%), linear-gradient(160deg, ${withAlpha('#d85177', 0.3)} 0%, ${p.bg} 55%)`,
          }}
        />
        {/* large soft glow behind the artist */}
        <div
          className="hero-glow absolute -right-[12%] -top-[12%] h-[75vw] w-[75vw] rounded-full opacity-70 blur-[120px]"
          style={{ background: withAlpha('#e06382', 0.45) }}
        />

        {/* Ambient drifting words — fills the empty crimson expanse */}
        <div className="hero-words pointer-events-none absolute inset-0 z-[4] hidden select-none lg:block" aria-hidden>
          {AMBIENT_WORDS.map((w) => (
            <span
              key={w.t}
              className={`hero-word absolute font-serif italic ${w.cls} ${w.size}`}
              style={{ color: p.fg }}
            >
              {w.t}
            </span>
          ))}
        </div>

        {/* bottom vignette so wordmark stays legible */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(0deg, ${p.bg} 2%, transparent 42%)` }}
        />

        {/* Artist photo — dominant, full-height, anchored bottom-right (desktop) */}
        <img
          src={FOTO_HERO}
          alt="Revoredo de braços abertos, vestindo camisa floral"
          className="pointer-events-none absolute bottom-0 right-[-4%] z-[5] hidden h-[94vh] max-h-[1080px] w-auto max-w-[64vw] select-none object-contain object-bottom-right lg:block xl:right-[-2%] xl:max-w-[64vw] 2xl:right-[-1%] 2xl:max-w-[62vw]"
          style={{
            animation: 'pageIn 1.2s 0.15s both cubic-bezier(0.22,1,0.36,1)',
            filter: 'drop-shadow(0 40px 90px rgba(0,0,0,0.55))',
          }}
          draggable={false}
        />

        {/* Artist photo — full-height bottom-anchored portrait (mobile / tablet, no animation) */}
        <img
          src={FOTO_HERO}
          alt="Revoredo de braços abertos, vestindo camisa floral"
          className="pointer-events-none absolute bottom-0 left-1/2 z-[5] h-[78svh] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom sm:h-[80svh] lg:hidden"
          style={{
            filter: 'drop-shadow(0 28px 64px rgba(0,0,0,0.55))',
          }}
          draggable={false}
        />

        {/* Mobile bottom scrim — blends portrait into ground for crisp foreground copy */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[52%] lg:hidden"
          style={{
            background: `linear-gradient(0deg, ${p.bg} 14%, ${withAlpha(p.bg, 0.88)} 44%, ${withAlpha(p.bg, 0.32)} 30%, transparent 100%)`,
          }}
        />

        {/* ===================== HERO MOBILE / TABLET (< lg) ===================== */}
        <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-between px-6 pb-6 pt-24 sm:px-10 md:px-14 lg:hidden">
          {/* Top editorial lockup — horizontal wordmark */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-7" style={{ background: withAlpha(p.fg, 0.35) }} />
              <span className="h-px w-7" style={{ background: withAlpha(p.fg, 0.35) }} />
            </div>

            <div
              className="whitespace-nowrap font-display leading-[0.86] tracking-[0.05em]"
              style={{ color: p.fg, fontSize: 'clamp(3.8rem, 15.5vw, 7.8rem)' }}
            >
              <span>REVORE</span>
              <span style={{ color: p.accent }}>DO</span>
            </div>
          </div>

          {/* Bottom copy, CTA & scroll cue — cleanly grounded over the bottom scrim */}
          <div className="flex flex-col items-center text-center">
            <p
              className="max-w-[34ch] text-[15px] leading-relaxed sm:text-base"
              style={{ color: p.muted }}
            >
              Cantor, compositor, produtor musical, escritor e poeta.{' '}
              <span style={{ color: p.fg }}>Trinta anos de canção e palavra.</span>
            </p>

            <button
              onClick={scrollToContato}
              className="group mt-5 inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-sm font-medium uppercase tracking-[0.14em] backdrop-blur-md transition-transform duration-300 active:scale-[0.98]"
              style={{
                border: `1px solid ${withAlpha(p.fg, 0.35)}`,
                color: p.fg,
                background: withAlpha(p.bg, 0.5),
              }}
            >
              Contrate-me
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ background: p.accent, color: p.bg }}
              >
                →
              </span>
            </button>

            <div className="mt-6 flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: p.muted }}>
                role para descobrir
              </span>
              <span className="h-6 w-px" style={{ background: `linear-gradient(180deg, ${p.accent}, transparent)` }} />
            </div>
          </div>
        </div>

        {/* ===================== HERO DESKTOP (>= lg) ===================== */}
        <div className="relative z-10 mx-auto hidden w-full max-w-[1400px] lg:block lg:px-16 lg:pb-20 lg:pt-28 xl:px-20">
          {/* Vertical wordmark with framed rule */}
          <div className="relative flex items-end gap-5 lg:gap-7">
            <span
              className="mb-3 hidden h-[clamp(14rem,34vw,30rem)] w-px shrink-0 lg:block"
              style={{ background: `linear-gradient(180deg, transparent, ${withAlpha(p.fg, 0.4)}, transparent)` }}
            />
            <div className="max-w-md lg:max-w-lg">
              <span
                className="mb-4 block font-mono text-[11px] uppercase tracking-[0.4em]"
                style={{ color: p.accent, animation: 'pageIn 0.7s 0.1s both' }}
              >
                Est. 1995
              </span>
              <div
                className="font-display leading-[0.8] tracking-[0.02em]"
                style={{ color: p.fg, fontSize: 'clamp(3.8rem, 10vw, 11rem)' }}
              >
                {['RE', 'VO', 'RE', 'DO'].map((s, i) => (
                  <span
                    key={s + i}
                    className="block"
                    style={{
                      animation: `pageIn 0.85s ${0.2 + i * 0.1}s both cubic-bezier(0.22,1,0.36,1)`,
                      color: i === 3 ? p.accent : p.fg,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p
                className="mt-7 max-w-sm text-base leading-relaxed"
                style={{ color: p.muted, animation: 'pageIn 0.8s 0.7s both' }}
              >
                Cantor, compositor, produtor musical, escritor e poeta.
                <span style={{ color: p.fg }}> Trinta anos de canção e palavra.</span>
              </p>

              {/* Discreet, strategically placed hire CTA */}
              <button
                onClick={scrollToContato}
                className="group mt-7 inline-flex items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-sm font-medium uppercase tracking-[0.14em] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: `1px solid ${withAlpha(p.fg, 0.35)}`,
                  color: p.fg,
                  background: withAlpha(p.fg, 0.06),
                  animation: 'pageIn 0.8s 0.9s both',
                }}
              >
                Contrate-me
                <span
                  className="grid h-8 w-8 place-items-center rounded-full transition-transform group-hover:translate-x-0.5"
                  style={{ background: p.accent, color: p.bg }}
                >
                  →
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* scroll cue (desktop) */}
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: p.muted }}>
            role para descobrir
          </span>
          <span className="h-8 w-px" style={{ background: `linear-gradient(180deg, ${p.accent}, transparent)` }} />
        </div>
      </section>

      <Marquee p={p} words={['canção', 'poesia', 'palco', 'estúdio', 'coletivo', 'palavra']} />

      {/* ===================== APRESENTAÇÃO ===================== */}
      <Section className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <Kicker p={p}>Apresentação</Kicker>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-6xl">
              Uma obra que
              <br />
              <span style={{ color: p.accent }}>canta, escreve</span>
              <br />e reúne gente.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: p.muted }}>
              <p>
                Revoredo é uma dessas figuras raras em que o artista e a obra se
                confundem. Em três décadas de estrada, transitou entre o palco e a
                página, entre o estúdio e a roda de rua, sem nunca abrir mão de uma
                assinatura: a de quem faz da arte um gesto coletivo.
              </p>
              <p style={{ color: p.fg }}>
                Cantor de voz grave e afetuosa, compositor de canção brasileira,
                produtor musical requisitado, escritor e poeta — cada faceta
                alimenta a outra, formando um único corpo de trabalho.
              </p>
              <Link
                href="/historia"
                className="group mt-2 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em]"
                style={{ color: p.accent }}
              >
                Conheça a história
                <span className="transition-transform group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ===================== STATS ===================== */}
      <Section>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4" style={{ background: p.line }}>
            {STATS.map((s) => {
              const suffix = s.n.replace(/[0-9]/g, '')
              const target = s.n.replace(/[^0-9]/g, '')
              const pad = target.length > 1 && target.startsWith('0')
              return (
                <div key={s.l} className="p-8 md:p-10" style={{ background: p.bg }}>
                  <div
                    className="stat-num font-display text-6xl md:text-7xl"
                    style={{ color: p.accent }}
                    data-target={Number(target)}
                    data-suffix={suffix}
                    data-pad={pad ? '1' : '0'}
                  >
                    {s.n}
                  </div>
                  <div className="mt-2 text-sm" style={{ color: p.muted }}>
                    {s.l}
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </Section>

      {/* ===================== ATRIBUIÇÕES ===================== */}
      <Section className="py-24 md:py-32">
        <Reveal>
          <Kicker p={p}>Atribuições</Kicker>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl">As muitas facetas</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: p.line }}>
          {ROLES.map((r, i) => (
            <Reveal key={r.t} delay={i * 70}>
              <div
                className="group flex h-full flex-col gap-3 p-8 transition-colors md:p-10"
                style={{ background: p.bg }}
              >
                <span className="font-mono text-xs" style={{ color: p.accent }}>
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl">{r.t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: p.muted }}>
                  {r.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== SHOWS EM CIRCULAÇÃO ===================== */}
      <Section
        className="py-24 md:py-32"
        style={{ background: `linear-gradient(180deg, transparent, ${withAlpha('#2fa59b', 0.07)}, transparent)` }}
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <Kicker p={p}>Em circulação</Kicker>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl">Shows &amp; agenda</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xs text-sm" style={{ color: p.muted }}>
              A turnê <em>Raiz Viva</em> percorre o país reunindo canção, palavra e
              improviso em cada cidade.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col">
          {SHOWS.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t py-6 transition-all hover:pl-3 md:gap-10"
                style={{ borderColor: p.line }}
              >
                <span className="font-display text-3xl md:text-4xl" style={{ color: p.accent }}>
                  {s.date}
                </span>
                <div>
                  <div className="text-lg font-medium md:text-xl">{s.city}</div>
                  <div className="text-sm" style={{ color: p.muted }}>
                    {s.venue} · {s.tag}
                  </div>
                </div>
                <button
                  className="rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all group-hover:scale-105"
                  style={{ borderColor: p.line, color: p.fg }}
                >
                  Ingressos
                </button>
              </div>
            </Reveal>
          ))}
          <div className="border-t" style={{ borderColor: p.line }} />
        </div>
      </Section>

      {/* ===================== LANÇAMENTOS ===================== */}
      <Section className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <Reveal>
            <div className="release-grid grid grid-cols-1 gap-5 sm:grid-cols-3">
              {RELEASES.map((r, i) => (
                <div
                  key={r.title}
                  className="release-card group flex aspect-square flex-col justify-between rounded-xl p-5 transition-transform hover:-translate-y-1.5"
                  style={{
                    background: `linear-gradient(150deg, ${withAlpha(r.color, 0.9)}, ${withAlpha(r.color, 0.35)})`,
                    color: '#1a1310',
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{r.kind}</span>
                  <div>
                    <div className="font-serif text-xl leading-tight">{r.title}</div>
                    <div className="text-sm opacity-70">{r.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Kicker p={p}>Lançamentos</Kicker>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
              Novidades saindo
              <br />
              do estúdio
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: p.muted }}>
              O disco <em>Raiz Viva</em> inaugura uma nova fase — canções gravadas
              ao vivo, sem retoques, com a banda em círculo. Ouça os singles e
              explore a discografia completa.
            </p>
            <Link
              href="/discografia"
              className="group mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition-transform hover:scale-[1.03]"
              style={{ background: p.accent, color: p.bg }}
            >
              Ver discografia
              <span className="transition-transform group-hover:translate-x-1.5">→</span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ===================== CTA BAND ===================== */}
      <Section className="pb-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-16 md:px-16 md:py-24"
            style={{ background: `linear-gradient(120deg, ${withAlpha('#3d4270', 0.88)}, ${withAlpha('#c93864', 0.45)})` }}
          >
            <img
              src={LIVE_1}
              alt="Revoredo ao vivo, cantando com um violão"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative max-w-xl">
              <h2 className="font-serif text-4xl leading-[1.05] md:text-6xl">
                Um cartão de visitas
                <br />
                para trinta anos de arte.
              </h2>
              <p className="mt-6 text-lg" style={{ color: p.muted }}>
                Percorra cada faceta — história, discografia, produção, literatura
                e projetos.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ===================== CONTATO ===================== */}
      <ContactSection p={p} />
    </div>
  )
}
