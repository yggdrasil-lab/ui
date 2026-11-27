import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export interface TagPillListProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[];
  onAddTag?: (cleanedTag: string) => void | Promise<void>;
  onRemoveTag?: (tag: string) => void | Promise<void>;
  disabled?: boolean;
  placeholder?: string;
  variant?: 'amber' | 'slate';
  addButtonLabel?: string;
  addButtonTestId?: string;
  inputTestId?: string;
  className?: string;
}

const pillVariantClasses: Record<'amber' | 'slate', { pill: string; removeBtn: string }> = {
  amber: {
    pill: 'bg-amber-500/10 text-amber-300 border border-amber-500/20',
    removeBtn: 'text-amber-400/70 hover:text-amber-200',
  },
  slate: {
    pill: 'bg-slate-800 text-slate-300 border border-slate-700/80',
    removeBtn: 'opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-400',
  },
};

/**
 * Normalize raw tag text into a lowercase kebab-case token without leading '#'.
 */
export function normalizeTagToken(raw: string): string {
  return raw.trim().toLowerCase().replace(/^#+/, '').replace(/\s+/g, '-');
}

interface TagAddEditorProps {
  disabled: boolean;
  placeholder: string;
  addButtonLabel: string;
  addButtonTestId?: string;
  inputTestId?: string;
  onCommitTag: (rawDraft: string) => void;
}

const TagAddEditor: React.FC<TagAddEditorProps> = ({
  disabled,
  placeholder,
  addButtonLabel,
  addButtonTestId,
  inputTestId,
  onCommitTag,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [draft, setDraft] = useState('');

  const commit = () => {
    const value = draft;
    setDraft('');
    setIsAdding(false);
    onCommitTag(value);
  };

  if (!isAdding) {
    return (
      <button
        type="button"
        onClick={() => {
          setDraft('');
          setIsAdding(true);
        }}
        disabled={disabled}
        data-testid={addButtonTestId}
        className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-800/70 hover:bg-slate-800 text-slate-400 hover:text-amber-300 border border-border/70 text-[10px] transition-colors"
      >
        <Plus className="w-2.5 h-2.5" />
        <span>{addButtonLabel}</span>
      </button>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        commit();
      }}
      className="inline-flex items-center gap-1"
    >
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault();
            setDraft('');
            setIsAdding(false);
          }
        }}
        placeholder={placeholder}
        autoFocus
        data-testid={inputTestId}
        className="w-28 sm:w-24 px-1.5 py-0.5 text-base sm:text-[10px] rounded bg-background border border-amber-500/50 text-slate-200 focus:outline-none"
      />
    </form>
  );
};

/**
 * Reusable #tag pill strip with optional inline '+ tag' editor and removal button.
 */
export const TagPillList: React.FC<TagPillListProps> = ({
  tags,
  onAddTag,
  onRemoveTag,
  disabled = false,
  placeholder = 'add tag...',
  variant = 'amber',
  addButtonLabel = 'tag',
  addButtonTestId,
  inputTestId,
  className = '',
  ...rest
}) => {
  if (tags.length === 0 && !onAddTag) {
    return null;
  }

  const styles = pillVariantClasses[variant] || pillVariantClasses.amber;

  const handleCommitTag = (rawDraft: string) => {
    const cleaned = normalizeTagToken(rawDraft);
    if (cleaned && !tags.includes(cleaned) && onAddTag) {
      void onAddTag(cleaned);
    }
  };

  return (
    <div className={twMerge('flex items-center flex-wrap gap-1', className)} {...rest}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium ${styles.pill}`}
        >
          <span>#{tag}</span>
          {onRemoveTag && (
            <button
              type="button"
              onClick={() => void onRemoveTag(tag)}
              disabled={disabled}
              aria-label={`Remove tag ${tag}`}
              title={`Remove tag #${tag}`}
              className={`transition-colors ${styles.removeBtn}`}
            >
              <X className="w-2.5 h-2.5" />
            </button>
          )}
        </span>
      ))}

      {onAddTag && (
        <TagAddEditor
          disabled={disabled}
          placeholder={placeholder}
          addButtonLabel={addButtonLabel}
          addButtonTestId={addButtonTestId}
          inputTestId={inputTestId}
          onCommitTag={handleCommitTag}
        />
      )}
    </div>
  );
};
