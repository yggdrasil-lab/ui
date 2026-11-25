export interface FormatCurrencyOptions {
  currency?: string;
  locale?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
  showPlusSign?: boolean;
}

/**
 * Formats a numeric value as a localized currency string (defaults to NZD '$' in en-NZ).
 */
export function formatCurrency(
  amount: number,
  options: FormatCurrencyOptions = {}
): string {
  const {
    currency = '$',
    locale = 'en-NZ',
    maximumFractionDigits = 0,
    minimumFractionDigits = 0,
    showPlusSign = false,
  } = options;

  const safeAmount = Number.isFinite(amount) ? amount : 0;
  const resolvedMax = Math.max(minimumFractionDigits, maximumFractionDigits);
  const absFormatted = Math.abs(safeAmount).toLocaleString(locale, {
    minimumFractionDigits,
    maximumFractionDigits: resolvedMax,
  });

  if (safeAmount < 0) {
    return `-${currency}${absFormatted}`;
  }
  if (showPlusSign && safeAmount > 0) {
    return `+${currency}${absFormatted}`;
  }
  return `${currency}${absFormatted}`;
}

/**
 * Returns YYYY-MM-DD formatted in Pacific/Auckland timezone.
 */
export function formatAucklandDate(date: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Pacific/Auckland',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const year = parts.find((p) => p.type === 'year')?.value ?? '1970';
  const month = parts.find((p) => p.type === 'month')?.value ?? '01';
  const day = parts.find((p) => p.type === 'day')?.value ?? '01';
  return `${year}-${month}-${day}`;
}

/**
 * Returns HH:MM (24-hour) formatted in Pacific/Auckland timezone.
 */
export function formatAucklandTime(date: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-NZ', {
    timeZone: 'Pacific/Auckland',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}
