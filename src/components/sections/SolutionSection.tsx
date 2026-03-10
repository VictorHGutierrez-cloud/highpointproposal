import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Gestão de documentos centralizada",
  "Assinatura eletrónica legal",
  "Controlo de horários completo",
  "Gestão de ausências e férias",
  "Gestão de projetos",
  "Organograma e directório",
  "Comunicados internos",
  "Relatórios personalizados",
];

const gains = [
  { title: "Tudo centralizado", description: "Documentos, ausências, horários e projetos numa só plataforma." },
  { title: "Menos tempo no operacional", description: "Automatize processos que hoje são manuais e repetitivos." },
  { title: "Integrado com Primavera", description: "Dados fluem automaticamente — sem retrabalho nem exportações manuais." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          A Solução Factorial
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-16 max-w-3xl">
          Tudo o que a SIGA precisa para gerir pessoas.
        </p>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-lg font-normal mb-6 opacity-80">Funcionalidades Incluídas</h3>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm opacity-80"
                >
                  <Check size={16} className="flex-shrink-0 opacity-60" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-normal mb-6 opacity-80">O que muda na SIGA</h3>
            {gains.map((g, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border-foreground/10 p-6 hover:border-foreground/30 transition-colors"
              >
                <h4 className="font-normal mb-1">{g.title}</h4>
                <p className="text-sm opacity-60">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
