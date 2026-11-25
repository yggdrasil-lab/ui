import React from 'react';
import { ChevronDown } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { THEME_FOCUS_BORDER, type ThemeVariant } from '../theme/variants';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  placeholder?: string;
  variant?: ThemeVariant;
  error?: boolean;
  containerClassName?: string;
}

const BASE_SELECT_CLASSES =
  'min-h-[44px] w-full appearance-none bg-background border border-border rounded-xl pl-3 pr-9 py-2 text-base sm:text-xs text-slate-100 focus:outline-none transition-colors disabled:opacity-50';

const ERROR_BORDER_CLASSES = 'border-rose-500/70 focus:border-rose-500';

function resolveSelectClasses(
  variant: ThemeVariant,
  error: boolean,
  className: string
): string {
  const borderClass = error
    ? ERROR_BORDER_CLASSES
    : THEME_FOCUS_BORDER[variant] || THEME_FOCUS_BORDER.amber;
  return twMerge(BASE_SELECT_CLASSES, borderClass, className);
}

/**
 * Mobile-safe native select control supporting both an `options` array
 * and explicit `<option>` children with a non-interactive chevron indicator.
 */
export const SelectInput = React.forwardRef<
  HTMLSelectElement,
  SelectInputProps
>(
  (
    {
      options,
      placeholder,
      variant = 'amber',
      error = false,
      containerClassName = '',
      className = '',
      children,
      ...props
    },
    ref
  ) => (
    <div className={twMerge('relative w-full', containerClassName)}>
      <select
        ref={ref}
        aria-invalid={error || undefined}
        className={resolveSelectClasses(variant, error, className)}
        {...props}
      >
        {placeholder !== undefined && (
          <option value="" disabled={props.required}>
            {placeholder}
          </option>
        )}
        {options?.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
      />
    </div>
  )
);

SelectInput.displayName = 'SelectInput';
