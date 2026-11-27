import { default as React } from 'react';
export interface MultiSegmentItem {
    id: string;
    label: string;
    value: number;
    barColor: string;
    dotColor?: string;
    textColor?: string;
    valueLabel?: string;
    minVisiblePct?: number;
}
export interface NormalizedSegmentItem extends MultiSegmentItem {
    widthPct: number;
}
/**
 * Pure helper that normalizes positive segment values to sum to 100% total bar width.
 */
export declare function normalizeSegments(segments: MultiSegmentItem[]): NormalizedSegmentItem[];
export interface MultiSegmentBarProps extends React.HTMLAttributes<HTMLDivElement> {
    segments: MultiSegmentItem[];
    showLegend?: boolean;
    heightClass?: string;
    className?: string;
}
export declare const MultiSegmentBar: React.FC<MultiSegmentBarProps>;
