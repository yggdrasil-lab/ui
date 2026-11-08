import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface SegmentedControlOption<T extends string = string> {
    id: T;
    label: string;
    icon?: React.ReactNode;
    badge?: string | number;
}
export interface SegmentedControlProps<T extends string = string> {
    options: SegmentedControlOption<T>[];
    value: T;
    onChange: (value: T) => void;
    variant?: ThemeVariant;
    size?: 'xs' | 'sm' | 'md';
    fullWidth?: boolean;
    className?: string;
    idPrefix?: string;
}
export declare function SegmentedControl<T extends string = string>({ options, value, onChange, variant, size, fullWidth, className, idPrefix, }: SegmentedControlProps<T>): React.JSX.Element;
