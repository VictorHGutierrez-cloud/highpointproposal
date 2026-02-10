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
  // Custos atuais (mensal)
  custoAtualMensal: number;
  // Investimento mensal
  mes1Total: number;
  mensalRecorrente: number;
  factorialMensal: number;
  primaveraMensal: number;
  implantacao: number;
  custoPorColabMes1: number;
  custoPorColabMes2: number;
  // Economia mensal
  economiaMensal: number;
  breakdownFechamento: number;
  breakdownRetrabalho: number;
  breakdownErros: number;
  // ROI
  ganhoLiquidoMensal: number;
  roiPercent: number;
  paybackMeses: number;
  // Timeline 12 meses
  timeline12meses: { mes: number; economiaAcumulada: number; investimentoAcumulado: number }[];
}

export function useROICalculation(inputs: ROIInputs): ROIResults {
  return useMemo(() => {
    const d = DEFAULT_VALUES;
    const scenario = SCENARIOS[inputs.cenario];
    const conv = d.conversaoMZN_EUR;

    // Salary cost in EUR (monthly)
    const salResponsavelEUR = inputs.salarioResponsavelRH * conv;
    const salAnalistaEUR = inputs.salarioAnalista * conv;
    const custoHoraResp = (salResponsavelEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);
    const custoHoraAnalista = (salAnalistaEUR * (1 + d.percentualEncargos)) / (22 * d.horasPorDia);

    // Custo mensal atual de fechamento (por unidade)
    const custoFechamentoMensalUnidade =
      (custoHoraResp * inputs.tempoFechamentoAtual * d.horasPorDia) +
      (custoHoraAnalista * inputs.tempoFechamentoAtual * d.horasPorDia);
    const custoFechamentoMensalTotal = custoFechamentoMensalUnidade * inputs.unidades;

    // Custo mensal de retrabalho
    const custoRetrabalhoMensal = d.horasRetrabalho * custoHoraAnalista * inputs.unidades;

    // Custo mensal de erros
    const custoErrosMensal = d.estimativaErros * inputs.unidades * conv;

    // Custo atual total mensal
    const custoAtualMensal = custoFechamentoMensalTotal + custoRetrabalhoMensal + custoErrosMensal;

    // Economia mensal com Factorial
    const economiaFechamento = custoFechamentoMensalTotal * scenario.reducaoTempo;
    const economiaRetrabalho = custoRetrabalhoMensal * scenario.reducaoRetrabalho;
    const economiaErros = custoErrosMensal * scenario.reducaoErros;
    const economiaMensal = economiaFechamento + economiaRetrabalho + economiaErros;

    // Investimento mensal (EUR)
    const factorialMensal = inputs.totalColaboradores * d.custoColaboradorMes_EUR;
    const primaveraMensal = inputs.totalColaboradores * d.custoPrimaveraMes_EUR;
    const implantacao = d.implantacaoFactorial_EUR;
    const mensalRecorrente = factorialMensal + primaveraMensal;
    const mes1Total = implantacao + primaveraMensal; // Mês 1: implantação + Primavera

    // Custo por colaborador
    const custoPorColabMes1 = inputs.totalColaboradores > 0 ? mes1Total / inputs.totalColaboradores : 0;
    const custoPorColabMes2 = inputs.totalColaboradores > 0 ? mensalRecorrente / inputs.totalColaboradores : 0;

    // ROI mensal (baseado no recorrente, mês 2+)
    const ganhoLiquidoMensal = economiaMensal - mensalRecorrente;
    const roiPercent = mensalRecorrente > 0 ? (ganhoLiquidoMensal / mensalRecorrente) * 100 : 0;

    // Payback: quantos meses para recuperar implantação
    const paybackMeses = ganhoLiquidoMensal > 0 ? implantacao / ganhoLiquidoMensal : 0;

    // Timeline 12 meses
    const timeline12meses = Array.from({ length: 12 }, (_, i) => {
      const mes = i + 1;
      // Mês 1: implantação + primavera, sem economia (ainda implementando)
      // Mês 2+: economia - custo recorrente
      const investimentoAcumulado = mes === 1
        ? mes1Total
        : mes1Total + mensalRecorrente * (mes - 1);
      const economiaAcumulada = mes === 1
        ? 0
        : economiaMensal * (mes - 1);
      return { mes, economiaAcumulada, investimentoAcumulado };
    });

    return {
      custoAtualMensal,
      mes1Total,
      mensalRecorrente,
      factorialMensal,
      primaveraMensal,
      implantacao,
      custoPorColabMes1,
      custoPorColabMes2,
      economiaMensal,
      breakdownFechamento: economiaFechamento,
      breakdownRetrabalho: economiaRetrabalho,
      breakdownErros: economiaErros,
      ganhoLiquidoMensal,
      roiPercent,
      paybackMeses,
      timeline12meses,
    };
  }, [inputs]);
}
