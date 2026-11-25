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
      await page.goto('/iframe.html?id=shells-appshell--default&viewMode=story');
      await expect(page.locator('header h1')).toBeVisible();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `screenshots/${platform}/01-app-shell.png`,
      });

      // 2. Tactile Numeric Keypad
      await page.goto('/iframe.html?id=primitives-tactilekeypad--currency-logger&viewMode=story');
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
      await page.goto('/iframe.html?id=patterns-statcard--cash-floor&viewMode=story');
      await expect(page.locator('text=Cash Floor')).toBeVisible();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/03-stat-cards.png`,
      });

      // 4. Interactive Modal Dialog
      await page.goto('/iframe.html?id=primitives-modal--interactive-modal&viewMode=story');
      const openBtn = page.getByRole('button', { name: /Open Quick Log Modal/i });
      await expect(openBtn).toBeVisible();
      await openBtn.click();
      await expect(page.getByRole('heading', { name: 'Quick Log Amount' })).toBeVisible();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `screenshots/${platform}/04-interactive-modal.png`,
      });

      // 5. Metric Hero Display
      await page.goto('/iframe.html?id=patterns-metrichero--freedom-clock-hero&viewMode=story');
      await expect(page.locator('text=Financial Freedom Clock')).toBeVisible();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/05-metric-hero.png`,
      });

      // 6. Midas Shared Primitives (BudgetProgressRow with custom transactionCountLabel)
      await page.goto('/iframe.html?id=patterns-budgetprogressrow--spending-guardrails-showcase&viewMode=story');
      await expect(page.locator('text=4 txns (47%)')).toBeVisible();
      await expect(page.locator('text=2 + 2 fixed (1%)')).toBeVisible();
      await page.waitForTimeout(200);
      await page.screenshot({
        path: `screenshots/${platform}/16-budget-progress-row.png`,
      });
    });

    test(`verifies v0.8.0 Midas extraction components and controlled CollapsibleSection on ${platform}`, async ({
      page,
    }) => {
      // 7. FilterChipBar
      await page.goto('/iframe.html?id=primitives-filterchipbar--status-filters&viewMode=story');
      const groceriesBtn = page.getByRole('button', { name: 'Groceries' });
      await expect(groceriesBtn).toBeVisible();
      await groceriesBtn.click();
      await expect(groceriesBtn).toHaveAttribute('aria-pressed', 'true');
      await groceriesBtn.click();
      await expect(groceriesBtn).toHaveAttribute('aria-pressed', 'false');
      await page.screenshot({ path: `screenshots/${platform}/17-filter-chip-bar.png` });

      // 8. ActionTile
      await page.goto('/iframe.html?id=patterns-actiontile--tools-grid&viewMode=story');
      await expect(page.getByTestId('tile-receipts')).toBeVisible();
      await expect(page.getByTestId('tile-categories')).toBeDisabled();
      await page.screenshot({ path: `screenshots/${platform}/18-action-tile.png` });

      // 9. DeltaBadge
      await page.goto('/iframe.html?id=patterns-deltabadge--showcase&viewMode=story');
      await expect(page.getByText('+$12.50')).toBeVisible();
      await expect(page.getByText('-$4.25')).toBeVisible();
      await page.screenshot({ path: `screenshots/${platform}/19-delta-badge.png` });

      // 10. InlineNotesEditor
      await page.goto('/iframe.html?id=patterns-inlinenoteseditor--populated-and-empty&viewMode=story');
      await expect(page.getByText('Notes & Observations')).toBeVisible();
      await page.getByRole('button', { name: 'Edit' }).first().click();
      await expect(page.getByRole('button', { name: 'Save Note' })).toBeVisible();
      await page.screenshot({ path: `screenshots/${platform}/20-inline-notes-editor.png` });

      // 11. LoadMoreFooter
      await page.goto('/iframe.html?id=patterns-loadmorefooter--interactive-pagination&viewMode=story');
      await expect(page.getByText('Showing 25 of 64', { exact: true })).toBeVisible();
      await page.getByTestId('demo-load-more-btn').click();
      await expect(page.getByText('Showing 50 of 64', { exact: true })).toBeVisible();
      await page.screenshot({ path: `screenshots/${platform}/21-load-more-footer.png` });

      // 12. Controlled CollapsibleSection with headerActions
      await page.goto('/iframe.html?id=patterns-collapsiblesection--controlled-with-header-actions&viewMode=story');
      await expect(page.getByText('State: Open')).toBeVisible();
      await page.getByRole('button', { name: 'Delete receipt' }).click();
      await expect(page.getByText('Action clicks: 1')).toBeVisible();
      await expect(page.getByText('State: Open')).toBeVisible();
      await page.getByTestId('controlled-section-toggle').click();
      await expect(page.getByText('State: Closed')).toBeVisible();
      await page.screenshot({ path: `screenshots/${platform}/22-controlled-collapsible-section.png` });
    });
  });
}
