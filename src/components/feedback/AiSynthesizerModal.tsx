import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../inputs/Button';

export interface AiSynthesizerPillar {
  label: string;
  description: string;
}

export interface AiSynthesizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  headerIcon?: React.ReactNode;
  citationTitle?: string | null;
  citationIcon?: React.ReactNode;
  pillars?: AiSynthesizerPillar[];
  inputLabel?: string;
  inputPlaceholder?: string;
  inputRows?: number;
  submitLabel?: string;
  submittingLabel?: string;
  errorFallbackMessage?: string;
  variant?: 'blue' | 'amber' | 'emerald' | 'purple';
  onSynthesize: (customContext?: string) => Promise<void>;
}

export const AiSynthesizerModal: React.FC<AiSynthesizerModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle = 'Sports Physiology & Circadian Research Grounding',
  headerIcon = '🧠',
  citationTitle,
  citationIcon = '📚',
  pillars = [],
  inputLabel = 'Constraints, Body State, or Schedule Shifts (Optional)',
  inputPlaceholder = 'e.g. Left shoulder is pinching; only have 35 minutes today; meeting moved to 1:30 PM',
  inputRows = 3,
  submitLabel = 'Synthesize with AI',
  submittingLabel = 'Synthesizing...',
  errorFallbackMessage = 'Synthesis failed. Please verify Muninn connection or try again.',
  variant = 'blue',
  onSynthesize,
}) => {
  const [customContext, setCustomContext] = useState<string>('');
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSynthesize = async () => {
    setIsBusy(true);
    setError(null);
    try {
      await onSynthesize(customContext.trim() || undefined);
      setCustomContext('');
      onClose();
    } catch {
      setError(errorFallbackMessage);
    } finally {
      setIsBusy(false);
    }
  };

  const isAmber = variant === 'amber';
  const calloutBorder = isAmber
    ? 'bg-amber-500/10 border-amber-500/25'
    : 'bg-blue-500/10 border-blue-500/25';
  const calloutHeaderColor = isAmber ? 'text-amber-300' : 'text-blue-300';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      subtitle={subtitle}
      headerIcon={headerIcon}
      disableClose={isBusy}
    >
      <div className="space-y-4">
        {/* Research Framework Pill */}
        {(citationTitle || pillars.length > 0) && (
          <div className={`rounded-xl border p-3 text-xs ${calloutBorder}`}>
            {citationTitle && (
              <div className={`font-semibold mb-1.5 flex items-center gap-1.5 ${calloutHeaderColor}`}>
                <span>{citationIcon}</span>
                <span>{citationTitle}</span>
              </div>
            )}
            {pillars.length > 0 && (
              <ul className="m-0 pl-4 text-slate-300 space-y-1 leading-relaxed text-xs list-disc">
                {pillars.map((pillar, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-100">{pillar.label}:</strong> {pillar.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Input for Context / Constraints */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-slate-200">
            {inputLabel}
          </label>
          <textarea
            rows={inputRows}
            value={customContext}
            onChange={(e) => setCustomContext(e.target.value)}
            disabled={isBusy}
            placeholder={inputPlaceholder}
            className="w-full bg-background/80 border border-border rounded-xl px-3 py-2 text-slate-100 text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-y"
          />
        </div>

        {error && (
          <div className="text-rose-400 text-xs bg-rose-500/10 border border-rose-500/30 rounded-xl px-3 py-2">
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2.5 justify-end pt-1">
          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
            disabled={isBusy}
          >
            Cancel
          </Button>
          <Button
            variant={isAmber ? 'amber' : 'blue'}
            size="md"
            loading={isBusy}
            loadingText={submittingLabel}
            icon={<span>⚡</span>}
            onClick={handleSynthesize}
          >
            {submitLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
