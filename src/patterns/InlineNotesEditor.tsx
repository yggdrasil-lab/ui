import React, { useState } from 'react';
import { Edit3, Save } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../primitives/Button';
import { TextArea } from '../primitives/TextArea';
import { THEME_ACTION_TEXT, THEME_BUTTON_VARIANT, type ThemeVariant } from '../theme/variants';

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

interface NotesEditFormProps {
  draft: string;
  onDraftChange: (value: string) => void;
  placeholder: string;
  rows: number;
  variant: ThemeVariant;
  saving: boolean;
  error: string | null;
  saveLabel: string;
  savingLabel: string;
  onCancel: () => void;
  onSubmit: () => void;
}

const NotesEditForm: React.FC<NotesEditFormProps> = ({
  draft,
  onDraftChange,
  placeholder,
  rows,
  variant,
  saving,
  error,
  saveLabel,
  savingLabel,
  onCancel,
  onSubmit,
}) => (
  <div className="space-y-2 pt-1">
    <TextArea
      value={draft}
      onChange={(e) => onDraftChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      variant={variant}
      disabled={saving}
      error={Boolean(error)}
      className="min-h-[68px]"
    />
    {Boolean(error) && (
      <p role="alert" className="text-xs text-rose-400">
        {error}
      </p>
    )}
    <div className="flex justify-end gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onCancel}
        disabled={saving}
        className="min-h-[44px] sm:min-h-[32px]"
      >
        Cancel
      </Button>
      <Button
        variant={THEME_BUTTON_VARIANT[variant] || 'amber'}
        size="sm"
        loading={saving}
        loadingText={savingLabel}
        disabled={saving}
        icon={<Save className="w-3.5 h-3.5" />}
        onClick={onSubmit}
        className="min-h-[44px] sm:min-h-[32px]"
      >
        {saveLabel}
      </Button>
    </div>
  </div>
);

const NotesReadView: React.FC<{ value?: string | null; emptyText: string }> = ({
  value,
  emptyText,
}) =>
  value && value.trim().length > 0 ? (
    <p className="text-slate-300 text-xs whitespace-pre-wrap bg-background/40 p-2 rounded border border-border/40">
      {value}
    </p>
  ) : (
    <p className="text-slate-500 text-xs italic">{emptyText}</p>
  );

/**
 * Inline read/edit notes panel with draft syncing, async save locking,
 * and visible error feedback on rejected saves.
 */
export const InlineNotesEditor: React.FC<InlineNotesEditorProps> = ({
  value,
  onSave,
  title = 'Notes',
  emptyText = 'No notes added yet.',
  placeholder = 'Add notes...',
  addLabel = 'Add Note',
  editLabel = 'Edit',
  saveLabel = 'Save Note',
  savingLabel = 'Saving...',
  variant = 'amber',
  rows = 2,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(value ?? '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const actionColor = THEME_ACTION_TEXT[variant] || THEME_ACTION_TEXT.amber;
  const hasValue = Boolean(value && value.trim().length > 0);

  const openEditor = () => {
    setDraft(value ?? '');
    setError(null);
    setIsEditing(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      await onSave(draft);
      setIsEditing(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save note');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={twMerge('p-2.5 bg-card/40 rounded-lg border border-border/50 text-xs space-y-1.5', className)}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">{title}</span>
        {!isEditing && (
          <Button
            variant="ghost"
            size="xs"
            icon={<Edit3 className="w-3 h-3" />}
            onClick={openEditor}
            className={twMerge('min-h-[44px] sm:min-h-[28px] px-2 text-[11px]', actionColor)}
          >
            {hasValue ? editLabel : addLabel}
          </Button>
        )}
      </div>
      {isEditing ? (
        <NotesEditForm
          draft={draft}
          onDraftChange={setDraft}
          placeholder={placeholder}
          rows={rows}
          variant={variant}
          saving={saving}
          error={error}
          saveLabel={saveLabel}
          savingLabel={savingLabel}
          onCancel={() => {
            setIsEditing(false);
            setError(null);
          }}
          onSubmit={() => void handleSave()}
        />
      ) : (
        <NotesReadView value={value} emptyText={emptyText} />
      )}
    </div>
  );
};
