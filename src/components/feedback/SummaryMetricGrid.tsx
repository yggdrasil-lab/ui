import React from 'react';

export interface SummaryMetricItem {
  id?: string;
  label: string;
  value: React.ReactNode;
  subvalue?: React.ReactNode;
  valueClassName?: string;
  icon?: React.ReactNode;
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

export const SummaryMetricGrid: React.FC<SummaryMetricGridProps> = ({
  items,
  columns = 3,
  className = '',
}) => {
  const gridClass = columnGridClasses[columns] || columnGridClasses[3];

  return (
    <div className={`grid ${gridClass} gap-2 text-center ${className}`}>
      {items.map((item, idx) => (
        <div
          key={item.id || `${item.label}-${idx}`}
          className="px-2.5 py-2 rounded-xl bg-background/60 border border-border/60"
        >
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium flex items-center justify-center gap-1 truncate">
            {item.icon && <span className="shrink-0">{item.icon}</span>}
            <span className="truncate">{item.label}</span>
          </div>
          <div
            className={`text-sm font-bold mt-0.5 truncate ${
              item.valueClassName || 'text-slate-100'
            }`}
          >
            {item.value}
          </div>
          {item.subvalue && (
            <div className="text-[10px] text-slate-400 mt-0.5 truncate">
              {item.subvalue}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
