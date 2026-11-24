import React from 'react';
import { Check, Copy } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useCopyFeedback } from '../hooks/useCopyFeedback';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';

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

interface KeyValueRowProps {
  item: KeyValueItem;
  itemKey: string;
  isCopied: boolean;
  onCopy: (text: string, key: string) => void;
}

const KeyValueRow: React.FC<KeyValueRowProps> = ({ item, itemKey, isCopied, onCopy }) => {
  const hasCopyValue = typeof item.copyValue === 'string' && item.copyValue.length > 0;
  const isEmptyValue = item.value === null || item.value === undefined || item.value === '';

  return (
    <GlassCard
      tone="solid"
      padding="none"
      className="rounded-xl shadow-none bg-background/60 border-border/60 px-3 py-2.5 flex items-start justify-between gap-2.5 min-w-0"
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
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onCopy(item.copyValue as string, itemKey)}
          aria-label={isCopied ? `Copied ${item.label}` : `Copy ${item.label}`}
          title={isCopied ? 'Copied' : `Copy ${item.label}`}
          data-copied={isCopied ? 'true' : 'false'}
          icon={isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          className={twMerge(
            'min-w-[44px] min-h-[44px] p-0 shrink-0 shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60',
            isCopied
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200'
              : 'bg-card/80 border-border/70 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          )}
        />
      )}
    </GlassCard>
  );
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
      <GlassCard
        tone="solid"
        padding="none"
        className={twMerge(
          'border-2 border-dashed border-border/80 bg-background/40 shadow-none px-4 py-6 text-center text-xs text-slate-400',
          className
        )}
      >
        {emptyMessage}
      </GlassCard>
    );
  }

  const gridClass = columnGridClasses[columns] || columnGridClasses[1];

  return (
    <dl className={`grid ${gridClass} gap-2.5 m-0 ${className}`}>
      {items.map((item, idx) => {
        const itemKey = item.id || `${item.label}-${idx}`;
        return (
          <KeyValueRow
            key={itemKey}
            item={item}
            itemKey={itemKey}
            isCopied={copiedKey === itemKey}
            onCopy={(text, key) => void copyText(text, key)}
          />
        );
      })}
    </dl>
  );
};
