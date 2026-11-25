import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Clock, DollarSign, Dumbbell } from 'lucide-react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Primitives/TextInput',
  component: TextInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextInput>;

const TextAndAmountInputs: React.FC = () => {
  const [merchant, setMerchant] = useState('Woolworths');
  const [amount, setAmount] = useState('124.50');

  return (
    <>
      <TextInput
        type="text"
        value={merchant}
        onChange={(e) => setMerchant(e.target.value)}
        placeholder="Merchant name"
        leftIcon={<Dumbbell className="w-4 h-4" />}
        variant="blue"
      />
      <TextInput
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.00"
        leftIcon={<DollarSign className="w-4 h-4" />}
        rightSlot={<span className="text-[11px] font-mono text-slate-400">NZD</span>}
        variant="amber"
      />
    </>
  );
};

const TimeAndErrorInputs: React.FC = () => {
  const [startTime, setStartTime] = useState('06:30');

  return (
    <>
      <TextInput
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        leftIcon={<Clock className="w-4 h-4" />}
        variant="emerald"
      />
      <TextInput
        type="text"
        defaultValue="Invalid reference"
        error
        placeholder="Error state"
      />
      <TextInput
        type="text"
        defaultValue="Readonly disabled value"
        disabled
      />
    </>
  );
};

export const InputStates: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
      <TextAndAmountInputs />
      <TimeAndErrorInputs />
    </div>
  ),
};
