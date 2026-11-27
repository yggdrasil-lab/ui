import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AlertBanner } from './AlertBanner';
import { Button } from './Button';

const meta: Meta<typeof AlertBanner> = {
  title: 'Primitives/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const AutoregulationInfo: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto space-y-3">
      <AlertBanner
        variant="info"
        icon="🧠"
        title="Smart Autoregulation"
        data-testid="alert-banner-info"
      >
        Court session scheduled at 7:00 PM. Window shifted for pre-match glycogen and post-match recovery.
      </AlertBanner>
      <AlertBanner
        variant="error"
        title="Failed to load financial metrics"
        action={<Button variant="rose" size="sm">Retry</Button>}
        data-testid="alert-banner-error"
      >
        Network connection timed out while reaching Plutus API.
      </AlertBanner>
    </div>
  ),
};
