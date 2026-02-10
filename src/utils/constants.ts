export const DEFAULT_VALUES = {
  empresa: "Dulceria Nacional / Grupo Webcore",
  unidades: 3, // 3 entidades legais
  colaboradoresPorUnidade: 167, // ~500/3
  totalColaboradores: 500,
  salarioResponsavelRH_MZN: 108927,
  salarioAnalista_MZN: 25000,
  tempoFechamentoAtual: 10,
  tempoFechamentoFactorial: 2.5,
  horasPorDia: 8,
  numPessoasRH: 2,
  horasRetrabalho: 33,
  estimativaErros: 83,
  // Real pricing from proposal
  custoColaboradorMes_USD: 4.90, // Factorial Starter Planning per seat/month
  integracaoLicencaAnual_EUR: 900, // per entity/year
  integracaoSetup_EUR: 1000, // per entity one-time (Overtime)
  conversaoEUR_USD: 1.10,
  conversaoUSD_MZN: 62.5,
  // Legacy (kept for backward compat)
  setupFactorial: 1500,
  custoMensalFactorial: 140,
  conversaoMZN_USD: 0.016,
  percentualEncargos: 0.30,
};

export const SCENARIOS = {
  conservador: {
    nome: "Conservador",
    reducaoTempo: 0.6,
    tempoFactorial: 4,
    reducaoRetrabalho: 0.7,
    reducaoErros: 0.5,
  },
  realista: {
    nome: "Realista",
    reducaoTempo: 0.75,
    tempoFactorial: 2.5,
    reducaoRetrabalho: 0.85,
    reducaoErros: 0.6,
    recomendado: true,
  },
  otimista: {
    nome: "Otimista",
    reducaoTempo: 0.8,
    tempoFactorial: 2,
    reducaoRetrabalho: 0.95,
    reducaoErros: 0.7,
  },
} as const;

export type ScenarioKey = keyof typeof SCENARIOS;

export const DECISION_CRITERIA = [
  {
    criterio: "Integração robusta com Primavera",
    descricao: "Integração estável, bidirecional, com mínimo de falhas na exportação/importação.",
  },
  {
    criterio: "Gestão avançada de ponto e turnos em massa",
    descricao: "Atualizar horários em grupo, por linha de produção, turno, unidade.",
  },
  {
    criterio: "Redução de trabalho manual",
    descricao: "Eliminar a necessidade de abrir colaborador por colaborador.",
  },
  {
    criterio: "Relatórios e Business Intelligence (BI)",
    descricao: "Relatórios automáticos de ausências por área, unidade, tipo. Integração com Excel/Power BI.",
  },
  {
    criterio: "Escalabilidade e multiunidade",
    descricao: "Crescer de 1 unidade (Dulceria) para 20 unidades sem comprometer o processo.",
  },
  {
    criterio: "Aderência à realidade digital de Angola",
    descricao: "Suporte a colaboradores com pouca literacia digital. RH pode lançar em nome do colaborador.",
  },
  {
    criterio: "Preço adequado para o contexto africano",
    descricao: "Modelo de preço especial para África. Contratação gradual de módulos.",
  },
];

export const DECISION_PHASES = [
  {
    fase: 1,
    titulo: "Validação Técnica/Funcional",
    descricao: "Reunião entre Oscar (Dulceria) e colega da GMA para avaliar a Factorial como substituto do SisQual.",
    participantes: ["Oscar Fernandes (Dulceria)", "Responsável RH GMA"],
    status: "Em andamento",
  },
  {
    fase: 2,
    titulo: "Alinhamento com Líderes de RH",
    descricao: "Reunião com os HR leaders das ~20 unidades para validar se a Factorial resolve as dores comuns.",
    participantes: ["HR Leaders das 20 unidades"],
    status: "Pendente",
  },
  {
    fase: 3,
    titulo: "Apresentação aos HRBPs e CFO",
    descricao: "Apresentar projeto consolidado com business case, comparação e roadmap.",
    participantes: ["HRBPs do Grupo", "CFO do Grupo"],
    status: "Pendente",
  },
  {
    fase: 4,
    titulo: "Aprovação Final e Implementação",
    descricao: "Envolver CFO, HRBPs e direção. Decisão sobre escopo inicial e contratação.",
    participantes: ["CFO", "HRBPs", "Big Boss / Direção"],
    status: "Pendente",
  },
];
