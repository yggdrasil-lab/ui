import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingState } from '../components/feedback/LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Feedback/LoadingState',
  component: LoadingState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingState>;

export const AmberSpinner: Story = {
  render: () => (
    <div className="w-[360px] bg-card rounded-2xl border border-border">
      <LoadingState label="Loading wealth runway metrics..." variant="amber" />
    </div>
  ),
};

export const BlueSpinner: Story = {
  render: () => (
    <div className="w-[360px] bg-card rounded-2xl border border-border">
      <LoadingState label="Syncing biometric readiness..." variant="blue" />
    </div>
  ),
};
