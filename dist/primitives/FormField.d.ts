import { default as React } from 'react';
export interface FormFieldProps {
    label: string;
    htmlFor?: string;
    hint?: React.ReactNode;
    error?: React.ReactNode;
    required?: boolean;
    rightSlot?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
/**
 * Accessible form field wrapper providing a label, optional required marker,
 * right-aligned header slot, and helper hint or validation error text.
 */
export declare const FormField: React.FC<FormFieldProps>;
