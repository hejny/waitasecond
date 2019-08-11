export function forDocumentLoad(): Promise<void> {
    return new Promise((resolve) => {
        document.addEventListener('DOMContentLoaded', () => {
            resolve();
        });
    });
}
