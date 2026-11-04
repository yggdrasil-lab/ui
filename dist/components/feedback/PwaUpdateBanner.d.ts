import { default as React } from 'react';
export interface PwaUpdateBannerProps {
    message?: string;
    reloadLabel?: string;
    laterLabel?: string;
    onReload: () => void;
    onDismiss: () => void;
    className?: string;
}
export declare const PwaUpdateBanner: React.FC<PwaUpdateBannerProps>;
