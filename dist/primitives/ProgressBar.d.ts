import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export type ProgressBarTone = 'emerald' | 'amber' | 'rose' | 'blue' | 'purple' | 'slate' | 'brand' | 'gradient';
export type ProgressBarSize = 'sm' | 'md';
export type ProgressBarTransition = 'default' | 'linear';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    tone?: ProgressBarTone;
    variant?: ThemeVariant;
    size?: ProgressBarSize;
    transition?: ProgressBarTransition;
    round?: boolean;
    label?: string;
    trackClassName?: string;
    fillClassName?: string;
    className?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
/**
 * Normalizes a progress value against max into a safe [0, 100] percentage.
 */
export declare function clampProgressPercent(value: number, max?: number, round?: boolean): number;
