import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PayloadViewer } from './PayloadViewer';

const meta: Meta<typeof PayloadViewer> = {
  title: 'Patterns/PayloadViewer',
  component: PayloadViewer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PayloadViewer>;

const SAMPLE_WEBHOOK_PAYLOAD = {
  event_id: 'evt_01JDF9Z8Q7N4X2P8K6W3M1R5T0',
  source: 'uptime-kuma',
  severity: 'critical',
  headers: {
    authorization: 'Bearer super-secret-should-redact',
    'x-api-key': 'raw-api-key-should-redact',
    'content-type': 'application/json',
  },
  monitor: {
    name: 'gaia-traefik-ingress',
    endpoint:
      'https://auth.yggdrasil.internal/application/o/authorize/?client_id=audit-dashboard-very-long-nonbreaking-query-string-parameter-to-verify-mobile-scroll-containment',
    status: 502,
  },
  tags: ['swarm', 'ingress', 'priority-1'],
};

const SAMPLE_LONG_LOG = Array.from({ length: 28 }, (_, idx) => {
  const num = String(idx + 1).padStart(2, '0');
  return `[2026-11-20T08:03:${num}Z] INFO  iris.dispatcher route=discord:#infra-alerts attempt=1 status=204 latency_ms=${42 + idx}`;
}).join('\n');

export const CollapsedWebhook: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <PayloadViewer
        title="Inbound Webhook Payload"
        subtitle="POST /v1/events/ingest"
        payload={SAMPLE_WEBHOOK_PAYLOAD}
      />
    </div>
  ),
};

export const ExpandedSanitizedJson: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <PayloadViewer
        title="Sanitized Event Envelope"
        subtitle="Redacts authorization and x-api-key automatically"
        payload={SAMPLE_WEBHOOK_PAYLOAD}
        defaultExpanded
      />
    </div>
  ),
};

export const ExpandedTextLog: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <PayloadViewer
        title="Dispatcher Delivery Trace"
        subtitle="Bounded vertical and horizontal scroll"
        payload={SAMPLE_LONG_LOG}
        defaultExpanded
      />
    </div>
  ),
};

export const EmptyPayload: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <PayloadViewer
        title="Response Body"
        subtitle="204 No Content"
        payload={null}
        defaultExpanded
        emptyMessage="No response body returned by upstream target."
      />
    </div>
  ),
};
