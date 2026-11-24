import React from 'react';
import { CheckCircle2, Pause, Play, Timer, X } from 'lucide-react';
import { Button } from '../primitives/Button';
import { formatRestTime } from '../hooks/useRestTimer';
import {
  THEME_BUTTON_VARIANT,
  THEME_CALLOUT_BOX,
  THEME_GOAL_GRADIENT,
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

export const RestTimerBar: React.FC<RestTimerBarProps> = ({
  remainingSeconds,
  totalSeconds,
  isRunning,
  isPaused,
  isComplete,
  presets = DEFAULT_REST_TIMER_PRESETS,
  onStart,
  onPause,
  onResume,
  onAdjust,
  onDismiss,
  variant = 'blue',
  className = '',
}) => {
  const iconColor = THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;
  const valueColor = THEME_VALUE_COLORS[variant] || THEME_VALUE_COLORS.blue;
  const calloutStyle = THEME_CALLOUT_BOX[variant] || THEME_CALLOUT_BOX.blue;
  const activeChipStyle = THEME_SEGMENT_ACTIVE[variant] || THEME_SEGMENT_ACTIVE.blue;
  const goalBarStyle = THEME_GOAL_GRADIENT[variant] || THEME_GOAL_GRADIENT.blue;
  const buttonVariant = THEME_BUTTON_VARIANT[variant] || THEME_BUTTON_VARIANT.blue;

  const isIdle = !isRunning && !isPaused && !isComplete;

  if (isIdle) {
    return (
      <div
        data-testid="rest-timer-bar"
        className={`glass-panel bg-card/90 backdrop-blur-md border border-border rounded-2xl px-3.5 py-2.5 shadow-lg flex flex-wrap items-center justify-between gap-2 ${className}`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className={`p-1.5 rounded-lg border shrink-0 ${calloutStyle.container}`}>
            <Timer className={`w-4 h-4 ${iconColor}`} />
          </span>
          <span className="text-xs font-semibold text-slate-200 whitespace-nowrap">
            Rest Timer
          </span>
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
      </div>
    );
  }

  const safeTotal = totalSeconds > 0 ? totalSeconds : 0;
  const clampedRemaining = Math.max(0, remainingSeconds);
  const progressPercent = isComplete
    ? 100
    : safeTotal > 0
      ? Math.min(100, Math.max(0, Math.round(((safeTotal - clampedRemaining) / safeTotal) * 100)))
      : 0;

  const containerStyle = isComplete
    ? 'border-emerald-500/50 bg-emerald-950/30 shadow-emerald-950/20'
    : isPaused
      ? 'border-amber-500/40 bg-slate-900/95'
      : 'border-border bg-slate-900/95';

  const progressFillStyle = isComplete
    ? 'bg-emerald-400'
    : isPaused
      ? 'bg-amber-400'
      : `bg-gradient-to-r ${goalBarStyle.bar}`;

  return (
    <div
      data-testid="rest-timer-bar"
      role="region"
      aria-label="Rest timer"
      className={`glass-panel backdrop-blur-md border rounded-2xl p-3.5 shadow-xl space-y-2.5 transition-colors animate-slide-up ${containerStyle} ${className}`}
    >
      {/* Top Row: Countdown / Completion Status & Primary Controls */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {isComplete ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <Timer
              className={`w-5 h-5 shrink-0 ${iconColor} ${isRunning ? 'animate-pulse' : ''}`}
            />
          )}

          <div className="min-w-0">
            {isComplete ? (
              <>
                <div className="text-xs font-bold text-emerald-300 leading-snug">
                  Rest Complete - Ready for next set
                </div>
                <div
                  data-testid="rest-timer-countdown"
                  className="text-lg font-black tabular-nums text-emerald-400 leading-tight"
                >
                  {formatRestTime(clampedRemaining)}
                </div>
              </>
            ) : (
              <div className="flex items-baseline gap-2">
                <span
                  data-testid="rest-timer-countdown"
                  className={`text-2xl font-black tabular-nums tracking-tight leading-none ${
                    isPaused ? 'text-amber-300' : valueColor
                  }`}
                >
                  {formatRestTime(clampedRemaining)}
                </span>
                <span className="text-xs font-medium text-slate-400 whitespace-nowrap">
                  {isPaused ? 'Paused' : safeTotal > 0 ? `of ${formatRestTime(safeTotal)}` : 'Rest'}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {!isComplete &&
            (isRunning ? (
              <Button
                variant={buttonVariant}
                size="xs"
                icon={<Pause className="w-3.5 h-3.5" />}
                onClick={onPause}
                aria-label="Pause rest timer"
              >
                Pause
              </Button>
            ) : (
              <Button
                variant={buttonVariant}
                size="xs"
                icon={<Play className="w-3.5 h-3.5" />}
                onClick={onResume}
                aria-label="Resume rest timer"
              >
                Resume
              </Button>
            ))}

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
      </div>

      {/* Progress Track */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercent}
        aria-label="Rest progress"
        className="h-2 w-full bg-background/90 rounded-full overflow-hidden border border-border/50"
      >
        <div
          className={`h-full rounded-full transition-all duration-300 ease-linear ${progressFillStyle}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Bottom Row: Adjust Controls & Quick Presets */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Button
            variant="secondary"
            size="xs"
            disabled={isComplete || clampedRemaining <= 0}
            onClick={() => onAdjust(-15)}
            aria-label="Subtract 15 seconds"
            className="tabular-nums"
          >
            -15s
          </Button>
          <Button
            variant="secondary"
            size="xs"
            onClick={() => onAdjust(15)}
            aria-label="Add 15 seconds"
            className="tabular-nums"
          >
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
                  isSelected
                    ? activeChipStyle
                    : 'bg-background/70 hover:bg-slate-800 border-border text-slate-400 hover:text-slate-200'
                }`}
              >
                {formatRestTime(presetSeconds)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
