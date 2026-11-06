import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export type ChipOptionItem = string | {
    value: string;
    label: string;
};
export type ChipVariant = ThemeVariant | 'rose';
export interface ChipSelectorProps {
    options: ChipOptionItem[];
    selected?: string;
    selectedValues?: string[];
    onChange?: (option: string) => void;
    onChangeValues?: (options: string[]) => void;
    multiSelect?: boolean;
    equalWidth?: boolean;
    variant?: ChipVariant;
    size?: 'sm' | 'md';
    className?: string;
}
export declare const ChipSelector: React.FC<ChipSelectorProps>;
