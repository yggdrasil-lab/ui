import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectableCard } from '../primitives/SelectableCard';
import type { ThemeVariant } from '../theme/variants';

export interface ActionTileProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  variant?: ThemeVariant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  'data-testid'?: string;
}

const ICON_BOX_STYLES: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/15 text-amber-400 border border-amber-500/25',
  blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/25',
  emerald: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
  purple: 'bg-purple-500/15 text-purple-400 border border-purple-500/25',
  slate: 'bg-slate-700/40 text-slate-300 border border-slate-600/40',
};

/**
 * Hub navigation and action tile composing SelectableCard with a tinted icon badge,
 * optional status badge, and disabled interaction state.
 */
export const ActionTile: React.FC<ActionTileProps> = ({
  title,
  subtitle,
  icon,
  badge,
  variant = 'amber',
  onClick,
  disabled = false,
  className = '',
  'data-testid': testId,
}) => {
  const iconBoxStyle = ICON_BOX_STYLES[variant] || ICON_BOX_STYLES.amber;
  const renderedIcon = Boolean(icon) ? (
    <span className={twMerge('inline-flex items-center justify-center w-7 h-7 rounded-lg shrink-0', iconBoxStyle)}>
      {icon}
    </span>
  ) : undefined;

  return (
    <SelectableCard
      title={title}
      subtitle={subtitle}
      icon={renderedIcon}
      badge={badge}
      variant={variant}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      data-testid={testId}
      className={twMerge(
        'min-h-[44px]',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
      )}
    />
  );
};
