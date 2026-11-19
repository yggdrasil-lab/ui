import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PieChart, ShoppingCart, Target, Zap } from 'lucide-react';
import { BudgetProgressRow } from '../components/feedback/BudgetProgressRow';
import { GlassCard } from '../components/feedback/GlassCard';
import { SectionHeader } from '../components/feedback/SectionHeader';
import { Button } from '../components/inputs/Button';
import { getDefaultCustomRange, PeriodFilterBar } from '../components/inputs/PeriodFilterBar';
import { TagPillList } from '../components/inputs/TagPillList';

const meta: Meta<typeof SectionHeader> = {
  title: 'Patterns/MidasSharedPrimitives',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

const PERIOD_OPTIONS = [
  { id: 'week', label: 'This Week' },
  { id: 'last_week', label: 'Last Week' },
  { id: 'month', label: 'This Month' },
  { id: 'last_month', label: 'Last Month' },
];

export const BudgetAndPeriodShowcase: Story = {
  render: () => {
    const defaults = getDefaultCustomRange(30);
    const [period, setPeriod] = useState('month');
    const [startDate, setStartDate] = useState(defaults.startDate);
    const [endDate, setEndDate] = useState(defaults.endDate);
    const [tags, setTags] = useState(['weekly-shop', 'pantry']);

    return (
      <div className="w-full max-w-[460px] space-y-4">
        <GlassCard className="space-y-4">
          <SectionHeader
            title="Category Spending & Budgets"
            subtitle="Track weekly burn vs average-burn guardrails"
            icon={<PieChart className="w-4 h-4" />}
            variant="amber"
            actions={
              <Button variant="outline" size="xs" icon={<Target className="w-3 h-3 text-amber-400" />}>
                Limits
              </Button>
            }
          />

          <PeriodFilterBar
            period={period}
            onPeriodChange={setPeriod}
            options={PERIOD_OPTIONS}
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            idPrefix="story-period"
          />

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

          <TagPillList
            tags={tags}
            onAddTag={(next) => setTags((prev) => [...prev, next])}
            onRemoveTag={(target) => setTags((prev) => prev.filter((t) => t !== target))}
          />
        </GlassCard>
      </div>
    );
  },
};
