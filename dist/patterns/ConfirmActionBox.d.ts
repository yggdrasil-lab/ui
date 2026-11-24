import { default as React } from 'react';
export interface ConfirmActionBoxProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
    loading?: boolean;
    variant?: 'danger' | 'warning';
    className?: string;
}
export declare const ConfirmActionBox: React.FC<ConfirmActionBoxProps>;
