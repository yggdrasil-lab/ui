import { useEffect, useState } from 'react';

/**
 * Returns a debounced copy of `value` that updates only after `delayMs`
 * has elapsed without changes. Updates immediately when `delayMs <= 0`.
 */
export function useDebouncedValue<T>(value: T, delayMs = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    if (delayMs <= 0) {
      setDebouncedValue(value);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delayMs]);

  return debouncedValue;
}
