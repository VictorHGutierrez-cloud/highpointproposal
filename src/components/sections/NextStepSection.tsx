import { motion } from "framer-motion";

const phases = [
  {
    phase: 1,
    title: "Pagamento da Implantação",
    description: "€500 — pagamento até semana que vem para iniciar o processo de configuração.",
    participants: ["SIGA"],
    status: "Pendente",
  },
  {
    phase: 2,
    title: "Sessão de Implantação",
    description: "5 horas de configuração guiada da plataforma Factorial para a SIGA.",
    participants: ["Equipa SIGA", "Factorial"],
    status: "Pendente",
  },
  {
    phase: 3,
    title: "Pagamento da Mensalidade",
    description: "€112,05 (com 10% de desconto) — pagamento apenas em Abril.",
    participants: ["SIGA"],
    status: "Pendente",
  },
  {
    phase: 4,
    title: "Equipa Operacional",
    description: "15 colaboradores com acesso total à plataforma Factorial, integrada com Primavera.",
    participants: ["Todos os colaboradores SIGA"],
    status: "Pendente",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const NextStepSection = () => {
  const emailAddress = "victor.gutierrez@factorial.co";
  const emailSubject = "SIGA CV — Avançar com Factorial";
  const emailBody = "Olá Victor,\n\nGostaria de avançar com a proposta Factorial para a SIGA CV.\n\nCumprimentos";
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section
      id="next-steps"
      className="py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Próximos Passos
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-16 max-w-2xl">
          Jornada de implementação em 4 fases
        </p>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary-foreground/20" />

          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 border-primary-foreground/40 bg-primary flex items-center justify-center">
                  <span className="text-[10px] font-medium">{p.phase}</span>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-normal">{p.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-sm ${p.status === "Em andamento" ? "bg-primary-foreground/20" : "bg-primary-foreground/10 opacity-60"}`}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm opacity-70 mb-2">{p.description}</p>
                  <p className="text-xs opacity-50">
                    Participantes: {p.participants.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <p className="text-xl md:text-2xl font-light">
            Pronto para modernizar a gestão de pessoas da SIGA CV?
          </p>
          <p className="text-sm opacity-60 max-w-md mx-auto">
            Total a pagar até Abril: €612,05 (Implantação + Mensalidade com 10% de desconto)
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
          >
            Contactar Victor Gutierrez
          </a>
          <p className="mt-12 text-xs opacity-40">
            Proposta preparada para SIGA CV — 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
