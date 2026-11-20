import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GlassCard } from './GlassCard';
import { KeyValueList } from './KeyValueList';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof KeyValueList> = {
  title: 'Feedback/KeyValueList',
  component: KeyValueList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KeyValueList>;

export const TwoColumnAuditGrid: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <GlassCard>
        <KeyValueList
          columns={2}
          items={[
            {
              label: 'Delivery Status',
              value: <StatusBadge label="Delivered" variant="success" />,
            },
            {
              label: 'Event Type',
              value: 'webhook.alert.fired',
              mono: true,
            },
            {
              label: 'Notification ID',
              value: 'ntf_01JDF9Z8Q7N4X2P8K6W3M1R5T0',
              copyValue: 'ntf_01JDF9Z8Q7N4X2P8K6W3M1R5T0',
              mono: true,
            },
            {
              label: 'Trace Correlation',
              value: '9c61f84e-2e4d-45e9-a492-b783c1c4e91f',
              copyValue: '9c61f84e-2e4d-45e9-a492-b783c1c4e91f',
              mono: true,
            },
            {
              label: 'Route Target',
              value: 'discord:#infra-alerts',
              copyValue: 'discord:#infra-alerts',
            },
            {
              label: 'Received At (NZT)',
              value: '2026-11-20 08:03:48',
              mono: true,
            },
          ]}
        />
      </GlassCard>
    </div>
  ),
};

export const SingleColumn: Story = {
  render: () => (
    <div className="max-w-md mx-auto">
      <GlassCard>
        <KeyValueList
          columns={1}
          items={[
            {
              label: 'Source Service',
              value: 'uptime-kuma-gaia',
            },
            {
              label: 'SHA-256 Digest',
              value: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
              copyValue: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
              mono: true,
            },
            {
              label: 'Retry Attempts',
              value: '0 / 3',
            },
          ]}
        />
      </GlassCard>
    </div>
  ),
};

export const EmptyFallback: Story = {
  render: () => (
    <div className="max-w-md mx-auto">
      <GlassCard>
        <KeyValueList items={[]} emptyMessage="No audit metadata recorded for this event." />
      </GlassCard>
    </div>
  ),
};
