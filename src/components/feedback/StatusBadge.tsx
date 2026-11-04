import React from 'react';

export type StatusBadgeVariant = 'idle' | 'busy' | 'success' | 'error' | 'warning' | 'info';

export interface StatusBadgeProps {
  label: string;
  variant?: StatusBadgeVariant;
  icon?: React.ReactNode;
  isPulsing?: boolean;
  className?: string;
}

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
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label,
  variant = 'idle',
  icon,
  isPulsing = false,
  className = '',
}) => {
  const style = statusBadgeStyles[variant] || statusBadgeStyles.idle;

  return (
    <div
      className={`status-badge inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${style.bg} ${className}`}
    >
      {icon ? (
        <span className="mr-1.5 shrink-0 flex items-center">{icon}</span>
      ) : (
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${style.dot} ${isPulsing ? 'animate-pulse' : ''}`} />
      )}
      <span className="truncate">{label}</span>
    </div>
  );
};
