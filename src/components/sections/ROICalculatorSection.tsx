import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";
import { useROICalculation, type ROIInputs } from "@/hooks/useROICalculation";
import { formatUSD, formatEUR, formatMZN, formatPercent, formatMonths } from "@/utils/formatters";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
  LineChart, Line, CartesianGrid, Legend,
} from "recharts";

const ROICalculatorSection = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    unidades: DEFAULT_VALUES.unidades,
    totalColaboradores: DEFAULT_VALUES.totalColaboradores,
    salarioResponsavelRH: DEFAULT_VALUES.salarioResponsavelRH_MZN,
    salarioAnalista: DEFAULT_VALUES.salarioAnalista_MZN,
    tempoFechamentoAtual: DEFAULT_VALUES.tempoFechamentoAtual,
    cenario: "realista",
    moeda: "EUR",
  });

  const results = useROICalculation(inputs);

  const update = useCallback(<K extends keyof ROIInputs>(key: K, value: ROIInputs[K]) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }, []);

  const fmt = (usd: number, mzn: number) => {
    if (inputs.moeda === "EUR") return formatEUR(usd / DEFAULT_VALUES.conversaoEUR_USD);
    if (inputs.moeda === "MZN") return formatMZN(mzn);
    return formatUSD(usd);
  };

  const scenarioKeys: ScenarioKey[] = ["conservador", "realista", "otimista"];

  const comparisonData = [
    { name: "Custo Atual", value: results.custoAtualAnual },
    { name: "Investimento Y1", value: results.investimentoAno1 },
    { name: "Economia", value: results.economiaAnual },
  ];

  const pieData = [
    { name: "Fechamento", value: results.breakdownFechamento },
    { name: "Retrabalho", value: results.breakdownRetrabalho },
    { name: "Erros", value: results.breakdownErros },
  ];

  const PIE_COLORS = ["hsl(var(--foreground) / 0.8)", "hsl(var(--foreground) / 0.5)", "hsl(var(--foreground) / 0.3)"];

  return (
    <section id="roi-calculator" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">ROI Calculator</h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          Calcule o retorno sobre investimento em tempo real
        </p>

        {/* Scenario Selector */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {scenarioKeys.map((key) => {
            const s = SCENARIOS[key];
            return (
              <button
                key={key}
                onClick={() => update("cenario", key)}
                className={cn(
                  "p-4 border text-center transition-colors",
                  inputs.cenario === key
                    ? "border-foreground/40 bg-foreground/5"
                    : "border-foreground/10 hover:border-foreground/20"
                )}
              >
                <p className="text-sm font-medium">{s.nome}</p>
                <p className="text-xs opacity-50 mt-1">{Math.round(s.reducaoTempo * 100)}% redução</p>
                {"recomendado" in s && <span className="text-[10px] tracking-wide opacity-40 uppercase">Recomendado</span>}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10">
          {/* Input Panel */}
          <div className="space-y-5">
            <div className="flex gap-2 mb-4">
              {(["EUR", "USD", "MZN"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => update("moeda", m)}
                  className={cn("px-4 py-1.5 text-xs border transition-colors rounded-sm", inputs.moeda === m ? "bg-foreground/10 border-foreground/30" : "border-foreground/10")}
                >
                  {m}
                </button>
              ))}
            </div>

            <InputField label="Entidades legais (CNPJs)" value={inputs.unidades} onChange={(v) => update("unidades", v)} min={1} max={50} />
            <InputField label="Total de colaboradores" value={inputs.totalColaboradores} onChange={(v) => update("totalColaboradores", v)} min={10} max={10000} />
            <InputField label="Salário Responsável RH (MZN)" value={inputs.salarioResponsavelRH} onChange={(v) => update("salarioResponsavelRH", v)} min={10000} max={500000} />
            <InputField label="Salário Analista RH (MZN)" value={inputs.salarioAnalista} onChange={(v) => update("salarioAnalista", v)} min={5000} max={200000} />
            <InputField label="Tempo fechamento atual (dias)" value={inputs.tempoFechamentoAtual} onChange={(v) => update("tempoFechamentoAtual", v)} min={1} max={30} />

            {/* Investment breakdown */}
            <div className="border border-foreground/10 p-4 mt-6 space-y-2">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-2">Breakdown do investimento</p>
              <Row label={`Factorial (€4,90 × ${inputs.totalColaboradores})`} value={formatEUR(results.factorialMensal_EUR)} sub="/mês" />
              <Row label={`Primavera E2E (€0,60 × ${inputs.totalColaboradores})`} value={formatEUR(results.primaveraMensal_EUR)} sub="/mês" />
              <Row label="Implantação (one-time)" value={formatEUR(results.implantacao_EUR)} />
              <div className="border-t border-foreground/10 pt-2 mt-2">
                <Row label="Mensal recorrente (mês 2+)" value={formatEUR(results.mensalRecorrente_EUR)} bold />
                <Row label="Total Ano 1" value={formatEUR(results.investimentoAno1EUR)} />
                <Row label="Total Ano 2+" value={formatEUR(results.investimentoAno2EUR)} />
              </div>
              <div className="border-t border-foreground/10 pt-2 mt-2">
                <Row label="Custo/colab/mês (Ano 1)" value={formatEUR(results.custoPorColabMesAno1EUR)} />
                <Row label="Custo/colab/mês (Ano 2+)" value={formatEUR(results.custoPorColabMesAno2EUR)} />
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              <ResultCard label="Custo Atual Anual" value={fmt(results.custoAtualAnual, results.custoAtualAnualMZN)} />
              <ResultCard label="Investimento Ano 1" value={fmt(results.investimentoAno1, results.investimentoAno1MZN)} />
              <ResultCard label="Economia Anual" value={fmt(results.economiaAnual, results.economiaAnualMZN)} />
              <ResultCard label="Ganho Líquido (Ano 1)" value={fmt(results.ganhoLiquidoAno1, results.ganhoLiquidoAno1MZN)} highlight />
              <ResultCard label="ROI (Ano 1)" value={formatPercent(results.roiPercentAno1)} highlight />
              <ResultCard label="Payback" value={formatMonths(results.paybackMeses)} />
            </div>

            {/* Ano 2+ highlight */}
            <div className="border border-foreground/20 bg-foreground/5 p-4 mb-10 grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] uppercase opacity-40">Investimento Ano 2+</p>
                <p className="text-lg font-light">{fmt(results.investimentoAno2, results.investimentoAno2MZN)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-40">Ganho Líquido Ano 2+</p>
                <p className="text-lg font-light">{fmt(results.ganhoLiquidoAno2, results.ganhoLiquidoAno2MZN)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase opacity-40">ROI Ano 2+</p>
                <p className="text-lg font-light">{formatPercent(results.roiPercentAno2)}</p>
              </div>
            </div>

            {/* Charts */}
            <div className="grid md:grid-cols-2 gap-8">
              <ChartBlock title="Comparação Anual (USD)">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData}>
                    <XAxis dataKey="name" tick={{ fill: "hsl(var(--foreground))", opacity: 0.6, fontSize: 11 }} />
                    <YAxis tick={{ fill: "hsl(var(--foreground))", opacity: 0.4, fontSize: 10 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                    <Tooltip formatter={(v: number) => formatUSD(v)} contentStyle={{ backgroundColor: "hsl(var(--primary))", border: "none", borderRadius: 4, color: "hsl(var(--primary-foreground))", fontSize: 12 }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {comparisonData.map((_, i) => <Cell key={i} fill={`hsl(var(--foreground) / ${[0.3, 0.5, 0.8][i]})`} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartBlock>

              <ChartBlock title="Fontes de Economia">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={70} label={({ name }) => name}>
                      {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                    </Pie>
                    <Tooltip formatter={(v: number) => formatUSD(v)} contentStyle={{ backgroundColor: "hsl(var(--primary))", border: "none", borderRadius: 4, color: "hsl(var(--primary-foreground))", fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartBlock>
            </div>

            {/* 5-year timeline */}
            <ChartBlock title="Economia Acumulada (5 anos, USD)" className="mt-8" height="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={results.timeline5anos}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--foreground) / 0.1)" />
                  <XAxis dataKey="ano" tick={{ fill: "hsl(var(--foreground))", opacity: 0.6, fontSize: 11 }} tickFormatter={(v) => `Ano ${v}`} />
                  <YAxis tick={{ fill: "hsl(var(--foreground))", opacity: 0.4, fontSize: 10 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip formatter={(v: number) => formatUSD(v)} contentStyle={{ backgroundColor: "hsl(var(--primary))", border: "none", borderRadius: 4, color: "hsl(var(--primary-foreground))", fontSize: 12 }} />
                  <Legend />
                  <Line type="monotone" dataKey="economiaAcumulada" name="Economia" stroke="hsl(var(--foreground) / 0.8)" strokeWidth={2} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="investimentoAcumulado" name="Investimento" stroke="hsl(var(--foreground) / 0.3)" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

function ChartBlock({ title, children, className, height = "h-48" }: { title: string; children: React.ReactNode; className?: string; height?: string }) {
  return (
    <div className={className}>
      <p className="text-xs uppercase tracking-widest opacity-50 mb-4">{title}</p>
      <div className={height}>{children}</div>
    </div>
  );
}

function Row({ label, value, bold, sub }: { label: string; value: string; bold?: boolean; sub?: string }) {
  return (
    <div className={cn("flex justify-between text-sm", bold ? "font-medium" : "opacity-60")}>
      <span>{label}</span>
      <span>{value}{sub && <span className="text-xs opacity-40">{sub}</span>}</span>
    </div>
  );
}

function InputField({ label, value, onChange, min, max }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number }) {
  return (
    <div>
      <label className="text-xs opacity-60 mb-1 block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (v >= min && v <= max) onChange(v);
        }}
        min={min}
        max={max}
        className="w-full bg-transparent border border-foreground/20 px-4 py-2.5 text-sm focus:border-foreground/40 focus:outline-none transition-colors"
      />
    </div>
  );
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn("border p-4", highlight ? "border-foreground/30 bg-foreground/5" : "border-foreground/10")}
    >
      <p className="text-xs opacity-50 mb-1">{label}</p>
      <p className={cn("font-light", highlight ? "text-xl md:text-2xl" : "text-lg")}>{value}</p>
    </motion.div>
  );
}

export default ROICalculatorSection;
