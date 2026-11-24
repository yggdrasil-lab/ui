import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface NumericKeypadModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: React.ReactNode;
    displayLabel: string;
    value: string;
    displayValue?: string;
    unit?: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    submitLabel?: string;
    loading?: boolean;
    loadingText?: string;
    submitDisabled?: boolean;
    allowDecimals?: boolean;
    maxDecimalPlaces?: number;
    variant?: ThemeVariant;
    error?: string | null;
    children?: React.ReactNode;
}
export declare const NumericKeypadModal: React.FC<NumericKeypadModalProps>;
