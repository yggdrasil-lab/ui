import React from 'react';

export type OptionCardAccent = 'emerald' | 'amber' | 'orange' | 'rose' | 'blue' | 'purple';

export interface OptionCardItem<T extends string = string> {
  value: T;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  accent?: OptionCardAccent;
}

export interface OptionCardGroupProps<T extends string = string> {
  label?: string;
  options: OptionCardItem<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

const activeAccentStyles: Record<OptionCardAccent, string> = {
  emerald: 'bg-emerald-500/15 border-emerald-500 text-emerald-300',
  amber: 'bg-amber-500/15 border-amber-500 text-amber-300',
  orange: 'bg-orange-500/15 border-orange-500 text-orange-300',
  rose: 'bg-rose-500/15 border-rose-500 text-rose-300',
  blue: 'bg-blue-500/15 border-blue-500 text-slate-100',
  purple: 'bg-purple-500/15 border-purple-500 text-purple-300',
};

export function OptionCardGroup<T extends string = string>({
  label,
  options,
  value,
  onChange,
  className = '',
}: OptionCardGroupProps<T>) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block font-semibold text-sm text-slate-200">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-2">
        {options.map((opt) => {
          const isSelected = value === opt.value;
          const accent = opt.accent || 'blue';
          const selectedClass = activeAccentStyles[accent] || activeAccentStyles.blue;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`flex items-start gap-3 px-4 py-3 rounded-xl text-left border transition-all duration-150 cursor-pointer ${
                isSelected
                  ? selectedClass
                  : 'bg-background/60 hover:bg-slate-800/50 border-border text-slate-300'
              }`}
            >
              {opt.icon && (
                <span className="text-xl leading-none shrink-0 mt-0.5">
                  {opt.icon}
                </span>
              )}
              <div className="flex-1 min-w-0">
                <div className={`font-semibold text-sm ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                  {opt.label}
                </div>
                {opt.description && (
                  <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {opt.description}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
