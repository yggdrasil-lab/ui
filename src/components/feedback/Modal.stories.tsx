import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { TactileKeypad } from '../inputs/TactileKeypad';

const meta: Meta<typeof Modal> = {
  title: 'Feedback/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const InteractiveModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('42.00');

    return (
      <div className="p-8 text-center">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl shadow hover:bg-amber-400"
        >
          Open Quick Log Modal
        </button>

        <Modal isOpen={open} onClose={() => setOpen(false)} title="Quick Log Amount">
          <div className="space-y-4">
            <div className="p-3 bg-background rounded-xl border border-border text-center">
              <span className="text-3xl font-extrabold text-amber-400">${value || '0'}</span>
            </div>
            <TactileKeypad value={value} onChange={setValue} />
            <button
              onClick={() => setOpen(false)}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 font-bold text-slate-950 rounded-xl"
            >
              Confirm Log
            </button>
          </div>
        </Modal>
      </div>
    );
  },
};
