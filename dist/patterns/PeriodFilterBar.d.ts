import { ThemeVariant } from '../theme/variants';
import { SegmentedControlOption } from '../primitives/SegmentedControl';
export interface PeriodFilterBarProps<T extends string = string> {
    period: T;
    onPeriodChange: (period: T) => void;
    options: SegmentedControlOption<T>[];
    customValue?: T;
    startDate: string;
    endDate: string;
    onStartDateChange: (date: string) => void;
    onEndDateChange: (date: string) => void;
    variant?: ThemeVariant;
    idPrefix?: string;
    className?: string;
}
/**
 * Returns default [startDate, endDate] (trailing N days, default 30) in YYYY-MM-DD local format.
 */
export declare function getDefaultCustomRange(days?: number): {
    startDate: string;
    endDate: string;
};
/**
 * Reusable quick-period SegmentedControl paired with a Custom date-range toggle
 * and mobile-safe inline date inputs.
 */
export declare function PeriodFilterBar<T extends string = string>({ period, onPeriodChange, options, customValue, startDate, endDate, onStartDateChange, onEndDateChange, variant, idPrefix, className, }: PeriodFilterBarProps<T>): import("react").JSX.Element;
