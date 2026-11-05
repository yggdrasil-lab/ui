import { default as React } from 'react';
export type StatCardVariant = 'default' | 'card' | 'amber' | 'emerald' | 'sky';
export interface StatCardProps {
    title: string;
    value: React.ReactNode;
    subtitle?: React.ReactNode;
    icon?: React.ReactNode;
    variant?: StatCardVariant;
    className?: string;
    onClick?: () => void;
}
export declare const StatCard: React.FC<StatCardProps>;
