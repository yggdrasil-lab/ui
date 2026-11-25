import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightLeft, FolderTree, Receipt, SlidersHorizontal } from 'lucide-react';
import { ActionTile } from './ActionTile';
import { StatusBadge } from '../primitives/StatusBadge';

const meta: Meta<typeof ActionTile> = {
  title: 'Patterns/ActionTile',
  component: ActionTile,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ActionTile>;

export const ToolsGrid: Story = {
  render: () => (
    <div className="w-full max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 bg-card rounded-2xl border border-border">
      <ActionTile
        data-testid="tile-receipts"
        variant="amber"
        icon={<Receipt className="w-4 h-4" />}
        title="Receipts & Longevity"
        subtitle="3 receipts awaiting ledger match"
        badge={<StatusBadge variant="warning" size="xs" label="2 Needs Review" />}
        onClick={() => {}}
      />
      <ActionTile
        data-testid="tile-rules"
        variant="blue"
        icon={<SlidersHorizontal className="w-4 h-4" />}
        title="Categorization Rules"
        subtitle="Auto-tag merchants & recurrence"
        onClick={() => {}}
      />
      <ActionTile
        data-testid="tile-transfers"
        variant="emerald"
        icon={<ArrowRightLeft className="w-4 h-4" />}
        title="Transfer & FX Reconciliation"
        subtitle="Pair internal transfers & cross-currency legs"
        onClick={() => {}}
      />
      <ActionTile
        data-testid="tile-categories"
        variant="purple"
        icon={<FolderTree className="w-4 h-4" />}
        title="Categories & Hierarchy"
        subtitle="Manage classes & 52w spread"
        disabled
      />
    </div>
  ),
};
