import { useMemo } from "react";
import { DEFAULT_VALUES, SCENARIOS, type ScenarioKey } from "@/utils/constants";

export interface ROIInputs {
  unidades: number;
  totalColaboradores: number;
  salarioResponsavelRH: number;
  salarioAnalista: number;
  tempoFechamentoAtual: number;
  cenario: ScenarioKey;
}

export interface ROIResults {
  custoAtualAnual: number;
  investimentoAno1: number;
  investimentoAno2: number;
  economiaAnual: number;
  ganhoLiquidoAno1: number;
  ganhoLiquidoAno2: number;
  roiPercentAno1: number;
  roiPercentAno2: number;
  paybackMeses: number;
  breakdownFechamento: number;
  breakdownRetrabalho: number;
  breakdownErros: number;
  custoPorColabMesAno1: number;
  custoPorColabMesAno2: number;
  factorialMensal: number;
  primaveraMensal: number;
  implantacao: number;
  factorialAnual: number;
  primaveraAnual: number;
  mensalRecorrente: number;
  timeline5anos: { ano: number; economiaAcumulada: number; investimentoAcumulado: number }[];
}

export function useROICalculation(inputs: ROIInputs): ROIResults {
  return useMemo(() => {
    const d = DEFAULT_VALUES;
    const scenario = SCENARIOS[inputs.cenario];
    const conv = d.conversaoMZN_EUR;

    // Salary cost in EUR
    const salResponsavelEUR = inputs.salarioResponsavelRH * conv;
    const salAnalistaEUR = inputs.salarioAnalista * conv;
    const custoHoraResp = (salResponsavelEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);
    const custoHoraAnalista = (salAnalistaEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);

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
    const custoErroMensal = d.estimativaErros * conv; // convert from MZN implicit to EUR
    const custoErrosAnual = d.estimativaErros * 12 * inputs.unidades * conv;

    // Total current cost (EUR)
    const custoAtualAnual = custoFechamentoAnualTotal + custoRetrabalhoAnual + custoErrosAnual;

    // Savings with Factorial
    const economiaFechamento = custoFechamentoAnualTotal * scenario.reducaoTempo;
    const economiaRetrabalho = custoRetrabalhoAnual * scenario.reducaoRetrabalho;
    const economiaErros = custoErrosAnual * scenario.reducaoErros;
    const economiaAnual = economiaFechamento + economiaRetrabalho + economiaErros;

    // Investment (EUR)
    const factorialMensal = inputs.totalColaboradores * d.custoColaboradorMes_EUR;
    const primaveraMensal = inputs.totalColaboradores * d.custoPrimaveraMes_EUR;
    const implantacao = d.implantacaoFactorial_EUR;
    const mensalRecorrente = factorialMensal + primaveraMensal;

    const factorialAnual11 = factorialMensal * 11;
    const primaveraAnual = primaveraMensal * 12;
    const factorialAnual = factorialMensal * 12;

    // Year 1: implementation + 11 months Factorial + 12 months Primavera
    const investimentoAno1 = implantacao + factorialAnual11 + primaveraAnual;
    // Year 2+: 12 months all
    const investimentoAno2 = factorialAnual + primaveraAnual;

    // Net gain & ROI
    const ganhoLiquidoAno1 = economiaAnual - investimentoAno1;
    const ganhoLiquidoAno2 = economiaAnual - investimentoAno2;
    const roiPercentAno1 = investimentoAno1 > 0 ? (ganhoLiquidoAno1 / investimentoAno1) * 100 : 0;
    const roiPercentAno2 = investimentoAno2 > 0 ? (ganhoLiquidoAno2 / investimentoAno2) * 100 : 0;
    const paybackMeses = economiaAnual > 0 ? (investimentoAno1 / economiaAnual) * 12 : 0;

    // Cost per collaborator per month
    const custoPorColabMesAno1 = inputs.totalColaboradores > 0 ? investimentoAno1 / (inputs.totalColaboradores * 12) : 0;
    const custoPorColabMesAno2 = inputs.totalColaboradores > 0 ? investimentoAno2 / (inputs.totalColaboradores * 12) : 0;

    // 5-year timeline (EUR)
    const timeline5anos = Array.from({ length: 5 }, (_, i) => {
      const ano = i + 1;
      return {
        ano,
        economiaAcumulada: economiaAnual * ano,
        investimentoAcumulado: investimentoAno1 + investimentoAno2 * Math.max(0, ano - 1),
      };
    });

    return {
      custoAtualAnual,
      investimentoAno1,
      investimentoAno2,
      economiaAnual,
      ganhoLiquidoAno1,
      ganhoLiquidoAno2,
      roiPercentAno1,
      roiPercentAno2,
      paybackMeses,
      breakdownFechamento: economiaFechamento,
      breakdownRetrabalho: economiaRetrabalho,
      breakdownErros: economiaErros,
      custoPorColabMesAno1,
      custoPorColabMesAno2,
      factorialMensal,
      primaveraMensal,
      implantacao,
      factorialAnual,
      primaveraAnual,
      mensalRecorrente,
      timeline5anos,
    };
  }, [inputs]);
}
