export type AppTheme = 'default' | 'midas' | 'kratos' | 'kairos';
export interface AppThemeMeta {
    id: AppTheme;
    label: string;
    subtitle: string;
    swatchHex: string;
    secondaryHex: string;
}
export declare const APP_THEMES: readonly AppTheme[];
export declare const APP_THEME_META: Record<AppTheme, AppThemeMeta>;
