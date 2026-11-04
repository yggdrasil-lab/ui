import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { BottomNav } from './BottomNav';
import { Clock, Sliders, UploadCloud, Dumbbell, TrendingUp } from 'lucide-react';

const meta: Meta<typeof BottomNav> = {
  title: 'Shell/BottomNav',
  component: BottomNav,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const MidasStyle: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('freedom');
    const tabs = [
      { id: 'freedom', label: 'Freedom', icon: <Clock className="w-4 h-4" /> },
      { id: 'simulator', label: 'Simulator', icon: <Sliders className="w-4 h-4" /> },
      { id: 'statement', label: 'Statement', icon: <UploadCloud className="w-4 h-4" /> },
    ];

    return (
      <div className="h-40 relative bg-background">
        <p className="text-xs text-slate-400 p-4 text-center">
          Viewport fixed bottom bar preview (Resize window or select mobile viewports)
        </p>
        <BottomNav tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>
    );
  },
};

export const KratosStyle: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('today');
    const tabs = [
      { id: 'today', label: 'Today', icon: <Dumbbell className="w-4 h-4" />, badgeDot: true },
      { id: 'progress', label: 'Progress', icon: <TrendingUp className="w-4 h-4" /> },
    ];

    return (
      <div className="h-40 relative bg-background">
        <p className="text-xs text-slate-400 p-4 text-center">
          Kratos style with active workout pulse badge
        </p>
        <BottomNav tabs={tabs} activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>
    );
  },
};
