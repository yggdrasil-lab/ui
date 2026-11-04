# Yggdrasil UI

Shared design system, React component library, and Storybook for Yggdrasil homelab PWAs across all life areas:
- **Kratos** (Area 00-LifeOS / Health): Strength training and circadian fasting
- **Midas** (Area 10-Wealth): Financial freedom runway clock and weekly burn tracker
- Future PWAs across Mind, Career, and Home

---

## Architecture & Features

- **Component Library:** Built with Vite and TypeScript, outputting tree-shakable ES modules with `.d.ts` type declarations.
- **Storybook 8:** Hosted at `https://storybook.tienzo.net` with pre-configured mobile viewports:
  - iPhone 14 (`390x844`)
  - Pixel 7 (`412x915`)
  - iPad Mini (`768x1024`)
  - Desktop (`1280x800`)
- **PWA Polish:**
  - Viewport-locked bottom navigation (`fixed bottom-0 left-0 right-0 z-40`) immune to iOS Safari bounce.
  - Safe area inset handling (`env(safe-area-inset-bottom)`).
  - Tactile numeric keypad for rapid touch logging (expenses, workout weights/reps).
  - Subtitle rotating refresh button (`RefreshCw`).

---

## Development

```bash
# Run Storybook locally
npm run dev

# Build component library
npm run build:lib

# Build Storybook static bundle
npm run build:storybook
```
