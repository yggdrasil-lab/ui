import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from 'lucide-react';
import { FilterChipBar, type FilterChipOption } from './FilterChipBar';

const meta: Meta<typeof FilterChipBar> = {
  title: 'Primitives/FilterChipBar',
  component: FilterChipBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterChipBar>;

const STATUS_OPTIONS: FilterChipOption[] = [
  { id: 'all', label: 'All', count: 42, testId: 'filter-all' },
  { id: 'pending', label: 'Pending', count: 7, testId: 'filter-pending' },
  { id: 'needs_review', label: 'Needs Review', count: 3, highlight: true, testId: 'filter-review' },
  { id: 'matched', label: 'Matched', count: 32, testId: 'filter-matched' },
];

const CATEGORY_OPTIONS: FilterChipOption[] = [
  { id: 'ALL', label: 'All' },
  { id: 'Groceries', label: 'Groceries' },
  { id: 'Dining Out', label: 'Dining Out' },
  { id: 'Utilities', label: 'Utilities' },
  { id: 'Transport', label: 'Transport' },
  { id: 'Health', label: 'Health' },
];

const TAG_OPTIONS: FilterChipOption[] = [
  { id: 'all', label: '#all' },
  { id: 'skincare', label: '#skincare' },
  { id: 'pantry', label: '#pantry' },
  { id: 'supplements', label: '#supplements' },
  { id: 'household', label: '#household' },
  { id: 'coffee', label: '#coffee' },
];

export const StatusFilters: Story = {
  render: () => {
    const [selected, setSelected] = useState('all');
    return (
      <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border space-y-4">
        <FilterChipBar
          options={STATUS_OPTIONS}
          selectedId={selected}
          onSelect={setSelected}
          variant="amber"
          tone="soft"
          data-testid="status-filter-bar"
        />
        <div className="pt-3 border-t border-border/60">
          <FilterChipBar
            options={CATEGORY_OPTIONS}
            selectedId={selected === 'all' ? 'ALL' : selected}
            onSelect={setSelected}
            toggleDeselectId="ALL"
            variant="blue"
            size="sm"
          />
        </div>
      </div>
    );
  },
};

export const ScrollableSolidTags: Story = {
  render: () => {
    const [tag, setTag] = useState('skincare');
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border">
        <FilterChipBar
          options={TAG_OPTIONS}
          selectedId={tag}
          onSelect={setTag}
          toggleDeselectId="all"
          variant="amber"
          tone="solid"
          size="xs"
          scrollable
          prefix={
            <span className="text-[11px] text-slate-400 font-medium inline-flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3" /> Tags:
            </span>
          }
        />
      </div>
    );
  },
};
