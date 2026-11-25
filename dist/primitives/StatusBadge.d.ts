import { default as React } from 'react';
export type StatusBadgeVariant = 'idle' | 'busy' | 'success' | 'error' | 'warning' | 'info' | 'purple' | 'orange';
export type StatusBadgeSize = 'xs' | 'sm';
export interface StatusBadgeProps {
    label: string;
    variant?: StatusBadgeVariant;
    size?: StatusBadgeSize;
    icon?: React.ReactNode;
    showDot?: boolean;
    isPulsing?: boolean;
    className?: string;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
