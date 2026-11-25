import type { Decorator, Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { APP_THEMES, APP_THEME_META, type AppTheme } from '../src/theme/themes';

const withAppTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as AppTheme | undefined) ?? 'default';
  if (typeof document !== 'undefined') {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
  return Story();
};

const customViewports = {
  iphone14: {
    name: 'iPhone 14',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },
  pixel7: {
    name: 'Pixel 7',
    styles: {
      width: '412px',
      height: '915px',
    },
    type: 'mobile',
  },
  ipadMini: {
    name: 'iPad Mini',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop (1280x800)',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Yggdrasil App Visual Theme',
      defaultValue: 'default',
      toolbar: {
        icon: 'paintbrush',
        items: APP_THEMES.map((id) => ({
          value: id,
          title: `${APP_THEME_META[id].label} (${APP_THEME_META[id].subtitle})`,
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [withAppTheme],
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'theme-token',
      values: [
        {
          name: 'theme-token',
          value: 'transparent',
        },
        {
          name: 'yggdrasil-dark',
          value: '#090d16',
        },
        {
          name: 'slate-card',
          value: '#111827',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
