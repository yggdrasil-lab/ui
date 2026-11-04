import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export interface MetricHeroBadge {
  label: string;
  variant?: 'amber' | 'emerald' | 'sky' | 'rose';
  icon?: React.ReactNode;
}

export interface MetricHeroProps {
  title: string;
  primaryValue: string | number;
  primaryUnit: string;
  secondaryValue?: string | number;
  secondaryUnit?: string;
  toggleHint?: string;
  badge?: MetricHeroBadge;
  glowColor?: string;
  children?: React.ReactNode;
}

export const MetricHero: React.FC<MetricHeroProps> = ({
  title,
  primaryValue,
  primaryUnit,
  secondaryValue,
  secondaryUnit,
  toggleHint,
  badge,
  glowColor = 'bg-amber-500/5',
  children,
}) => {
  const [showSecondary, setShowSecondary] = useState(false);

  const getBadgeStyle = (variant: MetricHeroBadge['variant'] = 'amber') => {
    switch (variant) {
      case 'emerald':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'sky':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      case 'rose':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    }
  };

  const isToggleable = secondaryValue !== undefined && secondaryUnit !== undefined;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* Glow Effect */}
      <div
        className={`absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${glowColor} rounded-full blur-3xl pointer-events-none`}
      />

      {/* Header and status badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
          {title}
        </span>
        {badge && (
          <div className={`flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getBadgeStyle(badge.variant)}`}>
            {badge.icon || <Sparkles className="w-3.5 h-3.5 mr-1" />}
            <span>{badge.label}</span>
          </div>
        )}
      </div>

      {/* Hero display with toggle */}
      <div
        className={`text-center my-6 ${isToggleable ? 'cursor-pointer select-none' : ''}`}
        onClick={() => isToggleable && setShowSecondary(!showSecondary)}
      >
        <div className="text-5xl sm:text-6xl font-black text-slate-50 tracking-tight">
          {showSecondary ? secondaryValue : primaryValue}
          <span className="text-2xl font-semibold text-amber-400 ml-2">
            {showSecondary ? secondaryUnit : primaryUnit}
          </span>
        </div>
        {toggleHint && (
          <p className="text-xs text-slate-400 mt-1">
            {toggleHint}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};
