import React from 'react';

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
  variant?: 'blue' | 'amber' | 'emerald' | 'purple';
  className?: string;
}

export const GoalProgressCard: React.FC<GoalProgressCardProps> = ({
  eyebrow,
  currentValueLabel,
  deltaLabel,
  deltaPositive = true,
  milestoneLabel = 'Next Milestone',
  milestoneValue,
  progressPercent,
  startLabel,
  centerLabel,
  targetLabel,
  variant = 'blue',
  className = '',
}) => {
  const clamped = Math.min(100, Math.max(0, Math.round(progressPercent)));

  const eyebrowColor =
    variant === 'amber'
      ? 'text-amber-400'
      : variant === 'emerald'
      ? 'text-emerald-400'
      : variant === 'purple'
      ? 'text-purple-400'
      : 'text-sky-400';

  const barGradient =
    variant === 'amber'
      ? 'from-amber-500 to-emerald-400'
      : 'from-blue-500 to-emerald-400';

  return (
    <div
      className={`glass-panel bg-card/80 backdrop-blur-md border border-blue-500/25 rounded-2xl p-5 shadow-lg animate-slide-up ${className}`}
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className={`text-xs font-bold uppercase tracking-wider ${eyebrowColor}`}>
            {eyebrow}
          </span>
          <div className="text-xl font-bold text-slate-100 mt-0.5 flex items-baseline gap-1.5">
            <span>{currentValueLabel}</span>
            {deltaLabel && (
              <span
                className={`text-sm font-semibold ${
                  deltaPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {deltaLabel}
              </span>
            )}
          </div>
        </div>

        {milestoneValue && (
          <div className="text-right">
            <div className="text-xs text-slate-400">{milestoneLabel}</div>
            <div className="text-lg font-bold text-purple-400">{milestoneValue}</div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="h-2.5 w-full bg-background/80 rounded-full overflow-hidden my-3 border border-border/50">
        <div
          className={`h-full bg-gradient-to-r ${barGradient} rounded-full transition-all duration-500`}
          style={{ width: `${clamped}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-slate-400">
        <span>{startLabel}</span>
        {centerLabel && <span>{centerLabel}</span>}
        <span>{targetLabel}</span>
      </div>
    </div>
  );
};
