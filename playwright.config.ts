import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:6006',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        connectOptions: process.env.BROWSERLESS_WS_ENDPOINT
          ? { wsEndpoint: process.env.BROWSERLESS_WS_ENDPOINT }
          : undefined,
      },
    },
  ],
  webServer: {
    command: 'python3 -m http.server 6006 --directory dist-storybook || npm run preview',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
