import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, FileText, AlertTriangle, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { DECISION_CRITERIA, DECISION_PHASES } from "@/utils/constants";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const TABS = [
  { key: "M", label: "Metrics", full: "Métricas" },
  { key: "E", label: "Economic Buyer", full: "Comprador Econômico" },
  { key: "D1", label: "Decision Criteria", full: "Critérios de Decisão" },
  { key: "D2", label: "Decision Process", full: "Processo de Decisão" },
  { key: "P1", label: "Paper Process", full: "Processo de Papel" },
  { key: "P2", label: "Identify Pain", full: "Dores Identificadas" },
  { key: "C", label: "Champion", full: "Campeão" },
] as const;

type TabKey = typeof TABS[number]["key"];

const metricsData = [
  { name: "Fechamento (dias)", antes: 10, depois: 2.5 },
  { name: "Tempo operacional (%)", antes: 100, depois: 25 },
  { name: "Erros exportação", antes: 419, depois: 0 },
];

const buyers = [
  { role: "CFO do Grupo Webcore", origin: "Brasileiro", desc: "Decisor financeiro final. Foco em ROI e redução de custos operacionais." },
  { role: "HRBP do Grupo", origin: "Brasileiro", desc: "Alinhamento estratégico de RH. Valida aderência funcional." },
  { role: "Big Boss / Direção", origin: "", desc: "Aprovação final do investimento e escopo do projeto." },
];

const pains = [
  { pain: "Retrabalho massivo", implication: "Custo direto de horas desperdiçadas: equipe inteira 10 dias/mês" },
  { pain: "Falhas de integração", implication: "419 colaboradores não processados — risco de erros em folha" },
  { pain: "Fecho de mês lento", implication: "RH preso ao operacional, sem tempo para estratégia" },
  { pain: "Erros em folha", implication: "Risco de pagamentos incorretos e exposição legal" },
  { pain: "Falta de BI", implication: "Decisões de RH sem dados — impossível comparar unidades" },
];

const paperSteps = [
  "Aprovação técnica e de negócio (Oscar + GMA)",
  "Aprovação financeira (CFO)",
  "Compras / jurídico (contrato, proteção de dados, SLAs)",
  "Assinatura e kick-off de implementação",
];

const TabContent = ({ tab }: { tab: TabKey }) => {
  switch (tab) {
    case "M":
      return (
        <div>
          <p className="text-sm opacity-70 mb-6">Comparação de métricas operacionais: situação atual vs. com Factorial.</p>
          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metricsData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <XAxis type="number" tick={{ fill: "hsl(var(--foreground))", opacity: 0.6, fontSize: 12 }} />
                <YAxis dataKey="name" type="category" width={140} tick={{ fill: "hsl(var(--foreground))", opacity: 0.8, fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "hsl(var(--primary))", border: "none", borderRadius: 4, color: "hsl(var(--primary-foreground))" }}
                />
                <Bar dataKey="antes" name="Antes" radius={[0, 4, 4, 0]}>
                  {metricsData.map((_, i) => <Cell key={i} fill="hsl(var(--foreground) / 0.3)" />)}
                </Bar>
                <Bar dataKey="depois" name="Depois (Factorial)" radius={[0, 4, 4, 0]}>
                  {metricsData.map((_, i) => <Cell key={i} fill="hsl(var(--foreground) / 0.8)" />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 text-center">
            <div><p className="text-2xl font-light">2–3</p><p className="text-xs opacity-50">Dias de fechamento (meta)</p></div>
            <div><p className="text-2xl font-light">50%</p><p className="text-xs opacity-50">Menos tempo operacional</p></div>
            <div><p className="text-2xl font-light">100%</p><p className="text-xs opacity-50">Relatórios automatizados</p></div>
          </div>
        </div>
      );
    case "E":
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {buyers.map((b, i) => (
            <div key={i} className="border border-foreground/10 p-6">
              <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <User size={20} className="opacity-60" />
              </div>
              <h4 className="font-normal mb-1">{b.role}</h4>
              {b.origin && <p className="text-xs opacity-50 mb-3">{b.origin}</p>}
              <p className="text-sm opacity-70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      );
    case "D1":
      return (
        <div className="space-y-4">
          {DECISION_CRITERIA.map((c, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-foreground/10">
              <Check size={16} className="mt-1 flex-shrink-0 opacity-60" />
              <div>
                <h4 className="text-sm font-medium mb-1">{c.criterio}</h4>
                <p className="text-xs opacity-60">{c.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case "D2":
      return (
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-foreground/15" />
          <div className="space-y-8">
            {DECISION_PHASES.map((p) => (
              <div key={p.fase} className="relative pl-12">
                <div className="absolute left-2 top-1 w-5 h-5 rounded-full border-2 border-foreground/30 bg-background flex items-center justify-center">
                  <span className="text-[10px]">{p.fase}</span>
                </div>
                <h4 className="font-normal mb-1">{p.titulo}</h4>
                <p className="text-sm opacity-60 mb-2">{p.descricao}</p>
                <p className="text-xs opacity-40">
                  <span className={cn("px-1.5 py-0.5 rounded-sm text-[10px]", p.status === "Em andamento" ? "bg-foreground/15" : "bg-foreground/5")}>
                    {p.status}
                  </span>
                  {" · "}{p.participantes.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    case "P1":
      return (
        <div>
          <p className="text-sm opacity-70 mb-6">Etapas prováveis do processo de aprovação e contratação.</p>
          <div className="space-y-3">
            {paperSteps.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 border border-foreground/10">
                <FileText size={14} className="opacity-40 flex-shrink-0" />
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case "P2":
      return (
        <div className="space-y-4">
          {pains.map((p, i) => (
            <div key={i} className="p-5 border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={14} className="opacity-50" />
                <h4 className="text-sm font-medium">{p.pain}</h4>
              </div>
              <p className="text-xs opacity-60 pl-6">Implicação: {p.implication}</p>
            </div>
          ))}
        </div>
      );
    case "C":
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Oscar Fernandes", role: "Responsável de RH da Dulceria", why: "Vive a dor diariamente. Conhece as limitações do SisQual e já validou a Factorial como potencial substituto. Tem influência direta na decisão técnica." },
            { name: "Responsável RH da GMA", role: "Co-champion", why: "Enfrenta problemas similares na GMA. Juntos, Oscar e o responsável da GMA representam o bloco de validação técnica." },
          ].map((c, i) => (
            <div key={i} className="border border-foreground/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                  <Star size={16} className="opacity-60" />
                </div>
                <div>
                  <h4 className="font-normal">{c.name}</h4>
                  <p className="text-xs opacity-50">{c.role}</p>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed">{c.why}</p>
            </div>
          ))}
        </div>
      );
  }
};

const MEDDPICSection = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("M");

  return (
    <section id="meddpic" className="py-24 md:py-32 bg-secondary text-secondary-foreground px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">Análise MEDDPIC</h2>
        <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl">
          Análise completa da oportunidade
        </p>

        {/* Tab buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={cn(
                "px-4 py-2 text-xs tracking-wide transition-colors rounded-sm border",
                activeTab === t.key
                  ? "bg-secondary-foreground/15 border-secondary-foreground/30 text-secondary-foreground"
                  : "border-secondary-foreground/10 text-secondary-foreground/50 hover:text-secondary-foreground/80"
              )}
            >
              <span className="font-medium">{t.key.replace(/\d/, "")}</span>
              <span className="hidden sm:inline ml-1">— {t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <TabContent tab={activeTab} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MEDDPICSection;
