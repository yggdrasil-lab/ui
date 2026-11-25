import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface FilterChipOption {
    id: string;
    label: string;
    count?: number;
    highlight?: boolean;
    testId?: string;
}
export interface FilterChipBarProps {
    options: FilterChipOption[];
    selectedId: string;
    onSelect: (id: string) => void;
    toggleDeselectId?: string;
    variant?: ThemeVariant;
    tone?: 'soft' | 'solid';
    size?: 'xs' | 'sm';
    scrollable?: boolean;
    prefix?: React.ReactNode;
    className?: string;
    'data-testid'?: string;
}
/**
 * Accessible filter chip bar supporting optional counts, highlight accents,
 * toggle-to-deselect behavior, and wrapped or horizontally scrollable layouts.
 */
export declare const FilterChipBar: React.FC<FilterChipBarProps>;
