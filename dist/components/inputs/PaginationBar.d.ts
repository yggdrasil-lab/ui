import { default as React } from 'react';
export interface PaginationBarProps {
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (nextPage: number) => void;
    loading?: boolean;
    itemLabel?: string;
    className?: string;
}
/**
 * Accessible, responsive pagination bar with >=44px Prev/Next touch targets,
 * item range summary, page indicator, and boundary/loading disabled states.
 */
export declare const PaginationBar: React.FC<PaginationBarProps>;
