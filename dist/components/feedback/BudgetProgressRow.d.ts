import { default as React } from 'react';
export type BudgetWarningLevel = 'normal' | 'warning' | 'danger';
export interface BudgetProgressRowProps {
    category: string;
    icon?: React.ReactNode;
    spendFormatted: string;
    transactionCount: number;
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
/**
 * Interactive category spending row displaying spend share, budget utilization
 * progress bar, overspending callout, and inline target configuration trigger.
 */
export declare const BudgetProgressRow: React.FC<BudgetProgressRowProps>;
