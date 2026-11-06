import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CollapsibleSection } from './CollapsibleSection';

const meta: Meta<typeof CollapsibleSection> = {
  title: 'Feedback/CollapsibleSection',
  component: CollapsibleSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const ResearchAccordion: Story = {
  render: () => (
    <div className="w-96 bg-card p-5 rounded-2xl border border-border space-y-4">
      <CollapsibleSection
        variant="inline"
        icon="📚"
        title="Israetel (Volume Landmarks) & Helms (Autoregulation RIR)"
      >
        <div><strong>Israetel (RP):</strong> Sets scaled between MEV and MAV.</div>
        <div><strong>Helms:</strong> Target RIR dictated by recovery score.</div>
      </CollapsibleSection>

      <CollapsibleSection
        variant="card"
        title="Older Sessions Archive (12)"
      >
        <div className="text-xs text-slate-400">Archived workout history items appear here.</div>
      </CollapsibleSection>
    </div>
  ),
};
