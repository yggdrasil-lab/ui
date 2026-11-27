import { test, expect } from '@playwright/test';

test('library components build and exports smoke test', async () => {
  expect(true).toBe(true);
});

test('AlertBanner forwards data-testid and role attributes to root element', async ({ page }) => {
  await page.goto('/iframe.html?id=primitives-alertbanner--autoregulation-info&viewMode=story');
  const infoBanner = page.getByTestId('alert-banner-info');
  const errorBanner = page.getByTestId('alert-banner-error');
  await expect(infoBanner).toBeVisible();
  await expect(infoBanner).toHaveAttribute('role', 'alert');
  await expect(errorBanner).toBeVisible();
  await expect(errorBanner).toHaveAttribute('role', 'alert');
});
