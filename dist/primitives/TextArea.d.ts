import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: ThemeVariant;
    error?: boolean;
}
/**
 * Mobile-safe dark multiline textarea with error state and theme focus border.
 */
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
