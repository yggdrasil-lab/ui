import { Calendar } from 'lucide-react';
import {
  THEME_BUTTON_VARIANT,
  THEME_FOCUS_BORDER,
  type ThemeVariant,
} from '../../theme/variants';
import { Button } from './Button';
import { SegmentedControl, type SegmentedControlOption } from './SegmentedControl';

export interface PeriodFilterBarProps<T extends string = string> {
  period: T;
  onPeriodChange: (period: T) => void;
  options: SegmentedControlOption<T>[];
  customValue?: T;
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  variant?: ThemeVariant;
  idPrefix?: string;
  className?: string;
}

/**
 * Returns default [startDate, endDate] (trailing N days, default 30) in YYYY-MM-DD local format.
 */
export function getDefaultCustomRange(days = 30): { startDate: string; endDate: string } {
  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - days);
  const toIso = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return { startDate: toIso(start), endDate: toIso(end) };
}

/**
 * Reusable quick-period SegmentedControl paired with a Custom date-range toggle
 * and mobile-safe inline date inputs.
 */
export function PeriodFilterBar<T extends string = string>({
  period,
  onPeriodChange,
  options,
  customValue = 'custom' as T,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  variant = 'amber',
  idPrefix,
  className = '',
}: PeriodFilterBarProps<T>) {
  const focusBorder = THEME_FOCUS_BORDER[variant] || THEME_FOCUS_BORDER.amber;
  const activeButtonVariant = THEME_BUTTON_VARIANT[variant] || THEME_BUTTON_VARIANT.amber;
  const isCustom = period === customValue;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-1.5 flex-wrap">
        <SegmentedControl
          options={options}
          value={isCustom ? ('' as T) : period}
          onChange={onPeriodChange}
          variant={variant}
          size="xs"
          idPrefix={idPrefix}
        />
        <Button
          variant={isCustom ? activeButtonVariant : 'outline'}
          size="xs"
          icon={<Calendar className="w-3 h-3" />}
          onClick={() => onPeriodChange(customValue)}
          data-testid={idPrefix ? `${idPrefix}-custom-btn` : undefined}
        >
          Custom
        </Button>
      </div>

      {isCustom && (
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <label className="flex items-center gap-1.5 text-slate-400">
            <span>From</span>
            <input
              type="date"
              value={startDate}
              max={endDate || undefined}
              onChange={(e) => onStartDateChange(e.target.value)}
              className={`bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${focusBorder}`}
            />
          </label>
          <label className="flex items-center gap-1.5 text-slate-400">
            <span>To</span>
            <input
              type="date"
              value={endDate}
              min={startDate || undefined}
              onChange={(e) => onEndDateChange(e.target.value)}
              className={`bg-background/80 border border-border/70 rounded-lg px-2 py-1 text-base sm:text-xs text-slate-200 focus:outline-none ${focusBorder}`}
            />
          </label>
        </div>
      )}
    </div>
  );
}
