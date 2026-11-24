import React from 'react';
import { ChevronRight } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';

export interface SummaryMetricItem {
  id?: string;
  label: string;
  value: React.ReactNode;
  subvalue?: React.ReactNode;
  valueClassName?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  testId?: string;
}

export interface SummaryMetricGridProps {
  items: SummaryMetricItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnGridClasses: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
};

const BASE_TILE_CLASSES =
  'min-w-0 px-2.5 py-2 rounded-xl bg-background/60 border border-border/60';

const INTERACTIVE_TILE_CLASSES =
  'w-full min-h-[44px] flex flex-col items-stretch justify-center text-center cursor-pointer transition-[border-color,background-color,box-shadow,transform] hover:border-amber-500/50 hover:bg-background/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 group';

/**
 * Responsive 2-, 3-, or 4-column summary metric tile grid supporting both
 * static read-only tiles and accessible interactive button tiles.
 */
export const SummaryMetricGrid: React.FC<SummaryMetricGridProps> = ({
  items,
  columns = 3,
  className = '',
}) => {
  const gridClass = columnGridClasses[columns] || columnGridClasses[3];

  return (
    <div className={`grid ${gridClass} gap-2 text-center ${className}`}>
      {items.map((item, idx) => (
        <SummaryMetricTile
          key={item.id || `${item.label}-${idx}`}
          item={item}
        />
      ))}
    </div>
  );
};

interface SummaryMetricTileProps {
  item: SummaryMetricItem;
}

const SummaryMetricTile: React.FC<SummaryMetricTileProps> = ({ item }) => {
  const isInteractive = typeof item.onClick === 'function';

  if (isInteractive) {
    return (
      <button
        type="button"
        onClick={item.onClick}
        aria-label={item.ariaLabel}
        data-testid={item.testId}
        className={`${BASE_TILE_CLASSES} ${INTERACTIVE_TILE_CLASSES}`}
      >
        <SummaryMetricTileContent item={item} isInteractive />
      </button>
    );
  }

  return (
    <GlassCard
      tone="solid"
      padding="none"
      data-testid={item.testId}
      className="min-w-0 px-2.5 py-2 rounded-xl shadow-none bg-background/60 border-border/60"
    >
      <SummaryMetricTileContent item={item} isInteractive={false} />
    </GlassCard>
  );
};

interface SummaryMetricTileContentProps {
  item: SummaryMetricItem;
  isInteractive: boolean;
}

const SummaryMetricTileContent: React.FC<SummaryMetricTileContentProps> = ({
  item,
  isInteractive,
}) => (
  <>
    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 min-w-0">
      {item.icon && <span className="shrink-0">{item.icon}</span>}
      <span className="truncate">{item.label}</span>
      {isInteractive && (
        <ChevronRight
          aria-hidden="true"
          className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0"
        />
      )}
    </span>
    <span
      className={`block text-sm font-bold mt-0.5 truncate ${
        item.valueClassName || 'text-slate-100'
      }`}
    >
      {item.value}
    </span>
    {item.subvalue && (
      <span className="block text-[10px] text-slate-400 mt-0.5 truncate">
        {item.subvalue}
      </span>
    )}
  </>
);
