import { default as React } from 'react';
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
export declare const AiSynthesizerModal: React.FC<AiSynthesizerModalProps>;
