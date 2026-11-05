import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface ChipSelectorProps {
    options: string[];
    selected: string;
    onChange: (option: string) => void;
    variant?: ThemeVariant;
    size?: 'sm' | 'md';
    className?: string;
}
export declare const ChipSelector: React.FC<ChipSelectorProps>;
