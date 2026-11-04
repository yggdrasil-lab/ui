import React from 'react';
import type { ThemeVariant } from '../shell/AppHeader';

export interface NumberInputDisplayProps {
  label: string;
  value: string;
  unit?: string;
  variant?: ThemeVariant;
  valueColor?: string;
  className?: string;
}

const valueVariantColors: Record<ThemeVariant, string> = {
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  slate: 'text-slate-100',
};

export const NumberInputDisplay: React.FC<NumberInputDisplayProps> = ({
  label,
  value,
  unit,
  variant = 'blue',
  valueColor,
  className = '',
}) => {
  const textColor = valueColor || valueVariantColors[variant] || valueVariantColors.blue;

  return (
    <div className={`p-4 bg-background/80 rounded-2xl border border-border/80 text-center ${className}`}>
      <span className="text-xs uppercase text-slate-400 font-semibold tracking-wider block mb-1">
        {label}
      </span>
      <div className={`text-4xl font-black ${textColor} tracking-tight`}>
        {value || '0'}
        {unit && (
          <span className="text-sm font-normal text-slate-400 ml-1.5 uppercase">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};
