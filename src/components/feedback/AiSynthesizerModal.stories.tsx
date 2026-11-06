import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AiSynthesizerModal } from './AiSynthesizerModal';
import { Button } from '../inputs/Button';

const meta: Meta<typeof AiSynthesizerModal> = {
  title: 'Feedback/AiSynthesizerModal',
  component: AiSynthesizerModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AiSynthesizerModal>;

export const WorkoutSynthesizer: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="p-6">
        <Button variant="blue" icon={<span>⚡</span>} onClick={() => setOpen(true)}>
          Open Workout AI Synthesizer
        </Button>
        <AiSynthesizerModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Adaptive Workout Synthesizer"
          subtitle="Hypertrophy Science & Biomechanics Grounding"
          citationTitle="Israetel (Volume Landmarks) & Helms (RIR Autoregulation)"
          pillars={[
            {
              label: 'Volume Landmarks (RP)',
              description: 'Sets scaled between MEV (2 sets deload on fatigue) and MAV (3+ overload sets).',
            },
            {
              label: 'RIR Autoregulation',
              description: 'Target RIR dictated by recovery score (RIR 1-2 on primed days; RIR 3-4 on fatigue).',
            },
          ]}
          submitLabel="Synthesize Training"
          onSynthesize={async () => {
            await new Promise((r) => setTimeout(r, 400));
          }}
        />
      </div>
    );
  },
};
