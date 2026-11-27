import React from 'react';
import { Delete } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { THEME_ACTION_TEXT, type ThemeVariant } from '../theme/variants';

export interface TactileKeypadProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string;
  onChange: (newValue: string) => void;
  onClear?: () => void;
  maxDecimalPlaces?: number;
  variant?: ThemeVariant;
  actionColor?: string;
  allowDecimals?: boolean;
  className?: string;
}

function applyKeypadDigit(
  value: string,
  digit: string,
  allowDecimals: boolean,
  maxDecimalPlaces: number
): string | null {
  if (digit === '.') {
    if (!allowDecimals || value.includes('.')) return null;
    return value === '' ? '0.' : value + '.';
  }
  if (value.includes('.')) {
    const parts = value.split('.');
    if (parts[1] && parts[1].length >= maxDecimalPlaces) return null;
  }
  return value === '0' ? digit : value + digit;
}

export const TactileKeypad: React.FC<TactileKeypadProps> = ({
  value,
  onChange,
  onClear,
  maxDecimalPlaces = 2,
  variant = 'blue',
  actionColor,
  allowDecimals = true,
  className = '',
  ...rest
}) => {
  const handleDigit = (digit: string) => {
    const next = applyKeypadDigit(value, digit, allowDecimals, maxDecimalPlaces);
    if (next !== null) {
      onChange(next);
    }
  };

  const handleBackspace = () => {
    onChange(value.length <= 1 ? '' : value.slice(0, -1));
  };

  const handleFullClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChange('');
    }
  };

  const actionStyle = actionColor || THEME_ACTION_TEXT[variant] || THEME_ACTION_TEXT.blue;
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', allowDecimals ? '.' : '', '0'];

  return (
    <div
      className={twMerge('grid grid-cols-3 gap-2 w-full max-w-sm mx-auto', className)}
      {...rest}
    >
      {keys.map((k, idx) =>
        !k ? (
          <button
            key={`empty-${idx}`}
            type="button"
            onClick={handleFullClear}
            className={`h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xs font-bold ${actionStyle} shadow-sm transition-all flex items-center justify-center select-none uppercase tracking-wider`}
            title="Clear all"
          >
            C
          </button>
        ) : (
          <button
            key={k}
            type="button"
            onClick={() => handleDigit(k)}
            className="h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none"
          >
            {k}
          </button>
        )
      )}

      {/* Clear / Backspace key */}
      <button
        type="button"
        onClick={handleBackspace}
        onDoubleClick={handleFullClear}
        className={`h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 ${actionStyle} shadow-sm transition-all flex items-center justify-center select-none`}
        title="Backspace (double tap to clear all)"
        aria-label="Backspace"
      >
        <Delete className="w-5 h-5" />
      </button>
    </div>
  );
};
