import { test, expect, devices } from '@playwright/test';

const IPHONE_14_CONTEXT = {
  viewport: devices['iPhone 14'].viewport,
  userAgent: devices['iPhone 14'].userAgent,
  deviceScaleFactor: devices['iPhone 14'].deviceScaleFactor,
  isMobile: devices['iPhone 14'].isMobile,
  hasTouch: devices['iPhone 14'].hasTouch,
};

test.describe('RestTimerBar States & Interaction (Mobile iPhone 14)', () => {
  test.use(IPHONE_14_CONTEXT);

  test('renders Idle, ActiveCountdown, Paused, and Complete states cleanly without horizontal overflow', async ({
    page,
  }) => {
    // 1. Idle
    await page.goto('/iframe.html?id=patterns-resttimerbar--idle&viewMode=story');
    const bar = page.getByTestId('rest-timer-bar');
    await expect(bar).toBeVisible();
    await expect(bar.getByText('Rest Timer')).toBeVisible();
    for (const chip of ['1:00', '1:30', '2:00', '3:00']) {
      await expect(bar.getByRole('button', { name: new RegExp(chip) })).toBeVisible();
    }
    const idleOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(idleOverflow).toBe(false);
    await page.screenshot({ path: 'screenshots/ios/06-rest-timer-idle.png' });

    // 2. ActiveCountdown
    await page.goto('/iframe.html?id=patterns-resttimerbar--active-countdown&viewMode=story');
    await expect(page.getByTestId('rest-timer-countdown')).toHaveText('0:54');
    await expect(bar.getByText('of 1:30')).toBeVisible();
    await expect(bar.getByRole('button', { name: /Pause rest timer/i })).toBeVisible();
    await expect(bar.getByRole('button', { name: /Skip rest timer/i })).toBeVisible();
    await page.screenshot({ path: 'screenshots/ios/07-rest-timer-active.png' });

    // 3. Paused
    await page.goto('/iframe.html?id=patterns-resttimerbar--paused&viewMode=story');
    await expect(page.getByTestId('rest-timer-countdown')).toHaveText('0:42');
    await expect(bar.getByText('Paused')).toBeVisible();
    await expect(bar.getByRole('button', { name: /Resume rest timer/i })).toBeVisible();
    await page.screenshot({ path: 'screenshots/ios/08-rest-timer-paused.png' });

    // 4. Complete
    await page.goto('/iframe.html?id=patterns-resttimerbar--complete&viewMode=story');
    await expect(bar.getByText('Rest Complete - Ready for next set')).toBeVisible();
    await expect(page.getByTestId('rest-timer-countdown')).toHaveText('0:00');
    await expect(bar.getByRole('button', { name: /Dismiss rest timer/i })).toBeVisible();
    await page.screenshot({ path: 'screenshots/ios/09-rest-timer-complete.png' });
  });

  test('supports live start, adjust, pause, resume, and dismiss actions', async ({ page }) => {
    await page.goto('/iframe.html?id=patterns-resttimerbar--interactive&viewMode=story');
    const bar = page.getByTestId('rest-timer-bar');
    await expect(bar).toBeVisible();

    // Start 1:30 preset
    await bar.getByRole('button', { name: 'Start 1:30 rest timer' }).click();
    const countdown = page.getByTestId('rest-timer-countdown');
    await expect(countdown).toBeVisible();
    await expect(countdown).toHaveText(/^1:(29|30)$/);

    // Pause before deterministic -15s / +15s assertions
    await bar.getByRole('button', { name: /Pause rest timer/i }).click();
    await expect(bar.getByText('Paused')).toBeVisible();
    const pausedValue = (await countdown.textContent())?.trim() ?? '';
    expect(pausedValue).toMatch(/^1:(29|30)$/);

    await bar.getByRole('button', { name: /Subtract 15 seconds/i }).click();
    await expect(countdown).toHaveText(/^1:1[45]$/);

    await bar.getByRole('button', { name: /Add 15 seconds/i }).click();
    await expect(countdown).toHaveText(/^1:(29|30)$/);

    // Resume then Skip
    await bar.getByRole('button', { name: /Resume rest timer/i }).click();
    await expect(bar.getByRole('button', { name: /Pause rest timer/i })).toBeVisible();

    await bar.getByRole('button', { name: /Skip rest timer/i }).click();
    await expect(bar.getByText('Rest Timer')).toBeVisible();
  });
});

test.describe('Mobile Viewport Zoom Reset & Input Font Sizing', () => {
  test.describe('Mobile (iPhone 14)', () => {
    test.use(IPHONE_14_CONTEXT);

    test('uses 16px font-size on SearchInput and AiSynthesizerModal textarea to prevent iOS auto-zoom', async ({
      page,
    }) => {
      await page.goto('/iframe.html?id=primitives-searchinput--default&viewMode=story');
      const searchInput = page.locator('input[type="text"]');
      await expect(searchInput).toBeVisible();
      const searchFontSize = await searchInput.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      );
      expect(searchFontSize).toBe('16px');

      await page.goto(
        '/iframe.html?id=patterns-aisynthesizermodal--workout-synthesizer&viewMode=story'
      );
      await page.getByRole('button', { name: /Open Workout AI Synthesizer/i }).click();
      const textarea = page.locator('textarea');
      await expect(textarea).toBeVisible();
      const textareaFontSize = await textarea.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      );
      expect(textareaFontSize).toBe('16px');
    });

    test('resets viewport meta and blurs active element when Modal closes', async ({ page }) => {
      await page.goto(
        '/iframe.html?id=patterns-aisynthesizermodal--workout-synthesizer&viewMode=story'
      );

      // Simulate host PWA starting without maximum-scale=1.0
      await page.evaluate(() => {
        const meta = document.querySelector('meta[name="viewport"]');
        if (meta) {
          meta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
        }
      });

      await page.getByRole('button', { name: /Open Workout AI Synthesizer/i }).click();
      const textarea = page.locator('textarea');
      await expect(textarea).toBeVisible();
      await textarea.focus();

      await page.getByRole('button', { name: 'Cancel' }).click();
      await expect(textarea).toBeHidden();

      const viewportState = await page.evaluate(() => {
        const meta = document.querySelector('meta[name="viewport"]');
        return {
          content: meta?.getAttribute('content') ?? '',
          activeTag: document.activeElement?.tagName ?? '',
          scrollX: window.scrollX,
        };
      });

      expect(viewportState.content).toBe(
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      );
      expect(viewportState.activeTag).not.toBe('TEXTAREA');
      expect(viewportState.scrollX).toBe(0);
    });
  });

  test.describe('Desktop (1280x800)', () => {
    test.use({ viewport: { width: 1280, height: 800 } });

    test('keeps compact 12px font-size on sm+ viewports', async ({ page }) => {
      await page.goto('/iframe.html?id=primitives-searchinput--default&viewMode=story');
      const searchInput = page.locator('input[type="text"]');
      await expect(searchInput).toBeVisible();
      const searchFontSize = await searchInput.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      );
      expect(searchFontSize).toBe('12px');

      await page.goto(
        '/iframe.html?id=patterns-aisynthesizermodal--workout-synthesizer&viewMode=story'
      );
      await page.getByRole('button', { name: /Open Workout AI Synthesizer/i }).click();
      const textarea = page.locator('textarea');
      await expect(textarea).toBeVisible();
      const textareaFontSize = await textarea.evaluate(
        (el) => window.getComputedStyle(el).fontSize
      );
      expect(textareaFontSize).toBe('12px');
    });
  });
});
