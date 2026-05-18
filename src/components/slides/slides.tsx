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
          Automatização com Primavera, integração ZKTeco para ponto e substituição de Excel por indicadores de RH e relatórios.
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
              A Aztech, em Angola, está a reforçar a gestão de pessoas e o desenvolvimento organizacional, com foco em dados confiáveis e satisfação dos clientes.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              Com <strong className="opacity-100">180 colaboradores</strong> e mais de <strong className="opacity-100">100 contratos ativos</strong>, a equipa precisa de processos mais rápidos, padronizados e com menos retrabalho.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              Hoje, grande parte da operação é manual e a <strong className="opacity-100">margem de erro é alta</strong>. A prioridade principal é <strong className="opacity-100">ganhar tempo</strong> sem perder controlo.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "⏱️", title: "Tempo é a prioridade", desc: "Automatizar o operacional para focar no estratégico." },
              { icon: "📊", title: "Dados realistas", desc: "Eliminar margem de erro dos processos manuais." },
              { icon: "😊", title: "Satisfação do cliente", desc: "KPI principal: satisfação e feedback contínuo." },
              { icon: "👥", title: "180 colaboradores", desc: "Escala que exige operação padronizada e automação contínua." },
              { icon: "🔄", title: "Reuniões 2x por semana", desc: "Gestores e colaboradores em contacto frequente." },
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

  // ─── 3. INTEGRAÇÕES CRÍTICAS ─────────────────────
  {
    id: "critical-integrations",
    title: "Integrações Críticas",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Como funciona na prática</SectionLabel>
        <SlideTitle>Primavera fica. ZKTeco fica. A Factorial conecta tudo.</SlideTitle>
        <SlideSubtitle>Este foi o momento wow da Mercedes: resolver a dor central sem trocar o que já funciona.</SlideSubtitle>
        <div className="grid grid-cols-3 gap-8 mt-10">
          {[
            { icon: "⏱️", title: "Ponto com ZKTeco", desc: "Picagens do relógio e da app entram no fluxo de RH sem retrabalho manual." },
            { icon: "✅", title: "Horas extra e ausências", desc: "Pedidos com aprovação por hierarquia e notificações automáticas para gestores." },
            { icon: "💼", title: "Integração com Primavera", desc: "Horas, ausências e eventos críticos chegam ao payroll com consistência." },
            { icon: "🔁", title: "Sem trocar equipamento", desc: "A Aztech mantém o relógio atual e aproveita o investimento já feito." },
            { icon: "📄", title: "Documentos e caducidade", desc: "Alertas de BI, exames e contratos para não perder prazos legais." },
            { icon: "📊", title: "Indicadores e relatórios", desc: "Saída em Excel e PDF para defender decisões com dados confiáveis." },
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
        <SlideSubtitle>Meça a satisfação, identifique rotatividade e atue com dados. Exatamente o que a Aztech precisa.</SlideSubtitle>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { icon: "🌡️", title: "Pesquisa de clima", desc: "Pulse surveys automatizadas para medir o sentimento da equipa." },
            { icon: "📈", title: "NPS interno", desc: "Net Promoter Score dos colaboradores com histórico por equipa." },
            { icon: "🔄", title: "Rotatividade", desc: "Acompanhe e analise taxas de turnover por equipa." },
            { icon: "💬", title: "Feedback contínuo", desc: "Recolha feedback e crie planos de ação de melhoria." },
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

  // ─── 6. RECRUTAMENTO E OPERAÇÃO RH ───────────────────
  {
    id: "recruitment-operations",
    title: "Recrutamento e Operação RH",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Escopo da proposta</SectionLabel>
        <SlideTitle>Pacote base e módulos prioritários</SlideTitle>
        <SlideSubtitle>A recomendação abaixo reflete os must have da Aztech para operar RH com automação e integração real.</SlideSubtitle>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div>
            <h3 className="text-[30px] font-medium opacity-80 mb-8">📌 Pacote base obrigatório</h3>
            <div className="space-y-5">
              {[
                { title: "Core RH e base de colaboradores", desc: "Registo único com dados contratuais, histórico e indicadores de RH." },
                { title: "Ausências e férias", desc: "Pedidos, aprovações e regras por política com rastreabilidade completa." },
                { title: "Ponto com ZKTeco", desc: "Picagem integrada para automatizar banco de horas e horas extra." },
                { title: "Documentos e alertas", desc: "Validades de BI, exames médicos e contratos com alertas configuráveis." },
                { title: "Integração com Primavera", desc: "Envio de ausências, horas e eventos para processamento salarial." },
              ].map((f) => (
                <div key={f.title} className="border border-white/20 p-6">
                  <h4 className="text-[22px] font-medium mb-1">{f.title}</h4>
                  <p className="text-[19px] opacity-60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[30px] font-medium opacity-80 mb-8">🚀 Add ons prioritários</h3>
            <div className="space-y-5">
              {[
                { title: "Avaliação de desempenho 180 e 360", desc: "Ciclos completos ligados a objetivos e evolução de cada colaborador." },
                { title: "Formação", desc: "Planos de desenvolvimento por função com acompanhamento de progresso." },
                { title: "Recrutamento e onboarding", desc: "Pipeline de vagas com entrada estruturada dos novos colaboradores." },
                { title: "Pedidos internos e inquéritos", desc: "Tickets de RH e pesquisas de clima para melhorar experiência da equipa." },
                { title: "IA como diferencial", desc: "Relatórios e assistente para produtividade sem inflacionar o custo total." },
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
                { title: "Integração com Primavera", desc: "Ponto super positivo para a realidade atual da Aztech e para o payroll." },
                { title: "Integração com ZKTeco", desc: "Sem trocar relógio e sem custo de novo equipamento para começar." },
                { title: "Automação operacional", desc: "Fluxo de ponto, horas extra e ausências com aprovação simples e rápida." },
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
        <SlideTitle>Recomendação de investimento</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: Pacote */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Pacote recomendado para a Aztech</h3>
            <div className="border border-foreground/20 p-10 space-y-5">
              <p className="text-[20px] opacity-55 mb-4">Productivity PRO completo + Shift Management + Recrutamento (5 vagas ativas)</p>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Productivity PRO</span>
                <span className="font-medium">$6,25 por colaborador por mês</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Shift Management</span>
                <span className="font-medium">$1,50 por colaborador por mês</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Recrutamento (5 vagas)</span>
                <span className="font-medium">$64,50 por mês</span>
              </div>
              <div className="border-t border-foreground/15 pt-5">
                <p className="text-[22px] opacity-65 mb-3">Integrações obrigatórias (USD)</p>
                <div className="space-y-2 text-[20px]">
                  <p className="flex justify-between"><span className="opacity-70">ZKTeco Integration</span><span className="font-medium">$196,20 por mês</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Primavera Integration (EUR2,00/licença)</span><span className="font-medium">$392,40 por mês</span></p>
                </div>
              </div>
              <div className="border-t border-foreground/15 pt-5">
                <p className="text-[22px] opacity-65 mb-3">Tudo incluído no Productivity PRO</p>
                <p className="text-[20px] font-medium leading-relaxed">
                  Core RH, Time Tracking, Time Off, Performance, Trainings e Engagement.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Cenários */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Investimento mensal</h3>
            
            <div className="space-y-6">
              <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-8 text-center">
                <p className="text-[18px] opacity-55 mb-2">Arranque direto com 180 colaboradores</p>
                <p className="text-[74px] font-light leading-none">$2.048,10</p>
                <p className="text-[18px] opacity-45 mt-3">por mês = pacote RH ($1.459,50) + integrações ($588,60)</p>
              </div>

              <div className="border border-foreground/20 p-8">
                <p className="text-[22px] opacity-75 mb-4">Composição do total mensal</p>
                <div className="space-y-3 text-[21px]">
                  <p className="flex justify-between"><span className="opacity-70">Productivity PRO (180 × $6,25)</span><span className="font-medium">$1.125,00</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Shift Management (180 × $1,50)</span><span className="font-medium">$270,00</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Recrutamento (5 vagas)</span><span className="font-medium">$64,50</span></p>
                  <p className="flex justify-between"><span className="opacity-70">ZKTeco Integration (180 x EUR1,00)</span><span className="font-medium">$196,20</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Primavera Integration (180 x EUR2,00)</span><span className="font-medium">$392,40</span></p>
                </div>
              </div>

              <div className="border border-foreground/20 p-6">
                <p className="text-[22px] opacity-75 mb-3">Implantacao (servico de implementacao)</p>
                <div className="space-y-2 text-[20px]">
                  <p className="flex justify-between"><span className="opacity-70">Implementacao fixa (10 horas de sessao, one off)</span><span className="font-medium">$2.500,00</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 9. INVESTIMENTO COM DESCONTO ────────────────────
  {
    id: "investment-discount",
    title: "Investimento com Desconto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investimento</SectionLabel>
        <SlideTitle>Cenario comercial com desconto</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Licenca Factorial com 20% de desconto</h3>
            <div className="border border-foreground/20 p-10 space-y-5">
              <p className="text-[20px] opacity-55 mb-4">Desconto aplicado apenas nas licencas Factorial</p>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Subtotal Factorial sem desconto</span>
                <span className="font-medium">$1.459,50</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Desconto comercial (20%)</span>
                <span className="font-medium">-$291,90</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-foreground/15 pt-5">
                <span className="opacity-65">Subtotal Factorial com desconto</span>
                <span className="font-medium">$1.167,60</span>
              </div>
              <div className="border-t border-foreground/15 pt-5">
                <p className="text-[22px] opacity-65 mb-3">Integracoes neste cenario (USD)</p>
                <div className="space-y-2 text-[20px]">
                  <p className="flex justify-between"><span className="opacity-70">ZKTeco Integration</span><span className="font-medium">$196,20 por mes</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Primavera Integration (EUR1,15/licenca)</span><span className="font-medium">$225,63 por mes</span></p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">Investimento mensal</h3>

            <div className="space-y-6">
              <div className="border-2 border-foreground/30 bg-foreground/[0.06] p-8 text-center">
                <p className="text-[18px] opacity-55 mb-2">Arranque com 180 colaboradores</p>
                <p className="text-[74px] font-light leading-none">$1.589,43</p>
                <p className="text-[18px] opacity-45 mt-3">por mes = Factorial com desconto ($1.167,60) + integracoes ($421,83)</p>
              </div>

              <div className="border border-foreground/20 p-8">
                <p className="text-[22px] opacity-75 mb-4">Composicao do total mensal</p>
                <div className="space-y-3 text-[21px]">
                  <p className="flex justify-between"><span className="opacity-70">Factorial com desconto de 20%</span><span className="font-medium">$1.167,60</span></p>
                  <p className="flex justify-between"><span className="opacity-70">ZKTeco Integration (180 x EUR1,00)</span><span className="font-medium">$196,20</span></p>
                  <p className="flex justify-between"><span className="opacity-70">Primavera Integration (180 x EUR1,15)</span><span className="font-medium">$225,63</span></p>
                </div>
              </div>

              <div className="border border-foreground/20 p-6">
                <p className="text-[22px] opacity-75 mb-3">Implantacao (servico de implementacao)</p>
                <div className="space-y-2 text-[20px]">
                  <p className="flex justify-between"><span className="opacity-70">Implementacao fixa (10 horas de sessao, one off)</span><span className="font-medium">$2.000,00</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 10. VÍDEO DEMO ───────────────────────────────────
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

  // ─── 11. PRÓXIMOS PASSOS ──────────────────────────────
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
                { step: "1", title: "Validação interna da proposta", desc: "Alinhamento com direção e RH sobre módulos e orçamento." },
                { step: "2", title: "Confirmação de escopo", desc: "Definição do arranque com 180 colaboradores, por fase de equipas." },
                { step: "3", title: "Kickoff de implementação", desc: "Configuração inicial dos fluxos de RH e integrações." },
                { step: "4", title: "Entrada em produção", desc: "Operação com acompanhamento e evolução por fases." },
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
                href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent("Aztech | Avançar com Factorial")}&body=${encodeURIComponent("Olá Victor,\n\nGostaria de avançar com a proposta Factorial para a Aztech.\n\nCumprimentos,\nMercedes")}`}
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
