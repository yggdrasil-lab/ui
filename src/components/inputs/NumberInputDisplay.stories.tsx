import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { NumberInputDisplay } from './NumberInputDisplay';
import { TactileKeypad } from './TactileKeypad';

const meta: Meta<typeof NumberInputDisplay> = {
  title: 'Inputs/NumberInputDisplay',
  component: NumberInputDisplay,
};

export default meta;
type Story = StoryObj<typeof NumberInputDisplay>;

export const CurrencyExample: Story = {
  render: () => {
    const [amount, setAmount] = useState('45.50');

    return (
      <div className="max-w-sm mx-auto p-6 bg-background space-y-4">
        <NumberInputDisplay label="Expense Amount" value={amount} unit="NZD" variant="amber" />
        <TactileKeypad value={amount} onChange={setAmount} variant="amber" />
      </div>
    );
  },
};

export const WeightExample: Story = {
  render: () => {
    const [weight, setWeight] = useState('85.0');

    return (
      <div className="max-w-sm mx-auto p-6 bg-background space-y-4">
        <NumberInputDisplay label="Barbell Squat" value={weight} unit="kg" variant="blue" />
        <TactileKeypad value={weight} onChange={setWeight} variant="blue" />
      </div>
    );
  },
};
