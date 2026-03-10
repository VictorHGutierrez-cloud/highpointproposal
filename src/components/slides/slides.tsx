import { ReactNode } from "react";
import { Check, Mail } from "lucide-react";
import sigaLogo from "@/assets/siga-logo.png";

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
          SIGA
        </h1>
        <p className="text-[36px] opacity-80 font-light mb-6">
          Gestão de pessoas simples, completa e integrada com Primavera
        </p>
        <p className="text-[26px] opacity-60 font-light">
          Tudo o que a SIGA precisa para gerir colaboradores, horários, ausências e documentos — numa só plataforma.
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

  // ─── 2. QUEM É A SIGA CV ─────────────────────────────
  {
    id: "context",
    title: "Contexto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Conhecemos a SIGA</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              A SIGA oferece <strong className="opacity-100">serviços integrados de gestão administrativa</strong> para micro, pequenas e médias empresas em Cabo Verde, promovendo eficiência e crescimento sustentável.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              Com <strong className="opacity-100">15 colaboradores</strong> e o <strong className="opacity-100">Primavera</strong> como sistema central, a SIGA procura uma plataforma moderna para centralizar a gestão de pessoas.
            </p>
            <img src={sigaLogo} alt="SIGA Logo" className="mt-8 max-w-[400px] opacity-80" />
          </div>
          <div className="space-y-5">
            {[
              { icon: "📊", title: "Consultoria Empresarial", desc: "Apoio estratégico para micro, pequenas e médias empresas." },
              { icon: "💰", title: "Fiscalidade", desc: "Serviços fiscais e conformidade tributária." },
              { icon: "📒", title: "Contabilidade Financeira", desc: "Gestão contabilística completa e rigorosa." },
              { icon: "🏢", title: "Gestão Administrativa", desc: "Soluções integradas para a gestão eficiente da empresa." },
              { icon: "👥", title: "15 colaboradores", desc: "Equipa compacta que precisa de ferramentas ágeis." },
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

  // ─── 3. O QUE ESTÁ INCLUÍDO — FACTORIAL CORE ─────────
  {
    id: "core",
    title: "Factorial Core",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Funcionalidades</SectionLabel>
        <SlideTitle>Factorial Core</SlideTitle>
        <div className="grid grid-cols-3 gap-8 mt-4">
          {[
            { icon: "📂", title: "Gestão de documentos", desc: "Centraliza e gere todos os ficheiros importantes num só lugar." },
            { icon: "✍️", title: "Assinatura eletrónica legal", desc: "Assina documentos com validade legal, 100% online." },
            { icon: "👥", title: "Directório de colaboradores", desc: "Organiza documentos por colaborador de forma intuitiva." },
            { icon: "🏢", title: "Organograma da empresa", desc: "Estrutura, hierarquia e etiquetas — visualize a equipa." },
            { icon: "📣", title: "Comunicados", desc: "Criação e envio de comunicados internos para toda a equipa." },
            { icon: "📋", title: "Onboarding / Offboarding", desc: "Modelos de tarefas de entrada e saída automatizados." },
            { icon: "📊", title: "Relatórios personalizados", desc: "Extrai dados do Factorial com relatórios Enterprise." },
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

  // ─── 4. CONTROLO DE HORÁRIOS ──────────────────────────
  {
    id: "time-tracking",
    title: "Controlo de Horários",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Funcionalidades</SectionLabel>
        <SlideTitle>Controlo de Horários</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { icon: "🖊️", title: "Registo manual", desc: "Registo simples e rápido de horas trabalhadas." },
            { icon: "💻", title: "Registo pelo computador", desc: "Os colaboradores registam o ponto diretamente no PC." },
            { icon: "✅", title: "Aprovação de horários", desc: "Aprovação de registos com fluxo definido." },
            { icon: "✍️", title: "Assinatura de registos", desc: "Assinatura digital dos registos de horário." },
            { icon: "⏱️", title: "Pausas", desc: "Pausas manuais e automáticas configuráveis." },
            { icon: "📲", title: "Sistema QR / ID", desc: "Registo por QR Code ou número de identificação." },
            { icon: "🔒", title: "Períodos bloqueados", desc: "Bloqueio de edição após fecho do período." },
            { icon: "📍", title: "Geolocalização", desc: "Geolocalização e alertas de registo de ponto." },
            { icon: "🧑‍💼", title: "Reconhecimento facial", desc: "Identificação por reconhecimento facial (Enterprise)." },
            { icon: "💰", title: "Horas extra", desc: "Compensação automática de horas extraordinárias." },
            { icon: "⚖️", title: "Múltiplas políticas", desc: "Políticas e períodos personalizados (Enterprise)." },
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

  // ─── 5. AUSÊNCIAS E FÉRIAS ────────────────────────────
  {
    id: "time-off",
    title: "Ausências e Férias",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Funcionalidades</SectionLabel>
        <SlideTitle>Ausências e Férias</SlideTitle>
        <div className="grid grid-cols-2 gap-10 mt-6">
          {[
            { icon: "📜", title: "Políticas de ausências e férias", desc: "Configure políticas específicas para a SIGA." },
            { icon: "📤", title: "Exportação de ausências", desc: "Exporte dados de ausências para qualquer sistema." },
            { icon: "🏷️", title: "Tipos personalizados", desc: "Crie tipos de ausências adaptados à realidade da equipa." },
            { icon: "📅", title: "Múltiplas vistas de calendário", desc: "Visualize ausências por dia, semana ou mês." },
            { icon: "✅", title: "Níveis de aprovação", desc: "Defina cadeia de aprovação personalizada (Enterprise)." },
            { icon: "🗓️", title: "Ciclos de férias personalizados", desc: "Configure ciclos adaptados ao calendário de Cabo Verde (Enterprise)." },
            { icon: "🚫", title: "Bloqueio de períodos de pico", desc: "Bloqueie pedidos de férias em períodos críticos (Enterprise)." },
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

  // ─── 6. GESTÃO DE PROJETOS ────────────────────────────
  {
    id: "projects",
    title: "Gestão de Projetos",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Funcionalidades</SectionLabel>
        <SlideTitle>Gestão de Projetos</SlideTitle>
        <SlideSubtitle>Ideal para uma empresa de gestão administrativa que gere múltiplos clientes e projetos em simultâneo.</SlideSubtitle>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { icon: "📁", title: "Criação e duplicação", desc: "Projetos e subprojetos com duplicação rápida." },
            { icon: "⏱️", title: "Associação de horas", desc: "Associe horas trabalhadas a cada projeto." },
            { icon: "🔄", title: "Importação automática", desc: "Importe e atribua colaboradores automaticamente." },
            { icon: "👀", title: "Visibilidade completa", desc: "Painel principal com visão geral de todos os projetos." },
            { icon: "💰", title: "Custos e despesas", desc: "Monitorize custos por projeto em tempo real." },
            { icon: "🔌", title: "Integração via API", desc: "Conecte com outros sistemas através da API." },
            { icon: "🏷️", title: "Categorização", desc: "Organize projetos por categorias e etiquetas." },
            { icon: "🧑‍💼", title: "Project Manager", desc: "Atribua PM e Director a cada projeto." },
            { icon: "📊", title: "Planeamento e análise", desc: "Análise de progresso e planeamento integrado." },
            { icon: "💱", title: "Múltiplas moedas", desc: "Gestão de custos em múltiplas moedas (Enterprise)." },
            { icon: "✅", title: "Resumo financeiro", desc: "Visão consolidada de custos e receitas por projeto." },
          ].map((f) => (
            <div key={f.title} className="border border-white/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[26px]">{f.icon}</span>
                <h3 className="text-[21px] font-medium">{f.title}</h3>
              </div>
              <p className="text-[18px] opacity-60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 7. INTEGRAÇÃO COM PRIMAVERA ──────────────────────
  {
    id: "integration",
    title: "Integração Primavera",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Integração</SectionLabel>
        <SlideTitle>O Primavera fica. A Factorial entra.</SlideTitle>
        <SlideSubtitle>A SIGA continua a usar o Primavera para gestão financeira e folha. A Factorial entra como camada de gestão de pessoas.</SlideSubtitle>
        <div className="flex items-center justify-center gap-0 mt-12">
          {/* Factorial */}
          <div className="w-[500px] border border-white/25 bg-white/10 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/25 flex items-center justify-center">
              <span className="text-[28px] font-light">F</span>
            </div>
            <p className="text-[30px] font-medium mb-1">Factorial</p>
            <p className="text-[18px] opacity-55 uppercase tracking-[0.2em] mb-6">Gestão de Pessoas</p>
            <div className="space-y-3 text-left">
              {["Gestão de colaboradores", "Controlo de horários", "Ausências e férias", "Gestão de projetos", "Documentos e assinaturas"].map((item) => (
                <p key={item} className="text-[20px] opacity-70 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex items-center px-6">
            <div className="w-20 h-px bg-white/25" />
            <div className="border border-white/30 bg-white/10 px-8 py-6 text-center min-w-[180px]">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
              </div>
              <p className="text-[20px] font-medium opacity-80">Sincronização</p>
              <p className="text-[16px] opacity-55 mt-1">Automática · Bidirecional</p>
            </div>
            <div className="w-20 h-px bg-white/25" />
          </div>

          {/* Primavera */}
          <div className="w-[500px] border border-white/25 bg-white/10 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/25 flex items-center justify-center">
              <span className="text-[28px] font-light">P</span>
            </div>
            <p className="text-[30px] font-medium mb-1">Primavera</p>
            <p className="text-[18px] opacity-55 uppercase tracking-[0.2em] mb-6">Gestão Financeira & Folha</p>
            <div className="space-y-3 text-left">
              {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Gestão financeira", "Arquivo documental"].map((item) => (
                <p key={item} className="text-[20px] opacity-70 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/15">
          {[
            { label: "Colaboradores", desc: "Dados sincronizados em tempo real" },
            { label: "Ausências", desc: "Férias e faltas — sem exportação manual" },
            { label: "Horas Extra", desc: "Validadas antes de enviar ao Primavera" },
            { label: "Documentos", desc: "Recibos e declarações centralizados" },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <p className="text-[22px] font-medium opacity-80">{f.label}</p>
              <p className="text-[18px] opacity-55 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 8. DEMO ──────────────────────────────────────────
  {
    id: "demo",
    title: "Demo",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Experimente</SectionLabel>
        <SlideTitle>Veja a Factorial em ação</SlideTitle>

        {/* Demo access banner */}
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-8 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[24px] font-medium opacity-90 mb-2">🔑 Preparámos um ambiente de demonstração</p>
            <p className="text-[20px] opacity-55">Login: <span className="font-mono opacity-80">hellen@demob25acc00.com</span> · Senha: <span className="font-mono opacity-80">Papapapa333!</span></p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=75113&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
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
                  className="flex items-start gap-4 border border-foreground/15 p-6 hover:border-foreground/35 hover:bg-foreground/[0.04] transition-all group cursor-pointer"
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
            <h3 className="text-[28px] font-normal mb-8 opacity-80">O que muda na SIGA CV</h3>
            <div className="space-y-6">
              {[
                { title: "Tudo centralizado", desc: "Documentos, ausências e horários numa só plataforma." },
                { title: "Menos tempo no operacional", desc: "Automatize processos que hoje são manuais." },
                { title: "Integrado com Primavera", desc: "Dados de RH fluem para o Primavera sem retrabalho." },
              ].map((g) => (
                <div key={g.title} className="border border-foreground/15 p-8">
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

  // ─── 9. INVESTIMENTO ──────────────────────────────────
  {
    id: "investment",
    title: "Investimento",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investimento</SectionLabel>
        <SlideTitle>Proposta comercial</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: Licença */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">1. Licença e Mensalidade</h3>
            <div className="border border-white/20 p-10 space-y-5">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Número de colaboradores</span>
                <span className="font-medium">15</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Preço por colaborador</span>
                <span className="font-medium">€8,30/mês</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Total mensalidade</span>
                <span className="font-medium">€124,50</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Desconto aplicado</span>
                <span className="font-medium">10%</span>
              </div>
              <div className="flex justify-between text-[24px] border-t border-white/20 pt-5">
                <span className="font-medium">Valor com desconto</span>
                <span className="font-medium text-[28px]">€112,05</span>
              </div>
              <div className="flex justify-between text-[20px] opacity-60">
                <span>Pagamento</span>
                <span>Apenas em Abril (único pagamento)</span>
              </div>
            </div>
          </div>

          {/* Right: Implantação + Total */}
          <div>
            <h3 className="text-[28px] font-medium opacity-80 mb-8">2. Implantação</h3>
            <div className="border border-white/20 p-10 space-y-5 mb-8">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Horas previstas</span>
                <span className="font-medium">5 horas</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Custo</span>
                <span className="font-medium">€500</span>
              </div>
              <div className="flex justify-between text-[20px] opacity-60">
                <span>Prazo de pagamento</span>
                <span>Até semana que vem</span>
              </div>
            </div>

            {/* Total */}
            <div className="border border-white/30 bg-white/10 p-10 text-center">
              <p className="text-[20px] opacity-55 mb-3">Total a pagar até Abril</p>
              <p className="text-[80px] font-light leading-none">€612,05</p>
              <p className="text-[18px] opacity-45 mt-4">Implantação (€500) + Mensalidade de Abril (€112,05)</p>
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
        <SlideTitle>Vamos começar?</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <div className="space-y-6">
              {[
                { step: "1", title: "Pagamento da implantação", desc: "€500 — até semana que vem.", status: "Pendente" },
                { step: "2", title: "Sessão de implantação", desc: "5 horas de configuração guiada da plataforma.", status: "Pendente" },
                { step: "3", title: "Pagamento da mensalidade", desc: "€112,05 — apenas em Abril.", status: "Pendente" },
                { step: "4", title: "Equipa a usar a Factorial", desc: "15 colaboradores com acesso total à plataforma.", status: "Pendente" },
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
                Pronto para modernizar a gestão de pessoas da SIGA CV?
              </p>
              <a
                href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent("SIGA CV — Avançar com Factorial")}&body=${encodeURIComponent("Olá Victor,\n\nGostaria de avançar com a proposta Factorial para a SIGA CV.\n\nCumprimentos")}`}
                className="inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 text-[22px] font-medium hover:opacity-90 transition-opacity"
              >
                <Mail size={22} />
                Contactar Victor Gutierrez
              </a>
              <p className="text-[18px] opacity-40 mt-6">victor.gutierrez@factorial.co</p>
            </div>
            <p className="text-center mt-8 text-[16px] opacity-30">
              Proposta preparada para SIGA CV — 2026
            </p>
          </div>
        </div>
      </div>
    ),
  },
];
