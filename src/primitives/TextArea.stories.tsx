import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Primitives/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const DefaultAndError: Story = {
  render: () => {
    const [notes, setNotes] = useState('Paused 2s at bottom, felt snappy on top set.');

    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
        <TextArea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add session notes..."
          variant="blue"
        />

        <TextArea
          defaultValue="Missing required explanation"
          error
          rows={2}
        />

        <TextArea
          defaultValue="Locked historical summary"
          disabled
          rows={2}
        />
      </div>
    );
  },
};
