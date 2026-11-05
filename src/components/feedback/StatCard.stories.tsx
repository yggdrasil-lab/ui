import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ShieldCheck, TrendingUp, Lock } from 'lucide-react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Feedback/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'card', 'amber', 'emerald', 'sky'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const CashFloor: Story = {
  args: {
    title: 'Cash Floor',
    value: '24.0 w',
    subtitle: '$24,000 NZD',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    variant: 'sky',
  },
};

export const GrowthTier: Story = {
  args: {
    title: 'Growth Capital',
    value: 'Perpetual',
    subtitle: '$160,000 NZD',
    icon: <TrendingUp className="w-3.5 h-3.5" />,
    variant: 'emerald',
  },
};

export const LockedReserve: Story = {
  args: {
    title: 'Locked Reserve',
    value: '85.0 w',
    subtitle: '$85,000 NZD (Preserved)',
    icon: <Lock className="w-3.5 h-3.5" />,
    variant: 'amber',
  },
};
