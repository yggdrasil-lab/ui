import React from 'react';
import { Search, X } from 'lucide-react';
import { THEME_FOCUS_BORDER, type ThemeVariant } from '../theme/variants';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  variant?: ThemeVariant;
  rightSlot?: React.ReactNode;
  className?: string;
  'data-testid'?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search...',
  variant = 'amber',
  rightSlot,
  className = '',
  'data-testid': testId,
}) => {
  const focusBorder = THEME_FOCUS_BORDER[variant] || THEME_FOCUS_BORDER.amber;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex-1 min-w-0">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          data-testid={testId}
          className={`w-full pl-9 pr-8 py-2 bg-background border border-border rounded-xl text-base sm:text-xs text-slate-200 placeholder-slate-500 focus:outline-none ${focusBorder} transition-colors`}
        />
        {value.length > 0 && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {rightSlot && <div className="shrink-0">{rightSlot}</div>}
    </div>
  );
};
