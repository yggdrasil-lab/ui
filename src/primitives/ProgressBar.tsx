import React from 'react';
import { twMerge } from 'tailwind-merge';
import { THEME_GOAL_GRADIENT, type ThemeVariant } from '../theme/variants';

export type ProgressBarTone =
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'blue'
  | 'purple'
  | 'slate'
  | 'gradient';

export type ProgressBarSize = 'sm' | 'md';

export type ProgressBarTransition = 'default' | 'linear';

export interface ProgressBarProps {
  value: number;
  max?: number;
  tone?: ProgressBarTone;
  variant?: ThemeVariant;
  size?: ProgressBarSize;
  transition?: ProgressBarTransition;
  round?: boolean;
  label?: string;
  trackClassName?: string;
  fillClassName?: string;
  className?: string;
}

const TONE_CLASSES: Record<Exclude<ProgressBarTone, 'gradient'>, string> = {
  emerald: 'bg-emerald-400',
  amber: 'bg-amber-400',
  rose: 'bg-rose-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  slate: 'bg-slate-400',
};

const SIZE_CLASSES: Record<ProgressBarSize, string> = {
  sm: 'h-2',
  md: 'h-2.5',
};

const TRANSITION_CLASSES: Record<ProgressBarTransition, string> = {
  default: 'duration-500',
  linear: 'duration-300 ease-linear',
};

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { value, max = 100, tone = 'gradient', variant = 'blue', size = 'md' } = props;
  const { transition = 'default', round = true, label, trackClassName, fillClassName, className } = props;
  const pct = clampProgressPercent(value, max, round);
  const fillToneClass = resolveFillToneClass(tone, variant);

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      aria-label={label || undefined}
      className={twMerge(
        'w-full rounded-full bg-background border border-border/50 overflow-hidden',
        SIZE_CLASSES[size],
        trackClassName,
        className
      )}
    >
      <div
        className={twMerge('h-full rounded-full transition-all', TRANSITION_CLASSES[transition], fillToneClass, fillClassName)}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

function resolveFillToneClass(tone: ProgressBarTone, variant: ThemeVariant): string {
  if (tone === 'gradient') {
    const gradientBar = (THEME_GOAL_GRADIENT[variant] ?? THEME_GOAL_GRADIENT.blue).bar;
    return `bg-gradient-to-r ${gradientBar}`;
  }
  return TONE_CLASSES[tone] ?? TONE_CLASSES.slate;
}

/**
 * Normalizes a progress value against max into a safe [0, 100] percentage.
 */
export function clampProgressPercent(value: number, max = 100, round = true): number {
  if (!Number.isFinite(value) || !Number.isFinite(max) || max <= 0) {
    return 0;
  }
  const clamped = Math.min(100, Math.max(0, (value / max) * 100));
  return round ? Math.round(clamped) : clamped;
}
