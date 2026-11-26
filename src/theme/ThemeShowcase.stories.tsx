import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Activity, Calendar, Clock, Compass, Dumbbell, Flame, Home, MapPin, Sparkles, Wallet } from 'lucide-react';
import { MetricHero } from '../patterns/MetricHero';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';
import { ProgressBar } from '../primitives/ProgressBar';
import { SegmentedControl, type SegmentedControlOption } from '../primitives/SegmentedControl';
import { AppHeader } from '../shells/AppHeader';
import { BottomNav, type BottomNavTabItem } from '../shells/BottomNav';
import { APP_THEME_META, type AppTheme } from './themes';

interface ThemePanelSpec {
  theme: Exclude<AppTheme, 'default'>;
  brandInitial: string;
  title: string;
  heroTitle: string;
  heroValue: string;
  heroUnit: string;
  badgeLabel: string;
  progressLabel: string;
  progressValue: number;
  primaryAction: string;
  secondaryAction: string;
  segments: SegmentedControlOption[];
  navTabs: BottomNavTabItem[];
}

const THEME_PANEL_SPECS: readonly ThemePanelSpec[] = [
  {
    theme: 'midas',
    brandInitial: 'M',
    title: 'Midas Ledger',
    heroTitle: 'Freedom Runway',
    heroValue: '184',
    heroUnit: 'Weeks',
    badgeLabel: 'On Pace',
    progressLabel: 'Monthly Savings Goal',
    progressValue: 74,
    primaryAction: 'Log Expense',
    secondaryAction: 'Inspect',
    segments: [
      { id: 'overview', label: 'Overview' },
      { id: 'budgets', label: 'Budgets' },
      { id: 'goals', label: 'Goals' },
    ],
    navTabs: [
      { id: 'overview', label: 'Home', icon: <Home className="w-4 h-4" /> },
      { id: 'budgets', label: 'Ledger', icon: <Wallet className="w-4 h-4" /> },
      { id: 'goals', label: 'Runway', icon: <Sparkles className="w-4 h-4" /> },
    ],
  },
  {
    theme: 'kratos',
    brandInitial: 'K',
    title: 'Kratos Forge',
    heroTitle: 'Readiness Index',
    heroValue: '92',
    heroUnit: 'Score',
    badgeLabel: 'Peak Output',
    progressLabel: 'Weekly Volume Target',
    progressValue: 82,
    primaryAction: 'Start Set',
    secondaryAction: 'History',
    segments: [
      { id: 'overview', label: 'Session' },
      { id: 'budgets', label: 'Volume' },
      { id: 'goals', label: 'PRs' },
    ],
    navTabs: [
      { id: 'overview', label: 'Train', icon: <Dumbbell className="w-4 h-4" /> },
      { id: 'budgets', label: 'Strain', icon: <Flame className="w-4 h-4" /> },
      { id: 'goals', label: 'Vitals', icon: <Activity className="w-4 h-4" /> },
    ],
  },
  {
    theme: 'kairos',
    brandInitial: 'T',
    title: 'Kairos Dusk',
    heroTitle: 'Evening Focus',
    heroValue: '42',
    heroUnit: 'Min',
    badgeLabel: 'Deep Calm',
    progressLabel: 'Wind-Down Cadence',
    progressValue: 64,
    primaryAction: 'Begin Block',
    secondaryAction: 'Journal',
    segments: [
      { id: 'overview', label: 'Ritual' },
      { id: 'budgets', label: 'Cadence' },
      { id: 'goals', label: 'Notes' },
    ],
    navTabs: [
      { id: 'overview', label: 'Now', icon: <Clock className="w-4 h-4" /> },
      { id: 'budgets', label: 'Rhythm', icon: <Activity className="w-4 h-4" /> },
      { id: 'goals', label: 'Reflect', icon: <Sparkles className="w-4 h-4" /> },
    ],
  },
  {
    theme: 'odysseus',
    brandInitial: 'O',
    title: 'Odysseus Atlas',
    heroTitle: 'Trip Readiness',
    heroValue: '12',
    heroUnit: 'Days',
    badgeLabel: 'Route Locked',
    progressLabel: 'Itinerary Confirmed',
    progressValue: 86,
    primaryAction: 'Add Stop',
    secondaryAction: 'Route Map',
    segments: [
      { id: 'overview', label: 'Route' },
      { id: 'budgets', label: 'Stays' },
      { id: 'goals', label: 'Budget' },
    ],
    navTabs: [
      { id: 'overview', label: 'Atlas', icon: <Compass className="w-4 h-4" /> },
      { id: 'budgets', label: 'Stops', icon: <MapPin className="w-4 h-4" /> },
      { id: 'goals', label: 'Days', icon: <Calendar className="w-4 h-4" /> },
    ],
  },
];

const ThemePanelBody: React.FC<{
  spec: ThemePanelSpec;
  segment: string;
  onSegmentChange: (id: string) => void;
}> = ({ spec, segment, onSegmentChange }) => (
  <div className="p-4 space-y-4">
    <MetricHero
      variant="brand"
      title={spec.heroTitle}
      primaryValue={spec.heroValue}
      primaryUnit={spec.heroUnit}
      badge={{ label: spec.badgeLabel, variant: 'amber' }}
    >
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{spec.progressLabel}</span>
          <span className="font-mono text-foreground">{spec.progressValue}%</span>
        </div>
        <ProgressBar
          value={spec.progressValue}
          tone="brand"
          variant="brand"
          label={spec.progressLabel}
        />
      </div>
    </MetricHero>

    <GlassCard padding="md" className="space-y-3">
      <SegmentedControl
        options={spec.segments}
        value={segment}
        onChange={onSegmentChange}
        variant="brand"
        fullWidth
        idPrefix={`theme-${spec.theme}`}
      />
      <div className="grid grid-cols-2 gap-2">
        <Button variant="brand" size="sm" fullWidth>
          {spec.primaryAction}
        </Button>
        <Button variant="secondary" size="sm" fullWidth>
          {spec.secondaryAction}
        </Button>
      </div>
    </GlassCard>
  </div>
);

const ThemePanel: React.FC<{ spec: ThemePanelSpec }> = ({ spec }) => {
  const [segment, setSegment] = useState<string>(spec.segments[0].id);
  const meta = APP_THEME_META[spec.theme];

  return (
    <section
      data-theme={spec.theme}
      data-testid={`theme-panel-${spec.theme}`}
      className="rounded-ui-card border border-border overflow-hidden flex flex-col justify-between shadow-ui-card"
    >
      <AppHeader
        variant="brand"
        brandInitial={spec.brandInitial}
        title={spec.title}
        subtitle={meta.subtitle}
        onRefresh={() => undefined}
        className="static"
      />
      <ThemePanelBody spec={spec} segment={segment} onSegmentChange={setSegment} />
      <BottomNav
        tabs={spec.navTabs}
        activeTab={segment}
        onChangeTab={setSegment}
        variant="brand"
        className="static"
      />
    </section>
  );
};

const meta: Meta = {
  title: 'Theme/ThemeShowcase',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllAppThemes: Story = {
  render: () => (
    <div className="min-h-screen p-4 sm:p-6 bg-black/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
        {THEME_PANEL_SPECS.map((spec) => (
          <ThemePanel key={spec.theme} spec={spec} />
        ))}
      </div>
    </div>
  ),
};
