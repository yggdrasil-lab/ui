export declare const SW_UPDATE_POLL_INTERVAL_MS: number;
export interface UsePwaUpdateOptions {
    pollIntervalMs?: number;
    externalNeedRefresh?: boolean;
    onExternalNeedRefreshChange?: (needRefresh: boolean) => void;
    updateServiceWorker?: (reloadPage?: boolean) => Promise<void> | void;
    registration?: ServiceWorkerRegistration | null;
}
export interface UsePwaUpdateResult {
    needRefresh: boolean;
    checkingForUpdate: boolean;
    updateCheckMessage: string | null;
    checkForUpdates: () => Promise<void>;
    applyUpdate: () => Promise<void>;
    dismissUpdate: () => void;
    hardReset: () => Promise<void>;
}
export declare function usePwaUpdate(options?: UsePwaUpdateOptions): UsePwaUpdateResult;
