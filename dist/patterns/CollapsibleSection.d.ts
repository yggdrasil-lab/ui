import { default as React } from 'react';
export interface CollapsibleSectionProps {
    title: React.ReactNode;
    icon?: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    variant?: 'inline' | 'card';
    expandLabel?: string;
    collapseLabel?: string;
    headerActions?: React.ReactNode;
    headerClassName?: string;
    contentClassName?: string;
    toggleTestId?: string;
    children: React.ReactNode;
    className?: string;
}
/**
 * Uncontrolled or controlled collapsible section supporting inline and card variants
 * plus non-toggle header actions.
 */
export declare const CollapsibleSection: React.FC<CollapsibleSectionProps>;
