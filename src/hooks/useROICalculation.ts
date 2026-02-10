import { useMemo } from "react";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";

export interface ROIInputs {
  unidades: number;
  totalColaboradores: number;
  salarioResponsavelRH: number;
  salarioAnalista: number;
  tempoFechamentoAtual: number;
  cenario: ScenarioKey;
  moeda: "USD" | "MZN";
}

export interface ROIResults {
  custoAtualAnual: number;
  custoAtualAnualMZN: number;
  investimentoAno1: number;
  investimentoAno1MZN: number;
  investimentoAno2: number;
  investimentoAno2MZN: number;
  economiaAnual: number;
  economiaAnualMZN: number;
  ganhoLiquidoAno1: number;
  ganhoLiquidoAno1MZN: number;
  ganhoLiquidoAno2: number;
  ganhoLiquidoAno2MZN: number;
  roiPercentAno1: number;
  roiPercentAno2: number;
  paybackMeses: number;
  breakdownFechamento: number;
  breakdownRetrabalho: number;
  breakdownErros: number;
  custoPorColabMesAno1: number;
  custoPorColabMesAno2: number;
  // Investment breakdown
  factorialAnual: number;
  integracaoLicencaAnual: number;
  integracaoSetup: number;
  timeline5anos: { ano: number; economiaAcumulada: number; investimentoAcumulado: number }[];
}

export function useROICalculation(inputs: ROIInputs): ROIResults {
  return useMemo(() => {
    const d = DEFAULT_VALUES;
    const scenario = SCENARIOS[inputs.cenario];
    const conv = d.conversaoMZN_USD;

    // Salary cost in USD
    const salResponsavelUSD = inputs.salarioResponsavelRH * conv;
    const salAnalistaUSD = inputs.salarioAnalista * conv;
    const custoHoraResp = (salResponsavelUSD * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);
    const custoHoraAnalista = (salAnalistaUSD * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);

    // Current monthly closing cost
    const custoFechamentoMensal =
      (custoHoraResp * inputs.tempoFechamentoAtual * d.horasPorDia) +
      (custoHoraAnalista * inputs.tempoFechamentoAtual * d.horasPorDia);
    const custoFechamentoAnualUnidade = custoFechamentoMensal * 12;
    const custoFechamentoAnualTotal = custoFechamentoAnualUnidade * inputs.unidades;

    // Rework cost
    const custoRetrabalhoMensal = d.horasRetrabalho * custoHoraAnalista;
    const custoRetrabalhoAnual = custoRetrabalhoMensal * 12 * inputs.unidades;

    // Error cost
    const custoErrosAnual = d.estimativaErros * 12 * inputs.unidades;

    // Total current cost
    const custoAtualAnual = custoFechamentoAnualTotal + custoRetrabalhoAnual + custoErrosAnual;

    // Savings with Factorial (based on scenario)
    const economiaFechamento = custoFechamentoAnualTotal * scenario.reducaoTempo;
    const economiaRetrabalho = custoRetrabalhoAnual * scenario.reducaoRetrabalho;
    const economiaErros = custoErrosAnual * scenario.reducaoErros;
    const economiaAnual = economiaFechamento + economiaRetrabalho + economiaErros;

    // REAL Factorial investment (from proposal)
    const factorialAnual = inputs.totalColaboradores * d.custoColaboradorMes_USD * 12;
    const integracaoLicencaAnual = d.integracaoLicencaAnual_EUR * d.conversaoEUR_USD * inputs.unidades;
    const integracaoSetup = d.integracaoSetup_EUR * d.conversaoEUR_USD * inputs.unidades;

    const investimentoAno1 = factorialAnual + integracaoLicencaAnual + integracaoSetup;
    const investimentoAno2 = factorialAnual + integracaoLicencaAnual;

    // Net gain & ROI
    const ganhoLiquidoAno1 = economiaAnual - investimentoAno1;
    const ganhoLiquidoAno2 = economiaAnual - investimentoAno2;
    const roiPercentAno1 = investimentoAno1 > 0 ? (ganhoLiquidoAno1 / investimentoAno1) * 100 : 0;
    const roiPercentAno2 = investimentoAno2 > 0 ? (ganhoLiquidoAno2 / investimentoAno2) * 100 : 0;
    const paybackMeses = economiaAnual > 0 ? (investimentoAno1 / economiaAnual) * 12 : 0;

    // Cost per collaborator per month
    const custoPorColabMesAno1 = inputs.totalColaboradores > 0 ? investimentoAno1 / (inputs.totalColaboradores * 12) : 0;
    const custoPorColabMesAno2 = inputs.totalColaboradores > 0 ? investimentoAno2 / (inputs.totalColaboradores * 12) : 0;

    // 5-year timeline
    const timeline5anos = Array.from({ length: 5 }, (_, i) => {
      const ano = i + 1;
      return {
        ano,
        economiaAcumulada: economiaAnual * ano,
        investimentoAcumulado: investimentoAno1 + investimentoAno2 * Math.max(0, ano - 1),
      };
    });

    const toMZN = (usd: number) => usd * d.conversaoUSD_MZN;

    return {
      custoAtualAnual,
      custoAtualAnualMZN: toMZN(custoAtualAnual),
      investimentoAno1,
      investimentoAno1MZN: toMZN(investimentoAno1),
      investimentoAno2,
      investimentoAno2MZN: toMZN(investimentoAno2),
      economiaAnual,
      economiaAnualMZN: toMZN(economiaAnual),
      ganhoLiquidoAno1,
      ganhoLiquidoAno1MZN: toMZN(ganhoLiquidoAno1),
      ganhoLiquidoAno2,
      ganhoLiquidoAno2MZN: toMZN(ganhoLiquidoAno2),
      roiPercentAno1,
      roiPercentAno2,
      paybackMeses,
      breakdownFechamento: economiaFechamento,
      breakdownRetrabalho: economiaRetrabalho,
      breakdownErros: economiaErros,
      custoPorColabMesAno1,
      custoPorColabMesAno2,
      factorialAnual,
      integracaoLicencaAnual,
      integracaoSetup,
      timeline5anos,
    };
  }, [inputs]);
}
