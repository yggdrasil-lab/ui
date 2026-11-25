import React from 'react';
import { twMerge } from 'tailwind-merge';
import { THEME_FOCUS_BORDER, type ThemeVariant } from '../theme/variants';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: ThemeVariant;
  error?: boolean;
}

const BASE_TEXTAREA_CLASSES =
  'min-h-[88px] w-full bg-background border border-border rounded-xl px-3 py-2.5 text-base sm:text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-colors disabled:opacity-50';

const ERROR_BORDER_CLASSES = 'border-rose-500/70 focus:border-rose-500';

/**
 * Mobile-safe dark multiline textarea with error state and theme focus border.
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { variant = 'amber', error = false, rows = 3, className = '', ...props },
    ref
  ) => {
    const borderClass = error
      ? ERROR_BORDER_CLASSES
      : THEME_FOCUS_BORDER[variant] || THEME_FOCUS_BORDER.amber;

    return (
      <textarea
        ref={ref}
        rows={rows}
        aria-invalid={error || undefined}
        className={twMerge(BASE_TEXTAREA_CLASSES, borderClass, className)}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
