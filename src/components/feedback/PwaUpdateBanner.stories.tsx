import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PwaUpdateBanner } from './PwaUpdateBanner';

const meta: Meta<typeof PwaUpdateBanner> = {
  title: 'Feedback/PwaUpdateBanner',
  component: PwaUpdateBanner,
};

export default meta;
type Story = StoryObj<typeof PwaUpdateBanner>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-background max-w-lg">
      <PwaUpdateBanner
        message="New version available"
        reloadLabel="Reload to update"
        laterLabel="Later"
        onReload={() => alert('Reloading...')}
        onDismiss={() => alert('Dismissed')}
      />
    </div>
  ),
};
