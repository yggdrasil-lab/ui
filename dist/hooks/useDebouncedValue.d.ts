/**
 * Returns a debounced copy of `value` that updates only after `delayMs`
 * has elapsed without changes. Updates immediately when `delayMs <= 0`.
 */
export declare function useDebouncedValue<T>(value: T, delayMs?: number): T;
