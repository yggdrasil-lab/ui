import React from 'react';

export type RangeSliderVariant = 'amber' | 'sky' | 'blue' | 'emerald' | 'purple';

export interface RangeSliderProps {
  label: string;
  valueDisplay: React.ReactNode;
  valueClassName?: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  minLabel?: string;
  midLabel?: string;
  maxLabel?: string;
  variant?: RangeSliderVariant;
  className?: string;
}

const accentClasses: Record<RangeSliderVariant, string> = {
  amber: 'accent-amber-500',
  sky: 'accent-sky-400',
  blue: 'accent-blue-500',
  emerald: 'accent-emerald-400',
  purple: 'accent-purple-400',
};

export const RangeSlider: React.FC<RangeSliderProps> = ({
  label,
  valueDisplay,
  valueClassName = 'text-slate-200',
  min,
  max,
  step = 1,
  value,
  onChange,
  minLabel,
  midLabel,
  maxLabel,
  variant = 'amber',
  className = '',
}) => {
  const accentClass = accentClasses[variant] || accentClasses.amber;

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">{label}</span>
        <span className={`font-semibold ${valueClassName}`}>
          {valueDisplay}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full ${accentClass} cursor-pointer h-1.5 bg-background rounded-lg appearance-none`}
      />
      {(minLabel || midLabel || maxLabel) && (
        <div className="flex justify-between text-[10px] text-slate-500">
          <span>{minLabel}</span>
          <span>{midLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
    </div>
  );
};
