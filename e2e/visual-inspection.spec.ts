import { test, expect, devices } from '@playwright/test';

const PLATFORMS = [
  {
    name: 'ios',
    options: {
      viewport: devices['iPhone 14'].viewport,
      userAgent: devices['iPhone 14'].userAgent,
      deviceScaleFactor: devices['iPhone 14'].deviceScaleFactor,
      isMobile: devices['iPhone 14'].isMobile,
      hasTouch: devices['iPhone 14'].hasTouch,
    },
  },
  {
    name: 'android',
    options: {
      viewport: devices['Pixel 7'].viewport,
      userAgent: devices['Pixel 7'].userAgent,
      deviceScaleFactor: devices['Pixel 7'].deviceScaleFactor,
      isMobile: devices['Pixel 7'].isMobile,
      hasTouch: devices['Pixel 7'].hasTouch,
    },
  },
];

for (const { name: platform, options } of PLATFORMS) {
  test.describe(`UI Component Library Visual Inspection - ${platform.toUpperCase()}`, () => {
    test.use({
      ...options,
    });

    test(`captures standardized UI design tokens and components on ${platform}`, async ({ page }) => {
      // 1. App Shell & Bottom Navigation
      await page.goto('/iframe.html?id=shell-appshell--default&viewMode=story');
      await expect(page.locator('header h1')).toBeVisible();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `screenshots/${platform}/01-app-shell.png`,
      });

      // 2. Tactile Numeric Keypad
      await page.goto('/iframe.html?id=inputs-tactilekeypad--currency-logger&viewMode=story');
      await expect(page.locator('text=Expense Amount')).toBeVisible();
      const num5 = page.getByRole('button', { name: '5', exact: true });
      if (await num5.isVisible()) {
        await num5.click();
      }
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/02-tactile-keypad.png`,
      });

      // 3. Stat Cards & Financial Tiers
      await page.goto('/iframe.html?id=feedback-statcard--cash-floor&viewMode=story');
      await expect(page.locator('text=Cash Floor')).toBeVisible();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/03-stat-cards.png`,
      });

      // 4. Interactive Modal Dialog
      await page.goto('/iframe.html?id=feedback-modal--interactive-modal&viewMode=story');
      const openBtn = page.getByRole('button', { name: /Open Quick Log Modal/i });
      await expect(openBtn).toBeVisible();
      await openBtn.click();
      await expect(page.getByRole('heading', { name: 'Quick Log Amount' })).toBeVisible();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `screenshots/${platform}/04-interactive-modal.png`,
      });

      // 5. Metric Hero Display
      await page.goto('/iframe.html?id=feedback-metrichero--freedom-clock-hero&viewMode=story');
      await expect(page.locator('text=Financial Freedom Clock')).toBeVisible();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/05-metric-hero.png`,
      });
    });
  });
}
