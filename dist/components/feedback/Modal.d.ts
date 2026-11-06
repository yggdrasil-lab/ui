import { default as React } from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    subtitle?: React.ReactNode;
    headerIcon?: React.ReactNode;
    disableClose?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const Modal: React.FC<ModalProps>;
