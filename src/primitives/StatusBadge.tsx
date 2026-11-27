import React from 'react';
import { twMerge } from 'tailwind-merge';

export type StatusBadgeVariant =
  | 'idle'
  | 'busy'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'purple'
  | 'orange';

export type StatusBadgeSize = 'xs' | 'sm';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  variant?: StatusBadgeVariant;
  size?: StatusBadgeSize;
  icon?: React.ReactNode;
  showDot?: boolean;
  isPulsing?: boolean;
  className?: string;
}

const statusBadgeSizes: Record<StatusBadgeSize, string> = {
  sm: 'px-2.5 py-1 text-xs',
  xs: 'px-2 py-0.5 text-[10px]',
};

const statusBadgeStyles: Record<StatusBadgeVariant, { bg: string; dot: string }> = {
  idle: {
    bg: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
    dot: 'bg-slate-400',
  },
  busy: {
    bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    dot: 'bg-amber-400 animate-pulse',
  },
  success: {
    bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
  error: {
    bg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    dot: 'bg-rose-400',
  },
  warning: {
    bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    dot: 'bg-amber-400',
  },
  info: {
    bg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    dot: 'bg-sky-400',
  },
  purple: {
    bg: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    dot: 'bg-purple-400',
  },
  orange: {
    bg: 'bg-orange-500/15 text-orange-300 border-orange-500/30',
    dot: 'bg-orange-400',
  },
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'idle',
  size = 'sm',
  icon,
  showDot = true,
  isPulsing = false,
  className = '',
  ...rest
}) => {
  const style = statusBadgeStyles[variant] || statusBadgeStyles.idle;
  const sizeClass = statusBadgeSizes[size] || statusBadgeSizes.sm;

  return (
    <div
      className={twMerge(
        'status-badge inline-flex items-center rounded-full font-medium border backdrop-blur-sm',
        sizeClass,
        style.bg,
        className
      )}
      {...rest}
    >
      {icon ? (
        <span className="mr-1.5 shrink-0 flex items-center">{icon}</span>
      ) : showDot ? (
        <span
          className={twMerge(
            'w-1.5 h-1.5 rounded-full mr-1.5 shrink-0',
            style.dot,
            isPulsing && 'animate-pulse'
          )}
        />
      ) : null}
      <span className="truncate">{label}</span>
    </div>
  );
};
