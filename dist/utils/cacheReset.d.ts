/**
 * Enumerates and deletes all CacheStorage entries in the current browser origin.
 * Returns the number of caches successfully deleted, or 0 on error or when unavailable.
 */
export declare function clearBrowserCaches(): Promise<number>;
/**
 * Unregisters all active Service Worker registrations and clears CacheStorage entries.
 * Returns the number of registrations unregistered, or 0 on error or when unavailable.
 */
export declare function unregisterServiceWorkers(): Promise<number>;
/**
 * Unregisters all Service Workers, clears all browser CacheStorage entries,
 * and reloads the current window to fetch fresh assets from the network.
 */
export declare function resetClientCacheAndReload(): Promise<void>;
