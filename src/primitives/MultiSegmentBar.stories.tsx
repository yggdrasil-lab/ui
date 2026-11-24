import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSegmentBar } from './MultiSegmentBar';

const meta: Meta<typeof MultiSegmentBar> = {
  title: 'Primitives/MultiSegmentBar',
  component: MultiSegmentBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MultiSegmentBar>;

export const HeartRateZones: Story = {
  render: () => (
    <div className="w-[420px] p-4 bg-card rounded-2xl border border-border">
      <MultiSegmentBar
        heightClass="h-2"
        segments={[
          { id: 'z1', label: 'Z1 Rec', value: 12, barColor: 'bg-sky-500', textColor: 'text-sky-400' },
          { id: 'z2', label: 'Z2 Base', value: 38, barColor: 'bg-emerald-500', textColor: 'text-emerald-400' },
          { id: 'z3', label: 'Z3 Tempo', value: 28, barColor: 'bg-amber-400', textColor: 'text-amber-400' },
          { id: 'z4', label: 'Z4 Thresh', value: 16, barColor: 'bg-orange-500', textColor: 'text-orange-400' },
          { id: 'z5', label: 'Z5 Max', value: 6, barColor: 'bg-rose-500', textColor: 'text-rose-400' },
        ]}
      />
    </div>
  ),
};

export const PortfolioTiers: Story = {
  render: () => (
    <div className="w-[420px] p-4 bg-card rounded-2xl border border-border">
      <MultiSegmentBar
        heightClass="h-3"
        segments={[
          {
            id: 'cash',
            label: 'Cash Buffer',
            value: 45000,
            barColor: 'bg-emerald-400',
            textColor: 'text-emerald-300',
            valueLabel: '$45k (18%)',
          },
          {
            id: 'etf',
            label: 'Liquid ETFs',
            value: 140000,
            barColor: 'bg-sky-400',
            textColor: 'text-sky-300',
            valueLabel: '$140k (56%)',
          },
          {
            id: 'ks',
            label: 'KiwiSaver',
            value: 65000,
            barColor: 'bg-purple-400',
            textColor: 'text-purple-300',
            valueLabel: '$65k (26%)',
          },
        ]}
      />
    </div>
  ),
};
