/**
 * Righteous Foundation — commercial proposal constants (ROW USD, monthly).
 * Source: ROW USD Prices.xlsx + discovery call requirements.
 */

export const CLIENT = {
  organizationName: "Righteous Foundation",
  seatCount: 35,
  /** Non-profit: 50% discount on Factorial licenses (per-seat bundle), not on fixed add-ons. */
  licenseDiscountPercent: 50,
} as const;

/** Starter Planning: Core + Time Tracking + Time Off + Shifts (Business tier, monthly). */
export const PRICING_ROW_USD = {
  bundleName: "Starter Planning",
  listPricePerSeatPerMonth: 6,
  recruitment: {
    tier: "5 Active Jobs",
    fixedPerMonth: 89,
  },
  /** One-time guided setup (~5 hours) — confirm final amount in contract. */
  implementationOneTimeEstimate: 500,
} as const;

const licenseList = CLIENT.seatCount * PRICING_ROW_USD.listPricePerSeatPerMonth;
const licenseDiscounted =
  licenseList * (1 - CLIENT.licenseDiscountPercent / 100);

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  recruitmentPerMonth: PRICING_ROW_USD.recruitment.fixedPerMonth,
  /** Licenses (discounted) + recruitment fixed add-on. */
  monthlyTotal: licenseDiscounted + PRICING_ROW_USD.recruitment.fixedPerMonth,
  implementationOneTime: PRICING_ROW_USD.implementationOneTimeEstimate,
} as const;

export const DEFAULT_VALUES = {
  empresa: CLIENT.organizationName,
  contacto: "Righteous Foundation — HR team",
  totalColaboradoresInternos: CLIENT.seatCount,
  totalColaboradoresExternos: 0,
  custoColaboradorMes_USD: PRICING_ROW_USD.listPricePerSeatPerMonth,
  minimoContrato: CLIENT.seatCount,
  valorMinimo_USD: PRICING_TOTALS_USD.monthlyTotal,
  valorTotal100_USD: PRICING_TOTALS_USD.monthlyTotal,
};
