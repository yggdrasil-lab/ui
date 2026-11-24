import { default as React } from 'react';
export type PayloadInput = string | Record<string, unknown> | unknown[] | null | undefined;
export interface PayloadViewerProps {
    payload: PayloadInput;
    title: string;
    subtitle?: string;
    defaultExpanded?: boolean;
    emptyMessage?: string;
    redactKeys?: string[];
    maxHeightClassName?: string;
    className?: string;
}
/**
 * Collapsible sanitized monospace JSON/text inspector with byte/line metrics,
 * clipboard copy confirmation, and bounded scrolling to prevent mobile overflow.
 */
export declare const PayloadViewer: React.FC<PayloadViewerProps>;
