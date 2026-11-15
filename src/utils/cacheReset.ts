/**
 * Enumerates and deletes all CacheStorage entries in the current browser origin.
 * Returns the number of caches successfully deleted, or 0 on error or when unavailable.
 */
export async function clearBrowserCaches(): Promise<number> {
  if (
    typeof window === 'undefined' ||
    !('caches' in window) ||
    !window.caches ||
    typeof window.caches.keys !== 'function' ||
    typeof window.caches.delete !== 'function'
  ) {
    return 0;
  }

  try {
    const keys = await window.caches.keys();
    const results = await Promise.allSettled(
      keys.map((key) => window.caches.delete(key))
    );
    return results.filter(
      (result) => result.status === 'fulfilled' && result.value === true
    ).length;
  } catch {
    return 0;
  }
}

/**
 * Unregisters all active Service Worker registrations and clears CacheStorage entries.
 * Returns the number of registrations unregistered, or 0 on error or when unavailable.
 */
export async function unregisterServiceWorkers(): Promise<number> {
  let unregisteredCount = 0;

  try {
    if (
      typeof navigator !== 'undefined' &&
      'serviceWorker' in navigator &&
      navigator.serviceWorker &&
      typeof navigator.serviceWorker.getRegistrations === 'function'
    ) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const results = await Promise.allSettled(
        registrations.map((reg) =>
          typeof reg?.unregister === 'function'
            ? reg.unregister()
            : Promise.resolve(false)
        )
      );
      unregisteredCount = results.filter(
        (result) => result.status === 'fulfilled' && result.value === true
      ).length;
    }
  } catch {
    unregisteredCount = 0;
  }

  await clearBrowserCaches();
  return unregisteredCount;
}

/**
 * Unregisters all Service Workers, clears all browser CacheStorage entries,
 * and reloads the current window to fetch fresh assets from the network.
 */
export async function resetClientCacheAndReload(): Promise<void> {
  await unregisterServiceWorkers();
  await clearBrowserCaches();
  if (typeof window !== 'undefined' && typeof window.location?.reload === 'function') {
    window.location.reload();
  }
}
