import React from 'react';
import type { AccentVariant } from '../../theme/variants';

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: AccentVariant;
  actions?: React.ReactNode;
  titleAs?: 'h2' | 'h3' | 'h4';
  uppercaseTitle?: boolean;
  size?: 'sm' | 'md';
  className?: string;
}

const iconBadgeVariants: Record<AccentVariant, string> = {
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  slate: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
  rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
};

/**
 * Reusable card/panel section header with themed icon badge, title, subtitle,
 * and responsive right-hand actions slot.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  icon,
  variant = 'amber',
  actions,
  titleAs = 'h3',
  uppercaseTitle = false,
  size = 'sm',
  className = '',
}) => {
  const iconBadgeClass = iconBadgeVariants[variant] || iconBadgeVariants.amber;
  const HeadingTag = titleAs;
  const headingClass =
    size === 'md'
      ? `text-base font-bold text-slate-100 ${uppercaseTitle ? 'tracking-wide uppercase' : ''}`
      : `text-sm font-semibold text-slate-200 ${uppercaseTitle ? 'tracking-wide uppercase' : ''}`;
  const iconWrapClass = size === 'md' ? 'p-2.5 rounded-xl border' : 'p-1.5 rounded-lg border';

  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${className}`}>
      <div className="flex items-center space-x-2.5 min-w-0">
        {icon && (
          <div className={`${iconWrapClass} shrink-0 ${iconBadgeClass}`}>
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <HeadingTag className={headingClass}>{title}</HeadingTag>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
      </div>

      {actions && (
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {actions}
        </div>
      )}
    </div>
  );
};
