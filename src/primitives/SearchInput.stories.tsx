import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'Primitives/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: () => {
    const [query, setQuery] = useState('Pendlay Row');
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border">
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
      <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border">
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
