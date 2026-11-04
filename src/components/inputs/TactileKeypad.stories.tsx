import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { TactileKeypad } from './TactileKeypad';

const meta: Meta<typeof TactileKeypad> = {
  title: 'Inputs/TactileKeypad',
  component: TactileKeypad,
};

export default meta;
type Story = StoryObj<typeof TactileKeypad>;

export const CurrencyLogger: Story = {
  render: () => {
    const [amount, setAmount] = useState('25.50');

    return (
      <div className="max-w-sm mx-auto p-4 bg-background rounded-2xl border border-border space-y-4">
        <div className="p-4 bg-card rounded-xl text-center border border-border">
          <div className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
            Expense Amount
          </div>
          <div className="text-4xl font-extrabold text-amber-400 mt-1">
            {amount ? `$${amount}` : '$0.00'}
            <span className="text-sm font-normal text-slate-400 ml-1">NZD</span>
          </div>
        </div>

        <TactileKeypad value={amount} onChange={setAmount} />
      </div>
    );
  },
};

export const WorkoutWeightLogger: Story = {
  render: () => {
    const [weight, setWeight] = useState('82.5');

    return (
      <div className="max-w-sm mx-auto p-4 bg-background rounded-2xl border border-border space-y-4">
        <div className="p-4 bg-card rounded-xl text-center border border-border">
          <div className="text-xs uppercase text-slate-400 font-semibold tracking-wider">
            Barbell Load
          </div>
          <div className="text-4xl font-extrabold text-sky-400 mt-1">
            {weight ? `${weight}` : '0'}
            <span className="text-sm font-normal text-slate-400 ml-1">kg</span>
          </div>
        </div>

        <TactileKeypad value={weight} onChange={setWeight} />
      </div>
    );
  },
};
