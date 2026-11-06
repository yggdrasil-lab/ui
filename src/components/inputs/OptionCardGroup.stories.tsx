import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OptionCardGroup } from './OptionCardGroup';

const meta: Meta<typeof OptionCardGroup> = {
  title: 'Inputs/OptionCardGroup',
  component: OptionCardGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OptionCardGroup>;

export const WorkoutEffortRating: Story = {
  render: () => {
    const [rating, setRating] = useState('optimal');
    return (
      <div className="w-96 bg-card p-5 rounded-2xl border border-border">
        <OptionCardGroup
          label="How much effort did this take?"
          value={rating}
          onChange={setRating}
          options={[
            {
              value: 'too_easy',
              icon: '🟢',
              label: 'Too Easy',
              description: 'Plenty left in the tank. Ready for weight bump next time.',
              accent: 'emerald',
            },
            {
              value: 'optimal',
              icon: '🟡',
              label: 'Just Right / Optimal',
              description: 'Hit true technical failure on target sets. Solid fatigue.',
              accent: 'amber',
            },
            {
              value: 'hard',
              icon: '🟠',
              label: 'Challenging / Hard',
              description: 'Pushed to the limits. Will need recovery before next session.',
              accent: 'orange',
            },
            {
              value: 'too_hard',
              icon: '🔴',
              label: 'Too Hard / Cooked',
              description: 'Missed target reps, form breakdown, or joints felt uncomfortable.',
              accent: 'rose',
            },
          ]}
        />
      </div>
    );
  },
};
