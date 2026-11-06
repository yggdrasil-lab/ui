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

export const MultiSelectTags: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['💪 Felt Strong', '⚡ Great Pump']);
    const tags = ['💪 Felt Strong', '⚡ Great Pump', '🎯 New PR Hit', '🦴 Joint Stiff', '🥱 Low Energy'];
    return (
      <div className="max-w-sm">
        <ChipSelector
          options={tags}
          multiSelect
          selectedValues={selected}
          onChangeValues={setSelected}
          variant="purple"
        />
      </div>
    );
  },
};

export const KeyValueSegmented: Story = {
  render: () => {
    const [energy, setEnergy] = useState('high');
    return (
      <div className="w-80">
        <ChipSelector
          options={[
            { value: 'high', label: '⚡ High' },
            { value: 'normal', label: '😐 Normal' },
            { value: 'low', label: '🪫 Low' },
          ]}
          selected={energy}
          onChange={setEnergy}
          variant="blue"
          equalWidth
        />
      </div>
    );
  },
};
