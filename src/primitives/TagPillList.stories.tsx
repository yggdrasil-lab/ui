import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TagPillList } from './TagPillList';

const meta: Meta<typeof TagPillList> = {
  title: 'Primitives/TagPillList',
  component: TagPillList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagPillList>;

const InteractiveTagPillPreview = () => {
  const [tags, setTags] = useState(['weekly-shop', 'pantry']);

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border">
      <TagPillList
        tags={tags}
        onAddTag={(next) => setTags((prev) => [...prev, next])}
        onRemoveTag={(target) => setTags((prev) => prev.filter((t) => t !== target))}
      />
    </div>
  );
};

export const InteractiveAmber: Story = {
  render: () => <InteractiveTagPillPreview />,
};

export const SlateReadOnly: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border">
      <TagPillList tags={['hypertrophy', 'upper-body', 'rpe-8']} variant="slate" />
    </div>
  ),
};
