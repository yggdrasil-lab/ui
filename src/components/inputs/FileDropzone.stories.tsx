import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileDropzone } from './FileDropzone';

const meta: Meta<typeof FileDropzone> = {
  title: 'Inputs/FileDropzone',
  component: FileDropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileDropzone>;

export const Default: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div className="w-[420px]">
        <FileDropzone
          file={file}
          onFileChange={setFile}
          title="Drop your PDF/CSV statement here, or browse"
          description="Extracts official closing balances and deduplicated transactions"
          variant="amber"
        />
      </div>
    );
  },
};

export const WithSelectedFile: Story = {
  render: () => {
    const mockFile = new File(['test,data'], 'asb-october-statement.pdf', { type: 'application/pdf' });
    const [file, setFile] = useState<File | null>(mockFile);
    return (
      <div className="w-[420px]">
        <FileDropzone
          file={file}
          onFileChange={setFile}
          variant="amber"
        />
      </div>
    );
  },
};
