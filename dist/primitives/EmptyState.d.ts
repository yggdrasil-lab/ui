import { default as React } from 'react';
export interface EmptyStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    variant?: 'dashed' | 'glass';
    className?: string;
}
export declare const EmptyState: React.FC<EmptyStateProps>;
