import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadingState } from './LoadingState';

const meta: Meta<typeof LoadingState> = {
  title: 'Primitives/LoadingState',
  component: LoadingState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadingState>;

export const AmberSpinner: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto bg-card rounded-2xl border border-border">
      <LoadingState label="Loading wealth runway metrics..." variant="amber" />
    </div>
  ),
};

export const BlueSpinner: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto bg-card rounded-2xl border border-border">
      <LoadingState label="Syncing biometric readiness..." variant="blue" />
    </div>
  ),
};
