import React from 'react';
import { twMerge } from 'tailwind-merge';
import { THEME_FOCUS_BORDER, type ThemeVariant } from '../theme/variants';

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: ThemeVariant;
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
  error?: boolean;
  containerClassName?: string;
}

const BASE_INPUT_CLASSES =
  'min-h-[44px] w-full bg-background border border-border rounded-xl px-3 py-2 text-base sm:text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50';

const ERROR_BORDER_CLASSES = 'border-rose-500/70 focus:border-rose-500';

function resolveInputClasses(
  variant: ThemeVariant,
  error: boolean,
  hasLeftIcon: boolean,
  hasRightSlot: boolean,
  className: string
): string {
  const borderClass = error
    ? ERROR_BORDER_CLASSES
    : THEME_FOCUS_BORDER[variant] || THEME_FOCUS_BORDER.amber;

  return twMerge(
    BASE_INPUT_CLASSES,
    borderClass,
    hasLeftIcon ? 'pl-9' : '',
    hasRightSlot ? 'pr-10' : '',
    className
  );
}

/**
 * Mobile-safe dark text input with optional left icon, right inline slot,
 * error border state, and theme-matched focus border.
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      variant = 'amber',
      leftIcon,
      rightSlot,
      error = false,
      containerClassName = '',
      className = '',
      ...props
    },
    ref
  ) => (
    <div className={twMerge('relative w-full', containerClassName)}>
      {leftIcon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-slate-400">
          {leftIcon}
        </span>
      )}
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={resolveInputClasses(
          variant,
          error,
          Boolean(leftIcon),
          Boolean(rightSlot),
          className
        )}
        {...props}
      />
      {rightSlot && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center">
          {rightSlot}
        </div>
      )}
    </div>
  )
);

TextInput.displayName = 'TextInput';
