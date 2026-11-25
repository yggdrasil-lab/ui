import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InlineNotesEditor } from './InlineNotesEditor';

const meta: Meta<typeof InlineNotesEditor> = {
  title: 'Patterns/InlineNotesEditor',
  component: InlineNotesEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InlineNotesEditor>;

export const PopulatedAndEmpty: Story = {
  render: () => {
    const [note, setNote] = useState<string | null>('Applies cleanly after morning cleanser. Restock at 30% remaining.');
    const [emptyNote, setEmptyNote] = useState<string | null>(null);

    return (
      <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border space-y-4">
        <InlineNotesEditor
          title="Notes & Observations"
          value={note}
          onSave={async (next) => {
            setNote(next.trim() || null);
          }}
        />
        <InlineNotesEditor
          title="Usage Notes"
          value={emptyNote}
          emptyText="No notes added yet. Click Add Note to record observations."
          onSave={async (next) => {
            setEmptyNote(next.trim() || null);
          }}
          variant="blue"
        />
      </div>
    );
  },
};

export const RejectedSaveDemo: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border">
      <InlineNotesEditor
        title="Failing Save Check"
        value="Initial saved observation."
        onSave={async () => {
          throw new Error('Server rejected update (network offline).');
        }}
      />
    </div>
  ),
};
