import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getDefaultCustomRange, PeriodFilterBar } from './PeriodFilterBar';

const meta: Meta<typeof PeriodFilterBar> = {
  title: 'Patterns/PeriodFilterBar',
  component: PeriodFilterBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PeriodFilterBar>;

const PERIOD_OPTIONS = [
  { id: 'week', label: 'This Week' },
  { id: 'last_week', label: 'Last Week' },
  { id: 'month', label: 'This Month' },
  { id: 'last_month', label: 'Last Month' },
];

const PeriodFilterBarPreview = ({ initialPeriod = 'month' }: { initialPeriod?: string }) => {
  const defaults = getDefaultCustomRange(30);
  const [period, setPeriod] = useState(initialPeriod);
  const [startDate, setStartDate] = useState(defaults.startDate);
  const [endDate, setEndDate] = useState(defaults.endDate);

  return (
    <div className="w-full max-w-[460px] p-4 bg-card rounded-2xl border border-border">
      <PeriodFilterBar
        period={period}
        onPeriodChange={setPeriod}
        options={PERIOD_OPTIONS}
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        idPrefix="story-period"
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <PeriodFilterBarPreview initialPeriod="month" />,
};

export const CustomRangeOpen: Story = {
  render: () => <PeriodFilterBarPreview initialPeriod="custom" />,
};
