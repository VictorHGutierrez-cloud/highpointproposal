/**
 * High Point Group — commercial proposal constants (ZAR, South Africa).
 * Source: Pricing ENG Africa v1.xlsx (ROW list) + discovery call (Highpoint.txt).
 * Billing currency: South African Rand (ZAR).
 */

export const CURRENCY = {
  code: "ZAR",
  symbol: "R",
  label: "South African Rand (ZAR)",
  /** Africa ROW USD list → ZAR (indicative; confirmed on order form). */
  fxRateFromUsd: 18.5,
} as const;

export const CLIENT = {
  organizationName: "High Point Group",
  seatCount: 100,
  location: "South Africa — Cape Town HQ + provincial sites",
  billingCurrency: "ZAR",
  contacts: {
    champion: "Elani Swanepoel — Finance, HR & Payroll (Cape Town)",
    operations: "Werner — Finance & provincial operations",
  },
} as const;

/** Convert ROW USD per-seat rate to ZAR per seat. */
function zarPerSeat(usdPerSeat: number): number {
  return Math.round(usdPerSeat * CURRENCY.fxRateFromUsd * 100) / 100;
}

/** Total ZAR for all seats at a per-seat USD list rate. */
function zarTotal(usdPerSeat: number): number {
  return Math.round(CLIENT.seatCount * usdPerSeat * CURRENCY.fxRateFromUsd);
}

/** Bundles — rates shown in ZAR per seat / month. */
export const BUNDLES = {
  starterPlanning: {
    name: "Starter Planning",
    rateMonthlyZar: zarPerSeat(4.75),
    rateAnnualZar: zarPerSeat(4.4),
    includes: "Core, Time Tracking, Time Off, Shifts",
  },
  planningPro: {
    name: "Planning PRO",
    rateMonthlyZar: zarPerSeat(7.0),
    rateAnnualZar: zarPerSeat(6.4),
    includes: "Starter Planning + Trainings + Performance + Engagement",
  },
} as const;

export const ADDONS = {
  trainings: {
    name: "Trainings",
    rateMonthlyZar: zarPerSeat(1.75),
    rateAnnualZar: zarPerSeat(1.575),
  },
} as const;

export const PRICING_OPTIONS = {
  a: {
    id: "A",
    label: "HR & Attendance",
    subtitle: "Replace manual clocking and leave — shifts included",
    bundle: BUNDLES.starterPlanning,
    addons: [] as { name: string; monthlyZar: number; annualZar: number }[],
    monthlyTotalZar: zarTotal(4.75),
    annualMonthlyEquivZar: zarTotal(4.4),
    recommended: false,
  },
  b: {
    id: "B",
    label: "Operations + Compliance",
    subtitle: "Shifts, trainings, ISO/B-BBEE readiness, owner reporting",
    bundle: BUNDLES.planningPro,
    addons: [] as { name: string; monthlyZar: number; annualZar: number }[],
    monthlyTotalZar: zarTotal(7.0),
    annualMonthlyEquivZar: zarTotal(6.4),
    recommended: true,
  },
  c: {
    id: "C",
    label: "Planning + Trainings",
    subtitle: "Starter Planning plus mandatory training tracking",
    bundle: BUNDLES.starterPlanning,
    addons: [
      {
        name: ADDONS.trainings.name,
        monthlyZar: zarTotal(1.75),
        annualZar: zarTotal(1.575),
      },
    ],
    monthlyTotalZar: zarTotal(4.75) + zarTotal(1.75),
    annualMonthlyEquivZar: zarTotal(4.4) + zarTotal(1.575),
    recommended: false,
  },
} as const;

export const IMPLEMENTATION = {
  oneTimeUsd: 800,
  oneTimeZar: Math.round(800 * CURRENCY.fxRateFromUsd),
  timelineDays: "45–60",
  goLiveRule: "First day of a new financial month (no mid-month payroll cutover)",
} as const;

export const RECOMMENDED = PRICING_OPTIONS.b;

/** Africa ROW USD — subscription from price list. */
export const PRICING_TOTALS_USD = {
  monthlyTotal: 700,
  annualMonthlyEquiv: 640,
  annualSubscription: 8_400,
  implementationOneTime: IMPLEMENTATION.oneTimeUsd,
  yearOneTotal: 8_400 + IMPLEMENTATION.oneTimeUsd,
} as const;

export const PRICING_TOTALS_ZAR = {
  monthlyTotal: RECOMMENDED.monthlyTotalZar,
  annualMonthlyEquiv: RECOMMENDED.annualMonthlyEquivZar,
  annualSubscription: RECOMMENDED.monthlyTotalZar * 12,
  implementationOneTime: IMPLEMENTATION.oneTimeZar,
  yearOneTotal: RECOMMENDED.monthlyTotalZar * 12 + IMPLEMENTATION.oneTimeZar,
} as const;

/** @deprecated Legacy imports from template */
export const PRICING_ROW_USD = {
  bundleName: RECOMMENDED.bundle.name,
  listPricePerSeatPerMonth: RECOMMENDED.bundle.rateMonthlyZar,
  recruitment: { tier: "Not in scope", listPricePerMonth: 0 },
  implementation: {
    listPriceOneTime: IMPLEMENTATION.oneTimeUsd,
    discountedOneTime: IMPLEMENTATION.oneTimeUsd,
  },
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: CLIENT.contacts.champion,
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_ZAR: RECOMMENDED.bundle.rateMonthlyZar,
  minimoContrato: 14,
  valorMinimo_ZAR: Math.round(14 * RECOMMENDED.bundle.rateMonthlyZar),
  valorTotal100_ZAR: PRICING_TOTALS_ZAR.monthlyTotal,
};
