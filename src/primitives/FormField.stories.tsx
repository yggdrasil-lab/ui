import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { TextInput } from './TextInput';
import { TextArea } from './TextArea';
import { SelectInput } from './SelectInput';

const meta: Meta<typeof FormField> = {
  title: 'Primitives/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const DefaultWithHint: Story = {
  render: () => {
    const [name, setName] = useState('Pendlay Row');
    return (
      <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border">
        <FormField
          label="Exercise Name"
          htmlFor="exercise-name"
          required
          hint="Use a consistent movement name across mesocycles."
          rightSlot={<span className="font-mono">{name.length}/60</span>}
        >
          <TextInput
            id="exercise-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Barbell Squat"
            variant="blue"
          />
        </FormField>
      </div>
    );
  },
};

export const WithErrorState: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-4">
      <FormField
        label="Monthly Budget Cap"
        htmlFor="budget-cap"
        required
        error="Enter a positive amount greater than $0."
      >
        <TextInput
          id="budget-cap"
          type="number"
          defaultValue="-50"
          error
          variant="amber"
        />
      </FormField>

      <FormField
        label="Category"
        htmlFor="budget-category"
        hint="Groups recurring transactions in monthly rollup."
      >
        <SelectInput
          id="budget-category"
          defaultValue="groceries"
          variant="amber"
          options={[
            { value: 'groceries', label: 'Groceries' },
            { value: 'utilities', label: 'Utilities' },
            { value: 'transport', label: 'Transport' },
          ]}
        />
      </FormField>

      <FormField label="Notes" htmlFor="budget-notes">
        <TextArea
          id="budget-notes"
          placeholder="Optional context..."
          variant="amber"
        />
      </FormField>
    </div>
  ),
};
