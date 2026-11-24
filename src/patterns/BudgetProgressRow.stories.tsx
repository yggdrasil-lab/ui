import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingCart, Zap } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';
import { BudgetProgressRow } from './BudgetProgressRow';

const meta: Meta<typeof BudgetProgressRow> = {
  title: 'Patterns/BudgetProgressRow',
  component: BudgetProgressRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BudgetProgressRow>;

export const SpendingGuardrailsShowcase: Story = {
  render: () => (
    <div className="w-full max-w-[460px]">
      <GlassCard className="space-y-3">
        <BudgetProgressRow
          category="Groceries"
          icon={<ShoppingCart className="w-3.5 h-3.5 text-emerald-400" />}
          spendFormatted="$350.00 NZD"
          transactionCount={4}
          percentage={47}
          budgetSummaryLabel="$350 of $300 (117%)"
          remainingOrOverFormatted="$50 OVER BUDGET"
          percentUsed={117}
          isOverBudget
          warningLevel="danger"
        />

        <BudgetProgressRow
          category="Utilities"
          icon={<Zap className="w-3.5 h-3.5 text-amber-400" />}
          spendFormatted="$46.99 NZD"
          transactionCount={4}
          transactionCountLabel="2 + 2 fixed"
          percentage={1}
          budgetSummaryLabel="$47 of $347 (14%)"
          remainingOrOverFormatted="$300 left"
          percentUsed={14}
          warningLevel="normal"
        />
      </GlassCard>
    </div>
  ),
};

export const TransferAndUnconfigured: Story = {
  render: () => (
    <div className="w-full max-w-[460px] space-y-3">
      <BudgetProgressRow
        category="Internal Savings Transfer"
        spendFormatted="$1,250.00 NZD"
        transactionCount={2}
        isTransfer
      />
      <BudgetProgressRow
        category="Dining Out"
        spendFormatted="$184.00 NZD"
        transactionCount={5}
        percentage={24}
        onEditTargetClick={() => {}}
      />
    </div>
  ),
};
