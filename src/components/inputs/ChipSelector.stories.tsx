import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChipSelector } from './ChipSelector';

const meta: Meta<typeof ChipSelector> = {
  title: 'Inputs/ChipSelector',
  component: ChipSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChipSelector>;

const sampleOptions = ['Food', 'Coffee', 'Groceries', 'Transport', 'Tech', 'Health', 'Leisure', 'Utilities'];

export const Amber: Story = {
  render: () => {
    const [selected, setSelected] = useState('Food');
    return (
      <div className="max-w-sm">
        <ChipSelector
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          variant="amber"
        />
      </div>
    );
  },
};

export const Emerald: Story = {
  render: () => {
    const [selected, setSelected] = useState('Groceries');
    return (
      <div className="max-w-sm">
        <ChipSelector
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          variant="emerald"
        />
      </div>
    );
  },
};
