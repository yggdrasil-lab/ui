import React from 'react';
import { Check, Copy } from 'lucide-react';
import { useCopyFeedback } from '../hooks/useCopyFeedback';

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

const columnGridClasses: Record<1 | 2, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
};

/**
 * Structured metadata list/grid with optional per-row clipboard copy
 * and responsive single-column mobile / two-column desktop layout.
 */
export const KeyValueList: React.FC<KeyValueListProps> = ({
  items,
  columns = 1,
  emptyMessage = 'No metadata available',
  className = '',
}) => {
  const { copiedKey, copyText } = useCopyFeedback();

  if (items.length === 0) {
    return (
      <div
        className={`rounded-2xl border-2 border-dashed border-border/80 bg-background/40 px-4 py-6 text-center text-xs text-slate-400 ${className}`}
      >
        {emptyMessage}
      </div>
    );
  }

  const gridClass = columnGridClasses[columns] || columnGridClasses[1];

  return (
    <dl className={`grid ${gridClass} gap-2.5 m-0 ${className}`}>
      {items.map((item, idx) => {
        const itemKey = item.id || `${item.label}-${idx}`;
        const hasCopyValue = typeof item.copyValue === 'string' && item.copyValue.length > 0;
        const isCopied = copiedKey === itemKey;
        const isEmptyValue =
          item.value === null || item.value === undefined || item.value === '';

        return (
          <div
            key={itemKey}
            className="rounded-xl bg-background/60 border border-border/60 px-3 py-2.5 flex items-start justify-between gap-2.5 min-w-0"
          >
            <div className="min-w-0 flex-1">
              <dt className="text-[11px] uppercase tracking-wider text-slate-400 font-medium truncate">
                {item.label}
              </dt>
              <dd
                className={`m-0 mt-1 text-sm sm:text-xs text-slate-100 min-w-0 ${
                  item.mono ? 'font-mono break-all' : 'break-words'
                }`}
              >
                {isEmptyValue ? <span className="text-slate-500">-</span> : item.value}
              </dd>
            </div>

            {hasCopyValue && (
              <button
                type="button"
                onClick={() => void copyText(item.copyValue as string, itemKey)}
                aria-label={isCopied ? `Copied ${item.label}` : `Copy ${item.label}`}
                title={isCopied ? 'Copied' : `Copy ${item.label}`}
                data-copied={isCopied ? 'true' : 'false'}
                className={`min-w-[44px] min-h-[44px] shrink-0 inline-flex items-center justify-center rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 ${
                  isCopied
                    ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                    : 'bg-card/80 border-border/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            )}
          </div>
        );
      })}
    </dl>
  );
};
