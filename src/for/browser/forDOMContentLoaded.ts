export function forDOMContentLoaded(): Promise<void> {
    return new Promise((resolve) => {
        document.addEventListener('DOMContentLoaded', () => {
            resolve();
        });
    });
}
