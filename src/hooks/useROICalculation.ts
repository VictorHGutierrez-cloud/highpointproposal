import { useMemo } from "react";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";

export interface ROIInputs {
  unidades: number;
  colaboradoresPorUnidade: number;
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
  economiaAnual: number;
  economiaAnualMZN: number;
  ganhoLiquido: number;
  ganhoLiquidoMZN: number;
  roiPercent: number;
  paybackMeses: number;
  breakdownFechamento: number;
  breakdownRetrabalho: number;
  breakdownErros: number;
  breakdownSetup: number;
  breakdownOperacao: number;
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

    // Savings with Factorial
    const economiaFechamento = custoFechamentoAnualTotal * scenario.reducaoTempo;
    const economiaRetrabalho = custoRetrabalhoAnual * scenario.reducaoRetrabalho;
    const economiaErros = custoErrosAnual * scenario.reducaoErros;
    const economiaAnual = economiaFechamento + economiaRetrabalho + economiaErros;

    // Factorial investment
    const setupTotal = d.setupFactorial * inputs.unidades;
    const operacaoAnual = d.custoMensalFactorial * inputs.unidades * 12;
    const investimentoAno1 = setupTotal + operacaoAnual;

    // Net gain & ROI
    const ganhoLiquido = economiaAnual - investimentoAno1;
    const roiPercent = investimentoAno1 > 0 ? (ganhoLiquido / investimentoAno1) * 100 : 0;
    const paybackMeses = economiaAnual > 0 ? (investimentoAno1 / economiaAnual) * 12 : 0;

    // 5-year timeline
    const timeline5anos = Array.from({ length: 5 }, (_, i) => {
      const ano = i + 1;
      const invAcum = ano === 1 ? investimentoAno1 : investimentoAno1 + operacaoAnual * (ano - 1);
      return {
        ano,
        economiaAcumulada: economiaAnual * ano,
        investimentoAcumulado: setupTotal + operacaoAnual * ano,
      };
    });

    const toMZN = (usd: number) => usd / conv;

    return {
      custoAtualAnual,
      custoAtualAnualMZN: toMZN(custoAtualAnual),
      investimentoAno1,
      investimentoAno1MZN: toMZN(investimentoAno1),
      economiaAnual,
      economiaAnualMZN: toMZN(economiaAnual),
      ganhoLiquido,
      ganhoLiquidoMZN: toMZN(ganhoLiquido),
      roiPercent,
      paybackMeses,
      breakdownFechamento: economiaFechamento,
      breakdownRetrabalho: economiaRetrabalho,
      breakdownErros: economiaErros,
      breakdownSetup: setupTotal,
      breakdownOperacao: operacaoAnual,
      timeline5anos,
    };
  }, [inputs]);
}
