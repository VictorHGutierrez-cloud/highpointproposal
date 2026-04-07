import { ReactNode } from "react";
import { Check, Mail } from "lucide-react";


interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-60 mb-8">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

export const slides: SlideData[] = [
  // ─── 1. CAPA ───────────────────────────────────────────
  {
    id: "cover",
    title: "Capa",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Proposta Factorial</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">
          Aztech
        </h1>
        <p className="text-[36px] opacity-80 font-light mb-6">
          Gestão de pessoas moderna, com dados reais e automação inteligente
        </p>
        <p className="text-[26px] opacity-60 font-light">
          Avaliação de desempenho, engajamento, treinamentos, recrutamento e despesas — tudo num único sistema com IA integrada.
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="text-[22px] opacity-70">Victor Gutierrez</p>
            <p className="text-[18px] opacity-50">Gerente de Expansão · Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 2. QUEM É A AZTECH ──────────────────────────────
  {
    id: "context",
    title: "Contexto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Conhecemos a Aztech</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              A Aztech é uma empresa focada em <strong className="opacity-100">gestão de pessoas e desenvolvimento organizacional</strong>, com processos de Business Development orientados a dados e satisfação do cliente.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Com <strong className="opacity-100">15 colaboradores internos</strong> e mais de <strong className="opacity-100">100 contratos ativos</strong>, a Aztech precisa de ferramentas que eliminem processos manuais e entreguem dados precisos.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              Hoje, tudo é manual — e a <strong className="opacity-100">margem de erro é alta</strong>. A grande chave? <strong className="opacity-100">Tempo.</strong>
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "⏱️", title: "Tempo é a prioridade", desc: "Automatizar o operacional para focar no estratégico." },
              { icon: "📊", title: "Dados realistas", desc: "Eliminar margem de erro dos processos manuais." },
              { icon: "😊", title: "Satisfação do cliente", desc: "KPI principal: satisfação e feedback contínuo." },
              { icon: "👥", title: "100+ contratos ativos", desc: "Escala que exige uma plataforma profissional." },
              { icon: "🔄", title: "Reuniões 2x/semana", desc: "Gestores e colaboradores em contacto frequente." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] opacity-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ─── 3. AVALIAÇÃO DE DESEMPENHO ─────────────────────
  {
    id: "performance",
    title: "Avaliação de Desempenho",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Módulo Principal</SectionLabel>
        <SlideTitle>Avaliação de Desempenho</SlideTitle>
        <SlideSubtitle>A Mercedes destacou que avaliações profissionais são essenciais — aqui está como a Factorial transforma esse processo.</SlideSubtitle>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {[
            { icon: "📋", title: "Avaliações 360°", desc: "Auto-avaliação, pares, gestores — visão completa do colaborador." },
            { icon: "🎯", title: "OKRs e Objetivos", desc: "Defina metas claras e acompanhe o progresso em tempo real." },
            { icon: "📅", title: "Ciclos personalizados", desc: "Configure ciclos trimestrais, semestrais ou anuais." },
            { icon: "🤖", title: "IA integrada", desc: "A IA analisa padrões e sugere insights sobre desempenho." },
            { icon: "📊", title: "Relatórios automáticos", desc: "Dashboards com dados reais — sem margem de erro." },
            { icon: "💬", title: "Reuniões 1:1", desc: "Agende, grave e analise reuniões gestor-colaborador com IA." },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-8">
              <span className="text-[36px] block mb-4">{f.icon}</span>
              <h3 className="text-[24px] font-medium mb-2">{f.title}</h3>
              <p className="text-[20px] opacity-65 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 4. ENGAJAMENTO E CLIMA ──────────────────────────
  {
    id: "engagement",
    title: "Engajamento e Clima",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Módulo</SectionLabel>
        <SlideTitle>Engajamento e Clima</SlideTitle>
        <SlideSubtitle>Meça a satisfação, identifique rotatividade e actue com dados — exactamente o que a Aztech precisa.</SlideSubtitle>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { icon: "🌡️", title: "Pesquisa de clima", desc: "Pulse surveys automatizadas para medir o sentimento da equipa." },
            { icon: "📈", title: "NPS interno", desc: "Net Promoter Score dos colaboradores — quantificado." },
            { icon: "🔄", title: "Rotatividade", desc: "Acompanhe e analise taxas de turnover por equipa." },
            { icon: "💬", title: "Feedback contínuo", desc: "Recolha feedback e crie planos de acção de melhoria." },
            { icon: "🤖", title: "Análise com IA", desc: "Pergunte à IA: 'Por que a rotatividade está alta?' e receba relatórios." },
            { icon: "📊", title: "Dashboards em tempo real", desc: "Dados de satisfação sempre actualizados e acessíveis." },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-6">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-[28px]">{f.icon}</span>
                <h3 className="text-[22px] font-medium">{f.title}</h3>
              </div>
              <p className="text-[19px] opacity-60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 5. TREINAMENTOS ─────────────────────────────────
  {
    id: "training",
    title: "Treinamentos",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Módulo</SectionLabel>
        <SlideTitle>Treinamentos</SlideTitle>
        <SlideSubtitle>Profissionalize a capacitação da equipa com cursos rastreáveis e certificações automáticas.</SlideSubtitle>
        <div className="grid grid-cols-2 gap-10 mt-6">
          {[
            { icon: "🎓", title: "Catálogo de cursos", desc: "Crie e organize cursos internos e externos." },
            { icon: "📊", title: "Progresso rastreável", desc: "Acompanhe quem completou cada treinamento." },
            { icon: "📜", title: "Certificações", desc: "Emita certificados automáticos ao concluir cursos." },
            { icon: "📅", title: "Agendamento integrado", desc: "Sessões de treino no calendário do colaborador." },
            { icon: "💰", title: "Controlo de custos", desc: "Monitorize investimento em formação por equipa." },
            { icon: "🤖", title: "Recomendações IA", desc: "A IA sugere treinamentos com base no desempenho." },
          ].map((f) => (
            <div key={f.title} className="flex gap-5 border border-foreground/15 p-8">
              <span className="text-[32px] shrink-0">{f.icon}</span>
              <div>
                <h4 className="text-[24px] font-medium mb-2">{f.title}</h4>
                <p className="text-[20px] opacity-60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 6. RECRUTAMENTO E DESPESAS ──────────────────────
  {
    id: "recruitment-expenses",
    title: "Recrutamento e Despesas",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Módulos adicionais</SectionLabel>
        <SlideTitle>Recrutamento e Despesas</SlideTitle>
        <SlideSubtitle>Módulos que a Mercedes pediu para incluir — completam o ecossistema de gestão de pessoas.</SlideSubtitle>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div>
            <h3 className="text-[30px] font-medium opacity-80 mb-8">🔍 Recrutamento e Seleção</h3>
            <div className="space-y-5">
              {[
                { title: "Portal de vagas", desc: "Publique vagas e receba candidaturas automaticamente." },
                { title: "Pipeline visual", desc: "Acompanhe candidatos em cada etapa do processo." },
                { title: "Avaliação colaborativa", desc: "Gestores avaliam candidatos directamente na plataforma." },
                { title: "Onboarding automático", desc: "Candidato aprovado → colaborador configurado automaticamente." },
              ].map((f) => (
                <div key={f.title} className="border border-white/20 p-6">
                  <h4 className="text-[22px] font-medium mb-1">{f.title}</h4>
                  <p className="text-[19px] opacity-60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[30px] font-medium opacity-80 mb-8">💰 Gestão de Despesas</h3>
            <div className="space-y-5">
              {[
                { title: "Submissão por foto", desc: "Tire foto do recibo e a IA extrai os dados." },
                { title: "Aprovação em cadeia", desc: "Fluxo de aprovação personalizado por valor e tipo." },
                { title: "Categorias e políticas", desc: "Defina limites e regras por departamento." },
                { title: "Relatórios financeiros", desc: "Visão consolidada de despesas por período e equipa." },
              ].map((f) => (
                <div key={f.title} className="border border-white/20 p-6">
                  <h4 className="text-[22px] font-medium mb-1">{f.title}</h4>
                  <p className="text-[19px] opacity-60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 7. DEMO ──────────────────────────────────────────
  {
    id: "demo",
    title: "Demo",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Experimente</SectionLabel>
        <SlideTitle>Veja a Factorial em ação</SlideTitle>

        {/* Demo access banner */}
        <div className="border-2 border-white/25 bg-white/[0.08] p-8 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[24px] font-medium opacity-90 mb-2">🔑 Ambiente de demonstração preparado</p>
            <p className="text-[20px] opacity-55">Login: <span className="font-mono opacity-80">hellen@demob25acc00.com</span> · Senha: <span className="font-mono opacity-80">Papapapa333!</span></p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Entrar no Demo →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Explore as funcionalidades</h3>
            <div className="space-y-4">
              {[
                { label: "Gestão de turnos", desc: "Crie e atribua turnos para toda a equipa.", url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1", isDemo: true },
                { label: "Ausências em lote", desc: "Atribua ausências para vários colaboradores de uma vez.", url: "https://help.factorialhr.com/ausencias-e-aprovacoes/how-to-assign-the-absence-in-bulk-?from_search=218380148", isDemo: false },
                { label: "Aprovações com IA", desc: "A IA sugere aprovações inteligentes baseadas em padrões.", url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939", isDemo: false },
                { label: "Relatórios com IA", desc: "Faça perguntas sobre os seus dados e receba gráficos.", url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question", isDemo: true },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-white/15 p-6 hover:border-white/35 hover:bg-white/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={24} className="opacity-60 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[24px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[19px] opacity-55 mt-1">{f.desc}</p>
                  </div>
                  <span className="text-[18px] opacity-40 group-hover:opacity-70 shrink-0 mt-1 transition-opacity">
                    {f.isDemo ? "🔗 Demo" : "📖 Saiba mais"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">O que muda na Aztech</h3>
            <div className="space-y-6">
              {[
                { title: "Fim do trabalho manual", desc: "Processos automatizados — mais tempo para o estratégico." },
                { title: "Dados precisos", desc: "Elimine a margem de erro dos processos manuais." },
                { title: "IA que trabalha por si", desc: "Relatórios, insights e análises — pergunte e receba." },
              ].map((g) => (
                <div key={g.title} className="border border-white/15 p-8">
                  <h4 className="text-[26px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[22px] opacity-60">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 8. INVESTIMENTO ──────────────────────────────────
  {
    id: "investment",
    title: "Investimento",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investimento</SectionLabel>
        <SlideTitle>Proposta comercial</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: Pacote */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Pacote Completo</h3>
            <div className="border border-foreground/20 p-10 space-y-5">
              <p className="text-[20px] opacity-55 mb-4">Core + Performance + Engajamento + Treinamentos + Recrutamento + Despesas</p>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Preço por colaborador</span>
                <span className="font-medium">$4,10/mês</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Preço de tabela (outros mercados)</span>
                <span className="font-medium line-through opacity-40">£7,50/mês</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-foreground/15 pt-5">
                <span className="opacity-65">Condição especial África</span>
                <span className="font-medium text-[20px]">✅ Aplicada</span>
              </div>
            </div>

            <div className="border border-foreground/20 p-8 mt-6">
              <p className="text-[20px] opacity-55 mb-4">💡 Flexibilidade de contrato</p>
              <p className="text-[22px] opacity-70 leading-relaxed">
                Pode começar com um número menor de colaboradores (ex: 50) e escalar conforme a necessidade. O contrato é amarrado no mínimo.
              </p>
            </div>
          </div>

          {/* Right: Cenários */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Cenários de investimento</h3>
            
            <div className="space-y-6">
              <div className="border border-foreground/20 p-8 text-center">
                <p className="text-[18px] opacity-55 mb-2">Cenário piloto — 50 colaboradores</p>
                <p className="text-[64px] font-light leading-none">$205</p>
                <p className="text-[18px] opacity-45 mt-3">/mês · 50 × $4,10</p>
              </div>

              <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-8 text-center">
                <p className="text-[18px] opacity-55 mb-2">Cenário completo — 100+ colaboradores</p>
                <p className="text-[64px] font-light leading-none">$410</p>
                <p className="text-[18px] opacity-45 mt-3">/mês · 100 × $4,10</p>
              </div>

              <p className="text-[20px] opacity-55 text-center mt-4">
                Pagamento em dólares · Parceiros locais disponíveis para cobrança
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 9. VÍDEO DEMO ───────────────────────────────────
  {
    id: "video",
    title: "Vídeo Demo",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Visualize o futuro</SectionLabel>
        <SlideTitle>Imagine a gestão de pessoas assim</SlideTitle>
        <div className="w-[960px] h-[540px] mt-8">
          <iframe
            width="960"
            height="540"
            src="https://www.youtube.com/embed/6sUn2w1hRv0?start=26"
            title="Factorial Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },

  // ─── 10. PRÓXIMOS PASSOS ──────────────────────────────
  {
    id: "next-steps",
    title: "Próximos Passos",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Próximos Passos</SectionLabel>
        <SlideTitle>Vamos avançar?</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Mercedes analisa concorrentes", desc: "Pesquisa de mercado durante as férias — até dia 27." },
                { step: "2", title: "Reunião de retorno — Dia 29", desc: "Debater preços, funcionalidades e próximos passos." },
                { step: "3", title: "Apresentação à diretora", desc: "Mercedes apresenta a Factorial internamente." },
                { step: "4", title: "Definição do plano e arranque", desc: "Escolha do cenário (50 ou 100+) e início da implantação." },
              ].map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="w-12 h-12 border border-foreground/30 flex items-center justify-center shrink-0">
                    <span className="text-[22px] font-light">{p.step}</span>
                  </div>
                  <div>
                    <h4 className="text-[24px] font-medium mb-1">{p.title}</h4>
                    <p className="text-[20px] opacity-60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border border-foreground/20 bg-foreground/[0.04] p-12 text-center">
              <p className="text-[28px] font-light mb-6">
                Pronta para modernizar a gestão de pessoas da Aztech?
              </p>
              <a
                href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent("Aztech — Avançar com Factorial")}&body=${encodeURIComponent("Olá Victor,\n\nGostaria de avançar com a proposta Factorial para a Aztech.\n\nCumprimentos,\nMercedes")}`}
                className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-[22px] font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={22} />
                Contactar Victor Gutierrez
              </a>
              <p className="text-[18px] opacity-40 mt-6">victor.gutierrez@factorial.co</p>
            </div>
            <p className="text-center mt-8 text-[16px] opacity-30">
              Proposta preparada para Aztech — 2026
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
