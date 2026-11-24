import React from 'react';
import { CheckCircle2, Pause, Play, Timer, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';
import { ProgressBar, type ProgressBarTone } from '../primitives/ProgressBar';
import { formatRestTime } from '../hooks/useRestTimer';
import {
  THEME_BUTTON_VARIANT,
  THEME_CALLOUT_BOX,
  THEME_SEGMENT_ACTIVE,
  THEME_TEXT_COLORS,
  THEME_VALUE_COLORS,
  type ThemeVariant,
} from '../theme/variants';

export const DEFAULT_REST_TIMER_PRESETS = [60, 90, 120, 180];

export interface RestTimerBarProps {
  remainingSeconds: number;
  totalSeconds: number;
  isRunning: boolean;
  isPaused: boolean;
  isComplete: boolean;
  presets?: number[];
  onStart: (seconds: number) => void;
  onPause: () => void;
  onResume: () => void;
  onAdjust: (deltaSeconds: number) => void;
  onDismiss: () => void;
  variant?: ThemeVariant;
  className?: string;
}

export const RestTimerBar: React.FC<RestTimerBarProps> = (props) => {
  const { remainingSeconds, totalSeconds, isRunning, isPaused, isComplete } = props;
  const { presets = DEFAULT_REST_TIMER_PRESETS, variant = 'blue', className = '' } = props;

  if (!isRunning && !isPaused && !isComplete) {
    return <RestTimerIdleView presets={presets} variant={variant} onStart={props.onStart} className={className} />;
  }

  const safeTotal = totalSeconds > 0 ? totalSeconds : 0;
  const clampedRemaining = Math.max(0, remainingSeconds);
  const progressTone: ProgressBarTone = isComplete ? 'emerald' : isPaused ? 'amber' : 'gradient';
  const elapsedSeconds = isComplete ? 100 : safeTotal > 0 ? safeTotal - clampedRemaining : 0;
  const progressMax = isComplete ? 100 : safeTotal > 0 ? safeTotal : 100;

  return (
    <GlassCard
      data-testid="rest-timer-bar"
      role="region"
      aria-label="Rest timer"
      padding="none"
      className={twMerge('p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up', getRestTimerContainerStyle(isComplete, isPaused), className)}
    >
      <RestTimerHeader {...props} safeTotal={safeTotal} clampedRemaining={clampedRemaining} variant={variant} />
      <ProgressBar value={elapsedSeconds} max={progressMax} tone={progressTone} variant={variant} size="sm" transition="linear" trackClassName="bg-background/90" label="Rest progress" />
      <RestTimerFooter clampedRemaining={clampedRemaining} totalSeconds={totalSeconds} isComplete={isComplete} presets={presets} variant={variant} onStart={props.onStart} onAdjust={props.onAdjust} />
    </GlassCard>
  );
};

interface RestTimerIdleViewProps {
  presets: number[];
  variant: ThemeVariant;
  onStart: (seconds: number) => void;
  className: string;
}

const RestTimerIdleView: React.FC<RestTimerIdleViewProps> = ({ presets, variant, onStart, className }) => {
  const iconColor = THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;
  const calloutStyle = THEME_CALLOUT_BOX[variant] || THEME_CALLOUT_BOX.blue;

  return (
    <GlassCard
      data-testid="rest-timer-bar"
      padding="none"
      className={twMerge('bg-card/90 border-border px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2', className)}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span className={`p-1.5 rounded-lg border shrink-0 ${calloutStyle.container}`}>
          <Timer className={`w-4 h-4 ${iconColor}`} />
        </span>
        <span className="text-xs font-semibold text-slate-200 whitespace-nowrap">Rest Timer</span>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        {presets.map((presetSeconds) => (
          <button
            key={presetSeconds}
            type="button"
            onClick={() => onStart(presetSeconds)}
            aria-label={`Start ${formatRestTime(presetSeconds)} rest timer`}
            className="px-2.5 py-1.5 min-h-[34px] rounded-xl text-xs font-semibold tabular-nums bg-background/80 hover:bg-slate-800 border border-border text-slate-200 hover:text-white transition-all active:scale-95"
          >
            {formatRestTime(presetSeconds)}
          </button>
        ))}
      </div>
    </GlassCard>
  );
};

interface RestTimerHeaderProps {
  safeTotal: number;
  clampedRemaining: number;
  isRunning: boolean;
  isPaused: boolean;
  isComplete: boolean;
  variant: ThemeVariant;
  onPause: () => void;
  onResume: () => void;
  onDismiss: () => void;
}

const RestTimerHeader: React.FC<RestTimerHeaderProps> = (props) => (
  <div className="flex items-center justify-between gap-2">
    <RestTimerStatus
      safeTotal={props.safeTotal}
      clampedRemaining={props.clampedRemaining}
      isRunning={props.isRunning}
      isPaused={props.isPaused}
      isComplete={props.isComplete}
      variant={props.variant}
    />
    <RestTimerActions
      isRunning={props.isRunning}
      isComplete={props.isComplete}
      variant={props.variant}
      onPause={props.onPause}
      onResume={props.onResume}
      onDismiss={props.onDismiss}
    />
  </div>
);

interface RestTimerStatusProps {
  safeTotal: number;
  clampedRemaining: number;
  isRunning: boolean;
  isPaused: boolean;
  isComplete: boolean;
  variant: ThemeVariant;
}

const RestTimerStatus: React.FC<RestTimerStatusProps> = (props) => {
  const { safeTotal, clampedRemaining, isRunning, isPaused, isComplete, variant } = props;
  const iconColor = THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;
  const valueColor = THEME_VALUE_COLORS[variant] || THEME_VALUE_COLORS.blue;
  const subtitle = isPaused ? 'Paused' : safeTotal > 0 ? `of ${formatRestTime(safeTotal)}` : 'Rest';

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      {isComplete ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <Timer className={`w-5 h-5 shrink-0 ${iconColor} ${isRunning ? 'animate-pulse' : ''}`} />
      )}
      <div className="min-w-0">
        {isComplete ? (
          <>
            <div className="text-xs font-bold text-emerald-300 leading-snug">Rest Complete - Ready for next set</div>
            <div data-testid="rest-timer-countdown" className="text-lg font-black tabular-nums text-emerald-400 leading-tight">
              {formatRestTime(clampedRemaining)}
            </div>
          </>
        ) : (
          <div className="flex items-baseline gap-2">
            <span data-testid="rest-timer-countdown" className={`text-2xl font-black tabular-nums tracking-tight leading-none ${isPaused ? 'text-amber-300' : valueColor}`}>
              {formatRestTime(clampedRemaining)}
            </span>
            <span className="text-xs font-medium text-slate-400 whitespace-nowrap">{subtitle}</span>
          </div>
        )}
      </div>
    </div>
  );
};

interface RestTimerActionsProps {
  isRunning: boolean;
  isComplete: boolean;
  variant: ThemeVariant;
  onPause: () => void;
  onResume: () => void;
  onDismiss: () => void;
}

const RestTimerActions: React.FC<RestTimerActionsProps> = (props) => {
  const { isRunning, isComplete, variant, onPause, onResume, onDismiss } = props;
  const buttonVariant = THEME_BUTTON_VARIANT[variant] || THEME_BUTTON_VARIANT.blue;

  return (
    <div className="flex items-center gap-1.5 shrink-0">
      {!isComplete && (
        <Button
          variant={buttonVariant}
          size="xs"
          icon={isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          onClick={isRunning ? onPause : onResume}
          aria-label={isRunning ? 'Pause rest timer' : 'Resume rest timer'}
        >
          {isRunning ? 'Pause' : 'Resume'}
        </Button>
      )}
      <Button
        variant={isComplete ? 'emerald' : 'ghost'}
        size="xs"
        icon={<X className="w-3.5 h-3.5" />}
        onClick={onDismiss}
        aria-label={isComplete ? 'Dismiss rest timer' : 'Skip rest timer'}
      >
        {isComplete ? 'Dismiss' : 'Skip'}
      </Button>
    </div>
  );
};

interface RestTimerFooterProps {
  clampedRemaining: number;
  totalSeconds: number;
  isComplete: boolean;
  presets: number[];
  variant: ThemeVariant;
  onStart: (seconds: number) => void;
  onAdjust: (deltaSeconds: number) => void;
}

const RestTimerFooter: React.FC<RestTimerFooterProps> = (props) => {
  const { clampedRemaining, totalSeconds, isComplete, presets, variant, onStart, onAdjust } = props;
  const activeChipStyle = THEME_SEGMENT_ACTIVE[variant] || THEME_SEGMENT_ACTIVE.blue;

  return (
    <div className="flex items-center justify-between gap-2 flex-wrap">
      <div className="flex items-center gap-1.5">
        <Button variant="secondary" size="xs" disabled={isComplete || clampedRemaining <= 0} onClick={() => onAdjust(-15)} aria-label="Subtract 15 seconds" className="tabular-nums">
          -15s
        </Button>
        <Button variant="secondary" size="xs" onClick={() => onAdjust(15)} aria-label="Add 15 seconds" className="tabular-nums">
          +15s
        </Button>
      </div>
      <div className="flex items-center gap-1 flex-wrap">
        {presets.map((presetSeconds) => {
          const isSelected = !isComplete && totalSeconds === presetSeconds;
          return (
            <button
              key={presetSeconds}
              type="button"
              onClick={() => onStart(presetSeconds)}
              aria-label={`Restart ${formatRestTime(presetSeconds)} rest timer`}
              className={`px-2 py-1 rounded-lg text-xs font-semibold tabular-nums border transition-all active:scale-95 ${
                isSelected ? activeChipStyle : 'bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200'
              }`}
            >
              {formatRestTime(presetSeconds)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

function getRestTimerContainerStyle(isComplete: boolean, isPaused: boolean): string {
  if (isComplete) return 'border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20';
  if (isPaused) return 'border-amber-500/40 bg-slate-900/95';
  return 'border-border bg-slate-900/95';
}
