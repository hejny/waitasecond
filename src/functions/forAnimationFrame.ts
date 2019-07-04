export function forAnimationFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            resolve();
        });
    });
}
