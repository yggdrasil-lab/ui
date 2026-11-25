import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { TactileKeypad } from './TactileKeypad';

const meta: Meta<typeof Modal> = {
  title: 'Primitives/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const InteractiveModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('42.00');

    return (
      <div className="w-full max-w-sm mx-auto p-6 text-center">
        <button
          type="button"
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
              type="button"
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

const StickyFooterActions: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="flex items-center justify-end gap-2">
    <button
      type="button"
      onClick={onClose}
      className="px-4 py-2 rounded-xl bg-background border border-border text-xs font-semibold text-slate-300 hover:text-slate-100"
    >
      Cancel
    </button>
    <button
      type="button"
      onClick={onClose}
      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white"
    >
      Save Changes
    </button>
  </div>
);

const StickyFooterPreview: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto p-6 text-center">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl shadow hover:bg-blue-500"
      >
        Open Scrollable Sheet
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Edit Workout Session"
        subtitle="Sticky action bar remains pinned while content scrolls"
        footer={<StickyFooterActions onClose={() => setOpen(false)} />}
      >
        <div className="space-y-3 text-xs text-slate-300">
          {Array.from({ length: 12 }, (_, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-background border border-border/70"
            >
              Set {idx + 1}: Pendlay Row - 85 kg x 8 reps
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export const WithStickyFooter: Story = {
  render: () => <StickyFooterPreview />,
};
