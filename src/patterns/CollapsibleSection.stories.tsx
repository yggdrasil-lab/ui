import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Trash2 } from 'lucide-react';
import { CollapsibleSection } from './CollapsibleSection';
import { Button } from '../primitives/Button';
import { StatusBadge } from '../primitives/StatusBadge';

const meta: Meta<typeof CollapsibleSection> = {
  title: 'Patterns/CollapsibleSection',
  component: CollapsibleSection,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CollapsibleSection>;

export const ResearchAccordion: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto bg-card p-5 rounded-2xl border border-border space-y-4">
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

export const ControlledWithHeaderActions: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const [actionCount, setActionCount] = useState(0);

    return (
      <div className="w-full max-w-md mx-auto bg-card p-4 rounded-2xl border border-border space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>State: {open ? 'Open' : 'Closed'}</span>
          <span>Action clicks: {actionCount}</span>
        </div>
        <CollapsibleSection
          variant="card"
          open={open}
          onOpenChange={setOpen}
          toggleTestId="controlled-section-toggle"
          title="Receipt #408 - Countdown Metro"
          expandLabel="Details"
          collapseLabel="Hide"
          headerActions={
            <div className="flex items-center gap-1.5">
              <StatusBadge label="Matched" variant="success" size="xs" />
              <Button
                variant="ghost"
                size="xs"
                aria-label="Delete receipt"
                icon={<Trash2 className="w-3.5 h-3.5 text-rose-400" />}
                onClick={() => setActionCount((c) => c + 1)}
              />
            </div>
          }
        >
          <div className="text-xs text-slate-300 space-y-1">
            <div>Total: $68.40 NZD (4 itemized entries)</div>
            <div className="text-slate-400">Clicking the delete icon does not toggle this panel.</div>
          </div>
        </CollapsibleSection>
      </div>
    );
  },
};
