import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AppShell } from './AppShell';
import { AppHeader } from './AppHeader';
import { BottomNav } from './BottomNav';
import { Clock, Sliders, UploadCloud } from 'lucide-react';

const meta: Meta<typeof AppShell> = {
  title: 'Shell/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  render: () => {
    const tabs = [
      { id: 'today', label: 'Today', icon: <Clock className="w-4 h-4" /> },
      { id: 'simulate', label: 'Simulate', icon: <Sliders className="w-4 h-4" /> },
      { id: 'upload', label: 'Upload', icon: <UploadCloud className="w-4 h-4" /> },
    ];

    return (
      <AppShell
        header={
          <AppHeader
            brandInitial="Y"
            title="Yggdrasil PWA"
            subtitle="Homelab Cloud"
            onRefresh={() => console.log('refreshing')}
          />
        }
        bottomNav={
          <BottomNav
            tabs={tabs}
            activeTab="today"
            onChangeTab={(id) => console.log('tab clicked', id)}
          />
        }
      >
        <div className="p-6 bg-card border border-border rounded-2xl space-y-4">
          <h2 className="text-xl font-bold">App Content Container</h2>
          <p className="text-sm text-slate-400">
            This demonstrates the shared AppShell with fixed header and viewport locked bottom navigation.
          </p>
        </div>
      </AppShell>
    );
  },
};
