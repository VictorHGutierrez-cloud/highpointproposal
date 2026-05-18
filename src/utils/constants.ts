/**
 * Righteous Foundation — commercial proposal constants (ROW USD, monthly).
 * Source: ROW USD Prices.xlsx + discovery call requirements.
 */

export const CLIENT = {
  organizationName: "Righteous Foundation",
  seatCount: 35,
  /** Nonprofit: 50% discount on licenses, recruitment list price, and implementation list price. */
  licenseDiscountPercent: 50,
} as const;

const D = CLIENT.licenseDiscountPercent / 100;

/** Starter Planning: Core + Time Tracking + Time Off + Shifts (Business tier, monthly). */
export const PRICING_ROW_USD = {
  bundleName: "Starter Planning",
  listPricePerSeatPerMonth: 6,
  recruitment: {
    tier: "5 Active Jobs",
    /** ROW list price before nonprofit discount. */
    listPricePerMonth: 89,
  },
  implementation: {
    /** Reference list before nonprofit discount (for transparency). */
    listPriceOneTime: 500,
    /** Agreed nonprofit implementation fee (50% off list). Delivery: 1h/week sessions with Onboarding Specialist, ~1.5 months to go-live. */
    discountedOneTime: 250,
  },
} as const;

const licenseList = CLIENT.seatCount * PRICING_ROW_USD.listPricePerSeatPerMonth;
const licenseDiscounted = licenseList * (1 - D);

const recruitmentList = PRICING_ROW_USD.recruitment.listPricePerMonth;
const recruitmentDiscounted = recruitmentList * (1 - D);

export const PRICING_TOTALS_USD = {
  licenseListSubtotal: licenseList,
  licenseDiscountedSubtotal: licenseDiscounted,
  recruitmentListPerMonth: recruitmentList,
  recruitmentDiscountedSubtotal: recruitmentDiscounted,
  /** Licenses (discounted) + recruitment (discounted). */
  monthlyTotal: licenseDiscounted + recruitmentDiscounted,
  implementationListOneTime: PRICING_ROW_USD.implementation.listPriceOneTime,
  implementationOneTime: PRICING_ROW_USD.implementation.discountedOneTime,
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
