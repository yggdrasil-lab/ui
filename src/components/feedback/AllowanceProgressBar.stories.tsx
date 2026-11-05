import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flame, PlusCircle } from 'lucide-react';
import { AllowanceProgressBar } from './AllowanceProgressBar';

const meta: Meta<typeof AllowanceProgressBar> = {
  title: 'Feedback/AllowanceProgressBar',
  component: AllowanceProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AllowanceProgressBar>;

export const UnderBudget: Story = {
  render: () => (
    <div className="w-[420px]">
      <AllowanceProgressBar
        title="Weekly Burn & Budget"
        subtitle="Resets Monday 00:00 NZDT"
        icon={<Flame className="w-4 h-4" />}
        currentValue={540}
        targetValue={1000}
        deltaBadge={{ label: '+0.46 weeks banked', isPositive: true }}
        action={
          <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-500 text-slate-950 rounded-xl text-xs font-semibold shadow">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Quick Log</span>
          </button>
        }
      />
    </div>
  ),
};

export const OverBudget: Story = {
  render: () => (
    <div className="w-[420px]">
      <AllowanceProgressBar
        title="Weekly Burn & Budget"
        subtitle="Resets Monday 00:00 NZDT"
        icon={<Flame className="w-4 h-4" />}
        currentValue={1150}
        targetValue={1000}
        deltaBadge={{ label: '-0.15 weeks deficit', isPositive: false }}
      />
    </div>
  ),
};
