import React, { useState } from 'react';

export interface CollapsibleSectionProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  variant?: 'inline' | 'card';
  expandLabel?: string;
  collapseLabel?: string;
  children: React.ReactNode;
  className?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  defaultOpen = false,
  variant = 'inline',
  expandLabel = '▼ Expand',
  collapseLabel = '▲ Hide',
  children,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  if (variant === 'card') {
    return (
      <div className={`glass-panel bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer"
        >
          <span className="font-semibold text-sm text-slate-100 flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <span>{title}</span>
          </span>
          <span className="text-xs text-slate-400">
            {isOpen ? collapseLabel : expandLabel}
          </span>
        </button>

        {isOpen && (
          <div className="mt-3 pt-3 border-t border-border/60">
            {children}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`pt-2 border-t border-border/40 ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-transparent border-none p-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer"
      >
        {icon && <span>{icon}</span>}
        <span className="underline">{title}</span>
        <span className="text-[10px]">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};
