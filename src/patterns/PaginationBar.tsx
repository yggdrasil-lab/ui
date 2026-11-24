import React from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';

export interface PaginationBarProps {
  page: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (nextPage: number) => void;
  loading?: boolean;
  itemLabel?: string;
  className?: string;
}

const NAV_BUTTON_CLASS =
  'min-h-[44px] min-w-[44px] px-3.5 bg-background/70 shadow-none disabled:opacity-45 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60';

interface PaginationState {
  currentPage: number;
  totalPages: number;
  summaryText: string;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

function computePaginationState(
  page: number,
  pageSize: number,
  totalItems: number,
  loading: boolean,
  itemLabel?: string
): PaginationState {
  const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? Math.floor(pageSize) : 1;
  const safeTotal = Number.isFinite(totalItems) && totalItems > 0 ? Math.floor(totalItems) : 0;
  const totalPages = Math.max(1, Math.ceil(safeTotal / safePageSize));
  const safePage = Number.isFinite(page) ? Math.floor(page) : 1;
  const currentPage = Math.min(Math.max(1, safePage), totalPages);
  const rangeStart = safeTotal === 0 ? 0 : (currentPage - 1) * safePageSize + 1;
  const rangeEnd = safeTotal === 0 ? 0 : Math.min(currentPage * safePageSize, safeTotal);
  const labelSuffix = itemLabel ? ` ${itemLabel}` : '';
  const summaryText =
    safeTotal === 0
      ? `Showing 0 of 0${labelSuffix}`
      : `Showing ${rangeStart}-${rangeEnd} of ${safeTotal}${labelSuffix}`;

  return {
    currentPage,
    totalPages,
    summaryText,
    isPrevDisabled: loading || currentPage <= 1,
    isNextDisabled: loading || currentPage >= totalPages || safeTotal === 0,
  };
}

/**
 * Accessible, responsive pagination bar with >=44px Prev/Next touch targets,
 * item range summary, page indicator, and boundary/loading disabled states.
 */
export const PaginationBar: React.FC<PaginationBarProps> = ({
  page,
  pageSize,
  totalItems,
  onPageChange,
  loading = false,
  itemLabel,
  className = '',
}) => {
  const { currentPage, totalPages, summaryText, isPrevDisabled, isNextDisabled } =
    computePaginationState(page, pageSize, totalItems, loading, itemLabel);

  return (
    <GlassCard
      as="nav"
      aria-label="Pagination"
      aria-busy={loading}
      padding="none"
      className={twMerge(
        'w-full min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 px-3.5 py-2.5',
        className
      )}
    >
      <div className="text-xs text-slate-400 text-center sm:text-left tabular-nums">
        {summaryText}
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isPrevDisabled}
          aria-label="Previous page"
          icon={<ChevronLeft className="w-4 h-4" />}
          iconPosition="left"
          className={NAV_BUTTON_CLASS}
        >
          Prev
        </Button>

        <span
          aria-live="polite"
          className="inline-flex items-center justify-center gap-1.5 px-2 text-xs font-medium text-slate-200 whitespace-nowrap tabular-nums"
        >
          {loading && <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400 shrink-0" />}
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </span>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isNextDisabled}
          aria-label="Next page"
          icon={<ChevronRight className="w-4 h-4" />}
          iconPosition="right"
          className={NAV_BUTTON_CLASS}
        >
          Next
        </Button>
      </div>
    </GlassCard>
  );
};
