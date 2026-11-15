import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmActionBox } from '../components/feedback/ConfirmActionBox';

const meta: Meta<typeof ConfirmActionBox> = {
  title: 'Feedback/ConfirmActionBox',
  component: ConfirmActionBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConfirmActionBox>;

export const DangerDelete: Story = {
  render: () => (
    <div className="w-[400px]">
      <ConfirmActionBox
        variant="danger"
        title="Delete workout session?"
        description="This will permanently remove all logged sets and volume from your training history."
        confirmLabel="Delete Session"
        cancelLabel="Keep"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    </div>
  ),
};

export const WarningAction: Story = {
  render: () => (
    <div className="w-[400px]">
      <ConfirmActionBox
        variant="warning"
        title="Discard unsaved set changes?"
        description="Modified barbell weights and reps have not been saved to the server."
        confirmLabel="Discard Changes"
        cancelLabel="Continue Editing"
        onConfirm={() => {}}
        onCancel={() => {}}
      />
    </div>
  ),
};
