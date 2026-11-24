import React from 'react';

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
export function normalizeSegments(segments: MultiSegmentItem[]): NormalizedSegmentItem[] {
  const positiveSegments = segments.map((seg) => ({
    ...seg,
    value: Math.max(0, Number(seg.value) || 0),
  }));
  const total = positiveSegments.reduce((sum, seg) => sum + seg.value, 0);
  if (total <= 0) {
    return [];
  }
  return positiveSegments.map((seg) => ({
    ...seg,
    widthPct: (seg.value / total) * 100,
  }));
}

export interface MultiSegmentBarProps {
  segments: MultiSegmentItem[];
  showLegend?: boolean;
  heightClass?: string;
  className?: string;
}

export const MultiSegmentBar: React.FC<MultiSegmentBarProps> = ({
  segments,
  showLegend = true,
  heightClass = 'h-2.5',
  className = '',
}) => {
  const normalized = normalizeSegments(segments);
  if (normalized.length === 0) return null;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <div
        className={`w-full ${heightClass} rounded-full overflow-hidden flex bg-slate-800/80 border border-slate-700/50 shadow-inner`}
      >
        {normalized.map((seg) => {
          if (seg.widthPct <= 0) return null;
          const displayPct = seg.valueLabel || `${Math.round(seg.widthPct)}%`;
          return (
            <div
              key={seg.id}
              style={{ width: `${seg.widthPct}%` }}
              className={`h-full ${seg.barColor} transition-all duration-500`}
              title={`${seg.label}: ${displayPct}`}
            />
          );
        })}
      </div>

      {showLegend && (
        <div className="flex items-center gap-2.5 flex-wrap text-[10px] sm:text-xs text-slate-300">
          {normalized.map((seg) => {
            const minThreshold = seg.minVisiblePct ?? 0.5;
            if (seg.widthPct < minThreshold) return null;
            const dotClass = seg.dotColor || seg.barColor;
            const labelColor = seg.textColor || 'text-slate-200';
            const displayPct = seg.valueLabel || `${Math.round(seg.widthPct)}%`;
            return (
              <span key={seg.id} className="inline-flex items-center gap-1 font-medium">
                <span className={`w-2 h-2 rounded-full shrink-0 ${dotClass}`} />
                <span className={labelColor}>{seg.label}</span>
                <span className="text-slate-400">{displayPct}</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
