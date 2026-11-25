import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: ThemeVariant;
    leftIcon?: React.ReactNode;
    rightSlot?: React.ReactNode;
    error?: boolean;
    containerClassName?: string;
}
/**
 * Mobile-safe dark text input with optional left icon, right inline slot,
 * error border state, and theme-matched focus border.
 */
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
