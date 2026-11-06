import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GoalProgressCard } from './GoalProgressCard';

const meta: Meta<typeof GoalProgressCard> = {
  title: 'Feedback/GoalProgressCard',
  component: GoalProgressCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GoalProgressCard>;

export const WeightGoalTracker: Story = {
  args: {
    eyebrow: 'Goal: Reach 80 kg',
    currentValueLabel: '86.7 kg',
    deltaLabel: '(-3.3 kg)',
    deltaPositive: true,
    milestoneLabel: 'Next Milestone',
    milestoneValue: '85.0 kg',
    progressPercent: 34,
    startLabel: 'Start: 90.0 kg',
    centerLabel: '34% towards 80 kg',
    targetLabel: 'Target: 80.0 kg',
    variant: 'blue',
  },
  render: (args) => (
    <div className="w-96">
      <GoalProgressCard {...args} />
    </div>
  ),
};
