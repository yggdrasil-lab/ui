import yggdrasilPreset from './tailwind-preset.js';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [yggdrasilPreset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [],
};
