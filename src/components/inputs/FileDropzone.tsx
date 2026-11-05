import React, { useState } from 'react';
import { FileText, X } from 'lucide-react';
import type { ThemeVariant } from '../shell/AppHeader';

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

const activeBorderVariants: Record<ThemeVariant, string> = {
  amber: 'border-amber-500 bg-amber-500/5',
  blue: 'border-blue-500 bg-blue-500/5',
  emerald: 'border-emerald-500 bg-emerald-500/5',
  purple: 'border-purple-500 bg-purple-500/5',
  slate: 'border-slate-500 bg-slate-500/5',
};

const textHighlightVariants: Record<ThemeVariant, string> = {
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  slate: 'text-slate-300',
};

export const FileDropzone: React.FC<FileDropzoneProps> = ({
  file,
  onFileChange,
  acceptedFormats = '.pdf,.csv',
  title = 'Drop your file here, or browse',
  description = 'Supports official PDF and CSV documents',
  variant = 'amber',
  className = '',
  children,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const inputId = React.useId();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  const activeBorder = activeBorderVariants[variant] || activeBorderVariants.amber;
  const highlightClass = textHighlightVariants[variant] || textHighlightVariants.amber;

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
        dragActive
          ? activeBorder
          : 'border-border hover:border-slate-600 bg-background/50'
      } ${className}`}
    >
      <input
        type="file"
        accept={acceptedFormats}
        id={inputId}
        onChange={handleFileInput}
        className="hidden"
      />
      <label htmlFor={inputId} className="cursor-pointer space-y-2 block">
        <FileText className="w-8 h-8 text-slate-400 mx-auto" />
        <div className="text-xs text-slate-300 font-medium">
          {file ? (
            <div className="inline-flex items-center space-x-2 bg-card px-3 py-1 rounded-lg border border-border">
              <span className={`${highlightClass} font-semibold truncate max-w-[240px]`}>
                {file.name}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onFileChange(null);
                }}
                className="text-slate-400 hover:text-slate-200 p-0.5 rounded"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              <span>{title.split('browse')[0]}</span>
              <span className={`${highlightClass} underline`}>browse</span>
              <span>{title.split('browse')[1] || ''}</span>
            </>
          )}
        </div>
        <p className="text-[10px] text-slate-500">{description}</p>
      </label>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
