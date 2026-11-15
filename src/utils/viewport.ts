const LOCKED_VIEWPORT_CONTENT =
  'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
const UNLOCKED_VIEWPORT_CONTENT =
  'width=device-width, initial-scale=1.0, viewport-fit=cover';

/**
 * Blurs any focused element, updates/toggles the viewport meta tag so iOS
 * Safari/WebKit snaps back to 1.0 scale, and resets horizontal scroll offset.
 */
export function resetMobileViewportZoom(): void {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  const activeElement = document.activeElement;
  if (typeof HTMLElement !== 'undefined' && activeElement instanceof HTMLElement) {
    activeElement.blur();
  }

  const viewportMeta = document.querySelector('meta[name="viewport"]');
  if (viewportMeta) {
    const previousContent = viewportMeta.getAttribute('content') ?? '';
    if (previousContent === LOCKED_VIEWPORT_CONTENT) {
      viewportMeta.setAttribute('content', UNLOCKED_VIEWPORT_CONTENT);
    }
    viewportMeta.setAttribute('content', LOCKED_VIEWPORT_CONTENT);
  }

  window.scrollTo({ left: 0, top: window.scrollY });
}
