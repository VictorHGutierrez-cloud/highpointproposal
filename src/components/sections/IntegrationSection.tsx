import { motion } from "framer-motion";

const integrations = [
  { title: "Sincronização de Colaboradores", description: "Dados dos colaboradores sincronizados automaticamente entre Factorial e Primavera." },
  { title: "Informação Contratual", description: "Contratos, categorias profissionais e vínculos atualizados em tempo real." },
  { title: "Ausências e Férias", description: "Aprovações no Factorial exportadas automaticamente para o Primavera." },
  { title: "Horas Extraordinárias", description: "Registos de horas extra calculados e prontos para processamento salarial." },
  { title: "Documentos", description: "Documentos de colaboradores armazenados de forma centralizada e acessível." },
  { title: "Arquivo Pronto para Folha", description: "Exportação validada e completa — sem falhas nem colaboradores esquecidos." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

const IntegrationSection = () => {
  return (
    <section
      id="integration"
      className="py-24 md:py-32 lg:py-40 bg-background text-foreground px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm tracking-widest uppercase opacity-60 mb-4">
          Integração
        </h2>
        <p className="text-2xl md:text-3xl font-light mb-6 max-w-2xl">
          Como funciona a integração Factorial + Primavera
        </p>
        <p className="text-base opacity-60 mb-16 max-w-xl">
          A Factorial serve como camada de gestão, enquanto o Primavera permanece como sistema de folha. A integração garante sincronização automática e sem falhas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="border border-foreground/10 p-6 hover:border-foreground/30 transition-colors"
            >
              <h3 className="text-base font-normal mb-2">{item.title}</h3>
              <p className="text-sm opacity-60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture Box */}
        <div className="border border-foreground/20 p-8">
          <h3 className="text-sm tracking-widest uppercase opacity-60 mb-6">Arquitectura</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="border border-foreground/20 px-8 py-4">
              <p className="font-medium">Factorial</p>
              <p className="text-xs opacity-60">Camada de Gestão</p>
            </div>
            <div className="text-2xl opacity-40">↔</div>
            <div className="border border-foreground/20 px-8 py-4">
              <p className="font-medium text-sm opacity-60">Integração</p>
              <p className="text-xs opacity-40">Sincronização automática</p>
            </div>
            <div className="text-2xl opacity-40">↔</div>
            <div className="border border-foreground/20 px-8 py-4">
              <p className="font-medium">Primavera</p>
              <p className="text-xs opacity-60">Sistema de Folha</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
