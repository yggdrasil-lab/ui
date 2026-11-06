import { default as React } from 'react';
export interface CollapsibleSectionProps {
    title: React.ReactNode;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
    variant?: 'inline' | 'card';
    expandLabel?: string;
    collapseLabel?: string;
    children: React.ReactNode;
    className?: string;
}
export declare const CollapsibleSection: React.FC<CollapsibleSectionProps>;
