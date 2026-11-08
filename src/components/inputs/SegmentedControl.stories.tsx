import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { SegmentedControl, SegmentedControlOption } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Inputs/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const periodOptions: SegmentedControlOption<'month' | 'week' | 'all'>[] = [
  { id: 'month', label: 'This Month' },
  { id: 'week', label: 'This Week' },
  { id: 'all', label: 'All Time' },
];

export const AmberVariant: Story = {
  render: () => {
    const [period, setPeriod] = useState<'month' | 'week' | 'all'>('month');
    return (
      <div className="p-4 bg-slate-900 rounded-xl space-y-2">
        <SegmentedControl
          options={periodOptions}
          value={period}
          onChange={setPeriod}
          variant="amber"
          size="xs"
        />
      </div>
    );
  },
};

export const WithIconsAndBadges: Story = {
  render: () => {
    const [tab, setTab] = useState('daily');
    const options: SegmentedControlOption[] = [
      { id: 'daily', label: 'Daily', icon: <Clock className="w-3.5 h-3.5" />, badge: 3 },
      { id: 'weekly', label: 'Weekly', icon: <Calendar className="w-3.5 h-3.5" /> },
      { id: 'smart', label: 'Smart AI', icon: <Sparkles className="w-3.5 h-3.5" />, badge: 'New' },
    ];
    return (
      <div className="p-4 bg-slate-900 rounded-xl space-y-2">
        <SegmentedControl
          options={options}
          value={tab}
          onChange={setTab}
          variant="purple"
          size="sm"
        />
      </div>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [filter, setFilter] = useState('active');
    return (
      <div className="p-4 bg-slate-900 rounded-xl w-80">
        <SegmentedControl
          options={[
            { id: 'active', label: 'Active' },
            { id: 'archived', label: 'Archived' },
          ]}
          value={filter}
          onChange={setFilter}
          variant="emerald"
          fullWidth
        />
      </div>
    );
  },
};
