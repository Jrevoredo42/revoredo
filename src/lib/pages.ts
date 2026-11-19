export type PageKey =
  | 'home'
  | 'historia'
  | 'discografia'
//| 'producao'
//| 'literatura'
//| 'projetos'

export interface Palette {
  /** page background base */
  bg: string
  /** primary text color */
  fg: string
  /** muted / secondary text */
  muted: string
  /** hairline / border */
  line: string
  /** main accent */
  accent: string
  /** secondary accent */
  accent2: string
  /** panel / card surface */
  surface: string
}

export interface PageDef {
  key: PageKey
  label: string
  /** two-letter index shown in the nav */
  index: string
  /** route path */
  href: string
  palette: Palette
}

export const PAGES: PageDef[] = [
  {
    key: 'home',
    label: 'Início',
    index: '01',
    href: '/',
    palette: {
      bg: '#930d3c',
      fg: '#f0eee6',
      muted: 'rgba(240,238,230,0.68)',
      line: 'rgba(240,238,230,0.18)',
      accent: '#2fa59b',
      accent2: '#e06382',
      surface: 'rgba(240,238,230,0.06)',
    },
  },
  {
    key: 'historia',
    label: 'História',
    index: '02',
    href: '/historia',
    palette: {
      bg: '#211c1a',
      fg: '#efe4d7',
      muted: 'rgba(239,228,215,0.58)',
      line: 'rgba(239,228,215,0.14)',
      accent: '#d76c34',
      accent2: '#d2b9a8',
      surface: 'rgba(215,108,52,0.07)',
    },
  },
  {
    key: 'discografia',
    label: 'Discografia',
    index: '03',
    href: '/discografia',
    palette: {
      bg: '#011115',
      fg: '#d2dee2',
      muted: 'rgba(210,222,226,0.58)',
      line: 'rgba(210,222,226,0.14)',
      accent: '#ffc82f',
      accent2: '#457187',
      surface: 'rgba(69,113,135,0.12)',
    },
  },
  /*
  {
    key: 'producao',
    label: 'Produção',
    index: '04',
    href: '/producao',
    palette: {
      bg: '#0d0100',
      fg: '#f0ddd6',
      muted: 'rgba(240,221,214,0.55)',
      line: 'rgba(240,221,214,0.13)',
      accent: '#c16448',
      accent2: '#a10002',
      surface: 'rgba(130,30,22,0.16)',
    },
  },
  {
    key: 'literatura',
    label: 'Literatura',
    index: '05',
    href: '/literatura',
    palette: {
      bg: '#d9d6cc',
      fg: '#311d24',
      muted: 'rgba(49,29,36,0.62)',
      line: 'rgba(49,29,36,0.14)',
      accent: '#fb198b',
      accent2: '#2099b3',
      surface: 'rgba(32,153,179,0.08)',
    },
  },
  {
    key: 'projetos',
    label: 'Projetos',
    index: '06',
    href: '/projetos',
    palette: {
      bg: '#20160b',
      fg: '#f2e9dc',
      muted: 'rgba(242,233,220,0.58)',
      line: 'rgba(242,233,220,0.14)',
      accent: '#f3c909',
      accent2: '#e08317',
      surface: 'rgba(224,131,23,0.09)',
    },
   
  }, */
]

export const PAGE_MAP: Record<PageKey, PageDef> = Object.fromEntries(
  PAGES.map((p) => [p.key, p]),
) as Record<PageKey, PageDef>

/** Resolve a página (e sua paleta) a partir do pathname. */
export function pageFromPath(pathname: string | null): PageDef {
  const seg = (pathname ?? '/').split('/').filter(Boolean)[0] ?? 'home'
  return PAGE_MAP[seg as PageKey] ?? PAGE_MAP.home
}
