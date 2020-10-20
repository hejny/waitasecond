export function forDocumentLoad(): Promise<void> {
    return new Promise((resolve) => {
        window.addEventListener('load', () => {
            resolve();
        });
    });
}
