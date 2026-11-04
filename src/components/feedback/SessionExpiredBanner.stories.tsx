import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SessionExpiredBanner } from './SessionExpiredBanner';
import { Lock } from 'lucide-react';

const meta: Meta<typeof SessionExpiredBanner> = {
  title: 'Feedback/SessionExpiredBanner',
  component: SessionExpiredBanner,
};

export default meta;
type Story = StoryObj<typeof SessionExpiredBanner>;

export const Default: Story = {
  render: () => (
    <div className="p-6 bg-background max-w-lg min-h-[160px]">
      <SessionExpiredBanner
        onReauth={() => alert('Re-authenticating (window reload triggered)')}
      />
    </div>
  ),
};

export const CustomMessageAndAction: Story = {
  render: () => (
    <div className="p-6 bg-background max-w-lg min-h-[160px]">
      <SessionExpiredBanner
        message="Your session timed out. Please sign in to continue."
        actionLabel="Sign In"
        onReauth={() => alert('Sign In clicked')}
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div className="p-6 bg-background max-w-lg min-h-[160px]">
      <SessionExpiredBanner
        icon={<Lock className="w-5 h-5 text-amber-400 shrink-0" />}
        message="Authentik forward-auth session expired"
        actionLabel="Unlock"
        onReauth={() => alert('Unlock clicked')}
      />
    </div>
  ),
};
