'use client'

import { useState } from 'react'
import type { Palette } from '@/lib/pages'
import { Reveal, Section, withAlpha } from './ui'

// Substitua pelo número real do artista (formato internacional, só dígitos: DDI + DDD + número)
const WHATSAPP_NUMBER = '5511999999999'

const SERVICOS = [
  'Show / apresentação ao vivo',
  'Produção musical',
  'Composição sob encomenda',
  'Sarau / leitura de poesia',
  'Oficina / formação',
  'Curadoria / projeto cultural',
  'Outro',
]

export function ContactSection({ p }: { p: Palette }) {
  const [nome, setNome] = useState('')
  const [servico, setServico] = useState(SERVICOS[0])
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState<string | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !mensagem.trim()) {
      setErro('Preencha seu nome e a mensagem para continuar.')
      return
    }
    setErro(null)
    const texto = [
      `Olá, Revoredo! Meu nome é ${nome.trim()}.`,
      `Gostaria de falar sobre: ${servico}.`,
      '',
      mensagem.trim(),
    ].join('\n')
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const fieldStyle = {
    background: withAlpha(p.fg, 0.06),
    border: `1px solid ${p.line}`,
    color: p.fg,
  }

  return (
    <Section id="contato" className="scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <div
          className="relative overflow-hidden rounded-[28px] border"
          style={{
            borderColor: p.line,
            background: `linear-gradient(150deg, ${withAlpha('#3d4270', 0.35)}, ${withAlpha('#0e4f47', 0.25)})`,
          }}
        >
          {/* soft accent glow */}
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
            style={{ background: withAlpha('#e06382', 0.5) }}
          />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-16">
            {/* Left — invitation */}
            <div>
              <span
                className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em]"
                style={{ color: p.accent }}
              >
                <span className="h-px w-8" style={{ background: p.accent }} />
                Contato
              </span>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] md:text-5xl">
                Vamos criar
                <br />
                algo <span style={{ color: p.accent2 }}>juntos?</span>
              </h2>
              <p className="mt-6 max-w-sm text-lg leading-relaxed" style={{ color: p.muted }}>
                Shows, produção, saraus, oficinas ou projetos culturais. Conte o que
                você imagina — a conversa segue direto pelo WhatsApp.
              </p>
              <div
                className="mt-8 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm"
                style={{ background: withAlpha('#2fa59b', 0.16), color: p.fg }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.87 9.87 0 004.76 1.21h.01c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.17.29.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.3 1.42.29.14.45.12.62-.07.17-.19.71-.83.9-1.12.19-.29.38-.24.64-.14.26.09 1.67.79 1.96.93.29.14.48.22.55.34.07.12.07.68-.17 1.35z" />
                </svg>
                Resposta pelo WhatsApp
              </div>
            </div>

            {/* Right — form */}
            <form onSubmit={submit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="c-nome" className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: p.muted }}>
                  Nome
                </label>
                <input
                  id="c-nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como você se chama?"
                  className="rounded-xl px-4 py-3.5 text-base outline-none transition-colors focus:border-current"
                  style={fieldStyle}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="c-serv" className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: p.muted }}>
                  Serviços
                </label>
                <select
                  id="c-serv"
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="appearance-none rounded-xl px-4 py-3.5 text-base outline-none transition-colors focus:border-current"
                  style={fieldStyle}
                >
                  {SERVICOS.map((s) => (
                    <option key={s} value={s} style={{ background: '#1a1017', color: '#f0eee6' }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="c-msg" className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: p.muted }}>
                  Mensagem
                </label>
                <textarea
                  id="c-msg"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Conte um pouco sobre a ideia, data e local…"
                  rows={4}
                  className="resize-none rounded-xl px-4 py-3.5 text-base outline-none transition-colors focus:border-current"
                  style={fieldStyle}
                />
              </div>

              {erro && (
                <p className="text-sm" style={{ color: p.accent2 }}>
                  {erro}
                </p>
              )}

              <button
                type="submit"
                className="group mt-1 inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-transform hover:scale-[1.02]"
                style={{ background: p.accent, color: p.bg }}
              >
                Enviar pelo WhatsApp
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
