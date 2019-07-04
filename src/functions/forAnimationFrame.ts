export function forAnimationFrame(): Promise<void> {
    return new Promise((resolve, reject) => {
        requestAnimationFrame(() => {
            resolve();
        });
    });
}
