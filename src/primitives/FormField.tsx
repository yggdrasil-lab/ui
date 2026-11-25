import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/**
 * Accessible form field wrapper providing a label, optional required marker,
 * right-aligned header slot, and helper hint or validation error text.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  rightSlot,
  children,
  className = '',
}) => (
  <div className={twMerge('space-y-1.5', className)}>
    <div className="flex items-center justify-between gap-2">
      <label
        htmlFor={htmlFor}
        className="block text-xs font-medium text-slate-300"
      >
        {label}
        {required && (
          <span className="ml-1 text-rose-400" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {rightSlot && (
        <div className="shrink-0 text-xs text-slate-400">{rightSlot}</div>
      )}
    </div>

    {children}

    {error ? (
      <div className="text-rose-400 text-xs" role="alert">
        {error}
      </div>
    ) : hint ? (
      <div className="text-slate-400 text-xs">{hint}</div>
    ) : null}
  </div>
);
