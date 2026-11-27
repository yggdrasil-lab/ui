import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface SegmentedControlOption<T extends string = string> {
    id: T;
    label: string;
    icon?: React.ReactNode;
    badge?: string | number;
}
export interface SegmentedControlProps<T extends string = string> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: SegmentedControlOption<T>[];
    value: T;
    onChange: (value: T) => void;
    variant?: ThemeVariant;
    size?: 'xs' | 'sm' | 'md';
    fullWidth?: boolean;
    className?: string;
    idPrefix?: string;
}
export declare function SegmentedControl<T extends string = string>({ options, value, onChange, variant, size, fullWidth, className, idPrefix, style, ...rest }: SegmentedControlProps<T>): React.JSX.Element;
