import React, { useId, useMemo, useState } from 'react';
import { Check, ChevronDown, ChevronRight, Copy } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { useCopyFeedback } from '../hooks/useCopyFeedback';
import { Button } from '../primitives/Button';
import { GlassCard } from '../primitives/GlassCard';
import { StatusBadge } from '../primitives/StatusBadge';

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

const DEFAULT_REDACT_KEYS = [
  'authorization',
  'x-api-key',
  'api_key',
  'apikey',
  'cookie',
  'set-cookie',
  'password',
  'secret',
  'webhook_secret',
  'access_token',
  'refresh_token',
  'private_key',
];

const ANSI_ESCAPE_RE = /\u001b\[[0-9;?]*[ -/]*[@-~]/g;
const CONTROL_CHARS_RE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
const BIDI_OVERRIDE_RE = /[\u202a-\u202e\u2066-\u2069]/g;

function sanitizeControlChars(value: string): string {
  return value
    .replace(ANSI_ESCAPE_RE, '')
    .replace(/\r\n?/g, '\n')
    .replace(CONTROL_CHARS_RE, '')
    .replace(BIDI_OVERRIDE_RE, '');
}

function sanitizeJsonValue(
  value: unknown,
  redactSet: Set<string>,
  ancestors: WeakSet<object>
): unknown {
  if (value === null || value === undefined) {
    return value;
  }
  if (typeof value === 'string') {
    return sanitizeControlChars(value);
  }
  if (typeof value === 'bigint') {
    return value.toString();
  }
  if (typeof value === 'function') {
    return '[Function]';
  }
  if (typeof value !== 'object') {
    return value;
  }
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? 'Invalid Date' : value.toISOString();
  }
  if (value instanceof Error) {
    return {
      name: sanitizeControlChars(value.name),
      message: sanitizeControlChars(value.message),
    };
  }
  if (ancestors.has(value)) {
    return '[Circular]';
  }

  ancestors.add(value);
  try {
    if (Array.isArray(value)) {
      return value.map((entry) => sanitizeJsonValue(entry, redactSet, ancestors));
    }

    const sanitized: Record<string, unknown> = {};
    for (const [key, entry] of Object.entries(value)) {
      if (redactSet.has(key.toLowerCase())) {
        sanitized[key] = '[REDACTED]';
      } else {
        sanitized[key] = sanitizeJsonValue(entry, redactSet, ancestors);
      }
    }
    return sanitized;
  } finally {
    ancestors.delete(value);
  }
}

function formatByteSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

interface FormattedPayload {
  text: string;
  isEmpty: boolean;
  bytes: number;
  lines: number;
  formatLabel: 'JSON' | 'TEXT' | 'EMPTY';
}

function formatPayload(payload: PayloadInput, redactKeys: string[]): FormattedPayload {
  if (payload === null || payload === undefined) {
    return { text: '', isEmpty: true, bytes: 0, lines: 0, formatLabel: 'EMPTY' };
  }

  const redactSet = new Set(redactKeys.map((key) => key.toLowerCase()));
  let text = '';
  let formatLabel: 'JSON' | 'TEXT' = 'TEXT';

  if (typeof payload === 'string') {
    const cleanText = sanitizeControlChars(payload);
    const trimmed = cleanText.trim();
    if (!trimmed) {
      return { text: '', isEmpty: true, bytes: 0, lines: 0, formatLabel: 'EMPTY' };
    }

    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        const parsed = JSON.parse(trimmed) as unknown;
        if (parsed !== null && typeof parsed === 'object') {
          const sanitized = sanitizeJsonValue(parsed, redactSet, new WeakSet());
          text = JSON.stringify(sanitized, null, 2);
          formatLabel = 'JSON';
        } else {
          text = cleanText;
        }
      } catch {
        text = cleanText;
      }
    } else {
      text = cleanText;
    }
  } else {
    const sanitized = sanitizeJsonValue(payload, redactSet, new WeakSet());
    text = JSON.stringify(sanitized, null, 2) ?? '';
    formatLabel = 'JSON';
  }

  if (!text) {
    return { text: '', isEmpty: true, bytes: 0, lines: 0, formatLabel: 'EMPTY' };
  }

  const bytes =
    typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(text).length : text.length;
  const lines = text.split('\n').length;

  return {
    text,
    isEmpty: false,
    bytes,
    lines,
    formatLabel,
  };
}

interface PayloadHeaderProps {
  title: string;
  subtitle?: string;
  panelId: string;
  isExpanded: boolean;
  onToggle: () => void;
  summaryBadge: string;
  isEmpty: boolean;
  isCopied: boolean;
  onCopy: () => void;
}

const PayloadHeader: React.FC<PayloadHeaderProps> = ({
  title,
  subtitle,
  panelId,
  isExpanded,
  onToggle,
  summaryBadge,
  isEmpty,
  isCopied,
  onCopy,
}) => (
  <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5 min-w-0">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={panelId}
      className="flex-1 min-w-[180px] min-h-[44px] flex items-center gap-2 text-left bg-transparent border-0 p-0 cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60"
    >
      {isExpanded ? (
        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
      ) : (
        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
      )}
      <div className="min-w-0 flex-1">
        <div className="text-sm sm:text-xs font-semibold text-slate-100 truncate">{title}</div>
        {subtitle && <div className="text-xs text-slate-400 truncate mt-0.5">{subtitle}</div>}
      </div>
    </button>

    <div className="flex items-center gap-2 shrink-0 max-w-full">
      <StatusBadge
        label={summaryBadge}
        variant="idle"
        showDot={false}
        className="text-[11px] font-mono whitespace-nowrap"
      />

      <Button
        variant="secondary"
        size="sm"
        disabled={isEmpty}
        onClick={onCopy}
        aria-label={isCopied ? `Copied ${title}` : `Copy ${title}`}
        data-copied={isCopied ? 'true' : 'false'}
        icon={isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        className={twMerge(
          'min-h-[44px] min-w-[44px] px-2.5 font-medium shadow-none disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60',
          isCopied
            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 hover:text-emerald-200'
            : 'bg-background/70 border-border/70 text-slate-300 hover:text-white hover:bg-slate-800'
        )}
      >
        {isCopied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  </div>
);

interface PayloadBodyProps {
  panelId: string;
  formatted: FormattedPayload;
  emptyMessage: string;
  maxHeightClassName: string;
}

const PayloadBody: React.FC<PayloadBodyProps> = ({
  panelId,
  formatted,
  emptyMessage,
  maxHeightClassName,
}) => (
  <div id={panelId} className="border-t border-border/60 bg-background/80 p-3 min-w-0 max-w-full">
    {formatted.isEmpty ? (
      <div className="px-2 py-3 text-xs text-slate-400 text-center">{emptyMessage}</div>
    ) : (
      <pre
        className={`overflow-x-auto overflow-y-auto ${maxHeightClassName} w-full max-w-full m-0 p-3 rounded-xl bg-background border border-border/60 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre`}
      >
        {formatted.text}
      </pre>
    )}
  </div>
);

/**
 * Collapsible sanitized monospace JSON/text inspector with byte/line metrics,
 * clipboard copy confirmation, and bounded scrolling to prevent mobile overflow.
 */
export const PayloadViewer: React.FC<PayloadViewerProps> = ({
  payload,
  title,
  subtitle,
  defaultExpanded = false,
  emptyMessage = 'No payload recorded',
  redactKeys = DEFAULT_REDACT_KEYS,
  maxHeightClassName = 'max-h-96',
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const { copiedKey, copyText } = useCopyFeedback();
  const panelId = useId();

  const formatted = useMemo(() => formatPayload(payload, redactKeys), [payload, redactKeys]);
  const isCopied = copiedKey === 'payload';
  const lineLabel = `${formatted.lines} ${formatted.lines === 1 ? 'line' : 'lines'}`;
  const summaryBadge = `${formatted.formatLabel} | ${formatByteSize(formatted.bytes)} | ${lineLabel}`;

  return (
    <GlassCard
      padding="none"
      className={twMerge('w-full min-w-0 max-w-full overflow-hidden', className)}
    >
      <PayloadHeader
        title={title}
        subtitle={subtitle}
        panelId={panelId}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded((prev) => !prev)}
        summaryBadge={summaryBadge}
        isEmpty={formatted.isEmpty}
        isCopied={isCopied}
        onCopy={() => void copyText(formatted.text, 'payload')}
      />
      {isExpanded && (
        <PayloadBody
          panelId={panelId}
          formatted={formatted}
          emptyMessage={emptyMessage}
          maxHeightClassName={maxHeightClassName}
        />
      )}
    </GlassCard>
  );
};
