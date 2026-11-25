import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DeltaBadge } from './DeltaBadge';

const meta: Meta<typeof DeltaBadge> = {
  title: 'Patterns/DeltaBadge',
  component: DeltaBadge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DeltaBadge>;

export const Showcase: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 w-32">Positive is good</span>
        <DeltaBadge value={12.5} prefix="$" />
        <DeltaBadge value={-4.25} prefix="$" />
        <DeltaBadge value={0} prefix="$" showZero />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 w-32">Cost (up is bad)</span>
        <DeltaBadge value={1.8} prefix="$" positiveIsGood={false} />
        <DeltaBadge value={-2.4} prefix="$" positiveIsGood={false} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 w-32">Percent sm</span>
        <DeltaBadge value={8.4} precision={1} suffix="%" size="sm" />
        <DeltaBadge value={-3.2} precision={1} suffix="%" size="sm" />
      </div>
    </div>
  ),
};
