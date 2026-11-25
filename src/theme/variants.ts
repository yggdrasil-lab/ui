export type ThemeVariant = 'amber' | 'blue' | 'emerald' | 'purple' | 'slate' | 'brand';

export type AccentVariant = ThemeVariant | 'rose' | 'sky' | 'orange';

export const THEME_TEXT_COLORS: Record<ThemeVariant, string> = {
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  slate: 'text-slate-300',
  brand: 'text-accent',
};

export const THEME_VALUE_COLORS: Record<ThemeVariant, string> = {
  amber: 'text-amber-400',
  blue: 'text-blue-400',
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  slate: 'text-slate-100',
  brand: 'text-accent',
};

export const THEME_ACTION_TEXT: Record<ThemeVariant, string> = {
  amber: 'text-amber-400 hover:text-amber-300',
  blue: 'text-blue-400 hover:text-blue-300',
  emerald: 'text-emerald-400 hover:text-emerald-300',
  purple: 'text-purple-400 hover:text-purple-300',
  slate: 'text-slate-300 hover:text-slate-100',
  brand: 'text-accent hover:opacity-80',
};

export const THEME_BRAND_BADGE: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500 text-slate-950',
  blue: 'bg-blue-600 text-white',
  emerald: 'bg-emerald-500 text-slate-950',
  purple: 'bg-purple-600 text-white',
  slate: 'bg-slate-700 text-white',
  brand: 'bg-accent text-accent-fg',
};

export const THEME_ACTIVE_TAB: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500 text-slate-950 shadow',
  blue: 'bg-blue-600 text-white shadow',
  emerald: 'bg-emerald-500 text-slate-950 shadow',
  purple: 'bg-purple-600 text-white shadow',
  slate: 'bg-slate-200 text-slate-950 shadow',
  brand: 'bg-accent text-accent-fg shadow',
};

export const THEME_BOTTOM_NAV_ACTIVE: Record<ThemeVariant, string> = {
  amber: 'text-amber-400 bg-amber-500/10 font-semibold active',
  blue: 'text-blue-400 bg-blue-500/10 font-semibold active',
  emerald: 'text-emerald-400 bg-emerald-500/10 font-semibold active',
  purple: 'text-purple-400 bg-purple-500/10 font-semibold active',
  slate: 'text-slate-100 bg-slate-700/50 font-semibold active',
  brand: 'text-accent bg-accent/15 font-semibold active',
};

export const THEME_GLOW_BG: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/5',
  blue: 'bg-blue-500/5',
  emerald: 'bg-emerald-500/5',
  purple: 'bg-purple-500/5',
  slate: 'bg-slate-500/5',
  brand: 'bg-accent/10',
};

export const THEME_DROPZONE_ACTIVE: Record<ThemeVariant, string> = {
  amber: 'border-amber-500 bg-amber-500/5',
  blue: 'border-blue-500 bg-blue-500/5',
  emerald: 'border-emerald-500 bg-emerald-500/5',
  purple: 'border-purple-500 bg-purple-500/5',
  slate: 'border-slate-500 bg-slate-500/5',
  brand: 'border-accent bg-accent/5',
};

export const THEME_RING_SELECTED: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/10 border-amber-500/40 shadow-md ring-1 ring-amber-500/30',
  blue: 'bg-blue-500/10 border-blue-500/40 shadow-md ring-1 ring-blue-500/30',
  emerald: 'bg-emerald-500/10 border-emerald-500/40 shadow-md ring-1 ring-emerald-500/30',
  purple: 'bg-purple-500/10 border-purple-500/40 shadow-md ring-1 ring-purple-500/30',
  slate: 'bg-slate-800/50 border-slate-600 shadow-md ring-1 ring-slate-500/30',
  brand: 'bg-accent/10 border-accent/40 shadow-md ring-1 ring-accent/30',
};

export const THEME_SEGMENT_ACTIVE: Record<ThemeVariant, string> = {
  amber: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm',
  blue: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-sm',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/40 shadow-sm',
  slate: 'bg-slate-700/50 text-slate-100 border-slate-600 shadow-sm',
  brand: 'bg-accent/15 text-accent border-accent/40 shadow-sm',
};

export const THEME_FOCUS_BORDER: Record<ThemeVariant, string> = {
  amber: 'focus:border-amber-500',
  blue: 'focus:border-blue-500',
  emerald: 'focus:border-emerald-500',
  purple: 'focus:border-purple-500',
  slate: 'focus:border-slate-500',
  brand: 'focus:border-accent',
};

export const THEME_CALLOUT_BOX: Record<
  ThemeVariant,
  { container: string; header: string }
> = {
  amber: {
    container: 'bg-amber-500/10 border-amber-500/25',
    header: 'text-amber-300',
  },
  blue: {
    container: 'bg-blue-500/10 border-blue-500/25',
    header: 'text-blue-300',
  },
  emerald: {
    container: 'bg-emerald-500/10 border-emerald-500/25',
    header: 'text-emerald-300',
  },
  purple: {
    container: 'bg-purple-500/10 border-purple-500/25',
    header: 'text-purple-300',
  },
  slate: {
    container: 'bg-slate-700/30 border-slate-600/50',
    header: 'text-slate-200',
  },
  brand: {
    container: 'bg-accent/10 border-accent/25',
    header: 'text-accent',
  },
};

export const THEME_GOAL_GRADIENT: Record<
  ThemeVariant,
  { eyebrow: string; bar: string }
> = {
  amber: {
    eyebrow: 'text-amber-400',
    bar: 'from-amber-500 to-emerald-400',
  },
  blue: {
    eyebrow: 'text-sky-400',
    bar: 'from-blue-500 to-emerald-400',
  },
  emerald: {
    eyebrow: 'text-emerald-400',
    bar: 'from-emerald-500 to-sky-400',
  },
  purple: {
    eyebrow: 'text-purple-400',
    bar: 'from-purple-500 to-emerald-400',
  },
  slate: {
    eyebrow: 'text-slate-300',
    bar: 'from-slate-400 to-emerald-400',
  },
  brand: {
    eyebrow: 'text-accent',
    bar: 'from-accent to-secondary',
  },
};

export const THEME_BUTTON_VARIANT: Record<
  ThemeVariant,
  'amber' | 'blue' | 'emerald' | 'secondary' | 'brand'
> = {
  amber: 'amber',
  blue: 'blue',
  emerald: 'emerald',
  purple: 'blue',
  slate: 'secondary',
  brand: 'brand',
};
