import React from 'react';
import { Loader2 } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { THEME_TEXT_COLORS, type ThemeVariant } from '../theme/variants';

export interface LoadingStateProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  variant?: ThemeVariant;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  label = 'Loading...',
  variant = 'amber',
  className = '',
  ...rest
}) => {
  const spinnerColor = THEME_TEXT_COLORS[variant] || THEME_TEXT_COLORS.amber;

  return (
    <div
      role="status"
      aria-live="polite"
      className={twMerge(
        'flex flex-col items-center justify-center py-8 px-4 text-center space-y-2',
        className
      )}
      {...rest}
    >
      <Loader2 className={`w-6 h-6 animate-spin ${spinnerColor}`} />
      {label && <span className="text-xs font-medium text-slate-400">{label}</span>}
    </div>
  );
};
