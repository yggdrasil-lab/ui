import { default as React } from 'react';
export type AlertBannerVariant = 'info' | 'success' | 'warning' | 'error';
export interface AlertBannerProps {
    variant?: AlertBannerVariant;
    title?: React.ReactNode;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    role?: string;
    className?: string;
}
export declare const AlertBanner: React.FC<AlertBannerProps>;
