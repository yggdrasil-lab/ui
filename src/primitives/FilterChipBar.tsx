import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { ThemeVariant } from '../theme/variants';

export interface FilterChipOption {
  id: string;
  label: string;
  count?: number;
  highlight?: boolean;
  testId?: string;
}

export interface FilterChipBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect' | 'prefix'> {
  options: FilterChipOption[];
  selectedId: string;
  onSelect: (id: string) => void;
  toggleDeselectId?: string;
  variant?: ThemeVariant;
  tone?: 'soft' | 'solid';
  size?: 'xs' | 'sm';
  scrollable?: boolean;
  prefix?: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

const SELECTED_SOFT_CLASSES: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40 font-semibold',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/40 font-semibold',
  slate: 'bg-slate-700/50 text-slate-100 border-slate-500 font-semibold',
  brand: 'bg-accent/15 text-accent border-accent/40 font-semibold',
};

const SELECTED_SOLID_CLASSES: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500 text-slate-950 border-amber-400 font-bold',
  blue: 'bg-blue-600 text-white border-blue-500 font-bold',
  emerald: 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold',
  purple: 'bg-purple-600 text-white border-purple-500 font-bold',
  slate: 'bg-slate-200 text-slate-950 border-slate-300 font-bold',
  brand: 'bg-accent text-accent-fg border-accent font-bold',
};

const HIGHLIGHT_CLASSES: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/10 text-amber-200 border-amber-500/25 hover:border-amber-500/40',
  blue: 'bg-blue-500/10 text-blue-200 border-blue-500/25 hover:border-blue-500/40',
  emerald: 'bg-emerald-500/10 text-emerald-200 border-emerald-500/25 hover:border-emerald-500/40',
  purple: 'bg-purple-500/10 text-purple-200 border-purple-500/25 hover:border-purple-500/40',
  slate: 'bg-slate-700/30 text-slate-200 border-slate-600/50 hover:border-slate-500',
  brand: 'bg-accent/10 text-accent border-accent/25 hover:border-accent/40',
};

const SIZE_CLASSES: Record<'xs' | 'sm', string> = {
  xs: 'min-h-[36px] px-2.5 py-1 text-[11px] rounded-lg gap-1.5',
  sm: 'min-h-[44px] px-3 py-1.5 text-xs rounded-lg gap-1.5',
};

const UNSELECTED_DEFAULT_CLASS =
  'bg-card/50 text-slate-300 border-border hover:text-slate-100 hover:border-slate-600';

function resolveChipToneClass(
  isSelected: boolean,
  highlight: boolean | undefined,
  variant: ThemeVariant,
  tone: 'soft' | 'solid'
): string {
  if (isSelected) {
    const map = tone === 'solid' ? SELECTED_SOLID_CLASSES : SELECTED_SOFT_CLASSES;
    return map[variant] || map.amber;
  }
  if (highlight) {
    return HIGHLIGHT_CLASSES[variant] || HIGHLIGHT_CLASSES.amber;
  }
  return UNSELECTED_DEFAULT_CLASS;
}

/**
 * Accessible filter chip bar supporting optional counts, highlight accents,
 * toggle-to-deselect behavior, and wrapped or horizontally scrollable layouts.
 */
export const FilterChipBar: React.FC<FilterChipBarProps> = ({
  options,
  selectedId,
  onSelect,
  toggleDeselectId,
  variant = 'amber',
  tone = 'soft',
  size = 'sm',
  scrollable = false,
  prefix,
  className = '',
  ...rest
}) => {
  const layoutClass = scrollable
    ? 'flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none'
    : 'flex flex-wrap items-center gap-1.5';
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.sm;

  const handleClick = (optionId: string, isSelected: boolean) => {
    if (isSelected && toggleDeselectId !== undefined) {
      onSelect(toggleDeselectId);
      return;
    }
    onSelect(optionId);
  };

  return (
    <div className={twMerge(layoutClass, className)} {...rest}>
      {Boolean(prefix) && <span className="shrink-0">{prefix}</span>}
      {options.map((opt) => {
        const isSelected = selectedId === opt.id;
        const toneClass = resolveChipToneClass(isSelected, opt.highlight, variant, tone);
        return (
          <button
            key={opt.id}
            type="button"
            aria-pressed={isSelected}
            data-testid={opt.testId}
            onClick={() => handleClick(opt.id, isSelected)}
            className={twMerge(
              'inline-flex items-center border transition-colors active:scale-95',
              scrollable && 'shrink-0',
              sizeClass,
              toneClass
            )}
          >
            <span>{opt.label}</span>
            {opt.count !== undefined && (
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-background/60 text-slate-300">
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
