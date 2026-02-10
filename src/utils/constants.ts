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
  // Real pricing from proposal (EUR-based)
  custoColaboradorMes_EUR: 4.90, // Factorial per seat/month
  custoPrimaveraMes_EUR: 0.60, // Primavera (E2E) per seat/month
  implantacaoFactorial_EUR: 2000, // one-time implementation
  // Conversions
  conversaoEUR_USD: 1.10,
  conversaoUSD_MZN: 62.5,
  conversaoEUR_MZN: 68.75,
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
