import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PlusCircle, Trash2, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'amber', 'emerald', 'rose', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryAmber: Story = {
  args: {
    children: 'Confirm & Log Expense',
    variant: 'amber',
    size: 'md',
    icon: <PlusCircle className="w-4 h-4" />,
  },
};

export const EmeraldSync: Story = {
  args: {
    children: 'Synchronize Balances',
    variant: 'emerald',
    size: 'md',
  },
};

export const SecondarySlate: Story = {
  args: {
    children: 'Inspect Statement',
    variant: 'secondary',
    size: 'sm',
    icon: <ArrowRight className="w-3.5 h-3.5" />,
    iconPosition: 'right',
  },
};

export const DangerAction: Story = {
  args: {
    children: 'Clear Ledger',
    variant: 'danger',
    size: 'sm',
    icon: <Trash2 className="w-3.5 h-3.5" />,
  },
};

export const LoadingState: Story = {
  args: {
    children: 'Synchronizing...',
    variant: 'amber',
    size: 'md',
    loading: true,
  },
};
