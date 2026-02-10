import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TABS = ["visao-geral", "por-entidade", "incluido"] as const;
type Tab = typeof TABS[number];

const TAB_LABELS: Record<Tab, string> = {
  "visao-geral": "Visão Consolidada",
  "por-entidade": "Por Entidade Legal",
  "incluido": "O que está incluído",
};

const InvestmentSection = () => {
  const [tab, setTab] = useState<Tab>("visao-geral");
  const [showMZN, setShowMZN] = useState(false);

  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Factorial Starter Planning + Integração Primavera
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          3 entidades legais · 500 colaboradores · $4,90 USD/colaborador/mês
        </p>

        {/* Currency toggle */}
        <div className="flex gap-2 mb-8">
          {[false, true].map((isMZN) => (
            <button
              key={String(isMZN)}
              onClick={() => setShowMZN(isMZN)}
              className={cn(
                "px-4 py-1.5 text-xs border transition-colors rounded-sm",
                showMZN === isMZN ? "bg-foreground/10 border-foreground/30" : "border-foreground/10"
              )}
            >
              {isMZN ? "MZN" : "USD"}
            </button>
          ))}
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <SummaryCard label="Factorial (anual)" usd="$29.400" mzn="1.837.500 MZN" showMZN={showMZN} />
          <SummaryCard label="Integração Ano 1" usd="$6.270" mzn="391.875 MZN" showMZN={showMZN} sub="(licença + setup)" />
          <SummaryCard label="Total Ano 1" usd="$35.670" mzn="2.229.375 MZN" showMZN={showMZN} highlight />
          <SummaryCard label="Total Ano 2+" usd="$32.370" mzn="2.023.125 MZN" showMZN={showMZN} />
        </div>

        {/* Cost per collaborator highlight */}
        <div className="border border-foreground/10 p-6 mb-12 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-2">Custo por colaborador/mês (all-in)</p>
            <div className="flex items-baseline gap-4">
              <div>
                <p className="text-xs opacity-40">Ano 1</p>
                <p className="text-2xl font-light">{showMZN ? "367 MZN" : "$5,88"}</p>
              </div>
              <span className="text-foreground/20">→</span>
              <div>
                <p className="text-xs opacity-40">Ano 2+</p>
                <p className="text-2xl font-light">{showMZN ? "334 MZN" : "$5,35"}</p>
              </div>
            </div>
          </div>
          <p className="text-xs opacity-40 max-w-xs">
            Barato para uma solução que toca payroll, horas extras e compliance para todo o grupo.
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
          {tab === "visao-geral" && <ConsolidatedView showMZN={showMZN} />}
          {tab === "por-entidade" && <PerEntityView showMZN={showMZN} />}
          {tab === "incluido" && <IncludedView />}
        </motion.div>

        {/* Scalability note */}
        <div className="mt-12 border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-3">Escalabilidade</p>
          <p className="text-sm opacity-60 mb-3">
            A proposta atual contempla 3 entidades legais e 500 colaboradores. Para expandir para as 20 unidades do grupo:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Factorial</p>
              <p className="opacity-70">+$4,90 USD/mês por colaborador adicional</p>
            </div>
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Integração</p>
              <p className="opacity-70">+900 EUR/ano por entidade legal adicional</p>
            </div>
            <div className="text-sm">
              <p className="opacity-40 text-xs mb-1">Setup Overtime</p>
              <p className="opacity-70">+1.000 EUR por entidade (one-time)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function SummaryCard({ label, usd, mzn, showMZN, highlight, sub }: { label: string; usd: string; mzn: string; showMZN: boolean; highlight?: boolean; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-5", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      {sub && <p className="text-[10px] opacity-30 mb-1">{sub}</p>}
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{showMZN ? mzn : usd}</p>
    </motion.div>
  );
}

function ConsolidatedView({ showMZN }: { showMZN: boolean }) {
  const rows1 = [
    { item: "Factorial Starter Planning", monthly: showMZN ? "153.125" : "2.450", annual: showMZN ? "1.837.500" : "29.400" },
    { item: "Integração Primavera (licença)", monthly: showMZN ? "17.031" : "247,50", annual: showMZN ? "185.625" : "2.970" },
    { item: "Integração Primavera (setup Overtime)", monthly: "—", annual: showMZN ? "206.250" : "3.300", note: "one-time" },
  ];
  const total1 = { monthly: showMZN ? "170.156" : "2.697,50", annual: showMZN ? "2.229.375" : "35.670" };

  const rows2 = [
    { item: "Factorial Starter Planning", monthly: showMZN ? "153.125" : "2.450", annual: showMZN ? "1.837.500" : "29.400" },
    { item: "Integração Primavera (licença)", monthly: showMZN ? "17.031" : "247,50", annual: showMZN ? "185.625" : "2.970" },
  ];
  const total2 = { monthly: showMZN ? "170.156" : "2.697,50", annual: showMZN ? "2.023.125" : "32.370" };

  const cur = showMZN ? "MZN" : "USD";

  return (
    <div className="space-y-10">
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Ano 1 (com setup)</p>
        <PriceTable rows={rows1} total={total1} currency={cur} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Anos seguintes (sem setup)</p>
        <PriceTable rows={rows2} total={total2} currency={cur} />
      </div>

      {/* Strategic reading */}
      <div className="border border-foreground/10 p-6 space-y-4">
        <p className="text-xs uppercase tracking-widest opacity-50 mb-3">Leitura Estratégica</p>
        <div className="grid md:grid-cols-2 gap-6 text-sm opacity-60">
          <div>
            <p className="font-medium opacity-80 mb-1">Integração &lt; 10% do total (ano 2+)</p>
            <p>O core do contrato é Factorial. A integração é complemento, não produto principal.</p>
          </div>
          <div>
            <p className="font-medium opacity-80 mb-1">Setup de 3.000 EUR é custo único</p>
            <p>Apenas no ano 1 — facilita ancoragem: "depois fica mais barato".</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceTable({ rows, total, currency }: { rows: { item: string; monthly: string; annual: string; note?: string }[]; total: { monthly: string; annual: string }; currency: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-foreground/10">
            <th className="text-left py-3 pr-4 text-xs uppercase tracking-widest opacity-40 font-normal">Item</th>
            <th className="text-right py-3 px-4 text-xs uppercase tracking-widest opacity-40 font-normal">Mensal ({currency})</th>
            <th className="text-right py-3 pl-4 text-xs uppercase tracking-widest opacity-40 font-normal">Anual ({currency})</th>
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

function PerEntityView({ showMZN }: { showMZN: boolean }) {
  const conv = (usd: number) => showMZN ? `${(usd * 62.5).toLocaleString("pt-BR", { maximumFractionDigits: 0 })} MZN` : `$${usd.toLocaleString("en-US")}`;

  return (
    <div className="space-y-8">
      <p className="text-sm opacity-50">
        Valores por entidade legal (~167 colaboradores cada)
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Ano 1 */}
        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Por entidade — Ano 1</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Factorial (~167 × $4,90)</span>
              <span>{conv(9800)}/ano</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Integração (licença)</span>
              <span>{conv(990)}/ano</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Setup Overtime (one-time)</span>
              <span>{conv(1100)}</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total (Ano 1)</span>
              <span>{conv(11890)}</span>
            </div>
          </div>
        </div>

        {/* Ano 2+ */}
        <div className="border border-foreground/10 p-6">
          <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Por entidade — Ano 2+</p>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between opacity-60">
              <span>Factorial (~167 × $4,90)</span>
              <span>{conv(9800)}/ano</span>
            </div>
            <div className="flex justify-between opacity-60">
              <span>Integração (licença)</span>
              <span>{conv(990)}/ano</span>
            </div>
            <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
              <span>Total</span>
              <span>{conv(10790)}/ano</span>
            </div>
          </div>
        </div>
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
      title: "Integração Primavera (Advanced)",
      modules: [
        { name: "Sincronização", items: ["Admissão automática", "Cessação automática", "Atualização bidirecional de dados"] },
        { name: "Time Off", items: ["Exportação de ausências e férias", "Sincronização de justificativas"] },
        { name: "Documents", items: ["Envio de recibos de vencimento", "Declarações anuais"] },
        { name: "Overtime", items: ["Importação de horas extra aprovadas", "Cálculo automático no Primavera", "Horas noturnas, feriados, fim de semana", "Setup: 1.000 EUR/entidade (one-time)"] },
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
