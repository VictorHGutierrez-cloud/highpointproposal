import { useMemo } from "react";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";

export interface ROIInputs {
  unidades: number;
  totalColaboradores: number;
  salarioResponsavelRH: number;
  salarioAnalista: number;
  tempoFechamentoAtual: number;
  cenario: ScenarioKey;
  moeda: "USD" | "MZN" | "EUR";
}

export interface ROIResults {
  custoAtualAnual: number;
  custoAtualAnualMZN: number;
  investimentoAno1: number;
  investimentoAno1MZN: number;
  investimentoAno1EUR: number;
  investimentoAno2: number;
  investimentoAno2MZN: number;
  investimentoAno2EUR: number;
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
  custoPorColabMesAno1EUR: number;
  custoPorColabMesAno2EUR: number;
  // Investment breakdown (EUR)
  factorialMensal_EUR: number;
  primaveraMensal_EUR: number;
  implantacao_EUR: number;
  factorialAnual_EUR: number;
  primaveraAnual_EUR: number;
  mensalRecorrente_EUR: number;
  // USD equivalents
  factorialAnual: number;
  primaveraAnual: number;
  implantacao: number;
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

    // NEW pricing structure (EUR-based)
    const factorialMensal_EUR = inputs.totalColaboradores * d.custoColaboradorMes_EUR; // 2,450 EUR
    const primaveraMensal_EUR = inputs.totalColaboradores * d.custoPrimaveraMes_EUR; // 300 EUR
    const implantacao_EUR = d.implantacaoFactorial_EUR; // 2,000 EUR (one-time)
    const mensalRecorrente_EUR = factorialMensal_EUR + primaveraMensal_EUR; // 2,750 EUR

    const factorialAnual_EUR = factorialMensal_EUR * 11; // No license month 1
    const primaveraAnual_EUR = primaveraMensal_EUR * 12;

    // Year 1: implementation + 11 months Factorial + 12 months Primavera
    const investimentoAno1EUR = implantacao_EUR + factorialAnual_EUR + primaveraAnual_EUR;
    // Year 2+: 12 months Factorial + 12 months Primavera
    const investimentoAno2EUR = (factorialMensal_EUR * 12) + primaveraAnual_EUR;

    // Convert to USD for ROI calculations
    const eurToUsd = d.conversaoEUR_USD;
    const investimentoAno1 = investimentoAno1EUR * eurToUsd;
    const investimentoAno2 = investimentoAno2EUR * eurToUsd;
    const factorialAnual = factorialAnual_EUR * eurToUsd;
    const primaveraAnual = primaveraAnual_EUR * eurToUsd;
    const implantacao = implantacao_EUR * eurToUsd;

    // Net gain & ROI
    const ganhoLiquidoAno1 = economiaAnual - investimentoAno1;
    const ganhoLiquidoAno2 = economiaAnual - investimentoAno2;
    const roiPercentAno1 = investimentoAno1 > 0 ? (ganhoLiquidoAno1 / investimentoAno1) * 100 : 0;
    const roiPercentAno2 = investimentoAno2 > 0 ? (ganhoLiquidoAno2 / investimentoAno2) * 100 : 0;
    const paybackMeses = economiaAnual > 0 ? (investimentoAno1 / economiaAnual) * 12 : 0;

    // Cost per collaborator per month (EUR)
    const custoPorColabMesAno1EUR = inputs.totalColaboradores > 0 ? investimentoAno1EUR / (inputs.totalColaboradores * 12) : 0;
    const custoPorColabMesAno2EUR = inputs.totalColaboradores > 0 ? investimentoAno2EUR / (inputs.totalColaboradores * 12) : 0;

    // 5-year timeline (USD)
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
      investimentoAno1EUR,
      investimentoAno2,
      investimentoAno2MZN: toMZN(investimentoAno2),
      investimentoAno2EUR,
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
      custoPorColabMesAno1EUR,
      custoPorColabMesAno2EUR,
      factorialMensal_EUR,
      primaveraMensal_EUR,
      implantacao_EUR,
      factorialAnual_EUR,
      primaveraAnual_EUR,
      mensalRecorrente_EUR,
      factorialAnual,
      primaveraAnual,
      implantacao,
      timeline5anos,
    };
  }, [inputs]);
}
