import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, type ProgressBarTone } from './ProgressBar';
import type { ThemeVariant } from '../theme/variants';

const meta: Meta<typeof ProgressBar> = {
  title: 'Primitives/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

const SOLID_TONES: Exclude<ProgressBarTone, 'gradient'>[] = [
  'emerald',
  'amber',
  'rose',
  'blue',
  'purple',
  'slate',
];

const THEME_VARIANTS: ThemeVariant[] = ['amber', 'blue', 'emerald', 'purple', 'slate'];

export const Default: Story = {
  args: {
    value: 64,
    label: 'Default gradient progress',
  },
  render: (args) => (
    <div className="w-[380px] p-4 bg-card rounded-2xl border border-border">
      <ProgressBar {...args} />
    </div>
  ),
};

export const SolidTones: Story = {
  render: () => (
    <div className="w-[380px] p-4 bg-card rounded-2xl border border-border space-y-3">
      {SOLID_TONES.map((tone, idx) => (
        <div key={tone} className="space-y-1">
          <div className="text-xs text-slate-400 font-mono">{tone}</div>
          <ProgressBar value={35 + idx * 10} tone={tone} label={`${tone} progress`} />
        </div>
      ))}
    </div>
  ),
};

export const ThemeGradients: Story = {
  render: () => (
    <div className="w-[380px] p-4 bg-card rounded-2xl border border-border space-y-3">
      {THEME_VARIANTS.map((variant) => (
        <div key={variant} className="space-y-1">
          <div className="text-xs text-slate-400 font-mono">{variant}</div>
          <ProgressBar
            value={72}
            tone="gradient"
            variant={variant}
            label={`${variant} gradient progress`}
          />
        </div>
      ))}
    </div>
  ),
};

export const SizesAndTransitions: Story = {
  render: () => (
    <div className="w-[380px] p-4 bg-card rounded-2xl border border-border space-y-3">
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">size=sm, transition=linear</div>
        <ProgressBar
          value={58}
          size="sm"
          transition="linear"
          tone="blue"
          label="Small linear progress"
        />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">size=md, transition=default</div>
        <ProgressBar
          value={58}
          size="md"
          transition="default"
          tone="emerald"
          label="Medium default progress"
        />
      </div>
    </div>
  ),
};

export const EdgeValues: Story = {
  render: () => (
    <div className="w-[380px] p-4 bg-card rounded-2xl border border-border space-y-3">
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">0%</div>
        <ProgressBar value={0} label="Zero progress" />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">50%</div>
        <ProgressBar value={50} label="Half progress" />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">100%</div>
        <ProgressBar value={100} label="Complete progress" />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">clamped (-25 / 140)</div>
        <ProgressBar value={-25} label="Negative clamped progress" />
        <ProgressBar value={140} tone="rose" label="Overflow clamped progress" />
      </div>
      <div className="space-y-1">
        <div className="text-xs text-slate-400 font-mono">max=0, round=false (33.33%)</div>
        <ProgressBar value={40} max={0} label="Zero max progress" />
        <ProgressBar value={1} max={3} round={false} tone="amber" label="Unrounded progress" />
      </div>
    </div>
  ),
};
