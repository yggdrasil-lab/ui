import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { LayoutDashboard, Sliders, UploadCloud, PlusCircle } from 'lucide-react';

const meta: Meta<typeof AppHeader> = {
  title: 'Shell/AppHeader',
  component: AppHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppHeader>;

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1500);
    };

    const tabs = [
      { id: 'overview', label: 'Full Dashboard', icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
      { id: 'simulator', label: 'Time Machine', icon: <Sliders className="w-3.5 h-3.5" /> },
      { id: 'statement', label: 'Statement Hub', icon: <UploadCloud className="w-3.5 h-3.5" /> },
    ];

    return (
      <AppHeader
        brandInitial="M"
        brandColor="bg-amber-500 text-slate-950"
        title="Midas"
        subtitle="Freedom Clock"
        tabs={tabs}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onRefresh={handleRefresh}
        isRefreshing={refreshing}
        actions={
          <button className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-semibold shadow">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Log Expense</span>
          </button>
        }
      />
    );
  },
};

export const HealthAreaKratos: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1500);
    };

    return (
      <AppHeader
        brandInitial="K"
        brandColor="bg-blue-600 text-white"
        title="Kratos"
        subtitle="Strength & Circadian Fasting"
        onRefresh={handleRefresh}
        isRefreshing={refreshing}
      />
    );
  },
};
