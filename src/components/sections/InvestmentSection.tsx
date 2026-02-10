import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_VALUES } from "@/utils/constants";

const TABS = ["visao-geral", "por-entidade", "incluido"] as const;
type Tab = typeof TABS[number];
type Currency = "EUR" | "USD" | "MZN";

const TAB_LABELS: Record<Tab, string> = {
  "visao-geral": "Visão Consolidada",
  "por-entidade": "Fluxo de Cobrança",
  "incluido": "O que está incluído",
};

const d = DEFAULT_VALUES;
const factorialMensal = d.totalColaboradores * d.custoColaboradorMes_EUR; // 2,450 EUR
const primaveraMensal = d.totalColaboradores * d.custoPrimaveraMes_EUR; // 300 EUR
const mensalRecorrente = factorialMensal + primaveraMensal; // 2,750 EUR
const implantacao = d.implantacaoFactorial_EUR; // 2,000 EUR
const mes1Total = implantacao + primaveraMensal; // 2,300 EUR
const ano1Total = implantacao + (factorialMensal * 11) + (primaveraMensal * 12); // 32,550 EUR
const ano2Total = mensalRecorrente * 12; // 33,000 EUR

function conv(eur: number, currency: Currency): string {
  if (currency === "EUR") return `€${eur.toLocaleString("pt-PT")}`;
  if (currency === "USD") return `$${Math.round(eur * d.conversaoEUR_USD).toLocaleString("en-US")}`;
  return `${Math.round(eur * d.conversaoEUR_MZN).toLocaleString("pt-BR")} MZN`;
}

const InvestmentSection = () => {
  const [tab, setTab] = useState<Tab>("visao-geral");
  const [currency, setCurrency] = useState<Currency>("EUR");

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Factorial + Integração Primavera (E2E)
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          3 entidades legais · 500 colaboradores · €4,90 EUR/colaborador/mês
        </p>

        {/* Currency toggle */}
        <div className="flex gap-2 mb-8">
          {(["EUR", "USD", "MZN"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={cn(
                "px-4 py-1.5 text-xs border transition-colors rounded-sm",
                currency === c ? "bg-foreground/10 border-foreground/30" : "border-foreground/10"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <SummaryCard label="Mês 1 (implantação)" value={conv(mes1Total, currency)} sub="One-time + Primavera" />
          <SummaryCard label="Mensal Recorrente" value={conv(mensalRecorrente, currency)} sub="Mês 2 em diante" />
          <SummaryCard label="Total Ano 1" value={conv(ano1Total, currency)} highlight />
          <SummaryCard label="Total Ano 2+" value={conv(ano2Total, currency)} />
        </div>

        {/* Cost per collaborator highlight */}
        <div className="border border-foreground/10 p-6 mb-12 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Custo por colaborador/mês (all-in)</p>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-xs opacity-40">Ano 1</p>
                <p className="text-2xl font-light">{conv(ano1Total / (d.totalColaboradores * 12), currency)}</p>
              </div>
              <span className="text-foreground/20">→</span>
              <div>
                <p className="text-xs opacity-40">Ano 2+</p>
                <p className="text-2xl font-light">{conv(ano2Total / (d.totalColaboradores * 12), currency)}</p>
              </div>
            </div>
          </div>
          <p className="text-xs opacity-40 max-w-xs">
            Solução completa que abrange payroll, horas extras e compliance para todo o grupo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-foreground/10 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-4 py-2.5 text-xs tracking-wide transition-colors border-b-2 -mb-px",
                tab === t ? "border-foreground/40 text-foreground" : "border-transparent text-foreground/40 hover:text-foreground/60"
              )}
            >
              {TAB_LABELS[t]}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
          {tab === "visao-geral" && <ConsolidatedView currency={currency} />}
          {tab === "por-entidade" && <BillingFlowView currency={currency} />}
          {tab === "incluido" && <IncludedView />}
        </motion.div>

        {/* Scalability note */}
        <div className="mt-12 border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-3">Escalabilidade</p>
          <p className="text-sm opacity-60 mb-3">
            A proposta atual contempla 3 entidades legais e 500 colaboradores. Para expandir para as 20 unidades do grupo:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Factorial</p>
              <p className="opacity-70">+€4,90 EUR/mês por colaborador adicional</p>
            </div>
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Primavera (E2E)</p>
              <p className="opacity-70">+€0,60 EUR/mês por colaborador adicional</p>
            </div>
          </div>
        </div>

        {/* Billing note */}
        <div className="mt-6 border border-foreground/10 p-4">
          <p className="text-xs opacity-40">
            <strong>Nota:</strong> O valor do Primavera será faturado diretamente pela E2E.
          </p>
        </div>
      </div>
    </section>
  );
};

function SummaryCard({ label, value, highlight, sub }: { label: string; value: string; highlight?: boolean; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      {sub && <p className="text-[10px] opacity-30 mb-1">{sub}</p>}
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

function ConsolidatedView({ currency }: { currency: Currency }) {
  const rows1 = [
    { item: "Implantação Factorial (one-time)", monthly: "—", annual: conv(implantacao, currency), note: "mês 1 apenas" },
    { item: `Factorial (${d.totalColaboradores} × €4,90)`, monthly: conv(factorialMensal, currency), annual: conv(factorialMensal * 11, currency), note: "11 meses" },
    { item: `Primavera E2E (${d.totalColaboradores} × €0,60)`, monthly: conv(primaveraMensal, currency), annual: conv(primaveraMensal * 12, currency) },
  ];
  const total1 = { monthly: "—", annual: conv(ano1Total, currency) };

  const rows2 = [
    { item: `Factorial (${d.totalColaboradores} × €4,90)`, monthly: conv(factorialMensal, currency), annual: conv(factorialMensal * 12, currency) },
    { item: `Primavera E2E (${d.totalColaboradores} × €0,60)`, monthly: conv(primaveraMensal, currency), annual: conv(primaveraMensal * 12, currency) },
  ];
  const total2 = { monthly: conv(mensalRecorrente, currency), annual: conv(ano2Total, currency) };

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Ano 1 (com implantação)</p>
        <PriceTable rows={rows1} total={total1} currency={currency} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Anos seguintes</p>
        <PriceTable rows={rows2} total={total2} currency={currency} />
      </div>

    </div>
  );
}

function PriceTable({ rows, total, currency }: { rows: { item: string; monthly: string; annual: string; note?: string }[]; total: { monthly: string; annual: string }; currency: Currency }) {
  const label = currency === "EUR" ? "EUR" : currency === "USD" ? "USD" : "MZN";
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-foreground/10">
            <th className="text-left py-3 pr-4 text-xs uppercase tracking-widest opacity-40 font-normal">Item</th>
            <th className="text-right py-3 px-4 text-xs uppercase tracking-widest opacity-40 font-normal">Mensal ({label})</th>
            <th className="text-right py-3 pl-4 text-xs uppercase tracking-widest opacity-40 font-normal">Anual ({label})</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-foreground/5">
              <td className="py-3 pr-4 opacity-70">{r.item}</td>
              <td className="py-3 px-4 text-right opacity-60">{r.monthly}</td>
              <td className="py-3 pl-4 text-right opacity-70">
                {r.annual}
                {r.note && <span className="text-xs opacity-40 ml-1">({r.note})</span>}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-foreground/20">
            <td className="py-3 pr-4 font-medium">TOTAL</td>
            <td className="py-3 px-4 text-right font-medium">{total.monthly}</td>
            <td className="py-3 pl-4 text-right font-medium">{total.annual}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

function BillingFlowView({ currency }: { currency: Currency }) {
  return (
    <div className="space-y-8">
      <p className="text-sm opacity-50">
        Fluxo de cobrança mensal detalhado
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Mês 1 */}
        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Mês 1 — Início</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Implantação Factorial (one-time)</span>
              <span>{conv(implantacao, currency)}</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Primavera E2E</span>
              <span>{conv(primaveraMensal, currency)}</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total Mês 1</span>
              <span>{conv(mes1Total, currency)}</span>
            </div>
          </div>
        </div>

        {/* Mês 2+ */}
        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Mês 2 em diante — Recorrente</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Factorial ({d.totalColaboradores} × €4,90)</span>
              <span>{conv(factorialMensal, currency)}/mês</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Primavera E2E ({d.totalColaboradores} × €0,60)</span>
              <span>{conv(primaveraMensal, currency)}/mês</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total Mensal</span>
              <span>{conv(mensalRecorrente, currency)}/mês</span>
            </div>
          </div>
        </div>
      </div>

      {/* Billing note */}
      <div className="border border-foreground/10 p-4 text-sm opacity-50">
        <p><strong>Nota:</strong> O valor do Primavera ({conv(primaveraMensal, currency)}/mês) será faturado diretamente pela E2E.</p>
      </div>
    </div>
  );
}

function IncludedView() {
  const sections = [
    {
      title: "Factorial Starter Planning",
      modules: [
        { name: "Core", items: ["Gestão completa de colaboradores", "Cadastro e atualização de dados", "Organograma e estrutura organizacional"] },
        { name: "Time Tracking", items: ["Ponto biométrico integrado", "Controle de horas trabalhadas", "Gestão de turnos e escalas", "Relatórios de ponto"] },
        { name: "Time Off", items: ["Gestão de férias", "Ausências e licenças", "Justificativas e atestados", "Aprovações digitais"] },
        { name: "Shifts", items: ["Gestão de turnos em massa", "Atribuição de escalas", "Troca de turnos", "Notificações automáticas"] },
      ],
    },
    {
      title: "Integração Primavera (E2E)",
      modules: [
        { name: "Sincronização", items: ["Admissão automática", "Cessação automática", "Atualização bidirecional de dados"] },
        { name: "Time Off", items: ["Exportação de ausências e férias", "Sincronização de justificativas"] },
        { name: "Documents", items: ["Envio de recibos de vencimento", "Declarações anuais"] },
        { name: "Overtime", items: ["Importação de horas extra aprovadas", "Cálculo automático no Primavera", "Horas noturnas, feriados, fim de semana"] },
        { name: "Compensation", items: ["Informação contratual sincronizada", "Dados de remuneração"] },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {sections.map((sec) => (
        <div key={sec.title}>
          <p className="text-sm font-medium opacity-80 mb-4">{sec.title}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sec.modules.map((mod) => (
              <div key={mod.name} className="border border-foreground/10 p-5">
                <p className="text-xs uppercase tracking-widest opacity-50 mb-3">{mod.name}</p>
                <ul className="space-y-1.5">
                  {mod.items.map((item, i) => (
                    <li key={i} className="text-sm opacity-60 flex gap-2">
                      <span className="opacity-40">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvestmentSection;
