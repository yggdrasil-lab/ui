import React from 'react';
import { THEME_RING_SELECTED, type ThemeVariant } from '../theme/variants';

export interface SelectableCardProps {
  title: string;
  subtitle?: string;
  value?: string | number;
  valueSuffix?: string;
  subvalue?: string;
  subvalueTrend?: 'positive' | 'negative' | 'neutral';
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  isSelected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  variant?: ThemeVariant;
  className?: string;
  'data-testid'?: string;
}

export const SelectableCard: React.FC<SelectableCardProps> = ({
  title,
  subtitle,
  value,
  valueSuffix,
  subvalue,
  subvalueTrend = 'neutral',
  badge,
  icon,
  isSelected = false,
  disabled = false,
  onClick,
  variant = 'amber',
  className = '',
  'data-testid': testId,
}) => {
  const selectedStyle = THEME_RING_SELECTED[variant] || THEME_RING_SELECTED.amber;

  const trendColor =
    subvalueTrend === 'positive'
      ? 'text-emerald-400'
      : subvalueTrend === 'negative'
      ? 'text-rose-400'
      : 'text-slate-400';

  return (
    <button
      type="button"
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
      className={`text-left p-3.5 rounded-xl border transition-all duration-150 w-full disabled:opacity-50 disabled:pointer-events-none ${
        isSelected
          ? selectedStyle
          : 'bg-background/60 border-border/60 hover:border-slate-700'
      } ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-xs font-semibold text-slate-200 truncate flex items-center gap-1.5">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="truncate">{title}</span>
        </span>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>

      {value !== undefined && (
        <div className="text-lg font-bold text-slate-100 font-mono">
          {value}
          {valueSuffix && (
            <span className="text-xs font-normal text-slate-400 ml-1">{valueSuffix}</span>
          )}
        </div>
      )}

      {(subtitle || subvalue) && (
        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
          {subtitle && <span className="truncate">{subtitle}</span>}
          {subvalue && (
            <span className={`font-mono font-medium shrink-0 ml-1.5 ${trendColor}`}>
              {subvalue}
            </span>
          )}
        </div>
      )}
    </button>
  );
};
