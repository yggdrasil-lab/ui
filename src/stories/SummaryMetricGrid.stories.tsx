import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SummaryMetricGrid } from '../components/feedback/SummaryMetricGrid';

const meta: Meta<typeof SummaryMetricGrid> = {
  title: 'Feedback/SummaryMetricGrid',
  component: SummaryMetricGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SummaryMetricGrid>;

export const ThreeColumnWorkoutSummary: Story = {
  render: () => (
    <div className="w-[420px] p-4 bg-card rounded-2xl border border-border">
      <SummaryMetricGrid
        columns={3}
        items={[
          { id: 'sets', label: 'Working Sets', value: '16 sets', valueClassName: 'text-sky-300' },
          { id: 'vol', label: 'Total Tonnage', value: '6,420 kg', valueClassName: 'text-emerald-400' },
          { id: 'rpe', label: 'Target RIR', value: '1-2 RIR', valueClassName: 'text-amber-300' },
        ]}
      />
    </div>
  ),
};

export const FourColumnFinancialInspection: Story = {
  render: () => (
    <div className="w-[480px] p-4 bg-card rounded-2xl border border-border">
      <SummaryMetricGrid
        columns={4}
        items={[
          { id: 'burn', label: 'Monthly Burn', value: '$4,200' },
          { id: 'runway', label: 'Runway', value: '59.5 mo', valueClassName: 'text-amber-400' },
          { id: 'yield', label: 'Passive Yield', value: '$833/mo', valueClassName: 'text-emerald-400' },
          { id: 'fi', label: 'FI Progress', value: '24.8%', valueClassName: 'text-purple-400' },
        ]}
      />
    </div>
  ),
};
