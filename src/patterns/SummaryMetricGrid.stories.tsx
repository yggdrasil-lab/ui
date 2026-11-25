import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SummaryMetricGrid } from './SummaryMetricGrid';

const meta: Meta<typeof SummaryMetricGrid> = {
  title: 'Patterns/SummaryMetricGrid',
  component: SummaryMetricGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SummaryMetricGrid>;

export const ThreeColumnWorkoutSummary: Story = {
  render: () => (
    <div className="w-full max-w-md mx-auto p-4 bg-card rounded-2xl border border-border">
      <SummaryMetricGrid
        columns={3}
        items={[
          { id: 'sets', label: 'Working Sets', value: '16 sets', valueClassName: 'text-sky-300' },
          { id: 'vol', label: 'Total Tonnage', value: '6,420 kg', valueClassName: 'text-emerald-400' },
          { id: 'rpe', label: 'Target RIR', value: '1-2 RIR', valueClassName: 'text-amber-300' },
        ]}
      />
    </div>
  ),
};

export const FourColumnFinancialInspection: Story = {
  render: () => (
    <div className="w-full max-w-lg mx-auto p-4 bg-card rounded-2xl border border-border">
      <SummaryMetricGrid
        columns={4}
        items={[
          { id: 'burn', label: 'Monthly Burn', value: '$4,200' },
          { id: 'runway', label: 'Runway', value: '59.5 mo', valueClassName: 'text-amber-400' },
          { id: 'yield', label: 'Passive Yield', value: '$833/mo', valueClassName: 'text-emerald-400' },
          { id: 'fi', label: 'FI Progress', value: '24.8%', valueClassName: 'text-purple-400' },
        ]}
      />
    </div>
  ),
};

function buildInteractiveItems(
  onSelectFlow: (flow: 'outflow' | 'inflow') => void
) {
  return [
    {
      id: 'outflow',
      label: 'Outflow',
      value: <span className="text-xs sm:text-sm tracking-tight">$3,420.50</span>,
      subvalue: 'NZD',
      valueClassName: 'text-slate-100 font-mono',
      ariaLabel: 'Inspect Outflow transactions',
      testId: 'summary-tile-outflow',
      onClick: () => onSelectFlow('outflow'),
    },
    {
      id: 'inflow',
      label: 'Inflow',
      value: <span className="text-xs sm:text-sm tracking-tight">$5,200.00</span>,
      subvalue: 'NZD',
      valueClassName: 'text-emerald-400 font-mono',
      ariaLabel: 'Inspect Inflow transactions',
      testId: 'summary-tile-inflow',
      onClick: () => onSelectFlow('inflow'),
    },
    {
      id: 'net',
      label: 'Net Savings',
      value: <span className="text-xs sm:text-sm tracking-tight">+$1,779.50</span>,
      subvalue: 'NZD',
      valueClassName: 'text-emerald-400 font-mono',
      testId: 'summary-tile-net',
    },
  ];
}

const InteractiveMixedPreview: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState<'outflow' | 'inflow' | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const handleSelectFlow = (flow: 'outflow' | 'inflow') => {
    setSelectedFlow(flow);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
      <SummaryMetricGrid columns={3} items={buildInteractiveItems(handleSelectFlow)} />
      <div
        data-testid="interactive-summary-status"
        className="text-[11px] text-slate-400 text-center rounded-lg bg-background/50 border border-border/50 px-3 py-1.5"
      >
        {selectedFlow
          ? `Opened ${selectedFlow} cashflow dialog (${clickCount} ${clickCount === 1 ? 'tap' : 'taps'})`
          : 'Tap Outflow or Inflow to inspect cashflow; Net Savings stays static'}
      </div>
    </div>
  );
};

export const InteractiveMixed: Story = {
  render: () => <InteractiveMixedPreview />,
};

type FilterKey = 'all' | 'income' | 'spend';

function buildThemedFilterItems(
  activeFilter: FilterKey,
  onSelect: (key: FilterKey) => void
) {
  return [
    {
      id: 'all',
      label: 'All Cashflow',
      value: '$8,620',
      active: activeFilter === 'all',
      variant: 'blue' as const,
      onClick: () => onSelect('all'),
    },
    {
      id: 'income',
      label: 'Income',
      value: '+$5,200',
      valueClassName: 'text-emerald-400',
      active: activeFilter === 'income',
      variant: 'emerald' as const,
      onClick: () => onSelect('income'),
    },
    {
      id: 'spend',
      label: 'Outflow',
      value: '-$3,420',
      valueClassName: 'text-rose-400',
      active: activeFilter === 'spend',
      variant: 'amber' as const,
      onClick: () => onSelect('spend'),
    },
  ];
}

const InteractiveThemedFiltersPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('income');

  return (
    <div className="w-full max-w-sm mx-auto p-4 bg-card rounded-2xl border border-border space-y-3">
      <SummaryMetricGrid
        columns={3}
        variant="blue"
        items={buildThemedFilterItems(activeFilter, setActiveFilter)}
      />
      <div className="text-[11px] text-slate-400 text-center">
        Active filter: <span className="font-semibold text-slate-200">{activeFilter}</span>
      </div>
    </div>
  );
};

export const InteractiveThemedFilters: Story = {
  render: () => <InteractiveThemedFiltersPreview />,
};
