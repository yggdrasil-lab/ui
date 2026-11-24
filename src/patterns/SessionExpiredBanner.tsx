import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';

export interface SessionExpiredBannerProps {
  /**
   * Alert message explaining session expiration.
   * Default: 'Authentik session expired - tap to re-authenticate'
   */
  message?: string;
  /**
   * Label for the action button.
   * Default: 'Log in'
   */
  actionLabel?: string;
  /**
   * Callback triggered when the banner or button is clicked.
   * Defaults to reloading window (window.location.reload()).
   */
  onReauth?: () => void;
  /**
   * Custom icon element to replace the default AlertTriangle icon.
   */
  icon?: React.ReactNode;
  /**
   * Additional CSS classes for styling customization.
   */
  className?: string;
  /**
   * Data test ID for testing.
   * Default: 'session-expired-banner'
   */
  testId?: string;
}

export const SessionExpiredBanner: React.FC<SessionExpiredBannerProps> = ({
  message = 'Authentik session expired - tap to re-authenticate',
  actionLabel = 'Log in',
  onReauth,
  icon,
  className = '',
  testId = 'session-expired-banner',
}) => {
  const handleReauth = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (onReauth) {
      onReauth();
    } else if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <GlassCard
      role="alert"
      aria-live="assertive"
      data-testid={testId}
      onClick={handleReauth}
      padding="none"
      className={twMerge(
        'flex items-center justify-between p-3.5 px-4 rounded-xl border-rose-500/50 bg-rose-950/30 text-slate-100 shadow-rose-950/20 transition-all animate-slide-up',
        className
      )}
    >
      <div className="flex items-center gap-2.5 min-w-0 pr-2">
        {icon ? (
          <span className="shrink-0 flex items-center">{icon}</span>
        ) : (
          <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
        )}
        <span className="text-xs sm:text-sm font-medium text-slate-100 truncate sm:whitespace-normal">
          {message}
        </span>
      </div>
      <Button
        variant="rose"
        size="sm"
        onClick={handleReauth}
        className="rounded-lg font-semibold shadow-md shrink-0"
      >
        {actionLabel}
      </Button>
    </GlassCard>
  );
};
