import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Inputs/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const SpendAdjustment: Story = {
  render: () => {
    const [burnDelta, setBurnDelta] = useState(-100);
    return (
      <div className="w-80 bg-card p-5 rounded-2xl border border-border">
        <RangeSlider
          label="Weekly Spend Adjustment"
          valueDisplay={`${burnDelta > 0 ? `+$${burnDelta}` : burnDelta < 0 ? `-$${Math.abs(burnDelta)}` : '$0'} /week`}
          valueClassName={burnDelta < 0 ? 'text-emerald-400' : burnDelta > 0 ? 'text-rose-400' : 'text-slate-200'}
          min={-500}
          max={500}
          step={25}
          value={burnDelta}
          onChange={setBurnDelta}
          minLabel="-$500/w (Frugal)"
          midLabel="Current: $750/w"
          maxLabel="+$500/w (High Burn)"
          variant="amber"
        />
      </div>
    );
  },
};
