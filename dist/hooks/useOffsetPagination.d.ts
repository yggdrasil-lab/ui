import { default as React } from 'react';
export interface OffsetPageResult<TItem> {
    items: TItem[];
    totalCount: number;
}
export interface UseOffsetPaginationOptions<TItem, TQuery> {
    fetcher: (query: TQuery, offset: number) => Promise<OffsetPageResult<TItem>>;
    mergeItems?: (prev: TItem[], next: TItem[], isLoadMore: boolean) => TItem[];
    onPageLoaded?: (res: OffsetPageResult<TItem>, query: TQuery, offset: number) => void;
    formatError?: (err: unknown, query: TQuery) => string;
    initialLoading?: boolean;
}
export interface UseOffsetPaginationResult<TItem, TQuery> {
    items: TItem[];
    setItems: React.Dispatch<React.SetStateAction<TItem[]>>;
    totalCount: number;
    loading: boolean;
    loadingMore: boolean;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    fetchPage: (query: TQuery, offset?: number) => Promise<void>;
    loadMore: (query: TQuery, currentLoadedCount?: number) => Promise<void>;
    patchItem: (predicate: (item: TItem) => boolean, patch: Partial<TItem> | ((item: TItem) => TItem)) => void;
    reset: () => void;
}
/**
 * Generic offset-pagination hook with stale-request cancellation,
 * optimistic row patching, and customizable page merging/error formatting.
 */
export declare function useOffsetPagination<TItem, TQuery>(options: UseOffsetPaginationOptions<TItem, TQuery>): UseOffsetPaginationResult<TItem, TQuery>;
