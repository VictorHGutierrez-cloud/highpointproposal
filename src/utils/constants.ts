/**
 * High Point Group — commercial proposal constants (Africa USD, monthly).
 * Source: Pricing ENG Africa v1.xlsx + discovery call (Highpoint.txt).
 * Sales model: bundles + add-ons only — never individual modules.
 */

export const CLIENT = {
  organizationName: "High Point Group",
  /** ~100 employees across four affiliated South African entities. */
  seatCount: 100,
  location: "South Africa — Cape Town HQ + provincial sites",
  contacts: {
    champion: "Elani Swanepoel — Finance, HR & Payroll (Cape Town)",
    operations: "Werner — Finance & provincial operations",
  },
} as const;

/** Africa ROW USD — per seat / month (monthly billing column). */
export const BUNDLES = {
  starterPlanning: {
    name: "Starter Planning",
    rateMonthly: 4.75,
    rateAnnual: 4.4,
    includes: "Core, Time Tracking, Time Off, Shifts",
  },
  planningPro: {
    name: "Planning PRO",
    rateMonthly: 7.0,
    rateAnnual: 6.4,
    includes: "Starter Planning + Trainings + Performance + Engagement",
  },
} as const;

export const ADDONS = {
  trainings: {
    name: "Trainings",
    rateMonthly: 1.75,
    rateAnnual: 1.575,
  },
} as const;

const SEATS = CLIENT.seatCount;

function bundleMonthly(rate: number) {
  return SEATS * rate;
}

/** Three proposal options — bundles only (+ optional middle tier via add-on). */
export const PRICING_OPTIONS = {
  a: {
    id: "A",
    label: "HR & Attendance",
    subtitle: "Replace manual clocking and leave — shifts included",
    bundle: BUNDLES.starterPlanning,
    addons: [] as { name: string; monthly: number; annual: number }[],
    monthlyTotal: bundleMonthly(BUNDLES.starterPlanning.rateMonthly),
    annualMonthlyEquiv: bundleMonthly(BUNDLES.starterPlanning.rateAnnual),
    recommended: false,
  },
  b: {
    id: "B",
    label: "Operations + Compliance",
    subtitle: "Shifts, trainings, ISO/B-BBEE readiness, owner reporting",
    bundle: BUNDLES.planningPro,
    addons: [] as { name: string; monthly: number; annual: number }[],
    monthlyTotal: bundleMonthly(BUNDLES.planningPro.rateMonthly),
    annualMonthlyEquiv: bundleMonthly(BUNDLES.planningPro.rateAnnual),
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
        monthly: bundleMonthly(ADDONS.trainings.rateMonthly),
        annual: bundleMonthly(ADDONS.trainings.rateAnnual),
      },
    ],
    monthlyTotal:
      bundleMonthly(BUNDLES.starterPlanning.rateMonthly) +
      bundleMonthly(ADDONS.trainings.rateMonthly),
    annualMonthlyEquiv:
      bundleMonthly(BUNDLES.starterPlanning.rateAnnual) +
      bundleMonthly(ADDONS.trainings.rateAnnual),
    recommended: false,
  },
} as const;

export const IMPLEMENTATION = {
  /** One-time onboarding — confirm with manager before contract. */
  oneTimeUSD: 2500,
  timelineDays: "45–60",
  goLiveRule: "First day of a new financial month (no mid-month payroll cutover)",
} as const;

export const RECOMMENDED = PRICING_OPTIONS.b;

export const PRICING_TOTALS_USD = {
  monthlyTotal: RECOMMENDED.monthlyTotal,
  annualMonthlyEquiv: RECOMMENDED.annualMonthlyEquiv,
  implementationOneTime: IMPLEMENTATION.oneTimeUSD,
} as const;

/** @deprecated Legacy shape for any remaining imports */
export const PRICING_ROW_USD = {
  bundleName: RECOMMENDED.bundle.name,
  listPricePerSeatPerMonth: RECOMMENDED.bundle.rateMonthly,
  recruitment: { tier: "Not in scope", listPricePerMonth: 0 },
  implementation: {
    listPriceOneTime: IMPLEMENTATION.oneTimeUSD,
    discountedOneTime: IMPLEMENTATION.oneTimeUSD,
  },
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: CLIENT.contacts.champion,
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: RECOMMENDED.bundle.rateMonthly,
  minimoContrato: 14,
  valorMinimo_USD: 14 * RECOMMENDED.bundle.rateMonthly,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
