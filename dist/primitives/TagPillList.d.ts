import { default as React } from 'react';
export interface TagPillListProps {
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
/**
 * Normalize raw tag text into a lowercase kebab-case token without leading '#'.
 */
export declare function normalizeTagToken(raw: string): string;
/**
 * Reusable #tag pill strip with optional inline '+ tag' editor and removal button.
 */
export declare const TagPillList: React.FC<TagPillListProps>;
