import { default as React } from 'react';
export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: React.ReactNode;
    headerIcon?: React.ReactNode;
    disableClose?: boolean;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
