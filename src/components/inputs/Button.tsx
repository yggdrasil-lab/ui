import React from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'amber'
  | 'emerald'
  | 'rose'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent',
  amber:
    'bg-amber-500 hover:bg-amber-400 active:bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10 border border-transparent',
  emerald:
    'bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/10 border border-transparent',
  rose:
    'bg-rose-600 hover:bg-rose-500 active:bg-rose-600 text-white font-bold shadow-md shadow-rose-600/15 border border-transparent',
  secondary:
    'bg-card hover:bg-slate-800 active:bg-card text-slate-200 hover:text-white border border-border font-semibold shadow-sm',
  outline:
    'bg-transparent hover:bg-slate-800/60 active:bg-slate-800/30 text-slate-300 hover:text-white border border-border font-semibold',
  ghost:
    'bg-transparent hover:bg-slate-800/40 active:bg-slate-800/20 text-slate-400 hover:text-slate-200 border border-transparent font-medium',
  danger:
    'bg-rose-950/40 hover:bg-rose-900/60 active:bg-rose-950/80 border border-rose-500/40 text-rose-200 font-semibold shadow-sm',
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'px-2.5 py-1 text-xs rounded-lg gap-1.5',
  sm: 'px-3 py-1.5 text-xs rounded-xl gap-1.5',
  md: 'px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2',
  lg: 'px-5 py-3.5 text-sm sm:text-base rounded-xl gap-2',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      size = 'sm',
      icon,
      iconPosition = 'left',
      loading = false,
      loadingText,
      fullWidth = false,
      disabled = false,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 select-none ${
          variantStyles[variant]
        } ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...rest}
      >
        {loading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin shrink-0" />
        ) : icon && iconPosition === 'left' ? (
          <span className="shrink-0">{icon}</span>
        ) : null}

        <span>{loading && loadingText ? loadingText : children}</span>

        {!loading && icon && iconPosition === 'right' ? (
          <span className="shrink-0">{icon}</span>
        ) : null}
      </button>
    );
  }
);

Button.displayName = 'Button';
