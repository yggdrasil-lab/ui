import { useEffect, useRef } from 'react';

export interface UseAppResumeRefreshOptions {
  enabled?: boolean;
  minIntervalMs?: number;
}

function subscribeResumeEvents(
  minIntervalMs: number,
  lastTriggeredAtRef: { current: number },
  onResumeRef: { current: () => void }
): () => void {
  const triggerIfDue = () => {
    const now = Date.now();
    if (now - lastTriggeredAtRef.current < minIntervalMs) {
      return;
    }
    lastTriggeredAtRef.current = now;
    onResumeRef.current();
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      triggerIfDue();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('online', triggerIfDue);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('online', triggerIfDue);
  };
}

/**
 * Invokes `onResume` when the PWA returns to foreground visibility or
 * regains network connectivity, throttled by `minIntervalMs` (default 1000ms).
 */
export function useAppResumeRefresh(
  onResume: () => void,
  options: UseAppResumeRefreshOptions = {}
): void {
  const { enabled = true, minIntervalMs = 1000 } = options;
  const onResumeRef = useRef(onResume);
  const lastTriggeredAtRef = useRef<number>(0);

  onResumeRef.current = onResume;

  useEffect(() => {
    if (
      !enabled ||
      typeof window === 'undefined' ||
      typeof document === 'undefined'
    ) {
      return;
    }

    return subscribeResumeEvents(
      minIntervalMs,
      lastTriggeredAtRef,
      onResumeRef
    );
  }, [enabled, minIntervalMs]);
}
