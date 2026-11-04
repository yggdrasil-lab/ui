import { default as React } from 'react';
export interface HeaderTabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
}
export type ThemeVariant = 'amber' | 'blue' | 'emerald' | 'purple' | 'slate';
export interface AppHeaderProps {
    brandInitial?: string;
    brandIcon?: React.ReactNode;
    brandColor?: string;
    variant?: ThemeVariant;
    title: string;
    subtitle?: string;
    tabs?: HeaderTabItem[];
    activeTab?: string;
    activeTabClass?: string;
    onChangeTab?: (id: string) => void;
    onRefresh?: () => void;
    isRefreshing?: boolean;
    actions?: React.ReactNode;
    className?: string;
}
export declare const AppHeader: React.FC<AppHeaderProps>;
