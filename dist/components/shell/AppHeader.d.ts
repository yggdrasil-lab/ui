import { default as React } from 'react';
export interface HeaderTabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
}
export interface AppHeaderProps {
    brandInitial: string;
    brandColor?: string;
    title: string;
    subtitle?: string;
    tabs?: HeaderTabItem[];
    activeTab?: string;
    onChangeTab?: (id: string) => void;
    onRefresh?: () => void;
    isRefreshing?: boolean;
    actions?: React.ReactNode;
}
export declare const AppHeader: React.FC<AppHeaderProps>;
