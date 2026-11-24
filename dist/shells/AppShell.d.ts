import { default as React } from 'react';
export interface AppShellProps {
    header?: React.ReactNode;
    bottomNav?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const AppShell: React.FC<AppShellProps>;
