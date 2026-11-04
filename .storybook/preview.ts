import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

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
  parameters: {
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
    backgrounds: {
      default: 'yggdrasil-dark',
      values: [
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
