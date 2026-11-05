import { default as React } from 'react';
import { ThemeVariant } from '../shell/AppHeader';
export interface FileDropzoneProps {
    file: File | null;
    onFileChange: (file: File | null) => void;
    acceptedFormats?: string;
    title?: string;
    description?: string;
    variant?: ThemeVariant;
    className?: string;
    children?: React.ReactNode;
}
export declare const FileDropzone: React.FC<FileDropzoneProps>;
