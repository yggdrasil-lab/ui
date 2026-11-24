import React from 'react';

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
    <div
      role="status"
      data-testid="pwa-update-banner"
      className={`glass-panel flex items-center justify-between p-3 px-4 rounded-xl border border-blue-500/40 bg-slate-900/90 backdrop-blur-md shadow-xl animate-slide-up ${className}`}
    >
      <span className="text-xs sm:text-sm font-medium text-slate-100">
        {message}
      </span>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={onReload}
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-xs rounded-lg shadow transition-all"
        >
          {reloadLabel}
        </button>
        <button
          type="button"
          onClick={onDismiss}
          className="px-2.5 py-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs rounded-lg border border-slate-700/60 transition-all"
        >
          {laterLabel}
        </button>
      </div>
    </div>
  );
};
