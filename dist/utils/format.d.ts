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
export declare function formatCurrency(amount: number, options?: FormatCurrencyOptions): string;
/**
 * Returns YYYY-MM-DD formatted in Pacific/Auckland timezone.
 */
export declare function formatAucklandDate(date?: Date): string;
/**
 * Returns HH:MM (24-hour) formatted in Pacific/Auckland timezone.
 */
export declare function formatAucklandTime(date?: Date): string;
