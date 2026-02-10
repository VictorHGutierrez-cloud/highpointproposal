export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatEUR(value: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatMZN(value: number): string {
  return new Intl.NumberFormat("pt-MZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value) + " MZN";
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

export function formatMonths(value: number): string {
  return `${value.toFixed(1)} meses`;
}
