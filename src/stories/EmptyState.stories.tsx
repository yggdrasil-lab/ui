import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Inbox } from 'lucide-react';
import { EmptyState } from '../components/feedback/EmptyState';
import { Button } from '../components/inputs/Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const DashedPlaceholder: Story = {
  render: () => (
    <div className="w-[420px]">
      <EmptyState
        icon={<Inbox className="w-8 h-8" />}
        title="No matching transactions"
        description="Adjust your search query or category filter to view historical ledger items."
        action={<Button variant="amber" size="xs">Reset Filters</Button>}
      />
    </div>
  ),
};

export const GlassVariant: Story = {
  render: () => (
    <div className="w-[420px]">
      <EmptyState
        variant="glass"
        title="No sessions logged today"
        description="Select a recommended strength routine or start an ad-hoc session."
      />
    </div>
  ),
};
