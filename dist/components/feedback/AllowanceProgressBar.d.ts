import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface AllowanceDeltaBadge {
    label: string;
    isPositive: boolean;
}
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
