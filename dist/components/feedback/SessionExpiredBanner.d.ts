import { default as React } from 'react';
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
export declare const SessionExpiredBanner: React.FC<SessionExpiredBannerProps>;
