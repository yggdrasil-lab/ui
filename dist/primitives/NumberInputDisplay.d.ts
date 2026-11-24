import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface NumberInputDisplayProps {
    label: string;
    value: string;
    unit?: string;
    variant?: ThemeVariant;
    valueColor?: string;
    className?: string;
}
export declare const NumberInputDisplay: React.FC<NumberInputDisplayProps>;
