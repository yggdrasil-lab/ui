import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StatusBadge } from './StatusBadge';
import { ShieldCheck, Flame, AlertTriangle } from 'lucide-react';

const meta: Meta<typeof StatusBadge> = {
  title: 'Feedback/StatusBadge',
  component: StatusBadge,
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 p-6 bg-background">
      <StatusBadge label="All synced" variant="idle" />
      <StatusBadge label="Syncing..." variant="busy" isPulsing />
      <StatusBadge label="Workout Saved" variant="success" />
      <StatusBadge label="Offline - Saved Locally" variant="error" />
      <StatusBadge label="Attention Needed" variant="warning" icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-400" />} />
      <StatusBadge label="Abundant Horizon" variant="info" icon={<ShieldCheck className="w-3.5 h-3.5 text-sky-400" />} />
      <StatusBadge label="Fasting Active" variant="info" icon={<Flame className="w-3.5 h-3.5 text-sky-400" />} />
    </div>
  ),
};
