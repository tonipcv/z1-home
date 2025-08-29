import Link from 'next/link'

export const metadata = {
  title: 'Brasil | Zuzz',
  description: 'Experiência premium converte mais. Página dedicada para o Brasil.',
}

export default function BrasilPage() {
  return (
    <main className="min-h-[80vh] bg-black text-gray-100">
      {/* Hero */}
      <section className="px-4 relative overflow-hidden">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.18),rgba(0,0,0,0))] blur-2xl" />
          <div className="absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),rgba(0,0,0,0))] blur-2xl" />
        </div>

        <div className="relative max-w-5xl mx-auto pt-16 sm:pt-24 pb-8 sm:pb-12 text-center">
          <div className="flex items-center justify-center mb-5">
            <img src="/logo.png" alt="Zuzz" className="h-10 sm:h-12 invert" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            EXPERIÊNCIA PREMIUM CONVERTE <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-500">MAIS</span>
          </h1>

          <p className="mt-4 sm:mt-5 text-[15px] sm:text-base text-gray-300 max-w-2xl mx-auto">
            Plataforma e consultoria para experiências de fidelidade e indicação que aumentam conversão, ticket e LTV no mercado brasileiro.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-fuchsia-600 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] hover:opacity-95 transition"
            >
              Comece agora
            </Link>
            <Link href="/blog" className="text-sm text-gray-300 hover:text-white underline-offset-4 hover:underline">
              Ver notas técnicas
            </Link>
          </div>
        </div>

        {/* mockup panel placeholder */}
        <div className="relative max-w-6xl mx-auto px-2 pb-16">
          <div className="mx-auto mt-6 sm:mt-10 rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 shadow-2xl overflow-hidden">
            <div className="aspect-[16/9] w-full bg-neutral-900 flex items-center justify-center">
              <div className="h-[70%] w-[86%] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 ring-1 ring-white/5" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Por que escolher? */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Por que escolher a Zuzz?</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300">
            Motivos pelos quais elevar o nível da sua operação com fidelidade e indicação gera mais vendas e retenção.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {/* vertical gradient divider */}
          <div className="hidden md:block pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-sky-500/30 to-transparent" />

          {/* Sem a Zuzz */}
          <div className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Sem a Zuzz</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              {[
                'Cursos frios, pouco engajamento',
                'Ferramentas dispersas e difíceis de integrar',
                'Sem certificação e provas',
                'Produtos sem diferenciação clara',
                'Taxas altas em checkouts',
                'Sem aplicativo próprio',
                'Sem IA para personalizar a jornada',
                'Baixa retenção e recompra',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">✕</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Com a Zuzz */}
          <div className="rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Com a Zuzz</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              {[
                'Experiência premium estilo "app", intuitiva',
                'Comunidade e gamificação para engajar',
                'Certificação, provas e trilhas de conquista',
                'Vitrine e mecânicas personalizadas por ROI',
                'Checkouts com melhores taxas e integrações',
                'Aplicativo PWA pronto para iOS/Android',
                'IA que aprende com o seu conteúdo',
                'Mais retenção, LTV e recompras',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona? */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Como funciona?</h2>
            <p className="text-sm sm:text-base text-gray-300">
              Aplicamos uma metodologia prática que combina mecanismos de fidelidade e indicação com governança e mensuração de ROI, para elevar conversão, ticket e LTV.
            </p>
          </div>

          {/* Step 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start mb-6">
            <div>
              <p className="text-xs text-gray-400">Passo 1</p>
              <h3 className="mt-1 text-3xl font-semibold text-white">Crie <span className="align-middle text-blue-400">↗</span></h3>
              <p className="mt-2 text-gray-300 text-sm">
                Defina a experiência certa para encantar seus clientes e incentivar ações valiosas.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5 sm:p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.10),rgba(0,0,0,0))]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 relative">
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Programa customizável</li>
                  <li>Primeiro acesso guiado</li>
                  <li>Comentários e dúvidas</li>
                  <li>Testes e missões</li>
                </ul>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Emissão de certificado</li>
                  <li>Termos de aceite</li>
                  <li>Domínio customizado</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start mb-6">
            <div>
              <p className="text-xs text-gray-400">Passo 2</p>
              <h3 className="mt-1 text-3xl font-semibold text-white">Venda <span className="align-middle text-blue-400">↗</span></h3>
              <p className="mt-2 text-gray-300 text-sm">
                Analise o que funciona, integre ferramentas e multiplique os pontos de conversão.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5 sm:p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),rgba(0,0,0,0))]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 relative">
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Ofertas e funis</li>
                  <li>Tracking de oportunidades</li>
                  <li>Webhooks avançados</li>
                </ul>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Relatórios relevantes</li>
                  <li>Funis de acesso gratuito</li>
                  <li>Integrações avançadas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
            <div>
              <p className="text-xs text-gray-400">Passo 3</p>
              <h3 className="mt-1 text-3xl font-semibold text-white">Escale <span className="align-middle text-blue-400">↗</span></h3>
              <p className="mt-2 text-gray-300 text-sm">
                Cresça com previsibilidade, segurança e custos sob controle.
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5 sm:p-6 relative overflow-hidden">
              <div className="pointer-events-none absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.10),rgba(0,0,0,0))]" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 relative">
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Investimento previsível</li>
                  <li>Usuários ilimitados</li>
                  <li>Cursos ilimitados</li>
                </ul>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li>Sem custos de hospedagem</li>
                  <li>Infraestrutura segura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
