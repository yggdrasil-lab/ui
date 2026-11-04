import React from 'react';
import { Delete } from 'lucide-react';

export interface TactileKeypadProps {
  value: string;
  onChange: (newValue: string) => void;
  onClear?: () => void;
  maxDecimalPlaces?: number;
  className?: string;
}

export const TactileKeypad: React.FC<TactileKeypadProps> = ({
  value,
  onChange,
  onClear,
  maxDecimalPlaces = 2,
  className = '',
}) => {
  const handleDigit = (digit: string) => {
    if (digit === '.') {
      if (value.includes('.')) return;
      onChange(value === '' ? '0.' : value + '.');
      return;
    }

    // Check decimal places constraint
    if (value.includes('.')) {
      const parts = value.split('.');
      if (parts[1] && parts[1].length >= maxDecimalPlaces) return;
    }

    if (value === '0') {
      onChange(digit);
    } else {
      onChange(value + digit);
    }
  };

  const handleBackspace = () => {
    if (value.length <= 1) {
      onChange('');
    } else {
      onChange(value.slice(0, -1));
    }
  };

  const handleFullClear = () => {
    if (onClear) {
      onClear();
    } else {
      onChange('');
    }
  };

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

  return (
    <div className={`grid grid-cols-3 gap-2 w-full max-w-sm mx-auto ${className}`}>
      {keys.map((k) => (
        <button
          key={k}
          type="button"
          onClick={() => handleDigit(k)}
          className="h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-xl font-semibold text-slate-100 shadow-sm transition-all flex items-center justify-center select-none"
        >
          {k}
        </button>
      ))}

      {/* Clear / Backspace key */}
      <button
        type="button"
        onClick={handleBackspace}
        onDoubleClick={handleFullClear}
        className="h-14 sm:h-16 rounded-2xl bg-card hover:bg-slate-800 active:scale-95 border border-border/80 text-amber-400 hover:text-amber-300 shadow-sm transition-all flex items-center justify-center select-none"
        title="Backspace (double tap to clear all)"
        aria-label="Backspace"
      >
        <Delete className="w-5 h-5" />
      </button>
    </div>
  );
};
