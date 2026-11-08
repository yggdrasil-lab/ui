import React from 'react';
import type { ThemeVariant } from '../shell/AppHeader';

export interface SegmentedControlOption<T extends string = string> {
  id: T;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface SegmentedControlProps<T extends string = string> {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: ThemeVariant;
  size?: 'xs' | 'sm' | 'md';
  fullWidth?: boolean;
  className?: string;
  idPrefix?: string;
}

const variantActiveStyles: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm',
  slate: 'bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm',
};

const sizeStyles = {
  xs: 'px-2.5 py-1 text-xs',
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-sm',
};

export function SegmentedControl<T extends string = string>({
  options,
  value,
  onChange,
  variant = 'amber',
  size = 'xs',
  fullWidth = false,
  className = '',
  idPrefix = 'segmented',
}: SegmentedControlProps<T>) {
  const activeClass = variantActiveStyles[variant] || variantActiveStyles.amber;
  const sizeClass = sizeStyles[size] || sizeStyles.xs;

  return (
    <div
      role="tablist"
      className={`inline-flex items-center bg-card/60 p-0.5 rounded-lg border border-border ${
        fullWidth ? 'w-full grid' : ''
      } ${className}`}
      style={fullWidth ? { gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` } : undefined}
    >
      {options.map((option) => {
        const isSelected = value === option.id;
        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={isSelected}
            type="button"
            data-testid={`${idPrefix}-${option.id}`}
            onClick={() => onChange(option.id)}
            className={`font-medium rounded-md border transition-all duration-150 flex items-center justify-center gap-1.5 ${sizeClass} ${
              isSelected
                ? `${activeClass} font-semibold`
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            {option.icon && <span className="shrink-0">{option.icon}</span>}
            <span>{option.label}</span>
            {option.badge !== undefined && (
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono">
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
