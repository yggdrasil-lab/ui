import { useCallback, useEffect, useRef, useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

export interface UseCopyFeedbackResult {
  copiedKey: string | null;
  copyText: (text: string, key?: string) => Promise<boolean>;
}

/**
 * Tracks temporary copied confirmation state for single or multi-row copy buttons.
 */
export function useCopyFeedback(resetDelayMs = 2000): UseCopyFeedbackResult {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyText = useCallback(
    async (text: string, key = 'default'): Promise<boolean> => {
      const ok = await copyToClipboard(text);
      if (!ok) {
        return false;
      }

      setCopiedKey(key);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setCopiedKey(null);
        timerRef.current = null;
      }, resetDelayMs);
      return true;
    },
    [resetDelayMs]
  );

  return { copiedKey, copyText };
}
