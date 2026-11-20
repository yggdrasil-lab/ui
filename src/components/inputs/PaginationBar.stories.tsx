import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PaginationBar } from './PaginationBar';

const meta: Meta<typeof PaginationBar> = {
  title: 'Inputs/PaginationBar',
  component: PaginationBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaginationBar>;

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <div className="max-w-2xl mx-auto">
        <PaginationBar
          page={page}
          pageSize={25}
          totalItems={142}
          onPageChange={setPage}
        />
      </div>
    );
  },
};

export const StatesShowcase: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto space-y-4">
      <PaginationBar
        page={1}
        pageSize={25}
        totalItems={142}
        onPageChange={() => {}}
      />
      <PaginationBar
        page={6}
        pageSize={25}
        totalItems={142}
        onPageChange={() => {}}
      />
      <PaginationBar
        page={3}
        pageSize={25}
        totalItems={142}
        loading
        onPageChange={() => {}}
      />
      <PaginationBar
        page={1}
        pageSize={25}
        totalItems={0}
        onPageChange={() => {}}
      />
    </div>
  ),
};
