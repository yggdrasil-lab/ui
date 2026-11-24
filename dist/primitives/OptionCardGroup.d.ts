import { default as React } from 'react';
export type OptionCardAccent = 'emerald' | 'amber' | 'orange' | 'rose' | 'blue' | 'purple';
export interface OptionCardItem<T extends string = string> {
    value: T;
    label: string;
    description?: string;
    icon?: React.ReactNode;
    accent?: OptionCardAccent;
}
export interface OptionCardGroupProps<T extends string = string> {
    label?: string;
    options: OptionCardItem<T>[];
    value: T;
    onChange: (value: T) => void;
    className?: string;
}
export declare function OptionCardGroup<T extends string = string>({ label, options, value, onChange, className, }: OptionCardGroupProps<T>): React.JSX.Element;
