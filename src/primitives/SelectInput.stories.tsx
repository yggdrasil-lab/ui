import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SelectInput } from './SelectInput';

const meta: Meta<typeof SelectInput> = {
  title: 'Primitives/SelectInput',
  component: SelectInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const OptionsAndChildren: Story = {
  render: () => {
    const [account, setAccount] = useState('');
    const [focus, setFocus] = useState('hypertrophy');

    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
        <SelectInput
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Select account..."
          variant="amber"
          options={[
            { value: 'checking', label: 'Everyday Checking' },
            { value: 'savings', label: 'High-Yield Savings' },
            { value: 'brokerage', label: 'Index Brokerage', disabled: true },
          ]}
        />

        <SelectInput
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          variant="blue"
        >
          <option value="strength">Strength Block</option>
          <option value="hypertrophy">Hypertrophy Block</option>
          <option value="deload">Deload Week</option>
        </SelectInput>

        <SelectInput
          defaultValue="invalid"
          error
          options={[{ value: 'invalid', label: 'Unmapped category' }]}
        />
      </div>
    );
  },
};
