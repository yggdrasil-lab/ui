import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../components/inputs/SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: () => {
    const [query, setQuery] = useState('Pendlay Row');
    return (
      <div className="w-[380px] p-4 bg-card rounded-2xl border border-border">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search exercises or muscle groups..."
          variant="blue"
        />
      </div>
    );
  },
};

export const WithRightSlot: Story = {
  render: () => {
    const [query, setQuery] = useState('');
    return (
      <div className="w-[420px] p-4 bg-card rounded-2xl border border-border">
        <SearchInput
          value={query}
          onChange={setQuery}
          placeholder="Search merchants or categories..."
          variant="amber"
          rightSlot={
            <span className="px-2.5 py-2 rounded-xl bg-background border border-border text-xs text-slate-400 font-mono">
              42 items
            </span>
          }
        />
      </div>
    );
  },
};
