import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Landmark, TrendingUp, Wallet } from 'lucide-react';
import { SelectableCard } from './SelectableCard';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof SelectableCard> = {
  title: 'Feedback/SelectableCard',
  component: SelectableCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectableCard>;

export const AccountCardExample: Story = {
  render: () => {
    const [selected, setSelected] = useState('asb');
    return (
      <div className="p-4 bg-slate-900 rounded-xl grid grid-cols-2 gap-3 w-[520px]">
        <SelectableCard
          title="ASB Everyday Checking"
          subtitle="ASB • checking"
          value="$24,000"
          valueSuffix="NZD"
          subvalue="+$1,500"
          subvalueTrend="positive"
          icon={<Wallet className="w-3.5 h-3.5 text-amber-400" />}
          badge={<StatusBadge label="Cash Floor" variant="success" />}
          isSelected={selected === 'asb'}
          onClick={() => setSelected('asb')}
          variant="amber"
        />
        <SelectableCard
          title="Sharesies Portfolio"
          subtitle="Sharesies • brokerage"
          value="$48,000"
          valueSuffix="NZD"
          subvalue="-$350"
          subvalueTrend="negative"
          icon={<TrendingUp className="w-3.5 h-3.5 text-amber-400" />}
          badge={<StatusBadge label="Growth" variant="warning" />}
          isSelected={selected === 'sharesies'}
          onClick={() => setSelected('sharesies')}
          variant="amber"
        />
      </div>
    );
  },
};
