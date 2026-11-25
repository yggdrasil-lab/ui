import { useCallback, useRef, useState } from 'react';
import type React from 'react';

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
  patchItem: (
    predicate: (item: TItem) => boolean,
    patch: Partial<TItem> | ((item: TItem) => TItem)
  ) => void;
  reset: () => void;
}

function defaultMergeItems<TItem>(prev: TItem[], next: TItem[], isLoadMore: boolean): TItem[] {
  return isLoadMore ? [...prev, ...next] : next;
}

function defaultFormatError(err: unknown): string {
  return err instanceof Error ? err.message : 'Failed to load items';
}

interface PageExecutionContext<TItem, TQuery> {
  requestSeqRef: React.MutableRefObject<number>;
  optionsRef: React.MutableRefObject<UseOffsetPaginationOptions<TItem, TQuery>>;
  setItems: React.Dispatch<React.SetStateAction<TItem[]>>;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setLoadingMore: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

async function executePageFetch<TItem, TQuery>(
  ctx: PageExecutionContext<TItem, TQuery>,
  query: TQuery,
  offset: number
): Promise<void> {
  const seq = ++ctx.requestSeqRef.current;
  const isLoadMore = offset > 0;
  if (isLoadMore) ctx.setLoadingMore(true);
  else ctx.setLoading(true);
  ctx.setError(null);

  try {
    const res = await ctx.optionsRef.current.fetcher(query, offset);
    if (seq !== ctx.requestSeqRef.current) return;
    const merge = ctx.optionsRef.current.mergeItems ?? defaultMergeItems;
    ctx.setTotalCount(res.totalCount);
    ctx.setItems((prev) => merge(prev, res.items, isLoadMore));
    ctx.optionsRef.current.onPageLoaded?.(res, query, offset);
  } catch (err) {
    if (seq !== ctx.requestSeqRef.current) return;
    if (!isLoadMore) {
      ctx.setItems([]);
      ctx.setTotalCount(0);
    }
    const format = ctx.optionsRef.current.formatError ?? defaultFormatError;
    ctx.setError(format(err, query));
  } finally {
    if (seq === ctx.requestSeqRef.current) {
      ctx.setLoading(false);
      ctx.setLoadingMore(false);
    }
  }
}

/**
 * Generic offset-pagination hook with stale-request cancellation,
 * optimistic row patching, and customizable page merging/error formatting.
 */
export function useOffsetPagination<TItem, TQuery>(
  options: UseOffsetPaginationOptions<TItem, TQuery>
): UseOffsetPaginationResult<TItem, TQuery> {
  const [items, setItems] = useState<TItem[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(Boolean(options.initialLoading));
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestSeqRef = useRef(0);
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const stateRef = useRef({ loading, loadingMore, itemsLength: items.length, totalCount });
  stateRef.current = { loading, loadingMore, itemsLength: items.length, totalCount };

  const fetchPage = useCallback(async (query: TQuery, offset = 0) => {
    await executePageFetch(
      { requestSeqRef, optionsRef, setItems, setTotalCount, setLoading, setLoadingMore, setError },
      query,
      offset
    );
  }, []);

  const loadMore = useCallback(async (query: TQuery, currentLoadedCount?: number) => {
    const snapshot = stateRef.current;
    const loaded = currentLoadedCount ?? snapshot.itemsLength;
    if (snapshot.loading || snapshot.loadingMore || loaded >= snapshot.totalCount) return;
    await fetchPage(query, loaded);
  }, [fetchPage]);

  const patchItem = useCallback(
    (predicate: (item: TItem) => boolean, patch: Partial<TItem> | ((item: TItem) => TItem)) => {
      setItems((prev) =>
        prev.map((item) => (predicate(item) ? (typeof patch === 'function' ? patch(item) : { ...item, ...patch }) : item))
      );
    },
    []
  );

  const reset = useCallback(() => {
    requestSeqRef.current += 1;
    setItems([]);
    setTotalCount(0);
    setLoading(false);
    setLoadingMore(false);
    setError(null);
  }, []);

  return { items, setItems, totalCount, loading, loadingMore, error, setError, fetchPage, loadMore, patchItem, reset };
}
