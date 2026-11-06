import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlertBanner } from './AlertBanner';
import { Button } from '../inputs/Button';

const meta: Meta<typeof AlertBanner> = {
  title: 'Feedback/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const AutoregulationInfo: Story = {
  render: () => (
    <div className="w-96 space-y-3">
      <AlertBanner
        variant="info"
        icon="🧠"
        title="Smart Autoregulation"
      >
        Court session scheduled at 7:00 PM. Window shifted for pre-match glycogen and post-match recovery.
      </AlertBanner>
      <AlertBanner
        variant="error"
        title="Failed to load financial metrics"
        action={<Button variant="rose" size="sm">Retry</Button>}
      >
        Network connection timed out while reaching Plutus API.
      </AlertBanner>
    </div>
  ),
};
