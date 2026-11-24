import type { Meta, StoryObj } from '@storybook/react';
import { PieChart, Target, TrendingUp } from 'lucide-react';
import { Button } from './Button';
import { SectionHeader } from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'Primitives/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const WithActionButton: Story = {
  render: () => (
    <div className="w-[440px] p-4 bg-card rounded-2xl border border-border">
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
    </div>
  ),
};

export const MediumUppercase: Story = {
  render: () => (
    <div className="w-[440px] p-4 bg-card rounded-2xl border border-border">
      <SectionHeader
        title="Portfolio Allocation"
        subtitle="Real-time asset mix across liquidity tiers"
        icon={<TrendingUp className="w-5 h-5" />}
        variant="emerald"
        size="md"
        titleAs="h2"
        uppercaseTitle
      />
    </div>
  ),
};
