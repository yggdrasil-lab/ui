import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface InlineNotesEditorProps {
    value?: string | null;
    onSave: (nextValue: string) => Promise<void> | void;
    title?: string;
    emptyText?: string;
    placeholder?: string;
    addLabel?: string;
    editLabel?: string;
    saveLabel?: string;
    savingLabel?: string;
    variant?: ThemeVariant;
    rows?: number;
    className?: string;
}
/**
 * Inline read/edit notes panel with draft syncing, async save locking,
 * and visible error feedback on rejected saves.
 */
export declare const InlineNotesEditor: React.FC<InlineNotesEditorProps>;
