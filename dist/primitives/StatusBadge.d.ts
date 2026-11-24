import { default as React } from 'react';
export type StatusBadgeVariant = 'idle' | 'busy' | 'success' | 'error' | 'warning' | 'info';
export interface StatusBadgeProps {
    label: string;
    variant?: StatusBadgeVariant;
    icon?: React.ReactNode;
    showDot?: boolean;
    isPulsing?: boolean;
    className?: string;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
