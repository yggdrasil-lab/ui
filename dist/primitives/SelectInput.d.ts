import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: SelectOption[];
    placeholder?: string;
    variant?: ThemeVariant;
    error?: boolean;
    containerClassName?: string;
}
/**
 * Mobile-safe native select control supporting both an `options` array
 * and explicit `<option>` children with a non-interactive chevron indicator.
 */
export declare const SelectInput: React.ForwardRefExoticComponent<SelectInputProps & React.RefAttributes<HTMLSelectElement>>;
