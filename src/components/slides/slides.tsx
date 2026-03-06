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
        <SectionLabel>Proposta de Parceria</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">
          Dulceria Nacional /<br />Grupo Webcor
        </h1>
        <p className="text-[36px] opacity-80 font-light mb-6">
          Uma nova era na gestão de pessoas
        </p>
        <p className="text-[26px] opacity-60 font-light">
          Como libertar o RH do operacional e transformá-lo em motor estratégico do grupo
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

  // ─── 2. CONTEXTO — VISÃO GERAL ───────────────────────
  {
    id: "context-overview",
    title: "Quem vocês são",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Nós ouvimos vocês</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              A Dulceria Nacional opera num grupo com <strong className="opacity-100">~20 unidades</strong> e mais de <strong className="opacity-100">3.000 colaboradores</strong> em Angola. Recentemente, centralizaram o payroll — um passo estratégico que exige ferramentas à altura.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              O vosso RH já pensa de forma estratégica. Mas as ferramentas atuais <strong className="opacity-100">prendem a equipa no operacional</strong> — e isso não é culpa de ninguém. É uma questão de tecnologia.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "⚙️", title: "Processos que consomem tempo", desc: "Tarefas repetitivas que poderiam ser automáticas." },
              { icon: "📊", title: "Atualizações uma a uma", desc: "Horários, férias e ausências sem opção de lote." },
              { icon: "🔗", title: "Dados que não conversam", desc: "Atrasos no fecho da folha por falhas de integração." },
              { icon: "📋", title: "Excel como plano B", desc: "Controles paralelos porque o sistema não entrega." },
              { icon: "👷", title: "Equipa sobrecarregada", desc: "O RH insere o que os colaboradores não conseguem." },
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

  // ─── 3. FERRAMENTAS ATUAIS ────────────────────────────
  {
    id: "context-tools",
    title: "Ferramentas Atuais",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnóstico</SectionLabel>
        <SlideTitle>O que vocês usam hoje — e onde dói</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {/* SisQual */}
          <div className="border border-white/20 p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                <span className="text-[24px] font-light">SQ</span>
              </div>
              <div>
                <h3 className="text-[28px] font-medium">SisQual</h3>
                <p className="text-[16px] opacity-50 uppercase tracking-widest">Ponto & Turnos</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Cumpre o básico, mas não acompanha a complexidade de um grupo com 20+ unidades.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-45 uppercase tracking-widest mb-3">Onde limita</p>
              {["Horários só se atualizam um a um", "Relatórios gerenciais inexistentes", "Exportações que falham sem aviso", "Cada lançamento exige entrada manual"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-50 shrink-0" /> {l}
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
                <h3 className="text-[28px] font-medium">Primavera</h3>
                <p className="text-[16px] opacity-50 uppercase tracking-widest">Folha & Financeiro</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Robusto na folha, mas refém dos dados que recebe. Se a fonte falha, tudo atrasa.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-45 uppercase tracking-widest mb-3">O que sofre</p>
              {["Qualidade depende do SisQual", "Importações chegam incompletas", "Equipa valida tudo manualmente", "Fecho da folha atrasa a cada mês"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <AlertTriangle size={16} className="opacity-50 shrink-0" /> {l}
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
                <h3 className="text-[28px] font-medium">Excel</h3>
                <p className="text-[16px] opacity-50 uppercase tracking-widest">O remendo</p>
              </div>
            </div>
            <p className="text-[20px] opacity-70 leading-relaxed mb-6">
              Não é uma ferramenta de gestão — é um sinal de que o sistema não dá conta.
            </p>
            <div className="space-y-3 border-t border-white/15 pt-5">
              <p className="text-[16px] opacity-45 uppercase tracking-widest mb-3">O risco</p>
              {["Erros invisíveis até à folha", "Cada unidade faz diferente", "Impossível ter visão de grupo", "Decisões sem dados confiáveis"].map((l) => (
                <p key={l} className="text-[18px] opacity-65 flex items-center gap-3">
                  <X size={16} className="opacity-50 shrink-0" /> {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 4. IMPACTO NA OPERAÇÃO ───────────────────────────
  {
    id: "context-impact",
    title: "Impacto Operacional",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O impacto real</SectionLabel>
        <SlideTitle>O que o grupo perde — todos os meses</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⏱️</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Tempo desperdiçado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              A equipa de RH dedica semanas inteiras a tarefas que sistemas modernos resolvem em horas. Esse tempo deveria ir para pessoas, não para planilhas.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">⚠️</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Risco acumulado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              Cada erro manual é uma bomba-relógio: pagamentos incorretos, colaboradores insatisfeitos, auditoria que encontra inconsistências. O risco cresce silenciosamente.
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
              <span className="text-[32px]">📈</span>
            </div>
            <h3 className="text-[28px] font-medium mb-3">Crescimento travado</h3>
            <p className="text-[21px] opacity-70 leading-relaxed">
              O grupo quer expandir, mas os processos de RH não escalam. Cada nova unidade multiplica o retrabalho em vez de se integrar.
            </p>
          </div>
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[26px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            A boa notícia? <strong className="opacity-100">Nada disto é inevitável.</strong> Existe um caminho claro para transformar esta realidade — e começa agora.
          </p>
        </div>
      </div>
    ),
  },

  // ─── 5. DORES IDENTIFICADAS ───────────────────────────
  {
    id: "problems",
    title: "Dores",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O que identificámos</SectionLabel>
        <SlideTitle>5 dores que não deviam existir em 2025</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { title: "Retrabalho massivo", impact: "10 dias/mês, 4 pessoas dedicadas", desc: "Horários, férias e ausências atualizados manualmente, um colaborador de cada vez." },
            { title: "Integração que falha", impact: "419 colaboradores não exportados", desc: "Dados que saem do SisQual e não chegam ao Primavera — sem explicação visível." },
            { title: "Fecho de mês interminável", impact: "~320 horas mensais consumidas", desc: "A equipa inteira para tudo para fechar o ponto. Dez dias. Todos os meses." },
            { title: "Folha com erros", impact: "Pagamentos incorretos", desc: "Horas extra mal calculadas, faltas não contabilizadas. O colaborador é quem sofre." },
            { title: "Zero visibilidade", impact: "Decisões no escuro", desc: "Sem dashboards, sem BI. Quando pedem um relatório, alguém abre o Excel." },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="opacity-65" />
                <h3 className="text-[26px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[18px] opacity-55 border-t border-white/15 pt-4">
                {p.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─── 6. CUSTO DO CENÁRIO ATUAL ────────────────────────
  {
    id: "cost-analysis",
    title: "Custo Atual",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>O custo de ficar parado</SectionLabel>
        <SlideTitle>Quanto custa não mudar?</SlideTitle>

        <div className="grid grid-cols-2 gap-16 mt-4">
          {/* Left: calculation breakdown */}
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">O cálculo é simples</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Pessoas envolvidas no fecho</span>
                <span className="font-medium">4 pessoas</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Jornada diária</span>
                <span className="font-medium">8 horas/dia</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Dias dedicados por mês</span>
                <span className="font-medium">10 dias</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Horas consumidas / mês</span>
                <span className="font-medium text-[24px]">320 h</span>
              </div>
              <div className="flex justify-between text-[22px] mt-2">
                <span className="opacity-65">Custo por hora (ref. US$ 1.000/mês)</span>
                <span className="font-medium">US$ 5,68</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Custo mensal (1 unidade)</span>
                <span className="font-medium text-[24px]">US$ 1.818</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-75 font-medium">Custo anual (1 unidade)</span>
                <span className="font-medium text-[24px]">US$ 21.800</span>
              </div>
            </div>
          </div>

          {/* Right: group impact + indirect costs */}
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">Agora multiplique por 20 unidades</h3>
            
            {/* Big number */}
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[20px] opacity-55 mb-2">Custo anual estimado — todo o grupo</p>
              <p className="text-[80px] font-light leading-none">US$ 436K</p>
              <p className="text-[18px] opacity-45 mt-3">Apenas em trabalho manual e retrabalho</p>
            </div>

            {/* Indirect costs */}
            <div className="border border-white/15 p-6">
              <p className="text-[18px] opacity-55 uppercase tracking-widest mb-4">E isto ainda não conta...</p>
              <div className="space-y-3">
                {[
                  "Multas e passivos por pagamentos incorretos",
                  "Produtividade perdida de gestores e colaboradores",
                  "Riscos de compliance em auditorias",
                  "O custo invisível: um RH que não consegue ser estratégico",
                ].map((c) => (
                  <p key={c} className="text-[19px] opacity-65 flex items-start gap-3">
                    <AlertTriangle size={18} className="opacity-55 shrink-0 mt-1" /> {c}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-white/15 p-5 text-center">
          <p className="text-[22px] opacity-70 font-light">
            Cada mês sem mudança é um mês a pagar este preço. <strong className="opacity-100">A pergunta não é "se" — é "quando".</strong>
          </p>
        </div>
      </div>
    ),
  },

  // ─── 7. SOLUÇÃO FACTORIAL ─────────────────────────────
  {
    id: "solution",
    title: "Solução",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>A resposta</SectionLabel>
        <SlideTitle>Cada dor tem uma solução concreta</SlideTitle>

        {/* Demo access banner */}
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between">
          <div>
            <p className="text-[22px] font-medium opacity-90 mb-1">🔑 Preparámos um ambiente só para vocês</p>
            <p className="text-[18px] opacity-55">Login: <span className="font-mono opacity-80">hellen@demob25acc00.com</span> · Senha: <span className="font-mono opacity-80">Papapapa333!</span></p>
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
          {/* Left: interactive feature links */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">Veja com os vossos próprios olhos</h3>
            <div className="space-y-4">
              {[
                {
                  label: "Turnos em massa",
                  desc: "Centenas de horários atualizados em segundos. Nunca mais um a um.",
                  url: "https://app.eu2.demo.factorial.dev/shifts/monthly/employees/2026/1/1",
                  isDemo: true,
                },
                {
                  label: "Férias em lote",
                  desc: "Atribua ausências para equipas inteiras de uma só vez.",
                  url: "https://help.factorialhr.com/ausencias-e-aprovacoes/how-to-assign-the-absence-in-bulk-?from_search=218380148",
                  isDemo: false,
                },
                {
                  label: "Aprovações com IA",
                  desc: "A IA sugere aprovações inteligentes baseadas em padrões da equipa.",
                  url: "https://help.factorialhr.com/one/one-ai-%E2%80%93-time-off-management-approvals?from_search=218384939",
                  isDemo: false,
                },
                {
                  label: "Pergunte qualquer coisa à IA",
                  desc: "\"Quais os principais motivos de ausência por departamento?\" — e receba um gráfico.",
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

          {/* Right: expected gains */}
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-80">O que muda na prática</h3>
            <div className="space-y-6">
              {[
                { title: "De 10 dias para 2–3 dias", desc: "O fecho de mês deixa de ser um pesadelo." },
                { title: "Zero retrabalho", desc: "Processos em massa eliminam lançamentos individuais." },
                { title: "Integração que funciona", desc: "Dados validados automaticamente antes de ir para o Primavera." },
              ].map((g) => (
                <div key={g.title} className="border border-foreground/15 p-8">
                  <h4 className="text-[26px] font-normal mb-2">{g.title}</h4>
                  <p className="text-[22px] opacity-60">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Primavera integrado de forma robusta",
                "Preparado para 20+ unidades desde o dia 1",
              ].map((f) => (
                <div key={f} className="flex items-center gap-4 text-[24px] opacity-70 border border-foreground/15 p-5">
                  <Check size={22} className="opacity-60 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ─── 8. INTEGRAÇÃO ────────────────────────────────────
  {
    id: "integration",
    title: "Integração",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Como funciona</SectionLabel>
        <SlideTitle>O Primavera fica. A Factorial entra.</SlideTitle>
        <div className="flex items-center justify-center gap-0 mt-8">
          {/* Factorial */}
          <div className="w-[500px] border border-white/25 bg-white/10 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/25 flex items-center justify-center">
              <span className="text-[28px] font-light">F</span>
            </div>
            <p className="text-[30px] font-medium mb-1">Factorial</p>
            <p className="text-[18px] opacity-55 uppercase tracking-[0.2em] mb-6">A nova camada de gestão</p>
            <div className="space-y-3 text-left">
              {["Gestão de colaboradores", "Controlo de ausências", "Portal do colaborador", "Aprovações e workflows"].map((item) => (
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
            <p className="text-[18px] opacity-55 uppercase tracking-[0.2em] mb-6">Folha — como sempre</p>
            <div className="space-y-3 text-left">
              {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Arquivo contabilístico"].map((item) => (
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
            { label: "Ausências", desc: "Férias, faltas e licenças — sem export" },
            { label: "Horas Extra", desc: "Validadas antes de enviar" },
            { label: "Folha", desc: "Ficheiro pronto, sem retrabalho" },
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

  // ─── 9. COMPARAÇÃO ────────────────────────────────────
  {
    id: "comparison",
    title: "Comparação",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Antes e depois</SectionLabel>
        <SlideTitle>O que muda — ponto a ponto</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Critério</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Hoje (SisQual)</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">Com Factorial</div>
            {[
              { c: "Tempo de fechamento", s: "~10 dias/mês", f: "2–3 dias/mês" },
              { c: "Atualização de turnos", s: "Um a um", f: "Em massa" },
              { c: "Lançamento de férias", s: "Colaborador por colaborador", f: "Em lote, por equipa" },
              { c: "Exportação p/ Primavera", s: "Falhas recorrentes", f: "Integração validada" },
              { c: "Rastreabilidade de erros", s: "Nenhuma", f: "Logs por colaborador" },
              { c: "Relatórios e BI", s: "Excel manual", f: "Dashboards + IA" },
              { c: "Escalabilidade", s: "1 unidade por vez", f: "20+ unidades nativas" },
            ].map((row, i) => (
              <>
                <div key={`c${i}`} className={`px-10 py-5 flex items-center text-[20px] ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  {row.c}
                </div>
                <div key={`s${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <X size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px]">{row.s}</span>
                </div>
                <div key={`f${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/10" : ""}`}>
                  <Check size={20} className="opacity-80 shrink-0" />
                  <span className="text-[20px]">{row.f}</span>
                </div>
              </>
            ))}
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
        <SlideTitle>Imagine o vosso RH assim</SlideTitle>
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
];
