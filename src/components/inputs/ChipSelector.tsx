import React from 'react';
import type { ThemeVariant } from '../shell/AppHeader';

export type ChipOptionItem = string | { value: string; label: string };
export type ChipVariant = ThemeVariant | 'rose';

export interface ChipSelectorProps {
  options: ChipOptionItem[];
  selected?: string;
  selectedValues?: string[];
  onChange?: (option: string) => void;
  onChangeValues?: (options: string[]) => void;
  multiSelect?: boolean;
  equalWidth?: boolean;
  variant?: ChipVariant;
  size?: 'sm' | 'md';
  className?: string;
}

const activeBgVariants: Record<ChipVariant, string> = {
  amber: 'bg-amber-500 text-slate-950 font-semibold border border-amber-400',
  blue: 'bg-blue-500/25 text-blue-300 font-semibold border border-blue-500',
  emerald: 'bg-emerald-500 text-slate-950 font-semibold border border-emerald-400',
  purple: 'bg-purple-500/25 text-purple-300 font-semibold border border-purple-500',
  slate: 'bg-slate-200 text-slate-950 font-semibold border border-slate-300',
  rose: 'bg-rose-500/20 text-rose-400 font-semibold border border-rose-500',
};

export const ChipSelector: React.FC<ChipSelectorProps> = ({
  options,
  selected,
  selectedValues = [],
  onChange,
  onChangeValues,
  multiSelect = false,
  equalWidth = false,
  variant = 'amber',
  size = 'sm',
  className = '',
}) => {
  const activeClass = activeBgVariants[variant] || activeBgVariants.amber;
  const paddingClass = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm';

  const handleSelect = (val: string) => {
    if (multiSelect) {
      const next = selectedValues.includes(val)
        ? selectedValues.filter((v) => v !== val)
        : [...selectedValues, val];
      if (onChangeValues) {
        onChangeValues(next);
      }
      if (onChange) {
        onChange(val);
      }
    } else if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className={`flex ${equalWidth ? 'w-full gap-2' : 'flex-wrap gap-1.5'} ${className}`}>
      {options.map((opt) => {
        const val = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const isSelected = multiSelect ? selectedValues.includes(val) : selected === val;

        return (
          <button
            key={val}
            type="button"
            onClick={() => handleSelect(val)}
            className={`${paddingClass} ${equalWidth ? 'flex-1 text-center' : ''} rounded-lg font-medium transition-all duration-150 active:scale-95 ${
              isSelected
                ? activeClass
                : 'bg-background text-slate-400 hover:text-slate-200 border border-border'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
