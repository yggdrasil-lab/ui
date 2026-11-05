import React from 'react';
import type { ThemeVariant } from '../shell/AppHeader';

export interface ChipSelectorProps {
  options: string[];
  selected: string;
  onChange: (option: string) => void;
  variant?: ThemeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

const activeBgVariants: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500 text-slate-950 font-semibold',
  blue: 'bg-blue-500 text-slate-950 font-semibold',
  emerald: 'bg-emerald-500 text-slate-950 font-semibold',
  purple: 'bg-purple-500 text-slate-950 font-semibold',
  slate: 'bg-slate-200 text-slate-950 font-semibold',
};

export const ChipSelector: React.FC<ChipSelectorProps> = ({
  options,
  selected,
  onChange,
  variant = 'amber',
  size = 'sm',
  className = '',
}) => {
  const activeClass = activeBgVariants[variant] || activeBgVariants.amber;
  const paddingClass = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm';

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {options.map((opt) => {
        const isSelected = selected === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`${paddingClass} rounded-lg font-medium transition-all duration-150 active:scale-95 ${
              isSelected
                ? activeClass
                : 'bg-background text-slate-400 hover:text-slate-200 border border-border'
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};
