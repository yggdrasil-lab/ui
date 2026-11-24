import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface AllowanceDeltaBadge {
    label: string;
    isPositive: boolean;
}
export interface AllowanceThresholdState {
    percent: number;
    remaining: number;
    barColor: string;
    percentTextColor: string;
}
/**
 * Pure threshold calculation for allowance progress bars:
 * - <= 70%: healthy (emerald)
 * - 71-90%: warning (amber)
 * - > 90%: critical (rose)
 */
export declare function getAllowanceThresholdState(currentValue: number, targetValue: number): AllowanceThresholdState;
export interface AllowanceProgressBarProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    currentValue: number;
    targetValue: number;
    currencyPrefix?: string;
    currencySuffix?: string;
    deltaBadge?: AllowanceDeltaBadge;
    action?: React.ReactNode;
    variant?: ThemeVariant;
    className?: string;
}
export declare const AllowanceProgressBar: React.FC<AllowanceProgressBarProps>;
