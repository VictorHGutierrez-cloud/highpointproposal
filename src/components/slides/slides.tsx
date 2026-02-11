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
  <p className="text-[28px] tracking-[0.25em] uppercase opacity-50 mb-8">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[72px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] opacity-70 font-light leading-relaxed max-w-[1200px]">{children}</p>
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
        <p className="text-[36px] opacity-70 font-light mb-6">
          Substituição do SisQual + Integração com Primavera
        </p>
        <p className="text-[24px] opacity-40 font-light">
          Plataforma completa de gestão de RH para 400+ colaboradores
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="text-[20px] opacity-60">Victor Henrique Aguiar Gutierrez Duarte</p>
            <p className="text-[16px] opacity-40">Gerente de Expansão | Factorial</p>
          </div>
        </div>
      </div>
    ),
  },

  // 2. CONTEXTO
  {
    id: "context",
    title: "Contexto",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Contexto</SectionLabel>
        <SlideTitle>Dulceria Nacional & Grupo Webcor</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          {[
            { title: "Empresa", desc: "Dulceria Nacional, parte do Grupo Webcor — parceria entre Arcor e Webcor, com operações em Angola e Moçambique." },
            { title: "Escala", desc: "400+ colaboradores apenas na Dulceria, ~20 unidades. Turnos rotativos em linhas de produção." },
            { title: "Sistemas Atuais", desc: "ERP Primavera para folha + SisQual para ponto/turnos — com graves falhas de integração." },
          ].map((c) => (
            <div key={c.title} className="border border-foreground/15 p-10">
              <h3 className="text-[28px] font-normal mb-4">{c.title}</h3>
              <p className="text-[22px] opacity-60 leading-relaxed">{c.desc}</p>
            </div>
          ))}
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
            <div key={p.title} className="border border-white/15 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={22} className="opacity-50" />
                <h3 className="text-[24px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[18px] opacity-60 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[16px] opacity-40 border-t border-white/10 pt-4">
                Impacto: {p.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // 4. IMPACTO QUANTIFICADO
  {
    id: "impact",
    title: "Impacto",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>Impacto Quantificado</SectionLabel>
        <SlideTitle>O custo de não mudar</SlideTitle>
        <div className="grid grid-cols-3 gap-16 mt-12">
          {[
            { value: "10 dias", label: "Tempo de fecho de mês atual" },
            { value: "~33h", label: "Retrabalho mensal evitável" },
            { value: "~415K €", label: "Custo anual estimado" },
          ].map((m) => (
            <div key={m.label}>
              <p className="text-[96px] font-light leading-none mb-4">{m.value}</p>
              <p className="text-[24px] opacity-50">{m.label}</p>
            </div>
          ))}
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
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div>
            <h3 className="text-[28px] font-normal mb-8 opacity-70">Funcionalidades Principais</h3>
            <ul className="space-y-5">
              {[
                "Gestão de Turnos em Massa",
                "Lançamento de Férias em Massa",
                "Ausências Automatizadas",
                "Relatórios Automáticos (BI)",
                "Integração Robusta com Primavera",
                "Escalabilidade para 20+ unidades",
              ].map((f) => (
                <li key={f} className="flex items-center gap-4 text-[24px] opacity-70">
                  <Check size={22} className="opacity-50 shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-[28px] font-normal mb-8 opacity-70">Ganhos Esperados</h3>
            {[
              { title: "Redução de Tempo", desc: "De 10 para 2–3 dias de fechamento mensal" },
              { title: "Eliminação de Retrabalho", desc: "Processos em massa substituem lançamentos individuais" },
              { title: "Redução de Erros", desc: "Exportação automática e validada para o Primavera" },
            ].map((g) => (
              <div key={g.title} className="border border-foreground/10 p-8">
                <h4 className="text-[24px] font-normal mb-2">{g.title}</h4>
                <p className="text-[20px] opacity-50">{g.desc}</p>
              </div>
            ))}
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
          <div className="w-[500px] border border-white/20 bg-white/5 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/20 flex items-center justify-center">
              <span className="text-[28px] font-light">F</span>
            </div>
            <p className="text-[28px] font-medium mb-1">Factorial</p>
            <p className="text-[16px] opacity-40 uppercase tracking-[0.2em] mb-6">Camada de Gestão</p>
            <div className="space-y-3 text-left">
              {["Gestão de colaboradores", "Controlo de ausências", "Portal do colaborador", "Aprovações e workflows"].map((item) => (
                <p key={item} className="text-[18px] opacity-50 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white/30 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>

          {/* Connector */}
          <div className="flex items-center px-6">
            <div className="w-20 h-px bg-white/20" />
            <div className="border border-white/25 bg-white/5 px-8 py-6 text-center min-w-[180px]">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
              </div>
              <p className="text-[18px] font-medium opacity-70">Sincronização</p>
              <p className="text-[14px] opacity-40 mt-1">Automática · Bidirecional</p>
            </div>
            <div className="w-20 h-px bg-white/20" />
          </div>

          {/* Primavera */}
          <div className="w-[500px] border border-white/20 bg-white/5 p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 border border-white/20 flex items-center justify-center">
              <span className="text-[28px] font-light">P</span>
            </div>
            <p className="text-[28px] font-medium mb-1">Primavera</p>
            <p className="text-[16px] opacity-40 uppercase tracking-[0.2em] mb-6">Sistema de Folha</p>
            <div className="space-y-3 text-left">
              {["Processamento salarial", "Obrigações fiscais", "Declarações legais", "Arquivo contabilístico"].map((item) => (
                <p key={item} className="text-[18px] opacity-50 flex items-center gap-3">
                  <span className="w-2 h-2 bg-white/30 rounded-full shrink-0" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
          {[
            { label: "Colaboradores", desc: "Dados pessoais e contratuais" },
            { label: "Ausências", desc: "Férias, faltas e licenças" },
            { label: "Horas Extra", desc: "Registos validados" },
            { label: "Folha", desc: "Ficheiro pronto" },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <p className="text-[20px] font-medium opacity-70">{f.label}</p>
              <p className="text-[16px] opacity-40 mt-1">{f.desc}</p>
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
        <div className="border border-foreground/15 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[20px]">
            <div className="px-10 py-6 border-b border-foreground/15 font-medium opacity-50">Critério</div>
            <div className="px-10 py-6 border-b border-foreground/15 font-medium opacity-50 text-center">SisQual (Atual)</div>
            <div className="px-10 py-6 border-b border-foreground/15 font-medium opacity-50 text-center">Factorial</div>
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
                <div key={`c${i}`} className={`px-10 py-5 flex items-center text-[18px] ${i < 6 ? "border-b border-foreground/8" : ""}`}>
                  {row.c}
                </div>
                <div key={`s${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 opacity-60 ${i < 6 ? "border-b border-foreground/8" : ""}`}>
                  <X size={18} className="opacity-50 shrink-0" />
                  <span className="text-[17px]">{row.s}</span>
                </div>
                <div key={`f${i}`} className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/8" : ""}`}>
                  <Check size={18} className="opacity-70 shrink-0" />
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
        <div className="w-[960px] h-[540px] border-2 border-white/15 bg-white/5 flex flex-col items-center justify-center mt-8 relative">
          <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center mb-6 cursor-pointer hover:bg-white/10 transition-colors">
            <Play size={40} className="opacity-60 ml-2" />
          </div>
          <p className="text-[24px] opacity-40">Demonstração de 3-5 minutos</p>
          <p className="text-[18px] opacity-25 mt-2">
            Funcionalidades-chave: turnos em massa, relatórios, integração com folha
          </p>
          <p className="absolute bottom-6 text-[14px] opacity-20">
            Vídeo em breve — solicite uma demonstração ao vivo
          </p>
        </div>
      </div>
    ),
  },

  // 9. INVESTIMENTO
  {
    id: "investment",
    title: "Investimento",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investimento</SectionLabel>
        <SlideTitle>Factorial + Integração Primavera</SlideTitle>
        <p className="text-[24px] opacity-50 mb-10">3 entidades legais · 500 colaboradores · €4,90/colaborador/mês</p>

        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="border border-foreground/20 bg-foreground/5 p-10">
            <p className="text-[18px] opacity-40 mb-2">Mês 1</p>
            <p className="text-[14px] opacity-30 mb-2">Implantação + Primavera</p>
            <p className="text-[48px] font-light">{formatEUR(implantacao + primaveraMensal)}</p>
          </div>
          <div className="border border-foreground/10 p-10">
            <p className="text-[18px] opacity-40 mb-2">Mês 2 em diante</p>
            <p className="text-[14px] opacity-30 mb-2">Factorial + Primavera</p>
            <p className="text-[48px] font-light">{formatEUR(mensalRecorrente)}</p>
          </div>
          <div className="border border-foreground/10 p-10">
            <p className="text-[18px] opacity-40 mb-2">Por Colaborador</p>
            <p className="text-[14px] opacity-30 mb-2">Mensal recorrente</p>
            <p className="text-[48px] font-light">{formatEUR(mensalRecorrente / d.totalColaboradores)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 border border-foreground/10 p-10">
          <div>
            <p className="text-[16px] opacity-40 mb-4">Mês 1 — Início</p>
            <div className="space-y-3 text-[20px]">
              <div className="flex justify-between opacity-50">
                <span>Implantação Factorial (one-time)</span>
                <span>{formatEUR(implantacao)}</span>
              </div>
              <div className="flex justify-between opacity-50">
                <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
                <span>{formatEUR(primaveraMensal)}</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Total</span>
                <span>{formatEUR(implantacao + primaveraMensal)}</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[16px] opacity-40 mb-4">Mês 2+ — Recorrente</p>
            <div className="space-y-3 text-[20px]">
              <div className="flex justify-between opacity-50">
                <span>Factorial ({d.totalColaboradores} × €4,90)</span>
                <span>{formatEUR(factorialMensal)}/mês</span>
              </div>
              <div className="flex justify-between opacity-50">
                <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
                <span>{formatEUR(primaveraMensal)}/mês</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Total</span>
                <span>{formatEUR(mensalRecorrente)}/mês</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // 10. PRÓXIMOS PASSOS
  {
    id: "next-steps",
    title: "Próximos Passos",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Próximos Passos</SectionLabel>
        <SlideTitle>Jornada de implementação</SlideTitle>

        <div className="grid grid-cols-4 gap-8 mt-8 mb-16">
          {[
            { phase: 1, title: "Validação Técnica", desc: "Reunião entre Oscar (Dulceria) e GMA para avaliar a Factorial.", status: "Em andamento" },
            { phase: 2, title: "Alinhamento com HR Leaders", desc: "Reunião com líderes de RH das ~20 unidades para validação.", status: "Pendente" },
            { phase: 3, title: "Apresentação HRBPs + CFO", desc: "Business case consolidado com comparação e roadmap.", status: "Pendente" },
            { phase: 4, title: "Aprovação & Implementação", desc: "Decisão sobre escopo inicial e contratação.", status: "Pendente" },
          ].map((p) => (
            <div key={p.phase} className="border border-white/15 p-8 relative">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center mb-5">
                <span className="text-[20px] font-light">{p.phase}</span>
              </div>
              <h3 className="text-[22px] font-normal mb-3">{p.title}</h3>
              <p className="text-[16px] opacity-50 leading-relaxed mb-4">{p.desc}</p>
              <span className={`text-[14px] px-3 py-1 ${p.status === "Em andamento" ? "bg-white/15" : "bg-white/5 opacity-50"}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[36px] font-light mb-6">
            Pronto para transformar a gestão de RH do Grupo Webcor?
          </p>
          <a
            href={`mailto:victor.gutierrez@factorial.co?subject=${encodeURIComponent("Dulceria Nacional — Agendar Próxima Reunião")}`}
            className="inline-flex items-center gap-4 bg-white text-[hsl(12,15%,20%)] px-12 py-5 text-[20px] tracking-wide hover:opacity-90 transition-opacity"
          >
            <Mail size={22} />
            Agendar Próxima Reunião
          </a>
        </div>
      </div>
    ),
  },
];
