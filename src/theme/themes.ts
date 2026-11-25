export type AppTheme = 'default' | 'midas' | 'kratos' | 'kairos';

export interface AppThemeMeta {
  id: AppTheme;
  label: string;
  subtitle: string;
  swatchHex: string;
  secondaryHex: string;
}

export const APP_THEMES: readonly AppTheme[] = [
  'default',
  'midas',
  'kratos',
  'kairos',
] as const;

export const APP_THEME_META: Record<AppTheme, AppThemeMeta> = {
  default: {
    id: 'default',
    label: 'Yggdrasil Slate',
    subtitle: 'Default Amber & Slate',
    swatchHex: '#f59e0b',
    secondaryHex: '#10b981',
  },
  midas: {
    id: 'midas',
    label: 'Midas',
    subtitle: 'Obsidian & Burnished Gold',
    swatchHex: '#d4a038',
    secondaryHex: '#34d399',
  },
  kratos: {
    id: 'kratos',
    label: 'Kratos',
    subtitle: 'Carbon Forge & Crimson',
    swatchHex: '#f43f5e',
    secondaryHex: '#fb923c',
  },
  kairos: {
    id: 'kairos',
    label: 'Kairos',
    subtitle: 'Twilight Mist & Candle',
    swatchHex: '#c4b5fd',
    secondaryHex: '#e5c185',
  },
};
