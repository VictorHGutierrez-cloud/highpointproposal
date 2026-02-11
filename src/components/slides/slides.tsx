import { ReactNode } from "react";
import { Check, X, AlertTriangle, Play, Mail } from "lucide-react";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatEUR } from "@/utils/formatters";

// Reuse investment calculations
const d = DEFAULT_VALUES;
const factorialMensal = d.totalColaboradores * d.custoColaboradorMes_EUR;
const primaveraMensal = d.totalColaboradores * d.custoPrimaveraMes_EUR;
const mensalRecorrente = factorialMensal + primaveraMensal;
const implantacao = d.implantacaoFactorial_EUR;

interface SlideData {
  id: string;
  title: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[28px] tracking-[0.25em] uppercase opacity-60 mb-8">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[72px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

export const slides: SlideData[] = [
  // 1. COVER
  {
    id: "cover",
    title: "Capa",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Proposta Factorial</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">
          Dulceria Nacional /<br />Grupo Webcor
        </h1>
        <p className="text-[36px] opacity-80 font-light mb-6">
          Substituição do SisQual + Integração com Primavera
        </p>
        <p className="text-[24px] opacity-60 font-light">
          Plataforma completa de gestão de RH para 400+ colaboradores
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="text-[20px] opacity-70">Victor Henrique Aguiar Gutierrez Duarte</p>
            <p className="text-[16px] opacity-50">Gerente de Expansão | Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  // 2. CONTEXTO — VISÃO GERAL
  {
    id: "context-overview",
    title: "Contexto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>O Grupo e o Desafio</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[24px] opacity-70 leading-[1.7] mb-8">
              A Dulceria Nacional faz parte de um grande grupo empresarial em Angola, com cerca de <strong className="opacity-100">~20 unidades</strong> e mais de <strong className="opacity-100">3.000 colaboradores</strong>. Recentemente, houve uma centralização da área de payroll para otimizar processos entre as diferentes empresas do grupo.
            </p>
            <p className="text-[24px] opacity-70 leading-[1.7]">
              O RH atua de forma estratégica, mas enfrenta <strong className="opacity-100">desafios operacionais significativos</strong> devido às limitações das ferramentas atuais — especialmente na gestão de ponto, turnos e integração de dados para folha de pagamento.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "⚙️", title: "Processos altamente manuais", desc: "Sujeitos a retrabalho constante em todas as unidades." },
              { icon: "📊", title: "Sem automação em massa", desc: "Atualização de horários, férias e ausências feita um a um." },
              { icon: "🔗", title: "Falhas frequentes de integração", desc: "Atrasos e erros no fechamento da folha por dados inconsistentes." },
              { icon: "📋", title: "Controles paralelos em Excel", desc: "Suprem a falta de relatórios gerenciais e indicadores no sistema." },
              { icon: "👷", title: "Baixa digitalização operacional", desc: "RH insere dados manualmente por colaboradores sem acesso digital." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[28px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[20px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[17px] opacity-60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 3. CONTEXTO — FERRAMENTAS ATUAIS
  {
    id: "context-tools",
    title: "Ferramentas Atuais",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Ferramentas Atuais</SectionLabel>
        <SlideTitle>O ecossistema atual do grupo</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {/* SisQual */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">SQ</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">SisQual</h3>
                <p className="text-[14px] opacity-50 uppercase tracking-widest">Ponto & Turnos</p>
              </div>
            </div>
            <p className="text-[18px] opacity-70 leading-relaxed mb-6">
              Gestão de ponto biométrico, controle de frequência, férias, ausências e exportação para folha.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[14px] opacity-45 uppercase tracking-widest mb-3">Limitações</p>
              {["Sem atualização de horários em grupo", "Falta de relatórios gerenciais", "Exportação com falhas recorrentes", "Lançamentos individuais obrigatórios"].map((l) => (
                <p key={l} className="text-[16px] opacity-65 flex items-center gap-3">
                  <X size={14} className="opacity-50 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>

          {/* Primavera */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">P</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Primavera</h3>
                <p className="text-[14px] opacity-50 uppercase tracking-widest">Folha & Financeiro</p>
              </div>
            </div>
            <p className="text-[18px] opacity-70 leading-relaxed mb-6">
              Sistema de folha de pagamento e gestão financeira. Centraliza o processamento para todas as unidades do grupo.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[14px] opacity-45 uppercase tracking-widest mb-3">Dependência crítica</p>
              {["Eficiência depende dos dados do SisQual", "Recebe exportações com falhas", "Retrabalho na validação de dados", "Processamento atrasado por erros"].map((l) => (
                <p key={l} className="text-[16px] opacity-65 flex items-center gap-3">
                  <AlertTriangle size={14} className="opacity-50 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>

          {/* Excel */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">XL</span>
              </div>
              <div>
                <h3 className="text-[26px] font-medium">Excel</h3>
                <p className="text-[14px] opacity-50 uppercase tracking-widest">Controles Manuais</p>
              </div>
            </div>
            <p className="text-[18px] opacity-70 leading-relaxed mb-6">
              Controle manual de ausências, faltas, relatórios de RH e indicadores para o comitê.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[14px] opacity-45 uppercase tracking-widest mb-3">Problemas</p>
              {["Sujeito a erros e retrabalho", "Sem padronização entre unidades", "Dificulta análise rápida", "Tomada de decisão sem base sólida"].map((l) => (
                <p key={l} className="text-[16px] opacity-65 flex items-center gap-3">
                  <X size={14} className="opacity-50 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 4. CONTEXTO — IMPACTO NA OPERAÇÃO
  {
    id: "context-impact",
    title: "Impacto Operacional",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnóstico</SectionLabel>
        <SlideTitle>O impacto na operação do grupo</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⏱️</span>
            </div>
            <h3 className="text-[26px] font-medium mb-3">Eficiência & Produtividade</h3>
            <p className="text-[19px] opacity-70 leading-relaxed">
              O excesso de tarefas manuais, a falta de automação e as falhas de integração reduzem significativamente a eficiência do RH, que dedica tempo excessivo a atividades operacionais em vez de estratégicas.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⚠️</span>
            </div>
            <h3 className="text-[26px] font-medium mb-3">Risco Operacional</h3>
            <p className="text-[19px] opacity-70 leading-relaxed">
              A dependência de controles manuais e a ausência de relatórios integrados aumentam o risco de erros, atrasos no fechamento da folha e insatisfação dos colaboradores.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">📈</span>
            </div>
            <h3 className="text-[26px] font-medium mb-3">Baixa Escalabilidade</h3>
            <p className="text-[19px] opacity-70 leading-relaxed">
              As limitações das ferramentas atuais dificultam a padronização e expansão dos processos de RH para todas as ~20 unidades do grupo, travando o crescimento.
            </p>
          </div>
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[24px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            <strong className="opacity-100">Conclusão:</strong> O cenário atual apresenta grande potencial de melhoria, com oportunidades claras para automação, integração e padronização — liberando o RH para atividades estratégicas.
          </p>
        </div>
      </div>
    ),
  },

  // 3. DORES IDENTIFICADAS
  {
    id: "problems",
    title: "Dores",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Problemas Identificados</SectionLabel>
        <SlideTitle>As 5 principais dores com o SisQual</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { title: "Retrabalho Massivo", impact: "10 dias/mês com equipe focada", desc: "Atualização manual de horários, férias e ausências para 400+ colaboradores." },
            { title: "Falhas de Integração", impact: "419 colaboradores não exportados", desc: "Exportações SisQual → Primavera que deixam centenas de fora sem explicação." },
            { title: "Fecho de Mês Lento", impact: "~33h de retrabalho mensal", desc: "~10 dias com toda a equipa dedicada ao processo de ponto/integração." },
            { title: "Erros em Folha", impact: "Pagamentos incorretos", desc: "Horas extra erradas e faltas mal contabilizadas por horários desatualizados." },
            { title: "Sem BI / Visibilidade", impact: "Decisões sem dados", desc: "Relatórios de absenteísmo em Excel manual, sem visão por unidade ou área." },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={22} className="opacity-65" />
                <h3 className="text-[24px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[18px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[16px] opacity-55 border-t border-white/15 pt-4">
                Impacto: {p.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 5. CUSTO DO CENÁRIO ATUAL — DETALHADO
  {
    id: "cost-analysis",
    title: "Custo Atual",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Custo do Cenário Atual</SectionLabel>
        <SlideTitle>O preço de não mudar</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: calculation breakdown */}
          <div>
            <h3 className="text-[24px] font-medium opacity-80 mb-6">Cálculo do trabalho manual — por unidade</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[20px]">
                <span className="opacity-65">Pessoas de RH envolvidas</span>
                <span className="font-medium">4 pessoas</span>
              </div>
              <div className="flex justify-between text-[20px]">
                <span className="opacity-65">Jornada diária</span>
                <span className="font-medium">8 horas/dia</span>
              </div>
              <div className="flex justify-between text-[20px]">
                <span className="opacity-65">Dias dedicados ao fecho</span>
                <span className="font-medium">10 dias/mês</span>
              </div>
              <div className="flex justify-between text-[20px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Horas mensais consumidas</span>
                <span className="font-medium text-[22px]">320 h/mês</span>
              </div>
              <div className="flex justify-between text-[20px] mt-2">
                <span className="opacity-65">Custo hora (ref. US$ 1.000/mês)</span>
                <span className="font-medium">US$ 5,68/h</span>
              </div>
              <div className="flex justify-between text-[20px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Custo mensal direto</span>
                <span className="font-medium text-[22px]">US$ 1.818/mês</span>
              </div>
              <div className="flex justify-between text-[20px]">
                <span className="opacity-75 font-medium">Custo anual (1 unidade)</span>
                <span className="font-medium text-[22px]">US$ 21.800/ano</span>
              </div>
            </div>
          </div>

          {/* Right: group impact + indirect costs */}
          <div>
            <h3 className="text-[24px] font-medium opacity-80 mb-6">Projeção para o grupo (~20 unidades)</h3>
            
            {/* Big number */}
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[18px] opacity-55 mb-2">Custo anual estimado — todo o grupo</p>
              <p className="text-[80px] font-light leading-none">US$ 436K</p>
              <p className="text-[16px] opacity-45 mt-3">Apenas com trabalho manual e retrabalho do RH</p>
            </div>

            {/* Indirect costs not included */}
            <div className="border border-white/15 p-6">
              <p className="text-[16px] opacity-55 uppercase tracking-widest mb-4">Custos indiretos não quantificados</p>
              <div className="space-y-3">
                {[
                  "Pagamentos incorretos ou atrasados (multas, passivos trabalhistas)",
                  "Perda de produtividade de gestores e colaboradores",
                  "Riscos de compliance e auditoria",
                  "Oportunidade perdida de atuação estratégica do RH",
                ].map((c) => (
                  <p key={c} className="text-[17px] opacity-65 flex items-start gap-3">
                    <AlertTriangle size={16} className="opacity-55 shrink-0 mt-1" /> {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-white/15 p-5 text-center">
          <p className="text-[20px] opacity-65 font-light">
            <strong className="opacity-90">Nota:</strong> Valores referem-se apenas ao custo direto de trabalho manual. O impacto real, incluindo custos indiretos, pode ser significativamente maior.
          </p>
        </div>
      </div>
    ),
  },

  // 5. SOLUÇÃO FACTORIAL
  {
    id: "solution",
    title: "Solução",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>A Solução</SectionLabel>
        <SlideTitle>Como a Factorial resolve cada dor</SlideTitle>

        {/* Demo access banner */}
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[20px] font-medium opacity-90 mb-1">🔑 Acesse o ambiente de demonstração exclusivo</p>
            <p className="text-[16px] opacity-55">Login: <span className="font-mono opacity-80">hellen@demof1d496c1.com</span> · Senha: <span className="font-mono opacity-80">Papapapa333!</span></p>
          </div>
          <a
            href="https://app.eu2.demo.factorial.dev/dashboard?switchToCompanyId=63800&redirect_uri=https://api.eu2.demo.factorial.dev/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[18px] font-medium hover:opacity-90 transition-opacity"
          >
            Entrar no Ambiente Demo →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16">
          {/* Left: interactive feature links */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Veja na prática</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Gestão de Turnos em Massa",
                  desc: "Atualize horários de centenas de colaboradores em segundos.",
                  url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1",
                  isDemo: true,
                },
                {
                  label: "Lançamento de Férias em Massa",
                  desc: "Atribua ausências em lote — sem lançar um a um.",
                  url: "https://help.factorialhr.com/ausencias-e-aprovacoes/how-to-assign-the-absence-in-bulk-?from_search=218380148",
                  isDemo: false,
                },
                {
                  label: "Ausências Automatizadas",
                  desc: "Aprovações inteligentes com IA para gestão de time-off.",
                  url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939",
                  isDemo: false,
                },
                {
                  label: "Pergunte para a IA",
                  desc: "\"Me dê um gráfico de pizza com os maiores motivos de ausências por departamento\"",
                  url: "https://app.eu2.demo.factorial.dev/analytics/reports/dashboards/105102/list/question",
                  isDemo: true,
                },
              ].map((f) => (
                <a
                  key={f.label}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-foreground/15 p-6 hover:border-foreground/35 hover:bg-foreground/[0.04] transition-all group cursor-pointer"
                >
                  <Check size={22} className="opacity-60 shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-[22px] font-medium opacity-90 group-hover:opacity-100 transition-opacity">{f.label}</p>
                    <p className="text-[17px] opacity-55 mt-1">{f.desc}</p>
                  </div>
                  <span className="text-[16px] opacity-40 group-hover:opacity-70 shrink-0 mt-1 transition-opacity">
                    {f.isDemo ? "🔗 Demo" : "📖 Help Center"}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: expected gains */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Ganhos Esperados</h3>
            <div className="space-y-6">
              {[
                { title: "Redução de Tempo", desc: "De 10 para 2–3 dias de fechamento mensal" },
                { title: "Eliminação de Retrabalho", desc: "Processos em massa substituem lançamentos individuais" },
                { title: "Redução de Erros", desc: "Exportação automática e validada para o Primavera" },
              ].map((g) => (
                <div key={g.title} className="border border-foreground/15 p-8">
                  <h4 className="text-[24px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[20px] opacity-60">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Integração Robusta com Primavera",
                "Escalabilidade para 20+ unidades",
              ].map((f) => (
                <div key={f} className="flex items-center gap-4 text-[22px] opacity-70 border border-foreground/15 p-5">
                  <Check size={20} className="opacity-60 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 6. INTEGRAÇÃO FACTORIAL + PRIMAVERA
  {
    id: "integration",
    title: "Integração",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Integração</SectionLabel>
        <SlideTitle>Factorial + Primavera</SlideTitle>
        <div className="flex items-center justify-center gap-0 mt-8">
          {/* Factorial */}
          <div className="w-[500px] border border-white/25 bg-white/10 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/25 flex items-center justify-center">
              <span className="text-[28px] font-light">F</span>
            </div>
            <p className="text-[28px] font-medium mb-1">Factorial</p>
            <p className="text-[16px] opacity-55 uppercase tracking-[0.2em] mb-6">Camada de Gestão</p>
            <div className="space-y-3 text-left">
              {["Gestão de colaboradores", "Controlo de ausências", "Portal do colaborador", "Aprovações e workflows"].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-center gap-3">
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
              <p className="text-[18px] font-medium opacity-80">Sincronização</p>
              <p className="text-[14px] opacity-55 mt-1">Automática · Bidirecional</p>
            </div>
            <div className="w-20 h-px bg-white/25" />
          </div>

          {/* Primavera */}
          <div className="w-[500px] border border-white/25 bg-white/10 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/25 flex items-center justify-center">
              <span className="text-[28px] font-light">P</span>
            </div>
            <p className="text-[28px] font-medium mb-1">Primavera</p>
            <p className="text-[16px] opacity-55 uppercase tracking-[0.2em] mb-6">Sistema de Folha</p>
            <div className="space-y-3 text-left">
              {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Arquivo contabilístico"].map((item) => (
                <p key={item} className="text-[18px] opacity-70 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white/40 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/15">
          {[
            { label: "Colaboradores", desc: "Dados pessoais e contratuais" },
            { label: "Ausências", desc: "Férias, faltas e licenças" },
            { label: "Horas Extra", desc: "Registos validados" },
            { label: "Folha", desc: "Ficheiro pronto" },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <p className="text-[20px] font-medium opacity-80">{f.label}</p>
              <p className="text-[16px] opacity-55 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 7. COMPARAÇÃO FACTORIAL x SISQUAL
  {
    id: "comparison",
    title: "Comparação",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Comparação</SectionLabel>
        <SlideTitle>SisQual vs. Factorial</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[20px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Critério</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">SisQual (Atual)</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Factorial</div>
            {[
              { c: "Tempo de Fechamento", s: "~10 dias/mês", f: "2–3 dias/mês" },
              { c: "Atualização de Turnos", s: "Um a um, manual", f: "Em massa, por grupo" },
              { c: "Lançamento de Férias", s: "Colaborador por colaborador", f: "Em massa, por equipe" },
              { c: "Exportação p/ Primavera", s: "Com falhas recorrentes", f: "Integração robusta" },
              { c: "Visibilidade de Erros", s: "Zero rastreabilidade", f: "Logs por colaborador" },
              { c: "Relatórios", s: "Excel manual", f: "BI automatizado" },
              { c: "Escalabilidade", s: "Limitada a 1 unidade", f: "Multi-unidade (20+)" },
            ].map((row, i) => (
              <>
                <div key={`c${i}`} className={`px-10 py-5 flex items-center text-[18px] ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  {row.c}
                </div>
                <div key={`s${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <X size={18} className="opacity-60 shrink-0" />
                  <span className="text-[17px]">{row.s}</span>
                </div>
                <div key={`f${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <Check size={18} className="opacity-80 shrink-0" />
                  <span className="text-[17px]">{row.f}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // 8. VÍDEO DEMONSTRATIVO (Placeholder)
  {
    id: "video",
    title: "Vídeo Demo",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Vídeo Demonstrativo</SectionLabel>
        <SlideTitle>Veja a Factorial em ação</SlideTitle>
        <div className="w-[960px] h-[540px] border-2 border-white/20 bg-white/10 flex flex-col items-center justify-center mt-8 relative">
          <div className="w-24 h-24 rounded-full border-2 border-white/40 flex items-center justify-center mb-6 cursor-pointer hover:bg-white/15 transition-colors">
            <Play size={40} className="opacity-75 ml-2" />
          </div>
          <p className="text-[24px] opacity-55">Demonstração de 3-5 minutos</p>
          <p className="text-[18px] opacity-40 mt-2">
            Funcionalidades-chave: turnos em massa, relatórios, integração com folha
          </p>
          <p className="absolute bottom-6 text-[14px] opacity-35">
            Vídeo em breve — solicite uma demonstração ao vivo
          </p>
        </div>
      </div>
    ),
  },

];
