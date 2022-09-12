/**
 * Waits until document is loaded
 * Creates a promise that resolves when the document.readyState is on targetReadyState
 */
export function forDocumentReady(
    targetReadyState: 'interactive' | 'complete' = 'complete',
): Promise<void> {
    if (
        document.readyState === targetReadyState ||
        document.readyState === 'complete'
    ) {
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        window.addEventListener('readystatechange', () => {
            if (
                document.readyState === targetReadyState ||
                document.readyState === 'complete'
            ) {
                resolve();
            }
        });
    });
}
