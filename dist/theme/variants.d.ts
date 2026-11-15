export type ThemeVariant = 'amber' | 'blue' | 'emerald' | 'purple' | 'slate';
export type AccentVariant = ThemeVariant | 'rose' | 'sky' | 'orange';
export declare const THEME_TEXT_COLORS: Record<ThemeVariant, string>;
export declare const THEME_VALUE_COLORS: Record<ThemeVariant, string>;
export declare const THEME_ACTION_TEXT: Record<ThemeVariant, string>;
export declare const THEME_BRAND_BADGE: Record<ThemeVariant, string>;
export declare const THEME_ACTIVE_TAB: Record<ThemeVariant, string>;
export declare const THEME_BOTTOM_NAV_ACTIVE: Record<ThemeVariant, string>;
export declare const THEME_GLOW_BG: Record<ThemeVariant, string>;
export declare const THEME_DROPZONE_ACTIVE: Record<ThemeVariant, string>;
export declare const THEME_RING_SELECTED: Record<ThemeVariant, string>;
export declare const THEME_SEGMENT_ACTIVE: Record<ThemeVariant, string>;
export declare const THEME_FOCUS_BORDER: Record<ThemeVariant, string>;
export declare const THEME_CALLOUT_BOX: Record<ThemeVariant, {
    container: string;
    header: string;
}>;
export declare const THEME_GOAL_GRADIENT: Record<ThemeVariant, {
    eyebrow: string;
    bar: string;
}>;
export declare const THEME_BUTTON_VARIANT: Record<ThemeVariant, 'amber' | 'blue' | 'emerald' | 'secondary'>;
