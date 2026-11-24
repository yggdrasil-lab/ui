import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GlassCard } from '../primitives/GlassCard';
import { ProgressBar, type ProgressBarTone } from '../primitives/ProgressBar';
import type { ThemeVariant } from '../theme/variants';

export interface AllowanceDeltaBadge {
  label: string;
  isPositive: boolean;
}

export interface AllowanceThresholdState {
  percent: number;
  remaining: number;
  barColor: string;
  percentTextColor: string;
}

export interface AllowanceProgressBarProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  currentValue: number;
  targetValue: number;
  currencyPrefix?: string;
  currencySuffix?: string;
  deltaBadge?: AllowanceDeltaBadge;
  action?: React.ReactNode;
  variant?: ThemeVariant;
  className?: string;
}

export const AllowanceProgressBar: React.FC<AllowanceProgressBarProps> = (props) => {
  const { title, subtitle, icon, currentValue, targetValue, action, deltaBadge, className = '' } = props;
  const { currencyPrefix = '$', currencySuffix = 'NZD' } = props;
  const { percent, remaining, percentTextColor } = getAllowanceThresholdState(currentValue, targetValue);

  return (
    <GlassCard tone="solid" padding="lg" className={className}>
      <AllowanceHeader title={title} subtitle={subtitle} icon={icon} action={action} />
      <AllowanceMeter
        title={title}
        currentValue={currentValue}
        targetValue={targetValue}
        currencyPrefix={currencyPrefix}
        percent={percent}
        percentTextColor={percentTextColor}
      />
      <AllowanceFooter
        remaining={remaining}
        currencyPrefix={currencyPrefix}
        currencySuffix={currencySuffix}
        deltaBadge={deltaBadge}
      />
    </GlassCard>
  );
};

interface AllowanceHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

const AllowanceHeader: React.FC<AllowanceHeaderProps> = ({ title, subtitle, icon, action }) => (
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center space-x-2">
      {Boolean(icon) && <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">{icon}</div>}
      <div>
        <h3 className="text-sm font-semibold text-slate-200">{title}</h3>
        {Boolean(subtitle) && <p className="text-xs text-slate-400">{subtitle}</p>}
      </div>
    </div>
    {Boolean(action) && <div>{action}</div>}
  </div>
);

interface AllowanceMeterProps {
  title: string;
  currentValue: number;
  targetValue: number;
  currencyPrefix: string;
  percent: number;
  percentTextColor: string;
}

const AllowanceMeter: React.FC<AllowanceMeterProps> = (props) => (
  <div className="space-y-1.5 my-3">
    <div className="flex justify-between text-xs">
      <span className="text-slate-400">
        Spent{' '}
        <strong className="text-slate-200">
          {props.currencyPrefix}
          {Math.round(props.currentValue).toLocaleString('en-NZ')}
        </strong>{' '}
        of {props.currencyPrefix}
        {Math.round(props.targetValue).toLocaleString('en-NZ')}
      </span>
      <span className={props.percentTextColor}>{props.percent}%</span>
    </div>
    <ProgressBar
      value={props.percent}
      tone={getAllowanceTone(props.percent)}
      size="md"
      label={`${props.title} progress`}
    />
  </div>
);

interface AllowanceFooterProps {
  remaining: number;
  currencyPrefix: string;
  currencySuffix: string;
  deltaBadge?: AllowanceDeltaBadge;
}

const AllowanceFooter: React.FC<AllowanceFooterProps> = (props) => {
  const { remaining, currencyPrefix, currencySuffix, deltaBadge } = props;
  return (
    <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs">
      <span className="text-slate-400">
        Remaining allowance:{' '}
        <strong className="text-slate-200">
          {currencyPrefix}
          {Math.round(remaining).toLocaleString('en-NZ')} {currencySuffix}
        </strong>
      </span>
      {deltaBadge && (
        <div
          className={`flex items-center font-medium px-2 py-0.5 rounded-md ${
            deltaBadge.isPositive ? 'text-emerald-300 bg-emerald-500/10' : 'text-rose-300 bg-rose-500/10'
          }`}
        >
          <ArrowUpRight className={`w-3.5 h-3.5 mr-1 ${deltaBadge.isPositive ? '' : 'rotate-90'}`} />
          <span>{deltaBadge.label}</span>
        </div>
      )}
    </div>
  );
};

/**
 * Pure threshold calculation for allowance progress bars:
 * - <= 70%: healthy (emerald)
 * - 71-90%: warning (amber)
 * - > 90%: critical (rose)
 */
export function getAllowanceThresholdState(
  currentValue: number,
  targetValue: number
): AllowanceThresholdState {
  const safeTarget = targetValue > 0 ? targetValue : 1;
  const percent = Math.min(100, Math.max(0, Math.round((currentValue / safeTarget) * 100)));
  const remaining = Math.max(0, targetValue - currentValue);

  if (percent > 90) {
    return { percent, remaining, barColor: 'bg-rose-500', percentTextColor: 'text-rose-400 font-semibold' };
  }
  if (percent > 70) {
    return { percent, remaining, barColor: 'bg-amber-400', percentTextColor: 'text-amber-400 font-semibold' };
  }
  return { percent, remaining, barColor: 'bg-emerald-400', percentTextColor: 'text-slate-400 font-medium' };
}

function getAllowanceTone(percent: number): ProgressBarTone {
  if (percent > 90) return 'rose';
  if (percent > 70) return 'amber';
  return 'emerald';
}
