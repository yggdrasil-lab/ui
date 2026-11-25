import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LoadMoreFooter } from './LoadMoreFooter';

const meta: Meta<typeof LoadMoreFooter> = {
  title: 'Patterns/LoadMoreFooter',
  component: LoadMoreFooter,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoadMoreFooter>;

export const InteractivePagination: Story = {
  render: () => {
    const [loaded, setLoaded] = useState(25);
    const total = 64;
    return (
      <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border space-y-5">
        <LoadMoreFooter
          loadedCount={loaded}
          totalCount={total}
          onLoadMore={() => setLoaded((prev) => Math.min(total, prev + 25))}
          loadMoreTestId="demo-load-more-btn"
          onDone={() => {}}
        />
        <div className="pt-3 border-t border-border/60">
          <LoadMoreFooter
            loadedCount={64}
            totalCount={64}
            onLoadMore={() => {}}
            onDone={() => {}}
            doneLabel="Close"
          />
        </div>
      </div>
    );
  },
};
