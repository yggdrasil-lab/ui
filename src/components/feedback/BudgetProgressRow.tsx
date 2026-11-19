import React from 'react';
import { AlertTriangle, ArrowRightLeft, Search, Target } from 'lucide-react';

export type BudgetWarningLevel = 'normal' | 'warning' | 'danger';

export interface BudgetProgressRowProps {
  category: string;
  icon?: React.ReactNode;
  spendFormatted: string;
  transactionCount: number;
  /** Optional override for the default "<N> txn(s)" count label (e.g. "2 + 2 fixed"). */
  transactionCountLabel?: string;
  percentage?: number;
  budgetSummaryLabel?: string | null;
  remainingOrOverFormatted?: string | null;
  percentUsed?: number | null;
  isOverBudget?: boolean;
  warningLevel?: BudgetWarningLevel;
  isTransfer?: boolean;
  transferNote?: string;
  onRowClick?: () => void;
  onEditTargetClick?: (e: React.MouseEvent) => void;
  'data-testid'?: string;
}

const barColorByLevel: Record<BudgetWarningLevel, string> = {
  normal: 'bg-emerald-500',
  warning: 'bg-amber-500',
  danger: 'bg-rose-500',
};

/**
 * Interactive category spending row displaying spend share, budget utilization
 * progress bar, overspending callout, and inline target configuration trigger.
 */
export const BudgetProgressRow: React.FC<BudgetProgressRowProps> = ({
  category,
  icon,
  spendFormatted,
  transactionCount,
  transactionCountLabel,
  percentage = 0,
  budgetSummaryLabel,
  remainingOrOverFormatted,
  percentUsed,
  isOverBudget = false,
  warningLevel = 'normal',
  isTransfer = false,
  transferNote = 'Internal transfers between accounts - Excluded from spend',
  onRowClick,
  onEditTargetClick,
  'data-testid': testId,
}) => {
  const hasBudget = !isTransfer && Boolean(budgetSummaryLabel);
  const clampedWidth = Math.min(Math.max(percentUsed ?? 0, 0), 100);
  const barColor = barColorByLevel[warningLevel] || barColorByLevel.normal;

  return (
    <div
      data-testid={testId}
      onClick={onRowClick}
      title={`Click to inspect transactions in ${category}`}
      className="p-3 bg-card/40 hover:bg-card/70 rounded-xl border border-border hover:border-slate-600 transition-all cursor-pointer space-y-1.5 group"
    >
      <div className="flex items-center justify-between text-xs gap-2">
        <div className="flex items-center space-x-2 min-w-0">
          {icon && (
            <div className="p-1 rounded bg-background border border-border shrink-0">
              {icon}
            </div>
          )}
          <span className="font-medium text-slate-200 group-hover:text-amber-300 transition-colors truncate">
            {category}
          </span>
          <span className="text-[10px] text-slate-500 font-mono shrink-0">
            {transactionCountLabel ??
              `${transactionCount} ${transactionCount === 1 ? 'txn' : 'txns'}`}
            {!isTransfer && ` (${Math.round(percentage)}%)`}
          </span>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <span className={`font-semibold font-mono ${isTransfer ? 'text-sky-300' : 'text-slate-100'}`}>
            {spendFormatted}
          </span>
          <div className="p-1 rounded bg-card/80 text-slate-400 group-hover:text-slate-200 border border-transparent group-hover:border-border transition-colors">
            <Search className="w-3 h-3" />
          </div>
        </div>
      </div>

      {isTransfer ? (
        <div className="flex justify-between items-center text-[10px] text-sky-400/90 pt-0.5">
          <span className="flex items-center space-x-1">
            <ArrowRightLeft className="w-2.5 h-2.5 shrink-0" />
            <span>{transferNote}</span>
          </span>
          <span className="text-slate-400 hover:text-slate-200 shrink-0">Inspect txns</span>
        </div>
      ) : hasBudget ? (
        <div className="space-y-1">
          <div className="w-full bg-background rounded-full h-2 overflow-hidden border border-border">
            <div
              className={`h-full rounded-full transition-all duration-500 ${barColor}`}
              style={{ width: `${clampedWidth}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
            <span>{budgetSummaryLabel}</span>
            <div className="flex items-center space-x-2">
              {remainingOrOverFormatted && (
                isOverBudget ? (
                  <span className="text-rose-400 font-semibold flex items-center space-x-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>{remainingOrOverFormatted}</span>
                  </span>
                ) : (
                  <span className="text-emerald-400">{remainingOrOverFormatted}</span>
                )
              )}
              {onEditTargetClick && (
                <button
                  type="button"
                  onClick={onEditTargetClick}
                  title="Edit budget target"
                  className="text-slate-500 hover:text-amber-400 p-0.5"
                >
                  <Target className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center text-[10px] text-slate-500 pt-0.5">
          <span>No target budget configured</span>
          {onEditTargetClick && (
            <button
              type="button"
              onClick={onEditTargetClick}
              className="text-amber-400/80 hover:text-amber-300 flex items-center space-x-0.5"
            >
              <Target className="w-2.5 h-2.5" />
              <span>Set target</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
