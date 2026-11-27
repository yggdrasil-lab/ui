import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface SelectableCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'value'> {
    title: string;
    subtitle?: string;
    value?: string | number;
    valueSuffix?: string;
    subvalue?: string;
    subvalueTrend?: 'positive' | 'negative' | 'neutral';
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    isSelected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    variant?: ThemeVariant;
    className?: string;
    'data-testid'?: string;
}
export declare const SelectableCard: React.FC<SelectableCardProps>;
