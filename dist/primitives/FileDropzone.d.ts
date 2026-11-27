import { default as React } from 'react';
import { ThemeVariant } from '../theme/variants';
export interface FileDropzoneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
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
