import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StatusBadge } from './StatusBadge';
import { ShieldCheck, Flame, AlertTriangle } from 'lucide-react';

const meta: Meta<typeof StatusBadge> = {
  title: 'Primitives/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Variants: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto flex flex-wrap gap-2.5 p-4 bg-card rounded-2xl border border-border">
      <StatusBadge label="All synced" variant="idle" />
      <StatusBadge label="Syncing..." variant="busy" isPulsing />
      <StatusBadge label="Workout Saved" variant="success" />
      <StatusBadge label="Offline - Saved Locally" variant="error" />
      <StatusBadge label="Attention Needed" variant="warning" icon={<AlertTriangle className="w-3.5 h-3.5 text-amber-400" />} />
      <StatusBadge label="Abundant Horizon" variant="info" icon={<ShieldCheck className="w-3.5 h-3.5 text-sky-400" />} />
      <StatusBadge label="Hypertrophy Block" variant="purple" icon={<Flame className="w-3.5 h-3.5 text-purple-400" />} />
      <StatusBadge label="Warmup Set" variant="orange" />
    </div>
  ),
};

export const CompactSizes: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto space-y-3 p-4 bg-card rounded-2xl border border-border">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 w-10">sm</span>
        <StatusBadge label="Success" variant="success" size="sm" />
        <StatusBadge label="Purple" variant="purple" size="sm" />
        <StatusBadge label="Orange" variant="orange" size="sm" />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 w-10">xs</span>
        <StatusBadge label="Success" variant="success" size="xs" />
        <StatusBadge label="Purple" variant="purple" size="xs" />
        <StatusBadge label="Orange" variant="orange" size="xs" />
      </div>
    </div>
  ),
};
