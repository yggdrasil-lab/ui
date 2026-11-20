/**
 * Copies plain text to the system clipboard using the async Clipboard API
 * with a fallback textarea selection path for restricted contexts.
 */
export declare function copyToClipboard(text: string): Promise<boolean>;
