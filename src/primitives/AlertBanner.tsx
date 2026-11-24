import React from 'react';

export type AlertBannerVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertBannerProps {
  variant?: AlertBannerVariant;
  title?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  role?: string;
  className?: string;
}

const variantClasses: Record<AlertBannerVariant, string> = {
  info: 'bg-blue-500/12 border-blue-500/30 text-blue-200',
  success: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-200',
  warning: 'bg-amber-500/12 border-amber-500/30 text-amber-200',
  error: 'bg-rose-500/12 border-rose-500/30 text-rose-200',
};

const titleColorClasses: Record<AlertBannerVariant, string> = {
  info: 'text-slate-100',
  success: 'text-emerald-300',
  warning: 'text-amber-300',
  error: 'text-rose-300',
};

export const AlertBanner: React.FC<AlertBannerProps> = ({
  variant = 'info',
  title,
  children,
  icon,
  action,
  role = 'alert',
  className = '',
}) => {
  const containerStyle = variantClasses[variant] || variantClasses.info;
  const titleStyle = titleColorClasses[variant] || titleColorClasses.info;

  return (
    <div
      role={role}
      className={`rounded-xl border px-3.5 py-2.5 text-xs flex items-start justify-between gap-3 ${containerStyle} ${className}`}
    >
      <div className="flex items-start gap-2.5 flex-1 min-w-0">
        {icon && (
          <span className="text-sm leading-snug shrink-0 mt-0.5">
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0 leading-relaxed">
          {title && (
            <div className={`font-semibold mb-0.5 ${titleStyle}`}>
              {title}
            </div>
          )}
          {children && (
            <div className="opacity-95">
              {children}
            </div>
          )}
        </div>
      </div>

      {action && (
        <div className="shrink-0 self-center">
          {action}
        </div>
      )}
    </div>
  );
};
