export type Lang = 'en' | 'pt'

export const supportedLangs: Lang[] = ['en', 'pt']

export function normalizeLang(input?: string | null): Lang {
  if (!input) return 'en'
  const v = input.toLowerCase()
  if (v.startsWith('pt')) return 'pt'
  return 'en'
}

const dict = {
  en: {
    nav: {
      blog: 'Blog',
      home: 'Home',
      request: 'Request Analysis',
    },
    home: {
      title: 'Loyalty & Referral Programs: Technical Analysis and Program Design',
      intro: 'We design and validate loyalty and referral mechanisms for businesses of all sizes. The objective is to increase repeat purchases, improve product attach rate, and maximize Customer Lifetime Value (CLV) with measurable, data-driven interventions.',
      scope: 'Scope',
      items: [
        'Diagnostic: baseline cohort analysis (visit frequency, ATV, churn, attach rate)',
        'Mechanics: points issuance/redemption, tiers, accrual velocity, reward economics',
        'Governance: liability accounting, breakage assumptions, abuse prevention',
        'Experimentation: A/B of earn multipliers, thresholds, and redemption friction',
        'Attribution: CLV delta modeling and ROI tracking',
      ],
      seeArticle: 'See related article:',
      readBlog: 'Read the Blog',
      modalTitle: 'Request a Loyalty & Referral Program Analysis',
      modalDesc: 'Provide your details to receive a structured assessment and a proposal tailored to your business.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      industry: 'Industry',
      submit: 'Request Analysis',
      tos: 'By submitting, you agree to our Terms of Service and Privacy Policy.',
      industryPlaceholder: 'Select your industry',
      processing: 'Processing...',
      successTitle: 'Request received',
      successDesc: 'Thanks! We’re redirecting you to schedule a free consultation now.',
      successCta: 'Go to scheduling',
      industries: {
        retail: 'Retail',
        ecommerce: 'E-commerce',
        hospitality: 'Hospitality',
        healthWellness: 'Health & Wellness',
        beautyAesthetics: 'Beauty & Aesthetics',
        fitness: 'Fitness',
        foodBeverage: 'Food & Beverage',
        professionalServices: 'Professional Services',
        saas: 'SaaS / Software',
        other: 'Other',
      },
      caseStudies: 'Case Studies',
    },
    blogIndex: {
      header: 'Zuzz Technical Notes',
      sub: 'Applied analysis on loyalty economics, program design, and CLV modeling.',
    },
    articleMeta: {
      blog: 'Blog',
      technical: 'Technical Analysis',
      referral: 'Referral Analysis',
      read: 'min read',
      next: 'Next:',
      requestAnalysis: 'Request an analysis',
    },
  },
  pt: {
    nav: {
      blog: 'Blog',
      home: 'Início',
      request: 'Solicitar Análise',
    },
    home: {
      title: 'Programas de Fidelidade e Indicação: Análise Técnica e Desenho do Programa',
      intro: 'Desenhamos e validamos mecanismos de fidelidade e indicação para empresas de todos os portes. O objetivo é aumentar a recompra, melhorar a taxa de produtos agregados e maximizar o LTV (Valor do Tempo de Vida do Cliente) com intervenções mensuráveis e orientadas por dados.',
      scope: 'Escopo',
      items: [
        'Diagnóstico: análise de coortes (frequência de visita, ticket médio, churn, taxa de acoplamento)',
        'Mecânicas: emissão/resgate de pontos, níveis, velocidade de acúmulo, economia de recompensas',
        'Governança: contabilização de passivos, quebra (breakage), prevenção de abuso',
        'Experimentação: testes A/B de multiplicadores de ganho, thresholds e fricção de resgate',
        'Atribuição: modelagem do delta de LTV e acompanhamento de ROI',
      ],
      seeArticle: 'Leia também:',
      readBlog: 'Ler o Blog',
      modalTitle: 'Solicite uma Análise de Programa de Fidelidade e Indicação',
      modalDesc: 'Informe seus dados para receber um diagnóstico estruturado e uma proposta alinhada ao seu negócio.',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      industry: 'Setor',
      submit: 'Solicitar Análise',
      tos: 'Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.',
      industryPlaceholder: 'Selecione seu setor',
      processing: 'Processando...',
      successTitle: 'Solicitação recebida',
      successDesc: 'Obrigado! Vamos redirecionar você para agendar uma consulta gratuita agora.',
      successCta: 'Ir para agendamento',
      industries: {
        retail: 'Varejo',
        ecommerce: 'E-commerce',
        hospitality: 'Hospitalidade',
        healthWellness: 'Saúde e Bem-estar',
        beautyAesthetics: 'Beleza e Estética',
        fitness: 'Fitness',
        foodBeverage: 'Alimentos e Bebidas',
        professionalServices: 'Serviços Profissionais',
        saas: 'SaaS / Software',
        other: 'Outro',
      },
      caseStudies: 'Estudos de caso',
    },
    blogIndex: {
      header: 'Zuzz Notas Técnicas',
      sub: 'Análises aplicadas sobre economia de fidelidade, desenho de programas e modelagem de LTV.',
    },
    articleMeta: {
      blog: 'Blog',
      technical: 'Análise Técnica',
      referral: 'Análise de Indicação',
      read: 'min de leitura',
      next: 'Próximo:',
      requestAnalysis: 'Solicitar análise',
    },
  },
} as const

export type Dict = (typeof dict)[Lang]

export function getDict(lang: Lang): Dict {
  return dict[lang]
}
