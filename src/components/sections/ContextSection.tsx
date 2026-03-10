import { motion } from "framer-motion";

const cards = [
  {
    title: "Empresa",
    description: "SIGA — empresa de gestão administrativa em Cabo Verde, oferecendo consultoria empresarial, fiscalidade, contabilidade financeira e gestão administrativa.",
  },
  {
    title: "Equipa",
    description: "15 colaboradores que precisam de uma plataforma moderna para gestão de pessoas.",
  },
  {
    title: "Sistema Atual",
    description: "ERP Primavera para gestão financeira e folha — a Factorial entra como complemento para gestão de RH.",
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

const ContextSection = () => {
  return (
    <section
      id="context"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-12">
          Contexto
        </h2>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed font-light mb-16">
          <p className="text-2xl md:text-3xl font-normal">
            Conheça o contexto da SIGA.
          </p>
          <p className="opacity-80">
            Uma empresa de gestão administrativa em Cabo Verde que utiliza o Primavera e procura uma plataforma completa de gestão de pessoas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-foreground/10 p-8 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-lg font-normal mb-3">{card.title}</h3>
              <p className="text-sm opacity-70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
