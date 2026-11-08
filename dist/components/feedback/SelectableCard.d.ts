import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface SelectableCardProps {
    title: string;
    subtitle?: string;
    value?: string | number;
    valueSuffix?: string;
    subvalue?: string;
    subvalueTrend?: 'positive' | 'negative' | 'neutral';
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    isSelected?: boolean;
    onClick?: () => void;
    variant?: ThemeVariant;
    className?: string;
    'data-testid'?: string;
}
export declare const SelectableCard: React.FC<SelectableCardProps>;
