import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MetricHero } from './MetricHero';
import { ShieldCheck, Flame } from 'lucide-react';

const meta: Meta<typeof MetricHero> = {
  title: 'Feedback/MetricHero',
  component: MetricHero,
};

export default meta;
type Story = StoryObj<typeof MetricHero>;

export const FreedomClockHero: Story = {
  render: () => (
    <div className="max-w-md mx-auto p-4">
      <MetricHero
        title="Financial Freedom Clock"
        primaryValue={184}
        primaryUnit="Weeks"
        secondaryValue={3.5}
        secondaryUnit="Years"
        toggleHint="Tap to toggle between weeks and years"
        badge={{
          label: 'Abundant Horizon',
          variant: 'emerald',
          icon: <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />,
        }}
      />
    </div>
  ),
};

export const FastingStreakHero: Story = {
  render: () => (
    <div className="max-w-md mx-auto p-4">
      <MetricHero
        title="Circadian Fasting Window"
        primaryValue="16:42"
        primaryUnit="Hours"
        toggleHint="Target: 16:8 Window"
        badge={{
          label: 'Fasting Active',
          variant: 'sky',
          icon: <Flame className="w-3.5 h-3.5 mr-1 text-sky-400" />,
        }}
      />
    </div>
  ),
};
