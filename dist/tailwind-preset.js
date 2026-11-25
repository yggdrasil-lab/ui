/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--ui-bg) / <alpha-value>)',
        card: 'rgb(var(--ui-card) / <alpha-value>)',
        'card-muted': 'rgb(var(--ui-card-muted) / <alpha-value>)',
        border: 'rgb(var(--ui-border) / <alpha-value>)',
        foreground: 'rgb(var(--ui-text) / <alpha-value>)',
        muted: 'rgb(var(--ui-text-muted) / <alpha-value>)',
        accent: 'rgb(var(--ui-accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--ui-accent-fg) / <alpha-value>)',
        secondary: 'rgb(var(--ui-secondary) / <alpha-value>)',
        brand: 'rgb(var(--ui-accent) / <alpha-value>)',
        success: '#10b981',
        danger: '#ef4444',
      },
      borderRadius: {
        'ui-card': 'var(--ui-radius-card)',
        'ui-control': 'var(--ui-radius-control)',
        'ui-pill': 'var(--ui-radius-pill)',
      },
      fontFamily: {
        display: ['var(--ui-font-display)'],
        body: ['var(--ui-font-body)'],
      },
      boxShadow: {
        'ui-card': 'var(--ui-shadow-card)',
      },
    },
  },
};
