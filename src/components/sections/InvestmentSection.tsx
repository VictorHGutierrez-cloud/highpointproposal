import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DEFAULT_VALUES } from "@/utils/constants";
import { formatEUR } from "@/utils/formatters";

const d = DEFAULT_VALUES;

const InvestmentSection = () => {
  return (
    <section id="investment" className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Investimento</h2>
        <p className="text-2xl md:text-3xl font-light mb-4 max-w-2xl">
          Proposta comercial — SIGA
        </p>
        <p className="text-sm opacity-50 mb-10 max-w-xl">
          15 colaboradores · €8,30/colaborador/mês · 10% de desconto
        </p>

        {/* Summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          <SummaryCard label="Implantação" value="€500" sub="5 horas · pagamento imediato" highlight />
          <SummaryCard label="Mensalidade Abril" value="€112,05" sub="Com 10% de desconto" />
          <SummaryCard label="Total até Abril" value="€612,05" sub="Implantação + Mensalidade" />
        </div>

        {/* Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Licença e Mensalidade</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between opacity-60">
                <span>Nº de colaboradores</span>
                <span>15</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Preço por colaborador</span>
                <span>€8,30/mês</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Total mensalidade</span>
                <span>€124,50</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Desconto</span>
                <span>10%</span>
              </div>
              <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
                <span>Valor com desconto</span>
                <span>€112,05/mês</span>
              </div>
              <div className="flex justify-between opacity-50 text-xs">
                <span>Pagamento</span>
                <span>Apenas em Abril</span>
              </div>
            </div>
          </div>

          <div className="border border-foreground/10 p-6">
            <p className="text-xs uppercase tracking-widest opacity-50 mb-4">Implantação</p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between opacity-60">
                <span>Horas previstas</span>
                <span>5 horas</span>
              </div>
              <div className="flex justify-between opacity-60">
                <span>Custo</span>
                <span>€500</span>
              </div>
              <div className="flex justify-between opacity-50 text-xs">
                <span>Prazo de pagamento</span>
                <span>Até semana que vem</span>
              </div>
            </div>
          </div>
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

export default InvestmentSection;
