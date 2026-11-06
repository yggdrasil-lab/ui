/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "../kratos/web/src/**/*.{js,ts,jsx,tsx}",
    "../midas/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090d16',
        card: '#111827',
        border: '#1f293d',
        accent: '#f59e0b',
        success: '#10b981',
        brand: '#0ea5e9',
        danger: '#ef4444',
      },
    },
  },
  plugins: [],
};
