import { default as React } from 'react';
export interface SummaryMetricItem {
    id?: string;
    label: string;
    value: React.ReactNode;
    subvalue?: React.ReactNode;
    valueClassName?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    ariaLabel?: string;
    testId?: string;
}
export interface SummaryMetricGridProps {
    items: SummaryMetricItem[];
    columns?: 2 | 3 | 4;
    className?: string;
}
/**
 * Responsive 2-, 3-, or 4-column summary metric tile grid supporting both
 * static read-only tiles and accessible interactive button tiles.
 */
export declare const SummaryMetricGrid: React.FC<SummaryMetricGridProps>;
