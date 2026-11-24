import { default as React } from 'react';
export interface KeyValueItem {
    id?: string;
    label: string;
    value: React.ReactNode;
    copyValue?: string;
    mono?: boolean;
}
export interface KeyValueListProps {
    items: KeyValueItem[];
    columns?: 1 | 2;
    emptyMessage?: React.ReactNode;
    className?: string;
}
/**
 * Structured metadata list/grid with optional per-row clipboard copy
 * and responsive single-column mobile / two-column desktop layout.
 */
export declare const KeyValueList: React.FC<KeyValueListProps>;
