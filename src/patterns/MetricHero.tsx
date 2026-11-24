import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { GlassCard } from '../primitives/GlassCard';
import { StatusBadge, type StatusBadgeVariant } from '../primitives/StatusBadge';
import {
  THEME_GLOW_BG,
  THEME_TEXT_COLORS,
  type ThemeVariant,
} from '../theme/variants';

export interface MetricHeroBadge {
  label: string;
  variant?: 'amber' | 'emerald' | 'sky' | 'rose' | 'blue';
  icon?: React.ReactNode;
}

const METRIC_HERO_BADGE_STYLES: Record<NonNullable<MetricHeroBadge['variant']>, string> = {
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  sky: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  rose: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
};

const METRIC_HERO_BADGE_VARIANTS: Record<NonNullable<MetricHeroBadge['variant']>, StatusBadgeVariant> = {
  emerald: 'success',
  sky: 'info',
  rose: 'error',
  amber: 'warning',
  blue: 'info',
};

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

  const badgeKey = badge?.variant ?? 'blue';
  const isToggleable = secondaryValue !== undefined && secondaryUnit !== undefined;
  const unitClass = unitColor || THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.blue;
  const glowClass = glowColor || THEME_GLOW_BG[variant] || THEME_GLOW_BG.blue;

  return (
    <GlassCard
      tone="solid"
      padding="none"
      className={twMerge('p-6 shadow-xl relative overflow-hidden', className)}
    >
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
          <StatusBadge
            label={badge.label}
            variant={METRIC_HERO_BADGE_VARIANTS[badgeKey]}
            icon={badge.icon || <Sparkles className="w-3.5 h-3.5" />}
            className={METRIC_HERO_BADGE_STYLES[badgeKey]}
          />
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
    </GlassCard>
  );
};
