import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NumericKeypadModal } from '../components/inputs/NumericKeypadModal';
import { ChipSelector } from '../components/inputs/ChipSelector';
import { Button } from '../components/inputs/Button';

const meta: Meta<typeof NumericKeypadModal> = {
  title: 'Inputs/NumericKeypadModal',
  component: NumericKeypadModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumericKeypadModal>;

export const WorkoutSetEntry: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [weight, setWeight] = useState('82.5');
    return (
      <div>
        <Button variant="blue" onClick={() => setIsOpen(true)}>
          Open Set Weight Keypad
        </Button>
        <NumericKeypadModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Barbell Bench Press"
          subtitle="Set 2 - Target 82.5 kg"
          displayLabel="Load Weight"
          value={weight}
          unit="kg"
          variant="blue"
          allowDecimals={true}
          maxDecimalPlaces={2}
          submitLabel="Apply Value"
          onChange={setWeight}
          onSubmit={() => setIsOpen(false)}
        />
      </div>
    );
  },
};

export const QuickExpenseEntry: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState('18.50');
    const [category, setCategory] = useState('Dining');
    return (
      <div>
        <Button variant="amber" onClick={() => setIsOpen(true)}>
          Open Quick Expense Keypad
        </Button>
        <NumericKeypadModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Quick Log Expense"
          subtitle="Instant ledger entry"
          displayLabel="Expense Amount"
          value={amount}
          displayValue={`$${amount || '0'}`}
          unit="NZD"
          variant="amber"
          submitLabel="Log Expense"
          onChange={setAmount}
          onSubmit={() => setIsOpen(false)}
        >
          <ChipSelector
            options={['Dining', 'Groceries', 'Transport', 'Badminton']}
            selected={category}
            onChange={setCategory}
            variant="amber"
          />
        </NumericKeypadModal>
      </div>
    );
  },
};
