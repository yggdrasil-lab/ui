import React from 'react';
import type { ThemeVariant } from '../shell/AppHeader';

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
  onClick?: () => void;
  variant?: ThemeVariant;
  className?: string;
  'data-testid'?: string;
}

const variantSelectedStyles: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30',
  blue: 'bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30',
  emerald: 'bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30',
  purple: 'bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30',
  slate: 'bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30',
};

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
  onClick,
  variant = 'amber',
  className = '',
  'data-testid': testId,
}) => {
  const selectedStyle = variantSelectedStyles[variant] || variantSelectedStyles.amber;

  const trendColor =
    subvalueTrend === 'positive'
      ? 'text-emerald-400'
      : subvalueTrend === 'negative'
      ? 'text-rose-400'
      : 'text-slate-400';

  return (
    <button
      type="button"
      data-testid={testId}
      onClick={onClick}
      className={`text-left p-3.5 rounded-xl border transition-all duration-150 w-full ${
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
