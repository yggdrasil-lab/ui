import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { GlassCard } from './GlassCard';

const meta: Meta<typeof GlassCard> = {
  title: 'Feedback/GlassCard',
  component: GlassCard,
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-background max-w-md space-y-4">
      <GlassCard hoverGlow>
        <h3 className="font-bold text-base text-slate-100">Interactive Glass Card</h3>
        <p className="text-sm text-slate-400 mt-1">
          Frosted translucent background panel shared across all homelab dashboards and views.
        </p>
      </GlassCard>

      <GlassCard onClick={() => console.log('clicked')}>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-200">Clickable Workout Routine</span>
          <span className="text-xs text-sky-400 font-medium">Upper Body A &rarr;</span>
        </div>
      </GlassCard>
    </div>
  ),
};
