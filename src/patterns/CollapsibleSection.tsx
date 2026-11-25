import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { GlassCard } from '../primitives/GlassCard';

export interface CollapsibleSectionProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: 'inline' | 'card';
  expandLabel?: string;
  collapseLabel?: string;
  headerActions?: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  toggleTestId?: string;
  children: React.ReactNode;
  className?: string;
}

interface CollapsibleInnerProps {
  title: React.ReactNode;
  icon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  expandLabel: string;
  collapseLabel: string;
  headerActions?: React.ReactNode;
  headerClassName?: string;
  contentClassName?: string;
  toggleTestId?: string;
  children: React.ReactNode;
  className: string;
}

const CollapsibleCardView: React.FC<CollapsibleInnerProps> = ({
  title,
  icon,
  isOpen,
  onToggle,
  expandLabel,
  collapseLabel,
  headerActions,
  headerClassName = '',
  contentClassName = '',
  toggleTestId,
  children,
  className,
}) => (
  <GlassCard padding="md" className={className}>
    <div className={twMerge('flex items-center justify-between gap-2', headerClassName)}>
      <button
        type="button"
        data-testid={toggleTestId}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex-1 min-w-0 min-h-[44px] sm:min-h-0 flex items-center justify-between text-left bg-transparent border-none p-0 cursor-pointer gap-2"
      >
        <span className="font-semibold text-sm text-slate-100 flex items-center gap-2 min-w-0">
          {Boolean(icon) && <span className="shrink-0">{icon}</span>}
          <span className="truncate">{title}</span>
        </span>
        <span className="text-xs text-slate-400 shrink-0">
          {isOpen ? collapseLabel : expandLabel}
        </span>
      </button>
      {Boolean(headerActions) && (
        <div className="shrink-0 flex items-center gap-1.5">{headerActions}</div>
      )}
    </div>

    {isOpen && (
      <div className={twMerge('mt-3 pt-3 border-t border-border/60', contentClassName)}>
        {children}
      </div>
    )}
  </GlassCard>
);

const CollapsibleInlineView: React.FC<CollapsibleInnerProps> = ({
  title,
  icon,
  isOpen,
  onToggle,
  headerActions,
  headerClassName = '',
  contentClassName = '',
  toggleTestId,
  children,
  className,
}) => (
  <div className={twMerge('pt-2 border-t border-border/40', className)}>
    <div className={twMerge('flex items-center justify-between gap-2', headerClassName)}>
      <button
        type="button"
        data-testid={toggleTestId}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="bg-transparent border-none p-0 min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 text-xs cursor-pointer"
      >
        {Boolean(icon) && <span className="shrink-0">{icon}</span>}
        <span className="underline">{title}</span>
        <span className="text-[10px]">{isOpen ? '▲' : '▼'}</span>
      </button>
      {Boolean(headerActions) && (
        <div className="shrink-0 flex items-center gap-1.5">{headerActions}</div>
      )}
    </div>

    {isOpen && (
      <div
        className={twMerge(
          'mt-2 px-3 py-2.5 rounded-xl bg-background/70 border border-border/50 text-xs text-slate-300 leading-relaxed space-y-1',
          contentClassName
        )}
      >
        {children}
      </div>
    )}
  </div>
);

/**
 * Uncontrolled or controlled collapsible section supporting inline and card variants
 * plus non-toggle header actions.
 */
export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  icon,
  defaultOpen = false,
  open,
  onOpenChange,
  variant = 'inline',
  expandLabel = '▼ Expand',
  collapseLabel = '▲ Hide',
  headerActions,
  headerClassName = '',
  contentClassName = '',
  toggleTestId,
  children,
  className = '',
}) => {
  const [internalOpen, setInternalOpen] = useState<boolean>(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleToggle = () => {
    if (isControlled) {
      onOpenChange?.(!open);
      return;
    }
    const next = !internalOpen;
    setInternalOpen(next);
    onOpenChange?.(next);
  };

  const View = variant === 'card' ? CollapsibleCardView : CollapsibleInlineView;
  return (
    <View
      title={title}
      icon={icon}
      isOpen={isOpen}
      onToggle={handleToggle}
      expandLabel={expandLabel}
      collapseLabel={collapseLabel}
      headerActions={headerActions}
      headerClassName={headerClassName}
      contentClassName={contentClassName}
      toggleTestId={toggleTestId}
      className={className}
    >
      {children}
    </View>
  );
};
