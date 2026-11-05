import React from 'react';

export type StatCardVariant = 'default' | 'card' | 'amber' | 'emerald' | 'sky';

export interface StatCardProps {
  title: string;
  value: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: StatCardVariant;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<StatCardVariant, { container: string; value: string; icon: string }> = {
  default: {
    container: 'bg-background/60 border-border/60',
    value: 'text-slate-200',
    icon: 'text-slate-400',
  },
  card: {
    container: 'bg-card border-border/80',
    value: 'text-slate-200',
    icon: 'text-slate-400',
  },
  amber: {
    container: 'bg-amber-500/5 border-amber-500/20',
    value: 'text-amber-300',
    icon: 'text-amber-400',
  },
  emerald: {
    container: 'bg-emerald-500/5 border-emerald-500/20',
    value: 'text-emerald-400',
    icon: 'text-emerald-400',
  },
  sky: {
    container: 'bg-sky-500/5 border-sky-500/20',
    value: 'text-sky-300',
    icon: 'text-sky-400',
  },
};

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const styles = variantStyles[variant];
  const isClickable = Boolean(onClick);

  return (
    <div
      onClick={onClick}
      className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-150 ${
        styles.container
      } ${isClickable ? 'cursor-pointer hover:border-border active:scale-[0.99]' : ''} ${className}`}
    >
      <div className="flex items-center text-[10px] sm:text-xs text-slate-400 mb-1 truncate">
        {icon && (
          <span className={`mr-1 shrink-0 ${styles.icon}`}>
            {icon}
          </span>
        )}
        <span className="truncate uppercase font-medium tracking-wider text-[10px] text-slate-400">
          {title}
        </span>
      </div>

      <div className={`text-sm sm:text-base font-bold truncate ${styles.value}`}>
        {value}
      </div>

      {subtitle && (
        <div className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
          {subtitle}
        </div>
      )}
    </div>
  );
};
