import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';

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
export const LoadMoreFooter: React.FC<LoadMoreFooterProps> = ({
  loadedCount,
  totalCount,
  loading = false,
  loadingText = 'Loading more...',
  onLoadMore,
  loadMoreTestId,
  doneLabel = 'Done',
  onDone,
  rightSlot,
  className = '',
}) => {
  const hasMore = loadedCount < totalCount;
  const hasTrailing = Boolean(rightSlot) || Boolean(onDone);

  return (
    <div className={twMerge('space-y-2.5', className)}>
      {hasMore && (
        <Button
          variant="secondary"
          size="sm"
          fullWidth
          loading={loading}
          loadingText={loadingText}
          onClick={onLoadMore}
          data-testid={loadMoreTestId}
          className="min-h-[44px]"
        >
          {`Load more (Showing ${loadedCount} of ${totalCount})`}
        </Button>
      )}
      <div className="flex items-center justify-between gap-2 pt-1">
        <span className="text-xs text-slate-400 tabular-nums">
          {`Showing ${loadedCount} of ${totalCount}`}
        </span>
        {hasTrailing && (
          <div className="flex items-center gap-2 shrink-0">
            {Boolean(rightSlot) && rightSlot}
            {Boolean(onDone) && (
              <Button
                variant="outline"
                size="sm"
                onClick={onDone}
                className="min-h-[44px] sm:min-h-[36px]"
              >
                {doneLabel}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
