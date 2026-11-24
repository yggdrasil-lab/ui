import React from 'react';
import { twMerge } from 'tailwind-merge';
import { GlassCard } from '../primitives/GlassCard';
import { ProgressBar } from '../primitives/ProgressBar';
import { THEME_GOAL_GRADIENT, type ThemeVariant } from '../theme/variants';

export interface GoalProgressCardProps {
  eyebrow: string;
  currentValueLabel: string;
  deltaLabel?: string;
  deltaPositive?: boolean;
  milestoneLabel?: string;
  milestoneValue?: string;
  progressPercent: number;
  startLabel: string;
  centerLabel?: string;
  targetLabel: string;
  variant?: ThemeVariant;
  className?: string;
}

export const GoalProgressCard: React.FC<GoalProgressCardProps> = (props) => {
  const { eyebrow, progressPercent, startLabel, centerLabel, targetLabel, variant = 'blue', className = '' } = props;

  return (
    <GlassCard className={twMerge('bg-card/80 border-blue-500/25 animate-slide-up', className)}>
      <GoalCardHeader {...props} variant={variant} />
      <ProgressBar
        value={progressPercent}
        tone="gradient"
        variant={variant}
        size="md"
        trackClassName="bg-background/80 my-3"
        label={`${eyebrow} progress`}
      />
      <div className="flex justify-between text-xs text-slate-400">
        <span>{startLabel}</span>
        {Boolean(centerLabel) && <span>{centerLabel}</span>}
        <span>{targetLabel}</span>
      </div>
    </GlassCard>
  );
};

const GoalCardHeader: React.FC<GoalProgressCardProps> = (props) => {
  const { eyebrow, currentValueLabel, deltaLabel, deltaPositive = true } = props;
  const { milestoneLabel = 'Next Milestone', milestoneValue, variant = 'blue' } = props;
  const goalStyle = THEME_GOAL_GRADIENT[variant] || THEME_GOAL_GRADIENT.blue;

  return (
    <div className="flex justify-between items-center mb-2">
      <div>
        <span className={`text-xs font-bold uppercase tracking-wider ${goalStyle.eyebrow}`}>{eyebrow}</span>
        <div className="text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5">
          <span>{currentValueLabel}</span>
          {Boolean(deltaLabel) && (
            <span className={`text-sm font-semibold ${deltaPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
              {deltaLabel}
            </span>
          )}
        </div>
      </div>
      {Boolean(milestoneValue) && (
        <div className="text-right">
          <div className="text-xs text-slate-400">{milestoneLabel}</div>
          <div className="text-lg font-bold text-purple-400">{milestoneValue}</div>
        </div>
      )}
    </div>
  );
};
