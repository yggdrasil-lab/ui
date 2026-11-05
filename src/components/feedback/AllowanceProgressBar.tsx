import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ThemeVariant } from '../shell/AppHeader';

export interface AllowanceDeltaBadge {
  label: string;
  isPositive: boolean;
}

export interface AllowanceProgressBarProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  currentValue: number;
  targetValue: number;
  currencyPrefix?: string;
  currencySuffix?: string;
  deltaBadge?: AllowanceDeltaBadge;
  action?: React.ReactNode;
  variant?: ThemeVariant;
  className?: string;
}

export const AllowanceProgressBar: React.FC<AllowanceProgressBarProps> = ({
  title,
  subtitle,
  icon,
  currentValue,
  targetValue,
  currencyPrefix = '$',
  currencySuffix = 'NZD',
  deltaBadge,
  action,
  className = '',
}) => {
  const percent = Math.min(100, Math.round((currentValue / (targetValue || 1)) * 100));
  const remaining = Math.max(0, targetValue - currentValue);

  // Progressive color threshold: <70% healthy (emerald), 70-90% warning (amber), >90% critical (rose)
  const getProgressBarColor = () => {
    if (percent > 90) return 'bg-rose-500';
    if (percent > 70) return 'bg-amber-400';
    return 'bg-emerald-400';
  };

  const getPercentTextColor = () => {
    if (percent > 90) return 'text-rose-400 font-semibold';
    if (percent > 70) return 'text-amber-400 font-semibold';
    return 'text-slate-400 font-medium';
  };

  return (
    <div className={`bg-card border border-border rounded-2xl p-5 shadow-lg ${className}`}>
      {/* Header with Title and Action */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          {icon && (
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
            {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
          </div>
        </div>

        {action && <div>{action}</div>}
      </div>

      {/* Progress Bar & Value Metrics */}
      <div className="space-y-1.5 my-3">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">
            Spent <strong className="text-slate-200">{currencyPrefix}{Math.round(currentValue).toLocaleString('en-NZ')}</strong> of {currencyPrefix}{Math.round(targetValue).toLocaleString('en-NZ')}
          </span>
          <span className={getPercentTextColor()}>
            {percent}%
          </span>
        </div>
        <div className="w-full h-2.5 bg-background rounded-full overflow-hidden border border-border/50">
          <div
            className={`h-full transition-all duration-500 rounded-full ${getProgressBarColor()}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Footer: Remaining Allowance & Delta Badge */}
      <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs">
        <span className="text-slate-400">
          Remaining allowance: <strong className="text-slate-200">{currencyPrefix}{Math.round(remaining).toLocaleString('en-NZ')} {currencySuffix}</strong>
        </span>

        {deltaBadge && (
          <div
            className={`flex items-center font-medium px-2 py-0.5 rounded-md ${
              deltaBadge.isPositive
                ? 'text-emerald-300 bg-emerald-500/10'
                : 'text-rose-300 bg-rose-500/10'
            }`}
          >
            <ArrowUpRight className={`w-3.5 h-3.5 mr-1 ${deltaBadge.isPositive ? '' : 'rotate-90'}`} />
            <span>{deltaBadge.label}</span>
          </div>
        )}
      </div>
    </div>
  );
};
