import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';

export interface PwaUpdateBannerProps {
  message?: string;
  reloadLabel?: string;
  laterLabel?: string;
  onReload: () => void;
  onDismiss: () => void;
  className?: string;
}

export const PwaUpdateBanner: React.FC<PwaUpdateBannerProps> = ({
  message = 'New version available',
  reloadLabel = 'Reload to update',
  laterLabel = 'Later',
  onReload,
  onDismiss,
  className = '',
}) => {
  return (
    <GlassCard
      role="status"
      data-testid="pwa-update-banner"
      padding="none"
      className={twMerge(
        'flex items-center justify-between gap-2 p-3 px-4 rounded-xl border-blue-500/40 bg-slate-900/90 shadow-xl animate-slide-up',
        className
      )}
    >
      <span className="text-xs sm:text-sm font-medium text-slate-100">
        {message}
      </span>
      <div className="flex items-center space-x-2">
        <Button
          variant="blue"
          size="sm"
          onClick={onReload}
          className="rounded-lg font-semibold shadow shrink-0"
        >
          {reloadLabel}
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={onDismiss}
          className="px-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 font-medium border-slate-700/60 shadow-none shrink-0"
        >
          {laterLabel}
        </Button>
      </div>
    </GlassCard>
  );
};
