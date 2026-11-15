import { default as React } from 'react';
export interface SummaryMetricItem {
    id?: string;
    label: string;
    value: React.ReactNode;
    subvalue?: React.ReactNode;
    valueClassName?: string;
    icon?: React.ReactNode;
}
export interface SummaryMetricGridProps {
    items: SummaryMetricItem[];
    columns?: 2 | 3 | 4;
    className?: string;
}
export declare const SummaryMetricGrid: React.FC<SummaryMetricGridProps>;
