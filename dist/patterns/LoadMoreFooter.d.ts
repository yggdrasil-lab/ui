import { default as React } from 'react';
export interface LoadMoreFooterProps {
    loadedCount: number;
    totalCount: number;
    loading?: boolean;
    loadingText?: string;
    onLoadMore: () => void;
    loadMoreTestId?: string;
    doneLabel?: string;
    onDone?: () => void;
    rightSlot?: React.ReactNode;
    className?: string;
}
/**
 * Offset-pagination footer displaying loaded vs total progress,
 * conditional Load more trigger, and optional trailing actions.
 */
export declare const LoadMoreFooter: React.FC<LoadMoreFooterProps>;
