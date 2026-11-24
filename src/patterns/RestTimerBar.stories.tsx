import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RestTimerBar } from './RestTimerBar';
import { useRestTimer } from '../hooks/useRestTimer';

const meta: Meta<typeof RestTimerBar> = {
  title: 'Patterns/RestTimerBar',
  component: RestTimerBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RestTimerBar>;

const noop = () => {};

export const Idle: Story = {
  render: () => (
    <div className="w-[348px] sm:w-[420px]">
      <RestTimerBar
        remainingSeconds={0}
        totalSeconds={0}
        isRunning={false}
        isPaused={false}
        isComplete={false}
        onStart={noop}
        onPause={noop}
        onResume={noop}
        onAdjust={noop}
        onDismiss={noop}
        variant="blue"
      />
    </div>
  ),
};

export const ActiveCountdown: Story = {
  render: () => (
    <div className="w-[348px] sm:w-[420px]">
      <RestTimerBar
        remainingSeconds={54}
        totalSeconds={90}
        isRunning={true}
        isPaused={false}
        isComplete={false}
        onStart={noop}
        onPause={noop}
        onResume={noop}
        onAdjust={noop}
        onDismiss={noop}
        variant="blue"
      />
    </div>
  ),
};

export const Paused: Story = {
  render: () => (
    <div className="w-[348px] sm:w-[420px]">
      <RestTimerBar
        remainingSeconds={42}
        totalSeconds={90}
        isRunning={false}
        isPaused={true}
        isComplete={false}
        onStart={noop}
        onPause={noop}
        onResume={noop}
        onAdjust={noop}
        onDismiss={noop}
        variant="blue"
      />
    </div>
  ),
};

export const Complete: Story = {
  render: () => (
    <div className="w-[348px] sm:w-[420px]">
      <RestTimerBar
        remainingSeconds={0}
        totalSeconds={90}
        isRunning={false}
        isPaused={false}
        isComplete={true}
        onStart={noop}
        onPause={noop}
        onResume={noop}
        onAdjust={noop}
        onDismiss={noop}
        variant="blue"
      />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const timer = useRestTimer(90);
    return (
      <div className="w-[348px] sm:w-[420px]">
        <RestTimerBar
          remainingSeconds={timer.remainingSeconds}
          totalSeconds={timer.totalSeconds}
          isRunning={timer.isRunning}
          isPaused={timer.isPaused}
          isComplete={timer.isComplete}
          onStart={timer.startTimer}
          onPause={timer.pauseTimer}
          onResume={timer.resumeTimer}
          onAdjust={timer.adjustTimer}
          onDismiss={timer.dismissTimer}
          variant="blue"
        />
      </div>
    );
  },
};
