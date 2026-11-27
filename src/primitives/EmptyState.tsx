import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface EmptyStateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'dashed' | 'glass';
  className?: string;
}

const variantClasses: Record<'dashed' | 'glass', string> = {
  dashed: 'border-2 border-dashed border-border/80 bg-background/40',
  glass: 'glass-panel bg-card/60 backdrop-blur-md border border-border/80',
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  variant = 'dashed',
  className = '',
  ...rest
}) => {
  const containerClass = variantClasses[variant] || variantClasses.dashed;

  return (
    <div
      className={twMerge(
        'rounded-2xl p-6 text-center flex flex-col items-center justify-center space-y-2',
        containerClass,
        className
      )}
      {...rest}
    >
      {icon && (
        <div className="text-slate-400 mb-1 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="text-sm font-semibold text-slate-200">{title}</div>
      {description && (
        <div className="text-xs text-slate-400 max-w-md leading-relaxed">
          {description}
        </div>
      )}
      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};
