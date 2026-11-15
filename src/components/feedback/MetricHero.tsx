import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import {
  THEME_GLOW_BG,
  THEME_TEXT_COLORS,
  type ThemeVariant,
} from '../../theme/variants';

export interface MetricHeroBadge {
  label: string;
  variant?: 'amber' | 'emerald' | 'sky' | 'rose' | 'blue';
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
  variant?: ThemeVariant;
  unitColor?: string;
  glowColor?: string;
  children?: React.ReactNode;
  className?: string;
}

export const MetricHero: React.FC<MetricHeroProps> = ({
  title,
  primaryValue,
  primaryUnit,
  secondaryValue,
  secondaryUnit,
  toggleHint,
  badge,
  variant = 'blue',
  unitColor,
  glowColor,
  children,
  className = '',
}) => {
  const [showSecondary, setShowSecondary] = useState(false);

  const getBadgeStyle = (bVariant: MetricHeroBadge['variant'] = 'blue') => {
    switch (bVariant) {
      case 'emerald':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'sky':
        return 'bg-sky-500/20 text-sky-300 border-sky-500/40';
      case 'rose':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'amber':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      default:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    }
  };

  const isToggleable = secondaryValue !== undefined && secondaryUnit !== undefined;
  const unitClass = unitColor || THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;
  const glowClass = glowColor || THEME_GLOW_BG[variant] || THEME_GLOW_BG.blue;

  return (
    <div className={`bg-card border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden ${className}`}>
      {/* Background glow */}
      <div
        className={`absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 ${glowClass} rounded-full blur-3xl pointer-events-none`}
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
          <span className={`text-2xl font-semibold ${unitClass} ml-2`}>
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
